export interface DistractorWordOption {
  wordEn: string;
  labelVi: string;
}

export interface VoiceStrikeResult {
  transcript: string;
  grade: 'super' | 'good' | 'retry';
  starsEarned: 3 | 2 | 0;
  damagePercent: number;
  feedbackVi: string;
  peakVolume: number;
  silentTimeout?: boolean;
  matchedDistractor?: string;
}

export interface PronunciationScoreParams {
  targetEn: string;
  acceptableKeywords?: string[];
  coreKeywords?: string[];
  candidates: string[];
  toddlerForgivingMode: boolean;
  distractors?: DistractorWordOption[];
  peakVolume?: number;
}

const FILLER_WORDS = new Set([
  'a',
  'an',
  'the',
  'it',
  'is',
  'am',
  'are',
  'my',
  'your',
  'find',
  'help',
  'say',
  'look',
  'to',
  'with',
  'and',
]);

const DIGIT_WORDS: Record<string, string> = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
};

export function normalizeSpeech(s: string): string {
  const cleaned = s
    .toLowerCase()
    .replace(/\bbyebye\b/g, 'bye bye')
    .replace(/\bgoodnight\b/g, 'good night')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!cleaned) return '';
  return cleaned
    .split(' ')
    .map((tok) => DIGIT_WORDS[tok] || tok)
    .join(' ');
}

function splitWords(clean: string): string[] {
  return clean ? clean.split(' ').filter(Boolean) : [];
}

/** Light ESL phonetic normalization that preserves vowel/consonant minimal pairs. */
function phoneticForm(word: string): string {
  let w = word
    .toLowerCase()
    .replace(/ph/g, 'f')
    .replace(/ck/g, 'k')
    .replace(/qu/g, 'kw')
    .replace(/ee/g, 'i')
    .replace(/(.)\1+/g, '$1');
  // Only drop silent trailing -e on longer words (>=5 chars) so 4-letter Magic-E pairs stay distinct
  if (w.length >= 5 && w.endsWith('e')) {
    w = w.slice(0, -1);
  }
  return w;
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const prev = new Array<number>(b.length + 1);
  const curr = new Array<number>(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;

  for (let i = 1; i <= a.length; i++) {
    curr[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    for (let j = 0; j <= b.length; j++) prev[j] = curr[j];
  }
  return prev[b.length];
}

function stringSim(a: string, b: string): number {
  if (!a || !b) return 0;
  if (a === b) return 1;
  const maxLen = Math.max(a.length, b.length);
  return Math.max(0, 1 - levenshtein(a, b) / maxLen);
}

export function tokenSimilarity(a: string, b: string, forgiving: boolean): number {
  const ca = a.toLowerCase();
  const cb = b.toLowerCase();
  if (!ca || !cb) return 0;
  if (ca === cb) return 1;
  // Single-letter or 2-letter short tokens require exact match unless longer phonetic match
  if (ca.length <= 1 || cb.length <= 1) return 0;

  const rawSim = stringSim(ca, cb);
  if (Math.min(ca.length, cb.length) <= 2) {
    return rawSim;
  }

  const pa = phoneticForm(ca);
  const pb = phoneticForm(cb);
  const phonSim = stringSim(pa, pb);
  if (pa === pb) {
    return forgiving ? 0.94 : Math.max(0.86, rawSim * 0.5 + 0.45);
  }
  const weightPhon = forgiving ? 0.5 : 0.35;
  return rawSim * (1 - weightPhon) + phonSim * weightPhon;
}

function evaluatePhraseCoverage(
  candTokens: string[],
  phraseTokens: string[],
  threshold: number,
  forgiving: boolean
): { matchedRatio: number; allContentMatched: boolean; matchedContentWords: string[]; avgSim: number } {
  if (phraseTokens.length === 0 || candTokens.length === 0) {
    return { matchedRatio: 0, allContentMatched: false, matchedContentWords: [], avgSim: 0 };
  }

  const usedCand = new Set<number>();
  const matchedIdx = new Set<number>();
  let simSum = 0;

  for (let ti = 0; ti < phraseTokens.length; ti++) {
    const tTok = phraseTokens[ti];
    let bestIdx = -1;
    let bestSim = 0;
    for (let ci = 0; ci < candTokens.length; ci++) {
      if (usedCand.has(ci)) continue;
      const sim = tokenSimilarity(candTokens[ci], tTok, forgiving);
      if (sim >= threshold && sim > bestSim) {
        bestSim = sim;
        bestIdx = ci;
      }
    }
    if (bestIdx !== -1) {
      usedCand.add(bestIdx);
      matchedIdx.add(ti);
      simSum += bestSim;
    }
  }

  const nonFillerIndices = phraseTokens
    .map((tok, i) => ({ tok, i }))
    .filter((item) => !FILLER_WORDS.has(item.tok));
  const requiredIndices =
    nonFillerIndices.length > 0 ? nonFillerIndices : phraseTokens.map((tok, i) => ({ tok, i }));

  const allContentMatched = requiredIndices.every((item) => matchedIdx.has(item.i));
  const matchedContentWords = requiredIndices
    .filter((item) => matchedIdx.has(item.i))
    .map((item) => item.tok);

  return {
    matchedRatio: matchedIdx.size / phraseTokens.length,
    allContentMatched,
    matchedContentWords,
    avgSim: matchedIdx.size > 0 ? simSum / matchedIdx.size : 0,
  };
}

const STRICT_SKIP_SOLO = new Set(['i', 'me', 'we', 'you', 'he', 'she']);

function buildCoreGroups(
  targetTokens: string[],
  acceptableKeywords: string[],
  coreKeywords: string[]
): string[][] {
  if (coreKeywords.length > 0) {
    return coreKeywords
      .map((kw) => splitWords(normalizeSpeech(kw)).filter((t) => !FILLER_WORDS.has(t)))
      .filter((toks) => toks.length > 0);
  }
  const meaningfulTargetTokens = targetTokens.filter(
    (tok) => tok.length >= 2 && !FILLER_WORDS.has(tok) && !STRICT_SKIP_SOLO.has(tok)
  );
  const groups: string[][] = meaningfulTargetTokens.length > 0 ? [meaningfulTargetTokens] : [];
  for (const kw of acceptableKeywords) {
    const toks = splitWords(normalizeSpeech(kw)).filter(
      (t) => tokFilter(t)
    );
    if (toks.length > 0 && toks.length >= Math.min(2, Math.max(1, meaningfulTargetTokens.length))) {
      groups.push(toks);
    }
  }
  return groups;
}

function tokFilter(t: string): boolean {
  return t.length >= 2 && !FILLER_WORDS.has(t) && !STRICT_SKIP_SOLO.has(t);
}

export function scorePronunciation({
  targetEn,
  acceptableKeywords = [],
  coreKeywords = [],
  candidates,
  toddlerForgivingMode,
  distractors = [],
  peakVolume = 0,
}: PronunciationScoreParams): VoiceStrikeResult {
  const cleanTarget = normalizeSpeech(targetEn);
  const targetTokens = splitWords(cleanTarget);
  const bestTranscript = (candidates[0] || '').trim();
  const cleanCandidates = candidates.map((raw) => ({ raw: raw.trim(), clean: normalizeSpeech(raw) }));

  const superThresh = toddlerForgivingMode ? 0.76 : 0.84;
  const fullPhraseList = Array.from(
    new Set([
      cleanTarget,
      ...acceptableKeywords
        .map(normalizeSpeech)
        .filter((kw) => {
          const toks = splitWords(kw);
          if (toks.length === 0) return false;
          if (targetTokens.length <= 1) return true;
          return toks.length >= 2;
        }),
    ])
  ).filter(Boolean);

  // 1. Check full-phrase match across candidates
  for (const cand of cleanCandidates) {
    if (!cand.clean) continue;
    const candTokens = splitWords(cand.clean);
    for (const phrase of fullPhraseList) {
      const pTokens = splitWords(phrase);
      const cov = evaluatePhraseCoverage(candTokens, pTokens, superThresh, toddlerForgivingMode);
      const isSuperHit =
        pTokens.length <= 2
          ? cov.matchedRatio === 1 && cov.allContentMatched
          : cov.matchedRatio >= 0.75 && cov.allContentMatched;

      if (isSuperHit) {
        return {
          transcript: cand.raw || bestTranscript,
          grade: 'super',
          starsEarned: 3,
          damagePercent: 100,
          feedbackVi: `SIÊU CHUẨN! Bé phát âm "${cand.raw || targetEn}" tuyệt vời!`,
          peakVolume,
        };
      }
    }
  }

  // 2. Check distractors (explicit traps on target-hunt cards) before core keyword forgiveness
  for (const cand of cleanCandidates) {
    if (!cand.clean) continue;
    const candTokens = splitWords(cand.clean);
    for (const d of distractors) {
      const dClean = normalizeSpeech(d.wordEn);
      const dTokens = splitWords(dClean);
      if (dTokens.length === 0) continue;
      const dCov = evaluatePhraseCoverage(candTokens, dTokens, 0.82, false);
      if (dCov.allContentMatched && dCov.matchedRatio >= 1) {
        return {
          transcript: cand.raw || bestTranscript,
          grade: 'retry',
          starsEarned: 0,
          damagePercent: 0,
          matchedDistractor: d.wordEn,
          feedbackVi: `Đó là "${d.wordEn}" (${d.labelVi})! Bé hãy đọc "${targetEn}" nhé!`,
          peakVolume,
        };
      }
    }
  }

  // 3. Partial / Core Keyword grading
  const coreGroups = buildCoreGroups(targetTokens, acceptableKeywords, coreKeywords);
  for (const cand of cleanCandidates) {
    if (!cand.clean) continue;
    const candTokens = splitWords(cand.clean);

    // Strict mode: only accept multi-word partial coverage >= 75% with content match
    if (!toddlerForgivingMode) {
      const cov = evaluatePhraseCoverage(candTokens, targetTokens, 0.82, false);
      if (targetTokens.length >= 3 && cov.matchedRatio >= 0.75 && cov.matchedContentWords.length > 0) {
        return {
          transcript: cand.raw || bestTranscript,
          grade: 'good',
          starsEarned: 2,
          damagePercent: 75,
          feedbackVi: `Rất tốt! Bé đọc gần đủ câu "${targetEn}" rồi!`,
          peakVolume,
        };
      }
      continue;
    }

    // Toddler forgiving mode: accept matching ALL tokens in a core keyword group when target has >= 2 words
    if (targetTokens.length >= 2 && coreGroups.length > 0) {
      for (const coreTokens of coreGroups) {
        const cov = evaluatePhraseCoverage(candTokens, coreTokens, 0.76, true);
        if (cov.allContentMatched && cov.matchedRatio >= 1) {
          const coreLabel = coreTokens.join(' ');
          return {
            transcript: cand.raw || bestTranscript,
            grade: 'good',
            starsEarned: 2,
            damagePercent: 75,
            feedbackVi: `Đúng từ khóa "${coreLabel}"! Nói trọn câu "${targetEn}" để đạt 3 sao nhé!`,
            peakVolume,
          };
        }
      }
    }
  }

  // 4. Honest retry — never pass gibberish or off-target words!
  if (!bestTranscript) {
    return {
      transcript: '',
      grade: 'retry',
      starsEarned: 0,
      damagePercent: 0,
      silentTimeout: true,
      feedbackVi: `Bé cùng nghe lại và hô to "${targetEn}" nhé!`,
      peakVolume,
    };
  }

  const strictHint = !toddlerForgivingMode && targetTokens.length >= 2
    ? `Chế độ Chuẩn: Máy nghe "${bestTranscript}" — hãy đọc đủ câu "${targetEn}" nhé!`
    : `Máy nghe "${bestTranscript}" — chưa đúng mẫu "${targetEn}", bé đọc lại nhé!`;

  return {
    transcript: bestTranscript,
    grade: 'retry',
    starsEarned: 0,
    damagePercent: 0,
    silentTimeout: false,
    feedbackVi: strictHint,
    peakVolume,
  };
}
