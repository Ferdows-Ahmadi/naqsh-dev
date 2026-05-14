const PLAY_URL = 'https://naqsh.dev/code-rush/';
const DESKTOP_QUERY = '(min-width: 780px)';

const i18n = {
  en: {
    eyebrow: 'Naqsh Mini Game',
    heroTitleA: 'Code fast.',
    heroTitleB: 'Think faster.',
    heroText: 'A tiny coding challenge built for students, beginner programmers, and anyone who wants to test their developer reflexes.',
    terminalLine1: 'booting Naqsh challenge...',
    terminalLine2: 'mode detected:',
    terminalLine3: 'best score:',
    startGame: 'Start Game',
    bestOnDevice: 'Best Score on this device',
    levelRange: 'Levels',
    typingPlaceholder: 'Type the snippet here...',
    timer: 'Timer',
    accuracy: 'Accuracy',
    score: 'Score',
    level: 'Level',
    correct: 'Correct',
    finishNow: 'Finish Now',
    resultTitle: 'Your result is ready.',
    shareTitle: 'Challenge your friends',
    copyResult: 'Copy result',
    copyInstagram: 'Copy Instagram caption',
    playAgain: 'Play Again',
    backToStart: 'Back to Start',
    futureEyebrow: 'Coming next',
    futureTitle: 'More mini-games for developers.',
    rushTitle: 'Typing speed for code.',
    rushDescription: 'Type snippets quickly and accurately. Finish as many as you can before the timer hits zero.',
    tapTitle: 'Tap the correct code.',
    tapDescription: 'Answer quick programming questions. The faster you pick the correct answer, the higher your score.',
    copied: 'Copied.',
    correctAnswer: 'Correct.',
    wrongAnswer: 'Not this time.',
    resultSummary: 'You scored {score} in {mode}. Best on this device: {best}.',
    shareText: 'I scored {score} in Naqsh {mode}. Can you beat me? Play here: https://naqsh.dev/code-rush/',
  },
  fa: {
    eyebrow: 'بازی کوچک نقش',
    heroTitleA: 'سریع کُد بزن.',
    heroTitleB: 'سریع‌تر فکر کن.',
    heroText: 'یک چالش کوچک برنامه‌نویسی برای محصلان، برنامه‌نویسان تازه‌کار و هر کسی که می‌خواهد سرعت و دقت خود را امتحان کند.',
    terminalLine1: 'چالش نقش در حال اجرا است...',
    terminalLine2: 'حالت انتخاب‌شده:',
    terminalLine3: 'بهترین امتیاز:',
    startGame: 'شروع بازی',
    bestOnDevice: 'بهترین امتیاز در این دستگاه',
    levelRange: 'مرحله‌ها',
    typingPlaceholder: 'کُد را اینجا تایپ کن...',
    timer: 'زمان',
    accuracy: 'دقت',
    score: 'امتیاز',
    level: 'سطح',
    correct: 'درست',
    finishNow: 'پایان بازی',
    resultTitle: 'نتیجه شما آماده است.',
    shareTitle: 'دوستانت را به چالش بکش',
    copyResult: 'کاپی نتیجه',
    copyInstagram: 'کاپی کپشن انستاگرام',
    playAgain: 'دوباره بازی کن',
    backToStart: 'برگشت',
    futureEyebrow: 'به‌زودی',
    futureTitle: 'بازی‌های بیشتر برای برنامه‌نویسان.',
    rushTitle: 'سرعت تایپ کُد.',
    rushDescription: 'کُدها را سریع و دقیق تایپ کن. پیش از تمام شدن زمان، تا می‌توانی قطعه‌کُد کامل کن.',
    tapTitle: 'جواب درست را انتخاب کن.',
    tapDescription: 'به پرسش‌های سریع برنامه‌نویسی جواب بده. هر قدر سریع‌تر جواب درست بدهی، امتیازت بیشتر می‌شود.',
    copied: 'کاپی شد.',
    correctAnswer: 'درست است.',
    wrongAnswer: 'این بار نشد.',
    resultSummary: 'شما {score} امتیاز در {mode} گرفتید. بهترین امتیاز در این دستگاه: {best}.',
    shareText: 'I scored {score} in Naqsh {mode}. Can you beat me? Play here: https://naqsh.dev/code-rush/',
  },
};

const rushSnippets = [
  { level: 'Easy', title: 'Console', code: 'console.log("Hello, Naqsh!");' },
  { level: 'Easy', title: 'HTML', code: '<button class="btn">Start</button>' },
  { level: 'Easy', title: 'CSS', code: 'color: #00ff88;' },
  { level: 'Easy', title: 'Python', code: 'print("Code Rush")' },
  { level: 'Medium', title: 'Function', code: 'function add(a, b) {\n  return a + b;\n}' },
  { level: 'Medium', title: 'Array', code: 'const scores = [90, 75, 100];\nconst best = Math.max(...scores);' },
  { level: 'Medium', title: 'CSS Grid', code: '.cards {\n  display: grid;\n  gap: 1rem;\n}' },
  { level: 'Hard', title: 'Async', code: 'const data = await fetch("/api").then((res) => res.json());' },
  { level: 'Hard', title: 'Terminal', code: 'git add . && git commit -m "launch code rush"' },
  { level: 'Hard', title: 'Python Loop', code: 'for index, item in enumerate(items):\n  print(index, item)' },
];

const tapQuestions = [
  {
    level: 'Easy',
    en: 'Which HTML tag creates a link?',
    fa: 'کدام تگ HTML لینک می‌سازد؟',
    options: ['<a>', '<link-text>', '<url>', '<href>'],
    answer: 0,
  },
  {
    level: 'Easy',
    en: 'Which CSS property changes text color?',
    fa: 'کدام ویژگی CSS رنگ متن را تغییر می‌دهد؟',
    options: ['font-color', 'color', 'text-paint', 'background'],
    answer: 1,
  },
  {
    level: 'Easy',
    en: 'What does console.log() do?',
    fa: 'console.log() چه کار می‌کند؟',
    options: ['Prints to console', 'Deletes a file', 'Creates CSS', 'Starts a server'],
    answer: 0,
  },
  {
    level: 'Easy',
    en: 'Which command shows files in many terminals?',
    fa: 'کدام دستور در بسیاری ترمینال‌ها فایل‌ها را نشان می‌دهد؟',
    options: ['show', 'ls', 'open', 'files'],
    answer: 1,
  },
  {
    level: 'Easy',
    en: 'Python uses which keyword to define a function?',
    fa: 'در Python برای ساختن تابع از کدام کلمه استفاده می‌شود؟',
    options: ['func', 'define', 'def', 'function'],
    answer: 2,
  },
  {
    level: 'Medium',
    en: 'What is the output of: 2 + "2" in JavaScript?',
    fa: 'خروجی 2 + "2" در JavaScript چیست؟',
    options: ['4', '"22"', 'NaN', 'Error'],
    answer: 1,
  },
  {
    level: 'Medium',
    en: 'Which CSS value makes a flex container?',
    fa: 'کدام مقدار CSS یک flex container می‌سازد؟',
    options: ['display: flex', 'flex: true', 'position: flex', 'layout: flex'],
    answer: 0,
  },
  {
    level: 'Medium',
    en: 'Which method adds an item to the end of an array?',
    fa: 'کدام متد یک آیتم را به آخر آرایه اضافه می‌کند؟',
    options: ['push()', 'pop()', 'shift()', 'map()'],
    answer: 0,
  },
  {
    level: 'Medium',
    en: 'Which tag is used for the largest heading?',
    fa: 'برای بزرگ‌ترین سرعنوان از کدام تگ استفاده می‌شود؟',
    options: ['<heading>', '<h6>', '<h1>', '<title>'],
    answer: 2,
  },
  {
    level: 'Medium',
    en: 'What does git status show?',
    fa: 'git status چه چیزی را نشان می‌دهد؟',
    options: ['Weather', 'Changed files', 'CPU speed', 'CSS colors'],
    answer: 1,
  },
  {
    level: 'Hard',
    en: 'Which JavaScript keyword waits for a Promise?',
    fa: 'کدام کلمه JavaScript منتظر Promise می‌ماند؟',
    options: ['wait', 'async', 'await', 'pause'],
    answer: 2,
  },
  {
    level: 'Hard',
    en: 'What does === check in JavaScript?',
    fa: '=== در JavaScript چه چیزی را بررسی می‌کند؟',
    options: ['Value and type', 'Only value', 'Only type', 'Assignment'],
    answer: 0,
  },
  {
    level: 'Hard',
    en: 'Which CSS unit is relative to viewport width?',
    fa: 'کدام واحد CSS وابسته به عرض صفحه است؟',
    options: ['rem', 'vw', 'px', 'ms'],
    answer: 1,
  },
  {
    level: 'Hard',
    en: 'What does JSON usually store?',
    fa: 'JSON معمولاً چه چیزی را نگهداری می‌کند؟',
    options: ['Structured data', 'Images only', 'CSS animations', 'Terminal history'],
    answer: 0,
  },
  {
    level: 'Hard',
    en: 'Which command creates a new Git branch?',
    fa: 'کدام دستور یک شاخه جدید Git می‌سازد؟',
    options: ['git new', 'git branch name', 'git make branch', 'git save'],
    answer: 1,
  },
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

let lang = localStorage.getItem('naqshGameLang') || 'en';
let mode = window.matchMedia(DESKTOP_QUERY).matches ? 'rush' : 'tap';
let modeLocked = false;
let activeTimer = null;
let rush = null;
let tap = null;

const screens = {
  start: $('#screenStart'),
  rush: $('#screenRush'),
  tap: $('#screenTap'),
  result: $('#screenResult'),
};

function t(key) {
  return i18n[lang][key] || i18n.en[key] || key;
}

function bestKey(currentMode = mode) {
  return `naqsh-code-game-best-${currentMode}`;
}

function getBest(currentMode = mode) {
  return Number(localStorage.getItem(bestKey(currentMode)) || 0);
}

function setBest(score, currentMode = mode) {
  const best = Math.max(score, getBest(currentMode));
  localStorage.setItem(bestKey(currentMode), String(best));
  return best;
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove('is-active'));
  screens[name].classList.add('is-active');
}

function applyLanguage() {
  document.documentElement.lang = lang === 'fa' ? 'fa' : 'en';
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.body.dir = document.documentElement.dir;

  $$('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  $$('[data-i18n-placeholder]').forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  $$('[data-lang-button]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.langButton === lang);
  });
  updateModeText();
}

function setMode(nextMode, manual = false) {
  mode = nextMode;
  if (manual) modeLocked = true;
  $$('[data-mode-button]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.modeButton === mode);
  });
  updateModeText();
  showScreen('start');
}

function updateModeText() {
  const modeName = mode === 'rush' ? 'Code Rush' : 'CodeTap';
  $('#detectedMode').textContent = modeName;
  $('#modeEyebrow').textContent = modeName;
  $('#startTitle').textContent = mode === 'rush' ? t('rushTitle') : t('tapTitle');
  $('#startDescription').textContent = mode === 'rush' ? t('rushDescription') : t('tapDescription');
  $('#bestScore').textContent = getBest();
  $('#bestScoreCard').textContent = getBest();
}

function stopTimer() {
  if (activeTimer) clearInterval(activeTimer);
  activeTimer = null;
}

function startGame() {
  stopTimer();
  if (mode === 'rush') startRush();
  else startTap();
}

function startRush() {
  rush = {
    index: 0,
    timeLeft: 60,
    score: 0,
    completed: 0,
    typedTotal: 0,
    correctTotal: 0,
    currentTyped: '',
  };
  $('#typingInput').value = '';
  renderRushSnippet();
  updateRushHud();
  showScreen('rush');
  $('#typingInput').focus();
  activeTimer = setInterval(() => {
    rush.timeLeft -= 1;
    updateRushHud();
    if (rush.timeLeft <= 0) finishRush();
  }, 1000);
}

function renderRushSnippet() {
  const snippet = rushSnippets[rush.index % rushSnippets.length];
  $('#snippetBox').textContent = snippet.code;
  $('#rushLevel').textContent = snippet.level;
  $('#typingInput').value = '';
  rush.currentTyped = '';
}

function updateRushHud() {
  const accuracy = rush.typedTotal + rush.currentTyped.length
    ? Math.round(((rush.correctTotal + countCorrect(rush.currentTyped, currentSnippet().code)) / (rush.typedTotal + rush.currentTyped.length)) * 100)
    : 100;
  $('#rushTime').textContent = rush.timeLeft;
  $('#rushAccuracy').textContent = `${Math.max(0, Math.min(100, accuracy))}%`;
  $('#rushScore').textContent = rush.score;
  $('#rushProgress').style.width = `${Math.min(100, (rush.completed / rushSnippets.length) * 100)}%`;
}

function currentSnippet() {
  return rushSnippets[rush.index % rushSnippets.length];
}

function countCorrect(input, target) {
  return [...input].filter((char, index) => char === target[index]).length;
}

function handleTyping() {
  if (!rush) return;
  const input = $('#typingInput').value;
  const snippet = currentSnippet();
  rush.currentTyped = input;

  if (input === snippet.code) {
    const accuracy = countCorrect(input, snippet.code) / snippet.code.length;
    const levelBonus = snippet.level === 'Hard' ? 90 : snippet.level === 'Medium' ? 60 : 35;
    rush.score += Math.round(snippet.code.length * 2 * accuracy + levelBonus + rush.timeLeft * 1.5);
    rush.completed += 1;
    rush.typedTotal += input.length;
    rush.correctTotal += countCorrect(input, snippet.code);
    rush.index += 1;
    renderRushSnippet();
  }
  updateRushHud();
}

function finishRush() {
  stopTimer();
  const typed = rush.typedTotal + rush.currentTyped.length;
  const correct = rush.correctTotal + countCorrect(rush.currentTyped, currentSnippet().code);
  const accuracy = typed ? Math.round((correct / typed) * 100) : 0;
  const finalScore = Math.max(0, rush.score + rush.completed * 80 + accuracy);
  showResult('Code Rush', finalScore);
}

function startTap() {
  tap = {
    index: 0,
    timeLeft: 45,
    score: 0,
    correct: 0,
    locked: false,
  };
  renderQuestion();
  updateTapHud();
  showScreen('tap');
  activeTimer = setInterval(() => {
    tap.timeLeft -= 1;
    updateTapHud();
    if (tap.timeLeft <= 0) finishTap();
  }, 1000);
}

function renderQuestion() {
  tap.locked = false;
  const question = tapQuestions[tap.index % tapQuestions.length];
  $('#questionMeta').textContent = `${lang === 'fa' ? 'پرسش' : 'Question'} ${tap.index + 1} / ${tapQuestions.length}`;
  $('#questionText').textContent = lang === 'fa' ? question.fa : question.en;
  $('#tapLevel').textContent = question.level;
  $('#answerFeedback').textContent = '';
  $('#answerGrid').innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-btn';
    button.textContent = option;
    button.addEventListener('click', () => chooseAnswer(index, button));
    $('#answerGrid').append(button);
  });
}

function chooseAnswer(index, button) {
  if (tap.locked) return;
  tap.locked = true;
  const question = tapQuestions[tap.index % tapQuestions.length];
  const isCorrect = index === question.answer;
  const levelBonus = question.level === 'Hard' ? 140 : question.level === 'Medium' ? 95 : 60;

  if (isCorrect) {
    tap.correct += 1;
    tap.score += levelBonus + tap.timeLeft * 2;
    button.classList.add('is-correct');
    $('#answerFeedback').textContent = t('correctAnswer');
  } else {
    button.classList.add('is-wrong');
    $$('.answer-btn')[question.answer].classList.add('is-correct');
    $('#answerFeedback').textContent = t('wrongAnswer');
  }

  updateTapHud();
  setTimeout(() => {
    tap.index += 1;
    if (tap.index >= tapQuestions.length) finishTap();
    else renderQuestion();
  }, 620);
}

function updateTapHud() {
  $('#tapTime').textContent = tap.timeLeft;
  $('#tapCorrect').textContent = tap.correct;
  $('#tapScore').textContent = tap.score;
  $('#tapProgress').style.width = `${Math.min(100, (tap.index / tapQuestions.length) * 100)}%`;
}

function finishTap() {
  stopTimer();
  const finalScore = Math.max(0, tap.score + tap.correct * 55);
  showResult('CodeTap', finalScore);
}

function showResult(modeName, score) {
  const best = setBest(score, mode);
  const share = t('shareText').replace('{score}', score).replace('{mode}', modeName);
  $('#resultMode').textContent = modeName;
  $('#finalScore').textContent = score;
  $('#resultSummary').textContent = t('resultSummary')
    .replace('{score}', score)
    .replace('{mode}', modeName)
    .replace('{best}', best);
  $('#shareText').textContent = share;
  $('#facebookShare').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PLAY_URL)}&quote=${encodeURIComponent(share)}`;
  $('#whatsappShare').href = `https://wa.me/?text=${encodeURIComponent(share)}`;
  updateModeText();
  showScreen('result');
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    document.body.append(area);
    area.select();
    document.execCommand('copy');
    area.remove();
  }
}

function bindEvents() {
  $$('[data-lang-button]').forEach((button) => {
    button.addEventListener('click', () => {
      lang = button.dataset.langButton;
      localStorage.setItem('naqshGameLang', lang);
      applyLanguage();
    });
  });

  $$('[data-mode-button]').forEach((button) => {
    button.addEventListener('click', () => setMode(button.dataset.modeButton, true));
  });

  $('#startBtn').addEventListener('click', startGame);
  $('#typingInput').addEventListener('input', handleTyping);
  $$('[data-stop-game]').forEach((button) => {
    button.addEventListener('click', () => {
      if (mode === 'rush' && rush) finishRush();
      if (mode === 'tap' && tap) finishTap();
    });
  });
  $('#playAgain').addEventListener('click', startGame);
  $('#backStart').addEventListener('click', () => showScreen('start'));
  $('#copyResult').addEventListener('click', async () => {
    await copyText($('#shareText').textContent);
    $('#copyResult').textContent = t('copied');
    setTimeout(applyLanguage, 900);
  });
  $('#copyInstagram').addEventListener('click', async () => {
    await copyText(`${$('#shareText').textContent}\n\n#NaqshDev #CodeRush #Programming`);
    $('#copyInstagram').textContent = t('copied');
    setTimeout(applyLanguage, 900);
  });
}

window.matchMedia(DESKTOP_QUERY).addEventListener('change', (event) => {
  if (!modeLocked) setMode(event.matches ? 'rush' : 'tap');
});

bindEvents();
applyLanguage();
setMode(mode);
