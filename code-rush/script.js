const PLAY_URL = 'https://naqsh.dev/code-rush/';
const DESKTOP_QUERY = '(min-width: 780px)';
const RUSH_SESSION_SIZE = 10;
const TAP_SESSION_SIZE = 15;

const difficultyMultipliers = {
  easy: 1,
  medium: 1.18,
  hard: 1.38,
  mixed: 1.16,
};

const difficultyLabels = {
  en: { easy: 'Easy', medium: 'Medium', hard: 'Hard', mixed: 'Mixed' },
  fa: { easy: 'آسان', medium: 'متوسط', hard: 'سخت', mixed: 'ترکیبی' },
};

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
    levelRange: 'Difficulty',
    selectDifficulty: 'Choose difficulty',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    mixed: 'Mixed',
    typingPlaceholder: 'Type the snippet here...',
    timer: 'Timer',
    accuracy: 'Accuracy',
    score: 'Score',
    level: 'Level',
    difficulty: 'Difficulty',
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
    rushDescription: 'Type a randomized set of snippets. Your difficulty changes the pool and the scoring multiplier.',
    tapTitle: 'Tap the correct code.',
    tapDescription: 'Answer a randomized quiz set. Answers shuffle every round, so memorizing positions will not help.',
    copied: 'Copied.',
    correctAnswer: 'Correct.',
    wrongAnswer: 'Not this time.',
    resultSummary: 'You scored {score} in {mode} on {difficulty}. Best on this device: {best}.',
    shareText: 'I scored {score} in Naqsh {mode}. Can you beat me? Play here: https://naqsh.dev/code-rush/',
    rewardTitle: 'Perfect Score Reward Unlocked!',
    rewardText: 'Screenshot this result and send it to Naqsh to claim 10% off your portfolio website.',
    claimCode: 'Claim code',
    questionWord: 'Question',
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
    levelRange: 'درجه سختی',
    selectDifficulty: 'درجه سختی را انتخاب کن',
    easy: 'آسان',
    medium: 'متوسط',
    hard: 'سخت',
    mixed: 'ترکیبی',
    typingPlaceholder: 'کُد را اینجا تایپ کن...',
    timer: 'زمان',
    accuracy: 'دقت',
    score: 'امتیاز',
    level: 'سطح',
    difficulty: 'درجه',
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
    rushDescription: 'یک مجموعه تصادفی از قطعه‌کُدها را تایپ کن. درجه سختی روی محتوا و امتیاز اثر دارد.',
    tapTitle: 'جواب درست را انتخاب کن.',
    tapDescription: 'به پرسش‌های تصادفی برنامه‌نویسی جواب بده. گزینه‌ها هر بار جابه‌جا می‌شوند.',
    copied: 'کاپی شد.',
    correctAnswer: 'درست است.',
    wrongAnswer: 'این بار نشد.',
    resultSummary: 'شما {score} امتیاز در {mode} با درجه {difficulty} گرفتید. بهترین امتیاز در این دستگاه: {best}.',
    shareText: 'I scored {score} in Naqsh {mode}. Can you beat me? Play here: https://naqsh.dev/code-rush/',
    rewardTitle: 'جایزه امتیاز کامل فعال شد!',
    rewardText: 'از این نتیجه اسکرین‌شات بگیر و برای نقش بفرست تا ۱۰٪ تخفیف ساخت وبسایت پورتفولیو دریافت کنی.',
    claimCode: 'کُد دریافت',
    questionWord: 'پرسش',
  },
};

const rushSnippets = [
  { level: 'easy', title: 'Console', code: 'console.log("Hello, Naqsh!");' },
  { level: 'easy', title: 'HTML Button', code: '<button class="btn">Start</button>' },
  { level: 'easy', title: 'CSS Color', code: 'color: #00ff88;' },
  { level: 'easy', title: 'Python Print', code: 'print("Code Rush")' },
  { level: 'easy', title: 'Variable', code: 'const score = 100;' },
  { level: 'easy', title: 'Heading', code: '<h1>Naqsh Digital Studio</h1>' },
  { level: 'easy', title: 'Link', code: '<a href="/code-rush/">Play</a>' },
  { level: 'easy', title: 'Boolean', code: 'let isReady = true;' },
  { level: 'easy', title: 'Terminal List', code: 'ls -la' },
  { level: 'easy', title: 'CSS Radius', code: 'border-radius: 16px;' },
  { level: 'medium', title: 'Function', code: 'function add(a, b) {\n  return a + b;\n}' },
  { level: 'medium', title: 'Array Max', code: 'const scores = [90, 75, 100];\nconst best = Math.max(...scores);' },
  { level: 'medium', title: 'CSS Grid', code: '.cards {\n  display: grid;\n  gap: 1rem;\n}' },
  { level: 'medium', title: 'Event', code: 'button.addEventListener("click", startGame);' },
  { level: 'medium', title: 'Map', code: 'const names = users.map((user) => user.name);' },
  { level: 'medium', title: 'Template', code: 'const message = `Score: ${score}`;' },
  { level: 'medium', title: 'Python Function', code: 'def greet(name):\n    return f"Hello, {name}"' },
  { level: 'medium', title: 'Media Query', code: '@media (max-width: 640px) {\n  body { padding: 1rem; }\n}' },
  { level: 'medium', title: 'Git Commit', code: 'git commit -m "add code rush"' },
  { level: 'medium', title: 'Object', code: 'const studio = { name: "Naqsh", city: "Kabul" };' },
  { level: 'hard', title: 'Async Fetch', code: 'const data = await fetch("/api").then((res) => res.json());' },
  { level: 'hard', title: 'Terminal Chain', code: 'git add . && git commit -m "launch" && git push' },
  { level: 'hard', title: 'Python Loop', code: 'for index, item in enumerate(items):\n    print(index, item)' },
  { level: 'hard', title: 'Reducer', code: 'const total = cart.reduce((sum, item) => sum + item.price, 0);' },
  { level: 'hard', title: 'Filter', code: 'const active = users.filter((user) => user.status === "active");' },
  { level: 'hard', title: 'Try Catch', code: 'try {\n  await saveProject(project);\n} catch (error) {\n  console.error(error);\n}' },
  { level: 'hard', title: 'Regex', code: 'const clean = input.replace(/\\s+/g, " ").trim();' },
  { level: 'hard', title: 'CSS Clamp', code: 'font-size: clamp(2rem, 8vw, 6rem);' },
  { level: 'hard', title: 'Local Storage', code: 'localStorage.setItem("bestScore", String(score));' },
  { level: 'hard', title: 'Promise All', code: 'const [profile, posts] = await Promise.all([getProfile(), getPosts()]);' },
];

const tapQuestions = [
  { level: 'easy', en: 'Which HTML tag creates a link?', fa: 'کدام تگ HTML لینک می‌سازد؟', options: ['<a>', '<link-text>', '<url>', '<href>'], answer: '<a>' },
  { level: 'easy', en: 'Which CSS property changes text color?', fa: 'کدام ویژگی CSS رنگ متن را تغییر می‌دهد؟', options: ['font-color', 'color', 'text-paint', 'background'], answer: 'color' },
  { level: 'easy', en: 'What does console.log() do?', fa: 'console.log() چه کار می‌کند؟', options: ['Prints to console', 'Deletes a file', 'Creates CSS', 'Starts a server'], answer: 'Prints to console' },
  { level: 'easy', en: 'Which command shows files in many terminals?', fa: 'کدام دستور در بسیاری ترمینال‌ها فایل‌ها را نشان می‌دهد؟', options: ['show', 'ls', 'open', 'files'], answer: 'ls' },
  { level: 'easy', en: 'Python uses which keyword to define a function?', fa: 'در Python برای ساختن تابع از کدام کلمه استفاده می‌شود؟', options: ['func', 'define', 'def', 'function'], answer: 'def' },
  { level: 'easy', en: 'Which tag creates a paragraph?', fa: 'کدام تگ یک پاراگراف می‌سازد؟', options: ['<p>', '<text>', '<para>', '<span>'], answer: '<p>' },
  { level: 'easy', en: 'Which symbol starts a JavaScript comment?', fa: 'کدام نشانه کامنت JavaScript را شروع می‌کند؟', options: ['//', '<!--', '#', '--'], answer: '//' },
  { level: 'easy', en: 'Which CSS property changes background color?', fa: 'کدام ویژگی CSS رنگ پس‌زمینه را تغییر می‌دهد؟', options: ['background-color', 'page-color', 'fill-page', 'bg-text'], answer: 'background-color' },
  { level: 'easy', en: 'Which file often contains website structure?', fa: 'کدام فایل معمولاً ساختار وبسایت را دارد؟', options: ['index.html', 'style.css', 'image.png', 'notes.txt'], answer: 'index.html' },
  { level: 'easy', en: 'Which value means true or false?', fa: 'کدام نوع مقدار درست یا نادرست است؟', options: ['Boolean', 'String', 'Pixel', 'Folder'], answer: 'Boolean' },
  { level: 'easy', en: 'Which HTML tag displays an image?', fa: 'کدام تگ HTML تصویر نشان می‌دهد؟', options: ['<img>', '<photo>', '<pic>', '<image-box>'], answer: '<img>' },
  { level: 'easy', en: 'Which CSS property controls spacing inside a box?', fa: 'کدام ویژگی فاصله داخل یک جعبه را کنترول می‌کند؟', options: ['padding', 'margin', 'gap', 'border'], answer: 'padding' },
  { level: 'easy', en: 'Which command prints text in Python?', fa: 'کدام دستور در Python متن چاپ می‌کند؟', options: ['print()', 'echo()', 'say()', 'write()'], answer: 'print()' },
  { level: 'easy', en: 'Which extension is for JavaScript files?', fa: 'پسوند فایل JavaScript کدام است؟', options: ['.js', '.css', '.html', '.jpg'], answer: '.js' },
  { level: 'easy', en: 'Which tag is the page title in browser tabs?', fa: 'کدام تگ عنوان صفحه را در تب مرورگر نشان می‌دهد؟', options: ['<title>', '<head-title>', '<tab>', '<name>'], answer: '<title>' },

  { level: 'medium', en: 'What is the output of: 2 + "2" in JavaScript?', fa: 'خروجی 2 + "2" در JavaScript چیست؟', options: ['4', '"22"', 'NaN', 'Error'], answer: '"22"' },
  { level: 'medium', en: 'Which CSS value makes a flex container?', fa: 'کدام مقدار CSS یک flex container می‌سازد؟', options: ['display: flex', 'flex: true', 'position: flex', 'layout: flex'], answer: 'display: flex' },
  { level: 'medium', en: 'Which method adds an item to the end of an array?', fa: 'کدام متد یک آیتم را به آخر آرایه اضافه می‌کند؟', options: ['push()', 'pop()', 'shift()', 'map()'], answer: 'push()' },
  { level: 'medium', en: 'Which tag is used for the largest heading?', fa: 'برای بزرگ‌ترین سرعنوان از کدام تگ استفاده می‌شود؟', options: ['<heading>', '<h6>', '<h1>', '<title>'], answer: '<h1>' },
  { level: 'medium', en: 'What does git status show?', fa: 'git status چه چیزی را نشان می‌دهد؟', options: ['Weather', 'Changed files', 'CPU speed', 'CSS colors'], answer: 'Changed files' },
  { level: 'medium', en: 'Which array method creates a new transformed array?', fa: 'کدام متد آرایه یک آرایه جدید تبدیل‌شده می‌سازد؟', options: ['map()', 'push()', 'pop()', 'join()'], answer: 'map()' },
  { level: 'medium', en: 'Which CSS property creates space between grid items?', fa: 'کدام ویژگی بین آیتم‌های grid فاصله می‌سازد؟', options: ['gap', 'space', 'grid-space', 'padding-only'], answer: 'gap' },
  { level: 'medium', en: 'What does === check in JavaScript?', fa: '=== در JavaScript چه چیزی را بررسی می‌کند؟', options: ['Value and type', 'Only value', 'Only type', 'Assignment'], answer: 'Value and type' },
  { level: 'medium', en: 'Which HTTP method is usually used to request data?', fa: 'برای گرفتن اطلاعات معمولاً از کدام HTTP method استفاده می‌شود؟', options: ['GET', 'SEND', 'PULL', 'OPEN'], answer: 'GET' },
  { level: 'medium', en: 'Which command installs npm packages from package.json?', fa: 'کدام دستور پکیج‌های npm را از package.json نصب می‌کند؟', options: ['npm install', 'npm start', 'npm save', 'node install'], answer: 'npm install' },
  { level: 'medium', en: 'Which CSS position keeps an element fixed to the viewport?', fa: 'کدام position عنصر را به صفحه نمایش ثابت نگه می‌دارد؟', options: ['fixed', 'sticky-only', 'absolute-screen', 'viewport'], answer: 'fixed' },
  { level: 'medium', en: 'What does JSON stand for?', fa: 'JSON مخفف چیست؟', options: ['JavaScript Object Notation', 'Java Style Object Name', 'Joined Syntax Online Node', 'Just Simple Object Notes'], answer: 'JavaScript Object Notation' },
  { level: 'medium', en: 'Which operator spreads array values?', fa: 'کدام عملگر مقادیر آرایه را spread می‌کند؟', options: ['...', '***', '=>', '??'], answer: '...' },
  { level: 'medium', en: 'Which CSS property controls stacking order?', fa: 'کدام ویژگی ترتیب روی‌هم‌آمدن عناصر را کنترول می‌کند؟', options: ['z-index', 'stack', 'layer', 'order-y'], answer: 'z-index' },
  { level: 'medium', en: 'Which Python type stores key/value pairs?', fa: 'کدام نوع Python جفت‌های کلید و مقدار را نگه می‌دارد؟', options: ['dict', 'list', 'tuple', 'set-only'], answer: 'dict' },

  { level: 'hard', en: 'Which JavaScript keyword waits for a Promise?', fa: 'کدام کلمه JavaScript منتظر Promise می‌ماند؟', options: ['wait', 'async', 'await', 'pause'], answer: 'await' },
  { level: 'hard', en: 'Which CSS unit is relative to viewport width?', fa: 'کدام واحد CSS وابسته به عرض صفحه است؟', options: ['rem', 'vw', 'px', 'ms'], answer: 'vw' },
  { level: 'hard', en: 'What does JSON usually store?', fa: 'JSON معمولاً چه چیزی را نگهداری می‌کند؟', options: ['Structured data', 'Images only', 'CSS animations', 'Terminal history'], answer: 'Structured data' },
  { level: 'hard', en: 'Which command creates a new Git branch?', fa: 'کدام دستور یک شاخه جدید Git می‌سازد؟', options: ['git new', 'git branch name', 'git make branch', 'git save'], answer: 'git branch name' },
  { level: 'hard', en: 'Which method turns JSON text into an object?', fa: 'کدام متد متن JSON را به object تبدیل می‌کند؟', options: ['JSON.parse()', 'JSON.text()', 'Object.read()', 'parse.JSON()'], answer: 'JSON.parse()' },
  { level: 'hard', en: 'Which JavaScript feature handles errors?', fa: 'کدام ساختار JavaScript خطاها را مدیریت می‌کند؟', options: ['try...catch', 'if...style', 'wait...error', 'map...catch'], answer: 'try...catch' },
  { level: 'hard', en: 'What does localStorage store?', fa: 'localStorage چه چیزی را ذخیره می‌کند؟', options: ['Browser-side key/value data', 'Server database rows', 'Only images', 'Git commits'], answer: 'Browser-side key/value data' },
  { level: 'hard', en: 'Which CSS function gives responsive min/preferred/max values?', fa: 'کدام تابع CSS مقدار حداقل/دلخواه/حداکثر می‌دهد؟', options: ['clamp()', 'scale()', 'range()', 'fit()'], answer: 'clamp()' },
  { level: 'hard', en: 'Which Promise method runs multiple promises together?', fa: 'کدام Promise method چند promise را با هم اجرا می‌کند؟', options: ['Promise.all()', 'Promise.group()', 'Promise.wait()', 'Promise.each()'], answer: 'Promise.all()' },
  { level: 'hard', en: 'Which regex flag means global search?', fa: 'کدام flag در regex جستجوی سراسری است؟', options: ['g', 'i', 'm', 'x'], answer: 'g' },
  { level: 'hard', en: 'Which command shows Git commit history?', fa: 'کدام دستور تاریخچه commit های Git را نشان می‌دهد؟', options: ['git log', 'git history', 'git commits', 'git show-all'], answer: 'git log' },
  { level: 'hard', en: 'Which array method returns the first matching item?', fa: 'کدام متد آرایه اولین آیتم مطابق را برمی‌گرداند؟', options: ['find()', 'filter()', 'map()', 'reduce()'], answer: 'find()' },
  { level: 'hard', en: 'Which HTML attribute improves image accessibility?', fa: 'کدام ویژگی HTML دسترسی‌پذیری تصویر را بهتر می‌کند؟', options: ['alt', 'src', 'href', 'role-img'], answer: 'alt' },
  { level: 'hard', en: 'Which JavaScript value means no value intentionally?', fa: 'کدام مقدار JavaScript یعنی عمداً هیچ مقدار ندارد؟', options: ['null', 'NaN', 'false', '0'], answer: 'null' },
  { level: 'hard', en: 'Which command publishes local commits to remote?', fa: 'کدام دستور commit های محلی را به remote می‌فرستد؟', options: ['git push', 'git upload', 'git send', 'git publish-now'], answer: 'git push' },
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

let lang = localStorage.getItem('naqshGameLang') || 'en';
let mode = window.matchMedia(DESKTOP_QUERY).matches ? 'rush' : 'tap';
let difficulty = localStorage.getItem('naqshGameDifficulty') || 'mixed';
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

function labelDifficulty(value = difficulty) {
  return difficultyLabels[lang][value] || difficultyLabels.en[value] || value;
}

function bestKey(currentMode = mode) {
  return `naqsh-code-game-best-${currentMode}-${difficulty}`;
}

function getBest(currentMode = mode) {
  return Number(localStorage.getItem(bestKey(currentMode)) || 0);
}

function setBest(score, currentMode = mode) {
  const best = Math.max(score, getBest(currentMode));
  localStorage.setItem(bestKey(currentMode), String(best));
  return best;
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function poolByDifficulty(items) {
  return difficulty === 'mixed' ? items : items.filter((item) => item.level === difficulty);
}

function sessionItems(items, size) {
  return shuffle(poolByDifficulty(items)).slice(0, size);
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
  $$('[data-difficulty-button]').forEach((button) => {
    button.textContent = t(button.dataset.difficultyButton);
    button.classList.toggle('is-active', button.dataset.difficultyButton === difficulty);
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

function setDifficulty(nextDifficulty) {
  difficulty = nextDifficulty;
  localStorage.setItem('naqshGameDifficulty', difficulty);
  $$('[data-difficulty-button]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.difficultyButton === difficulty);
  });
  updateModeText();
}

function updateModeText() {
  const modeName = mode === 'rush' ? 'Code Rush' : 'CodeTap';
  $('#detectedMode').textContent = modeName;
  $('#modeEyebrow').textContent = modeName;
  $('#startTitle').textContent = mode === 'rush' ? t('rushTitle') : t('tapTitle');
  $('#startDescription').textContent = mode === 'rush' ? t('rushDescription') : t('tapDescription');
  $('#bestScore').textContent = getBest();
  $('#bestScoreCard').textContent = getBest();
  $('#selectedDifficulty').textContent = labelDifficulty();
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

function currentMultiplier() {
  return difficultyMultipliers[difficulty] || 1;
}

function startRush() {
  const snippets = sessionItems(rushSnippets, RUSH_SESSION_SIZE);
  rush = {
    snippets,
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
  const snippet = currentSnippet();
  $('#snippetBox').textContent = snippet.code;
  $('#rushLevel').textContent = labelDifficulty(snippet.level);
  $('#rushDifficulty').textContent = labelDifficulty();
  $('#typingInput').value = '';
  rush.currentTyped = '';
}

function updateRushHud() {
  const typed = rush.typedTotal + rush.currentTyped.length;
  const correct = rush.correctTotal + countCorrect(rush.currentTyped, currentSnippet().code);
  const accuracy = typed ? Math.round((correct / typed) * 100) : 100;
  $('#rushTime').textContent = rush.timeLeft;
  $('#rushAccuracy').textContent = `${Math.max(0, Math.min(100, accuracy))}%`;
  $('#rushScore').textContent = rush.score;
  $('#rushProgress').style.width = `${Math.min(100, (rush.completed / rush.snippets.length) * 100)}%`;
}

function currentSnippet() {
  return rush.snippets[rush.index] || rush.snippets[rush.snippets.length - 1];
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
    const levelBase = snippet.level === 'hard' ? 110 : snippet.level === 'medium' ? 75 : 45;
    rush.score += Math.round((snippet.code.length * 2 * accuracy + levelBase + rush.timeLeft * 1.5) * currentMultiplier());
    rush.completed += 1;
    rush.typedTotal += input.length;
    rush.correctTotal += countCorrect(input, snippet.code);
    rush.index += 1;

    if (rush.index >= rush.snippets.length) {
      rush.currentTyped = '';
      finishRush();
    } else {
      renderRushSnippet();
    }
  }
  updateRushHud();
}

function finishRush() {
  stopTimer();
  const typed = rush.typedTotal + rush.currentTyped.length;
  const correct = rush.correctTotal + countCorrect(rush.currentTyped, currentSnippet().code);
  const accuracy = typed ? Math.round((correct / typed) * 100) : 0;
  const perfect = rush.completed === rush.snippets.length && accuracy >= 98;
  const finalScore = Math.max(0, Math.round((rush.score + rush.completed * 90 + accuracy) * currentMultiplier()));
  showResult('Code Rush', finalScore, perfect);
}

function startTap() {
  const questions = sessionItems(tapQuestions, TAP_SESSION_SIZE).map((question) => {
    const shuffledOptions = shuffle(question.options);
    return { ...question, options: shuffledOptions, answerIndex: shuffledOptions.indexOf(question.answer) };
  });
  tap = {
    questions,
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
  const question = currentQuestion();
  $('#questionMeta').textContent = `${t('questionWord')} ${tap.index + 1} / ${tap.questions.length}`;
  $('#questionText').textContent = lang === 'fa' ? question.fa : question.en;
  $('#tapLevel').textContent = labelDifficulty(question.level);
  $('#tapDifficulty').textContent = labelDifficulty();
  $('#answerFeedback').textContent = '';
  $('#answerGrid').innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-btn code-text';
    button.textContent = option;
    button.addEventListener('click', () => chooseAnswer(index, button));
    $('#answerGrid').append(button);
  });
}

function currentQuestion() {
  return tap.questions[tap.index] || tap.questions[tap.questions.length - 1];
}

function chooseAnswer(index, button) {
  if (tap.locked) return;
  tap.locked = true;
  const question = currentQuestion();
  const isCorrect = index === question.answerIndex;
  const levelBonus = question.level === 'hard' ? 155 : question.level === 'medium' ? 105 : 70;

  if (isCorrect) {
    tap.correct += 1;
    tap.score += Math.round((levelBonus + tap.timeLeft * 2) * currentMultiplier());
    button.classList.add('is-correct');
    $('#answerFeedback').textContent = t('correctAnswer');
  } else {
    button.classList.add('is-wrong');
    $$('.answer-btn')[question.answerIndex].classList.add('is-correct');
    $('#answerFeedback').textContent = t('wrongAnswer');
  }

  updateTapHud();
  setTimeout(() => {
    tap.index += 1;
    if (tap.index >= tap.questions.length) finishTap();
    else renderQuestion();
  }, 620);
}

function updateTapHud() {
  $('#tapTime').textContent = tap.timeLeft;
  $('#tapCorrect').textContent = tap.correct;
  $('#tapScore').textContent = tap.score;
  $('#tapProgress').style.width = `${Math.min(100, (tap.index / tap.questions.length) * 100)}%`;
}

function finishTap() {
  stopTimer();
  const perfect = tap.correct === tap.questions.length;
  const finalScore = Math.max(0, Math.round((tap.score + tap.correct * 65) * currentMultiplier()));
  showResult('CodeTap', finalScore, perfect);
}

function generateClaimCode() {
  return `NQ-${Math.floor(1000000000 + Math.random() * 9000000000)}`;
}

function saveClaimCode(code, score, modeName) {
  const claims = JSON.parse(localStorage.getItem('naqsh-code-rush-claims') || '[]');
  claims.push({
    code,
    score,
    mode: modeName,
    difficulty,
    date: new Date().toISOString(),
  });
  localStorage.setItem('naqsh-code-rush-claims', JSON.stringify(claims.slice(-10)));
}

function showResult(modeName, score, perfect = false) {
  const best = setBest(score, mode);
  const share = t('shareText').replace('{score}', score).replace('{mode}', modeName);
  $('#resultMode').textContent = `${modeName} / ${labelDifficulty()}`;
  $('#finalScore').textContent = score;
  $('#resultSummary').textContent = t('resultSummary')
    .replace('{score}', score)
    .replace('{mode}', modeName)
    .replace('{difficulty}', labelDifficulty())
    .replace('{best}', best);
  $('#shareText').textContent = share;
  $('#facebookShare').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PLAY_URL)}&quote=${encodeURIComponent(share)}`;
  $('#whatsappShare').href = `https://wa.me/?text=${encodeURIComponent(share)}`;

  const reward = $('#rewardCard');
  if (perfect) {
    const code = generateClaimCode();
    saveClaimCode(code, score, modeName);
    $('#rewardTitle').textContent = t('rewardTitle');
    $('#rewardText').textContent = t('rewardText');
    $('#claimCodeLabel').textContent = t('claimCode');
    $('#claimCode').textContent = code;
    reward.hidden = false;
  } else {
    reward.hidden = true;
  }

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

  $$('[data-difficulty-button]').forEach((button) => {
    button.addEventListener('click', () => setDifficulty(button.dataset.difficultyButton));
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
