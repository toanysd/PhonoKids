// Phonics Ninja - Ehon Phonics Slicing Game
// Pure HTML5 Canvas + MediaPipe Hands Camera AI + Touch/Mouse Slicing

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreText = document.getElementById('scoreText');
const targetPhonemeText = document.getElementById('targetPhonemeText');
const repeatSoundBtn = document.getElementById('repeatSoundBtn');
const cameraToggleBtn = document.getElementById('cameraToggleBtn');
const exitBtn = document.getElementById('exitBtn');
const promptText = document.getElementById('promptText');
const victoryModal = document.getElementById('victoryModal');
const playAgainBtn = document.getElementById('playAgainBtn');
const modalExitBtn = document.getElementById('modalExitBtn');
const earnedStarsCount = document.getElementById('earnedStarsCount');
const videoElement = document.getElementById('webcamVideo');

let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

window.addEventListener('resize', () => {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
});

// Game Config & State
let currentTargetPhoneme = 's';
let score = 0;
const VICTORY_SCORE = 6;
let gameActive = true;
let isCameraActive = false;
let cameraStream = null;

// Speech synthesis helper
function speakEnglish(word, rate = 0.85) {
  if (!('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.lang = 'en-US';
    u.rate = rate;
    window.speechSynthesis.speak(u);
  } catch (e) {
    console.warn('Speech error:', e);
  }
}

// Preloaded Ehon Artwork Pool
const EHON_POOL = {
  // Target words for /s/
  'sun': { word: 'sun', phoneme: 's', url: '/assets/ehon/sun.jpg', nameVi: 'Mặt trời' },
  'sit': { word: 'sit', phoneme: 's', url: '/assets/ehon/sit.jpg', nameVi: 'Ngồi xuống' },
  'sat': { word: 'sat', phoneme: 's', url: '/assets/ehon/cat_mat.jpg', nameVi: 'Đã ngồi' },
  'star': { word: 'star', phoneme: 's', url: '/assets/ehon/star.jpg', nameVi: 'Ngôi sao' },
  'ship': { word: 'ship', phoneme: 's', url: '/assets/ehon/ship.jpg', nameVi: 'Con tàu' },
  
  // Target words for /a/ & others
  'ant': { word: 'ant', phoneme: 'a', url: '/assets/ehon/ant.jpg', nameVi: 'Con kiến' },
  'apple': { word: 'apple', phoneme: 'a', url: '/assets/ehon/apple.jpg', nameVi: 'Quả táo' },

  // Distractors or other targets
  'cat': { word: 'cat', phoneme: 'c', url: '/assets/ehon/cat.jpg', nameVi: 'Con mèo' },
  'cup': { word: 'cup', phoneme: 'c', url: '/assets/ehon/cup.jpg', nameVi: 'Cái cốc' },
  'kite': { word: 'kite', phoneme: 'c', url: '/assets/ehon/kite.jpg', nameVi: 'Con diều' },
  'dog': { word: 'dog', phoneme: 'd', url: '/assets/ehon/dog.jpg', nameVi: 'Chú cún' },
  'hen': { word: 'hen', phoneme: 'h', url: '/assets/ehon/hen.jpg', nameVi: 'Gà mái' },
  'pig': { word: 'pig', phoneme: 'p', url: '/assets/ehon/pig.jpg', nameVi: 'Chú lợn' }
};

// Cache Image objects
const imageCache = {};
Object.entries(EHON_POOL).forEach(([key, item]) => {
  const img = new Image();
  img.src = item.url;
  imageCache[key] = img;
});

// Particles & Blade trails
let bladeTrail = [];
let flyingItems = [];
let particles = [];
let floatingNotifications = [];

// Touch & Mouse slicing events
let isPointerDown = false;

window.addEventListener('pointerdown', (e) => {
  isPointerDown = true;
  bladeTrail.push({ x: e.clientX, y: e.clientY, time: performance.now() });
});

window.addEventListener('pointermove', (e) => {
  if (isPointerDown || !isCameraActive) {
    bladeTrail.push({ x: e.clientX, y: e.clientY, time: performance.now() });
    checkBladeCollisions(e.clientX, e.clientY);
  }
});

window.addEventListener('pointerup', () => {
  isPointerDown = false;
});

// Flying Ehon Plate Class
class FlyingItem {
  constructor(data, isTarget) {
    this.data = data;
    this.isTarget = isTarget;
    this.img = imageCache[data.word] || imageCache['sun'];
    this.radius = Math.min(WIDTH, HEIGHT) * 0.08 + 20; // responsive size
    this.x = Math.random() * (WIDTH - this.radius * 2) + this.radius;
    this.y = HEIGHT + this.radius;
    this.vx = (WIDTH / 2 - this.x) * 0.008 + (Math.random() - 0.5) * 4;
    this.vy = -(Math.random() * 5 + 13);
    this.gravity = 0.28;
    this.rotation = (Math.random() - 0.5) * 0.1;
    this.angle = 0;
    this.sliced = false;
    this.sliceProgress = 0;
    this.sliceAngle = 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity;
    this.angle += this.rotation;

    if (this.sliced) {
      this.sliceProgress += 0.05;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    if (!this.sliced) {
      // Draw outer 3D golden plate border
      ctx.beginPath();
      ctx.arc(0, 0, this.radius + 6, 0, Math.PI * 2);
      ctx.fillStyle = '#fde68a';
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#f59e0b';
      ctx.stroke();

      // Clip image circle
      ctx.beginPath();
      ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      if (this.img && this.img.complete) {
        ctx.drawImage(this.img, -this.radius, -this.radius, this.radius * 2, this.radius * 2);
      } else {
        ctx.fillStyle = '#fef3c7';
        ctx.fill();
      }

      // Word Ribbon Banner
      ctx.restore();
      ctx.save();
      ctx.translate(this.x, this.y + this.radius * 0.7);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.beginPath();
      ctx.roundRect(-this.radius * 0.8, -14, this.radius * 1.6, 28, 12);
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = this.isTarget ? '#10b981' : '#f59e0b';
      ctx.stroke();

      ctx.fillStyle = '#451a03';
      ctx.font = '900 15px "Be Vietnam Pro", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.data.word.toUpperCase(), 0, 0);

      ctx.restore();
    } else {
      // Draw sliced half 1
      ctx.save();
      ctx.translate(-this.sliceProgress * 30, this.sliceProgress * 15);
      ctx.rotate(-this.sliceProgress * 0.5);
      ctx.beginPath();
      ctx.arc(0, 0, this.radius, -Math.PI / 2, Math.PI / 2);
      ctx.fillStyle = '#fef3c7';
      ctx.fill();
      ctx.strokeStyle = '#f59e0b';
      ctx.stroke();
      ctx.restore();

      // Draw sliced half 2
      ctx.save();
      ctx.translate(this.sliceProgress * 30, -this.sliceProgress * 10);
      ctx.rotate(this.sliceProgress * 0.5);
      ctx.beginPath();
      ctx.arc(0, 0, this.radius, Math.PI / 2, (3 * Math.PI) / 2);
      ctx.fillStyle = '#fef3c7';
      ctx.fill();
      ctx.strokeStyle = '#f59e0b';
      ctx.stroke();
      ctx.restore();

      ctx.restore();
    }
  }

  isDead() {
    return this.y > HEIGHT + this.radius * 2 || (this.sliced && this.sliceProgress > 1);
  }
}

// Star & Juice Particle
class SlicedParticle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 12;
    this.vy = (Math.random() - 0.5) * 12;
    this.size = Math.random() * 8 + 4;
    this.color = color;
    this.alpha = 1;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.2;
    this.alpha -= 0.03;
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.alpha);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// Slice collision detection
function checkBladeCollisions(bx, by) {
  if (!gameActive) return;

  flyingItems.forEach((item) => {
    if (!item.sliced) {
      const dist = Math.hypot(item.x - bx, item.y - by);
      if (dist < item.radius + 15) {
        item.sliced = true;

        if (item.isTarget) {
          // Success: Slice target word!
          score++;
          scoreText.textContent = score;

          // Sound & Speech
          speakEnglish(item.data.word, 0.9);

          // Particles
          for (let i = 0; i < 18; i++) {
            particles.push(new SlicedParticle(item.x, item.y, i % 2 === 0 ? '#f59e0b' : '#10b981'));
          }

          // Floating notification
          floatingNotifications.push({
            text: `+1 ⭐ ${item.data.word.toUpperCase()}`,
            x: item.x,
            y: item.y - 20,
            alpha: 1,
            color: '#10b981'
          });

          // Send message to parent
          if (window.parent && window.parent !== window) {
            window.parent.postMessage({ type: 'ADD_STARS', amount: 1 }, '*');
          }

          // Check Victory
          if (score >= VICTORY_SCORE) {
            triggerVictory();
          }
        } else {
          // Distractor sliced: gentle prompt
          for (let i = 0; i < 8; i++) {
            particles.push(new SlicedParticle(item.x, item.y, '#f87171'));
          }
          floatingNotifications.push({
            text: `Âm /${currentTargetPhoneme}/ nhé bé!`,
            x: item.x,
            y: item.y - 20,
            alpha: 1,
            color: '#ef4444'
          });
          speakEnglish(item.data.word, 0.9);
        }
      }
    }
  });
}

// Spawner Loop
let lastSpawnTime = 0;
function spawnItems(now) {
  if (!gameActive) return;
  if (now - lastSpawnTime > 1600 && flyingItems.length < 4) {
    lastSpawnTime = now;

    const poolKeys = Object.keys(EHON_POOL);
    const targetKeys = poolKeys.filter((k) => EHON_POOL[k].phoneme === currentTargetPhoneme);
    const distractorKeys = poolKeys.filter((k) => EHON_POOL[k].phoneme !== currentTargetPhoneme);

    // 70% chance of spawning target, 30% distractor
    const isTarget = Math.random() < 0.7 || targetKeys.length === 0;
    const chosenKey = isTarget && targetKeys.length > 0
      ? targetKeys[Math.floor(Math.random() * targetKeys.length)]
      : distractorKeys[Math.floor(Math.random() * distractorKeys.length)];

    if (chosenKey && EHON_POOL[chosenKey]) {
      flyingItems.push(new FlyingItem(EHON_POOL[chosenKey], isTarget));
    }
  }
}

// Victory Handler
function triggerVictory() {
  gameActive = false;
  earnedStarsCount.textContent = '+5 ⭐';
  victoryModal.classList.add('show');
  speakEnglish('Well done! You are a Phonics Champion!');

  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ type: 'ADD_STARS', amount: 5 }, '*');
  }
}

// Reset Game
function resetGame() {
  score = 0;
  scoreText.textContent = '0';
  flyingItems = [];
  particles = [];
  floatingNotifications = [];
  gameActive = true;
  victoryModal.classList.remove('show');
  promptText.textContent = `Bé hãy chém các bức tranh có âm /${currentTargetPhoneme}/ nhé!`;
}

playAgainBtn.addEventListener('click', resetGame);
modalExitBtn.addEventListener('click', () => {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ type: 'EXIT_GAME' }, '*');
  }
});
exitBtn.addEventListener('click', () => {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ type: 'EXIT_GAME' }, '*');
  }
});

repeatSoundBtn.addEventListener('click', () => {
  speakEnglish(currentTargetPhoneme, 0.7);
});

// MediaPipe Hands Integration
const hands = new Hands({
  locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
});

hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 0,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});

hands.onResults((results) => {
  if (!gameActive || !isCameraActive) return;
  const landmarks = results.multiHandLandmarks || [];
  if (landmarks.length > 0) {
    const indexTip = landmarks[0][8]; // Index fingertip
    if (indexTip) {
      const hx = (1 - indexTip.x) * WIDTH; // Mirrored
      const hy = indexTip.y * HEIGHT;
      bladeTrail.push({ x: hx, y: hy, time: performance.now() });
      checkBladeCollisions(hx, hy);
    }
  }
});

// Camera Toggle
cameraToggleBtn.addEventListener('click', async () => {
  if (!isCameraActive) {
    try {
      cameraStream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' }
      });
      videoElement.srcObject = cameraStream;
      await videoElement.play();
      isCameraActive = true;
      cameraToggleBtn.classList.add('active');
      cameraToggleBtn.textContent = '🟢 Camera Bật';

      const sendFrame = async () => {
        if (isCameraActive && videoElement.readyState >= 2) {
          await hands.send({ image: videoElement });
        }
        if (isCameraActive) requestAnimationFrame(sendFrame);
      };
      sendFrame();
    } catch (e) {
      alert('Không thể mở Camera. Bé vẫn có thể chơi bằng cách vuốt màn hình nhé!');
    }
  } else {
    // Turn off
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
    }
    isCameraActive = false;
    cameraToggleBtn.classList.remove('active');
    cameraToggleBtn.textContent = '📷 Camera AI';
  }
});

// Parent postMessage Listener
window.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'INIT_GAME') {
    if (e.data.targetPhoneme) {
      currentTargetPhoneme = e.data.targetPhoneme;
      targetPhonemeText.textContent = `/${currentTargetPhoneme}/`;
      resetGame();
    }
  }
});

// Main Animation Loop
function loop(now) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  // Background subtle paper grid
  ctx.fillStyle = '#FFFDF9';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Spawn Items
  spawnItems(now);

  // Update & Draw Flying Items
  flyingItems = flyingItems.filter((item) => !item.isDead());
  flyingItems.forEach((item) => {
    item.update();
    item.draw(ctx);
  });

  // Update & Draw Particles
  particles = particles.filter((p) => p.alpha > 0);
  particles.forEach((p) => {
    p.update();
    p.draw(ctx);
  });

  // Draw Blade Trail
  bladeTrail = bladeTrail.filter((pt) => now - pt.time < 180);
  if (bladeTrail.length > 1) {
    ctx.save();
    for (let i = 1; i < bladeTrail.length; i++) {
      const p1 = bladeTrail[i - 1];
      const p2 = bladeTrail[i];
      const age = now - p2.time;
      const progress = 1 - age / 180;

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(245, 158, 11, ${progress * 0.8})`;
      ctx.lineWidth = progress * 14;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Inner glow
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(255, 255, 255, ${progress})`;
      ctx.lineWidth = progress * 6;
      ctx.stroke();
    }
    ctx.restore();
  }

  // Draw Floating Notifications
  floatingNotifications = floatingNotifications.filter((fn) => fn.alpha > 0);
  floatingNotifications.forEach((fn) => {
    fn.y -= 1.2;
    fn.alpha -= 0.02;
    ctx.save();
    ctx.globalAlpha = Math.max(0, fn.alpha);
    ctx.font = '900 20px "Be Vietnam Pro", sans-serif';
    ctx.fillStyle = fn.color;
    ctx.textAlign = 'center';
    ctx.fillText(fn.text, fn.x, fn.y);
    ctx.restore();
  });

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
resetGame();
