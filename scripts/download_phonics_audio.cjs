const fs = require('fs');
const path = require('path');

const TARGET_DIR = path.join(__dirname, '..', 'public', 'assets', 'audio', 'phonemes');

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// Mapping from app phonemeId to remote file name
const PHONEME_AUDIO_MAPPING = {
  // Group 1
  's': 's.mp3',
  'a': 'a.mp3',
  't': 't.mp3',
  'i': 'i.mp3',
  'p': 'p.mp3',
  'n': 'n.mp3',
  // Group 2
  'c': 'ck.mp3',
  'k': 'ck.mp3',
  'e': 'e.mp3',
  'h': 'h.mp3',
  'r': 'r.mp3',
  'm': 'm.mp3',
  'd': 'd.mp3',
  // Group 3
  'g': 'g.mp3',
  'o': 'o.mp3',
  'u': 'u.mp3',
  'l': 'l.mp3',
  'f': 'f.mp3',
  'b': 'b.mp3',
  // Group 4
  'ai': 'ai.mp3',
  'j': 'j.mp3',
  'oa': 'oa.mp3',
  'ie': 'ie.mp3',
  'ee': 'ee.mp3',
  'or': 'or.mp3',
  // Group 5
  'z': 'z.mp3',
  'w': 'w.mp3',
  'ng': 'ng.mp3',
  'v': 'v.mp3',
  'oo_short': 'book.mp3',
  'oo_long': 'moon.mp3',
  // Group 6
  'y': 'y.mp3',
  'x': 'x.mp3',
  'ch': 'ch.mp3',
  'sh': 'sh.mp3',
  'th_unvoiced': 'three.mp3',
  'th_voiced': 'this.mp3',
  // Group 7
  'qu': 'qu.mp3',
  'ou': 'ou.mp3',
  'oi': 'oi.mp3',
  'ue': 'ue.mp3',
  'er': 'er.mp3',
  'ar': 'ar.mp3'
};

const BASE_URL = 'https://www.jollykingdom.com/lettersounds/sound/';

async function downloadAll() {
  console.log('Starting download of 42 authentic pure phonics audio clips...');
  const uniqueFiles = new Set(Object.values(PHONEME_AUDIO_MAPPING));
  let successCount = 0;
  let failCount = 0;

  for (const file of uniqueFiles) {
    const url = BASE_URL + file;
    const dest = path.join(TARGET_DIR, file);

    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });

      if (!res.ok) {
        console.error(`Failed to download ${file}: HTTP ${res.status}`);
        failCount++;
        continue;
      }

      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buffer);
      console.log(`✓ Downloaded ${file} (${buffer.length} bytes)`);
      successCount++;
    } catch (err) {
      console.error(`Error downloading ${file}:`, err.message);
      failCount++;
    }
  }

  // Also create alias symlinks / copies for app phoneme IDs that differ from source file name
  // E.g. 'c.mp3' as copy of 'ck.mp3', 'oo_short.mp3' as copy of 'book.mp3', etc.
  for (const [phonemeId, sourceFile] of Object.entries(PHONEME_AUDIO_MAPPING)) {
    const targetFile = `${phonemeId}.mp3`;
    const sourcePath = path.join(TARGET_DIR, sourceFile);
    const targetPath = path.join(TARGET_DIR, targetFile);

    if (sourceFile !== targetFile && fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`  -> Created alias ${targetFile} from ${sourceFile}`);
    }
  }

  console.log(`\nDownload completed: ${successCount} successful, ${failCount} failed.`);
}

downloadAll();
