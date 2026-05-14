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
    storageText:
      'Naqsh uses local storage to remember your language, game scores, and small preferences. No tracking cookies. No login. Just a smoother experience.',
    acceptStorage: 'Accept',
    learnMore: 'Learn more',
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
    storageText:
      'نقش از ذخیره‌سازی محلی برای به‌خاطر سپردن زبان، امتیاز بازی و تنظیمات کوچک استفاده می‌کند. کوکی ردیابی و ورود حساب کاربری وجود ندارد؛ فقط برای تجربه بهتر.',
    acceptStorage: 'قبول دارم',
    learnMore: 'بیشتر بدانید',
  },
};

const rushSnippetGroups = {
  "easy": [
    [
      "Console Hello",
      "console.log(\"Hello, Naqsh!\");"
    ],
    [
      "HTML Button",
      "<button class=\"btn\">Start</button>"
    ],
    [
      "CSS Color",
      "color: #00ff88;"
    ],
    [
      "Python Print",
      "print(\"Code Rush\")"
    ],
    [
      "JavaScript Variable",
      "const score = 100;"
    ],
    [
      "HTML Heading",
      "<h1>Naqsh Digital Studio</h1>"
    ],
    [
      "HTML Link",
      "<a href=\"/code-rush/\">Play</a>"
    ],
    [
      "Boolean",
      "let isReady = true;"
    ],
    [
      "Terminal List",
      "ls -la"
    ],
    [
      "CSS Radius",
      "border-radius: 16px;"
    ],
    [
      "Image Alt",
      "<img src=\"logo.png\" alt=\"Naqsh logo\">"
    ],
    [
      "CSS Padding",
      "padding: 1rem;"
    ],
    [
      "Python Name",
      "name = \"Ahmad\""
    ],
    [
      "JavaScript Alert",
      "alert(\"Game on!\");"
    ],
    [
      "HTML Input",
      "<input type=\"email\" placeholder=\"you@email.com\">"
    ],
    [
      "CSS Font Size",
      "font-size: 18px;"
    ],
    [
      "Terminal Directory",
      "pwd"
    ],
    [
      "Git Status",
      "git status"
    ],
    [
      "Python List",
      "scores = [10, 20, 30]"
    ],
    [
      "JavaScript Let",
      "let level = \"easy\";"
    ],
    [
      "HTML Paragraph",
      "<p>Build with care.</p>"
    ],
    [
      "CSS Border",
      "border: 1px solid #00ff88;"
    ],
    [
      "Python Comment",
      "# This is a comment"
    ],
    [
      "JS Comment",
      "// Keep code readable"
    ],
    [
      "HTML Section",
      "<section id=\"work\"></section>"
    ],
    [
      "CSS Margin",
      "margin: 0 auto;"
    ],
    [
      "Terminal Clear",
      "clear"
    ],
    [
      "Git Add",
      "git add index.html"
    ],
    [
      "Python Boolean",
      "is_active = True"
    ],
    [
      "JavaScript Array",
      "const tags = [\"html\", \"css\", \"js\"];"
    ],
    [
      "HTML List Item",
      "<li>Code Rush</li>"
    ],
    [
      "CSS Width",
      "width: 100%;"
    ],
    [
      "Python Math",
      "total = 7 + 5"
    ],
    [
      "JS String",
      "const studio = \"Naqsh\";"
    ],
    [
      "HTML Strong",
      "<strong>Premium</strong>"
    ],
    [
      "CSS Display",
      "display: block;"
    ]
  ],
  "medium": [
    [
      "Function Add",
      "function add(a, b) {\n  return a + b;\n}"
    ],
    [
      "Array Max",
      "const scores = [90, 75, 100];\nconst best = Math.max(...scores);"
    ],
    [
      "CSS Grid",
      ".cards {\n  display: grid;\n  gap: 1rem;\n}"
    ],
    [
      "Click Event",
      "button.addEventListener(\"click\", startGame);"
    ],
    [
      "Array Map",
      "const names = users.map((user) => user.name);"
    ],
    [
      "Template Literal",
      "const message = `Score: ${score}`;"
    ],
    [
      "Python Function",
      "def greet(name):\n    return f\"Hello, {name}\""
    ],
    [
      "Media Query",
      "@media (max-width: 640px) {\n  body { padding: 1rem; }\n}"
    ],
    [
      "Git Commit",
      "git commit -m \"add code rush\""
    ],
    [
      "Object Literal",
      "const studio = { name: \"Naqsh\", city: \"Kabul\" };"
    ],
    [
      "Query Selector",
      "const hero = document.querySelector(\".hero\");"
    ],
    [
      "CSS Flex Center",
      ".center {\n  display: flex;\n  align-items: center;\n}"
    ],
    [
      "Python Loop",
      "for score in scores:\n    print(score)"
    ],
    [
      "Array Includes",
      "const hasCss = skills.includes(\"CSS\");"
    ],
    [
      "Git Checkout",
      "git checkout -b feature/code-rush"
    ],
    [
      "NPM Build",
      "npm run build"
    ],
    [
      "CSS Variable",
      ":root {\n  --accent: #00ff88;\n}"
    ],
    [
      "Fetch Then",
      "fetch(\"/data.json\").then((res) => res.json());"
    ],
    [
      "Python Dict",
      "profile = {\"name\": \"Naqsh\", \"city\": \"Kabul\"}"
    ],
    [
      "Set Attribute",
      "link.setAttribute(\"aria-label\", \"Play Code Rush\");"
    ],
    [
      "CSS Hover",
      ".card:hover {\n  transform: translateY(-4px);\n}"
    ],
    [
      "Filter Active",
      "const active = users.filter((user) => user.active);"
    ],
    [
      "Reduce Total",
      "const total = prices.reduce((sum, price) => sum + price, 0);"
    ],
    [
      "Python Input",
      "username = input(\"Username: \")"
    ],
    [
      "Terminal Make Dir",
      "mkdir code-rush"
    ],
    [
      "Git Remote",
      "git remote -v"
    ],
    [
      "CSS Animation",
      "animation: pulse 2s ease-in-out infinite;"
    ],
    [
      "Form Submit",
      "form.addEventListener(\"submit\", handleSubmit);"
    ],
    [
      "Destructure",
      "const { title, category } = project;"
    ],
    [
      "Python Length",
      "count = len(projects)"
    ],
    [
      "HTML Form",
      "<form action=\"/contact\" method=\"post\"></form>"
    ],
    [
      "CSS Clamp",
      "font-size: clamp(2rem, 6vw, 5rem);"
    ],
    [
      "URL Params",
      "const params = new URLSearchParams(location.search);"
    ],
    [
      "Map Join",
      "const list = items.map((item) => item.name).join(\", \");"
    ],
    [
      "Python Range",
      "for number in range(1, 6):\n    print(number)"
    ],
    [
      "Git Pull",
      "git pull origin main"
    ]
  ],
  "hard": [
    [
      "Async Fetch",
      "const data = await fetch(\"/api\").then((res) => res.json());"
    ],
    [
      "Terminal Chain",
      "git add . && git commit -m \"launch\" && git push"
    ],
    [
      "Python Enumerate",
      "for index, item in enumerate(items):\n    print(index, item)"
    ],
    [
      "Reducer",
      "const total = cart.reduce((sum, item) => sum + item.price, 0);"
    ],
    [
      "Filter Strict",
      "const active = users.filter((user) => user.status === \"active\");"
    ],
    [
      "Try Catch",
      "try {\n  await saveProject(project);\n} catch (error) {\n  console.error(error);\n}"
    ],
    [
      "Regex Clean",
      "const clean = input.replace(/\\s+/g, \" \").trim();"
    ],
    [
      "Local Storage",
      "localStorage.setItem(\"bestScore\", String(score));"
    ],
    [
      "Promise All",
      "const [profile, posts] = await Promise.all([getProfile(), getPosts()]);"
    ],
    [
      "CSS Supports",
      "@supports (backdrop-filter: blur(12px)) {\n  .panel { backdrop-filter: blur(12px); }\n}"
    ],
    [
      "Intersection Observer",
      "const observer = new IntersectionObserver((entries) => {\n  entries.forEach((entry) => entry.target.classList.toggle(\"visible\", entry.isIntersecting));\n});"
    ],
    [
      "Python List Comprehension",
      "even_numbers = [n for n in numbers if n % 2 == 0]"
    ],
    [
      "Optional Chaining",
      "const city = user?.profile?.city ?? \"Kabul\";"
    ],
    [
      "Debounce",
      "const debounce = (fn, delay) => {\n  let id;\n  return (...args) => {\n    clearTimeout(id);\n    id = setTimeout(() => fn(...args), delay);\n  };\n};"
    ],
    [
      "Git Rebase",
      "git rebase origin/main"
    ],
    [
      "Python Try Except",
      "try:\n    value = int(text)\nexcept ValueError:\n    value = 0"
    ],
    [
      "CSS Container",
      "@container (min-width: 520px) {\n  .tile { grid-template-columns: 1fr 1fr; }\n}"
    ],
    [
      "JSON Parse",
      "const settings = JSON.parse(localStorage.getItem(\"settings\") || \"{}\");"
    ],
    [
      "Set Timeout",
      "const timer = setTimeout(() => showResult(score), 600);"
    ],
    [
      "Array Sort",
      "const sorted = posts.toSorted((a, b) => b.date.localeCompare(a.date));"
    ],
    [
      "Python Sort Key",
      "projects.sort(key=lambda item: item[\"score\"], reverse=True)"
    ],
    [
      "ARIA Toggle",
      "menuButton.setAttribute(\"aria-expanded\", String(isOpen));"
    ],
    [
      "CSS Grid Auto",
      "grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));"
    ],
    [
      "Fetch Error",
      "if (!response.ok) {\n  throw new Error(\"Request failed\");\n}"
    ],
    [
      "URL Decode",
      "const slug = decodeURIComponent(location.hash.slice(1));"
    ],
    [
      "Python Any",
      "has_winner = any(score >= 100 for score in scores)"
    ],
    [
      "Command Find",
      "find . -name \"*.js\" -maxdepth 3"
    ],
    [
      "Git Log",
      "git log --oneline --decorate --max-count=5"
    ],
    [
      "CSS Keyframes",
      "@keyframes glow {\n  from { opacity: .4; }\n  to { opacity: 1; }\n}"
    ],
    [
      "JS Module",
      "export function formatScore(score) {\n  return score.toLocaleString();\n}"
    ],
    [
      "Python JSON",
      "data = json.loads(raw_text)"
    ],
    [
      "Event Delegation",
      "document.addEventListener(\"click\", (event) => {\n  if (event.target.matches(\"[data-action]\")) handleAction(event);\n});"
    ],
    [
      "Abort Controller",
      "const controller = new AbortController();\nfetch(url, { signal: controller.signal });"
    ],
    [
      "Regex Email",
      "const isEmail = /^[^@]+@[^@]+\\.[^@]+$/.test(email);"
    ],
    [
      "Python Set",
      "unique_tags = set(tags)"
    ],
    [
      "Git Diff",
      "git diff -- public/code-rush/script.js"
    ]
  ]
};

const tapQuestionGroups = {
  "easy": [
    [
      "Which HTML tag creates a link?",
      [
        "<a>",
        "<link-text>",
        "<url>",
        "<href>"
      ],
      "<a>"
    ],
    [
      "Which CSS property changes text color?",
      [
        "font-color",
        "color",
        "text-paint",
        "background"
      ],
      "color"
    ],
    [
      "What does console.log() do?",
      [
        "Prints to console",
        "Deletes a file",
        "Creates CSS",
        "Starts a server"
      ],
      "Prints to console"
    ],
    [
      "Which command shows files in many terminals?",
      [
        "show",
        "ls",
        "open",
        "files"
      ],
      "ls"
    ],
    [
      "Python uses which keyword to define a function?",
      [
        "func",
        "define",
        "def",
        "function"
      ],
      "def"
    ],
    [
      "Which tag creates a paragraph?",
      [
        "<p>",
        "<text>",
        "<para>",
        "<span>"
      ],
      "<p>"
    ],
    [
      "Which symbol starts a JavaScript comment?",
      [
        "//",
        "<!--",
        "#",
        "--"
      ],
      "//"
    ],
    [
      "Which CSS property changes background color?",
      [
        "background-color",
        "page-color",
        "fill-page",
        "bg-text"
      ],
      "background-color"
    ],
    [
      "Which file often contains website structure?",
      [
        "index.html",
        "style.css",
        "image.png",
        "notes.txt"
      ],
      "index.html"
    ],
    [
      "Which value means true or false?",
      [
        "Boolean",
        "String",
        "Pixel",
        "Folder"
      ],
      "Boolean"
    ],
    [
      "Which HTML tag displays an image?",
      [
        "<img>",
        "<photo>",
        "<pic>",
        "<image-box>"
      ],
      "<img>"
    ],
    [
      "Which CSS property controls spacing inside a box?",
      [
        "padding",
        "margin",
        "gap",
        "border"
      ],
      "padding"
    ],
    [
      "Which command prints text in Python?",
      [
        "print()",
        "echo()",
        "say()",
        "write()"
      ],
      "print()"
    ],
    [
      "Which extension is for JavaScript files?",
      [
        ".js",
        ".css",
        ".html",
        ".jpg"
      ],
      ".js"
    ],
    [
      "Which tag is the page title in browser tabs?",
      [
        "<title>",
        "<head-title>",
        "<tab>",
        "<name>"
      ],
      "<title>"
    ],
    [
      "Which CSS property makes text bold?",
      [
        "font-weight",
        "text-bold",
        "weight-text",
        "bold-style"
      ],
      "font-weight"
    ],
    [
      "Which HTML tag creates a list item?",
      [
        "<li>",
        "<ul-item>",
        "<item>",
        "<list>"
      ],
      "<li>"
    ],
    [
      "Which command shows the current folder path?",
      [
        "pwd",
        "whereami",
        "path",
        "folder"
      ],
      "pwd"
    ],
    [
      "Which Git command stages a file?",
      [
        "git add file.js",
        "git save file.js",
        "git stage-now",
        "git upload"
      ],
      "git add file.js"
    ],
    [
      "Which CSS unit is pixels?",
      [
        "px",
        "em",
        "kg",
        "sec"
      ],
      "px"
    ],
    [
      "What is HTML mainly used for?",
      [
        "Page structure",
        "Database backup",
        "Image editing",
        "Server hardware"
      ],
      "Page structure"
    ],
    [
      "What is CSS mainly used for?",
      [
        "Visual styling",
        "Writing emails",
        "Making passwords",
        "Saving commits"
      ],
      "Visual styling"
    ],
    [
      "Which JavaScript keyword declares a constant?",
      [
        "const",
        "same",
        "fixed",
        "lock"
      ],
      "const"
    ],
    [
      "Which Python value means true?",
      [
        "True",
        "true",
        "YES",
        "1true"
      ],
      "True"
    ],
    [
      "Which tag contains page metadata?",
      [
        "<head>",
        "<meta-box>",
        "<info>",
        "<settings>"
      ],
      "<head>"
    ],
    [
      "Which tag contains visible page content?",
      [
        "<body>",
        "<screen>",
        "<view>",
        "<content-only>"
      ],
      "<body>"
    ],
    [
      "Which CSS property changes width?",
      [
        "width",
        "wide",
        "size-x",
        "length"
      ],
      "width"
    ],
    [
      "Which JavaScript type stores text?",
      [
        "String",
        "Number",
        "Boolean",
        "Array-only"
      ],
      "String"
    ],
    [
      "Which command clears many terminal screens?",
      [
        "clear",
        "clean",
        "wipe",
        "reset-css"
      ],
      "clear"
    ],
    [
      "Which Git command shows changed files?",
      [
        "git status",
        "git files",
        "git changed",
        "git check-ui"
      ],
      "git status"
    ],
    [
      "Which attribute gives an image source?",
      [
        "src",
        "href",
        "alt",
        "title"
      ],
      "src"
    ],
    [
      "Which attribute describes an image for accessibility?",
      [
        "alt",
        "src",
        "link",
        "image-name"
      ],
      "alt"
    ],
    [
      "Which CSS property centers text?",
      [
        "text-align",
        "center-text",
        "align-font",
        "justify-text"
      ],
      "text-align"
    ],
    [
      "Which JavaScript keyword allows reassignment?",
      [
        "let",
        "const",
        "fixed",
        "final"
      ],
      "let"
    ],
    [
      "Which Python type stores multiple ordered values?",
      [
        "list",
        "color",
        "pixel",
        "commit"
      ],
      "list"
    ],
    [
      "Which file usually styles a website?",
      [
        "style.css",
        "index.html",
        "server.log",
        "photo.jpg"
      ],
      "style.css"
    ]
  ],
  "medium": [
    [
      "What is the output of: 2 + \"2\" in JavaScript?",
      [
        "4",
        "\"22\"",
        "NaN",
        "Error"
      ],
      "\"22\""
    ],
    [
      "Which CSS value makes a flex container?",
      [
        "display: flex",
        "flex: true",
        "position: flex",
        "layout: flex"
      ],
      "display: flex"
    ],
    [
      "Which method adds an item to the end of an array?",
      [
        "push()",
        "pop()",
        "shift()",
        "map()"
      ],
      "push()"
    ],
    [
      "Which tag is used for the largest heading?",
      [
        "<heading>",
        "<h6>",
        "<h1>",
        "<title>"
      ],
      "<h1>"
    ],
    [
      "What does git status show?",
      [
        "Weather",
        "Changed files",
        "CPU speed",
        "CSS colors"
      ],
      "Changed files"
    ],
    [
      "Which array method creates a new transformed array?",
      [
        "map()",
        "push()",
        "pop()",
        "join()"
      ],
      "map()"
    ],
    [
      "Which CSS property creates space between grid items?",
      [
        "gap",
        "space",
        "grid-space",
        "padding-only"
      ],
      "gap"
    ],
    [
      "What does === check in JavaScript?",
      [
        "Value and type",
        "Only value",
        "Only type",
        "Assignment"
      ],
      "Value and type"
    ],
    [
      "Which HTTP method is usually used to request data?",
      [
        "GET",
        "SEND",
        "PULL",
        "OPEN"
      ],
      "GET"
    ],
    [
      "Which command installs npm packages from package.json?",
      [
        "npm install",
        "npm start",
        "npm save",
        "node install"
      ],
      "npm install"
    ],
    [
      "Which CSS position keeps an element fixed to the viewport?",
      [
        "fixed",
        "sticky-only",
        "absolute-screen",
        "viewport"
      ],
      "fixed"
    ],
    [
      "What does JSON stand for?",
      [
        "JavaScript Object Notation",
        "Java Style Object Name",
        "Joined Syntax Online Node",
        "Just Simple Object Notes"
      ],
      "JavaScript Object Notation"
    ],
    [
      "Which operator spreads array values?",
      [
        "...",
        "***",
        "=>",
        "??"
      ],
      "..."
    ],
    [
      "Which CSS property controls stacking order?",
      [
        "z-index",
        "stack",
        "layer",
        "order-y"
      ],
      "z-index"
    ],
    [
      "Which Python type stores key/value pairs?",
      [
        "dict",
        "list",
        "tuple",
        "set-only"
      ],
      "dict"
    ],
    [
      "What does document.querySelector() return?",
      [
        "The first matching element",
        "All matching files",
        "A CSS file",
        "A Git branch"
      ],
      "The first matching element"
    ],
    [
      "Which method removes the last array item?",
      [
        "pop()",
        "push()",
        "map()",
        "add()"
      ],
      "pop()"
    ],
    [
      "Which method joins array items into text?",
      [
        "join()",
        "split()",
        "merge-css()",
        "text()"
      ],
      "join()"
    ],
    [
      "Which Python function returns item count?",
      [
        "len()",
        "countAll()",
        "size()",
        "items()"
      ],
      "len()"
    ],
    [
      "Which CSS display value creates a grid?",
      [
        "display: grid",
        "grid: yes",
        "layout: columns",
        "position: grid"
      ],
      "display: grid"
    ],
    [
      "Which command creates a new folder?",
      [
        "mkdir app",
        "newfolder app",
        "touch app",
        "dir app"
      ],
      "mkdir app"
    ],
    [
      "Which Git command downloads remote changes?",
      [
        "git pull",
        "git send",
        "git collect",
        "git download-only"
      ],
      "git pull"
    ],
    [
      "Which HTML element is semantic for navigation?",
      [
        "<nav>",
        "<links>",
        "<menu-list>",
        "<route>"
      ],
      "<nav>"
    ],
    [
      "Which HTML element is semantic for page footer?",
      [
        "<footer>",
        "<bottom>",
        "<end>",
        "<copyright>"
      ],
      "<footer>"
    ],
    [
      "Which CSS property rounds corners?",
      [
        "border-radius",
        "corner",
        "round",
        "radius-corner"
      ],
      "border-radius"
    ],
    [
      "Which JavaScript method converts JSON text to object?",
      [
        "JSON.parse()",
        "JSON.stringify()",
        "Object.text()",
        "parse.Object()"
      ],
      "JSON.parse()"
    ],
    [
      "Which JavaScript method converts object to JSON text?",
      [
        "JSON.stringify()",
        "JSON.parse()",
        "Object.toCss()",
        "text.JSON()"
      ],
      "JSON.stringify()"
    ],
    [
      "Which status code usually means Not Found?",
      [
        "404",
        "200",
        "301",
        "100"
      ],
      "404"
    ],
    [
      "Which status code usually means OK?",
      [
        "200",
        "404",
        "500",
        "302"
      ],
      "200"
    ],
    [
      "Which JavaScript operator gives a fallback for null or undefined?",
      [
        "??",
        "&&&",
        "=>",
        "!!="
      ],
      "??"
    ],
    [
      "Which Python keyword starts a conditional?",
      [
        "if",
        "when",
        "check",
        "case-only"
      ],
      "if"
    ],
    [
      "Which CSS property controls transparency?",
      [
        "opacity",
        "visible",
        "alpha-only",
        "clear"
      ],
      "opacity"
    ],
    [
      "Which command creates an empty file on many Unix terminals?",
      [
        "touch app.js",
        "makefile app.js",
        "new app.js",
        "empty app.js"
      ],
      "touch app.js"
    ],
    [
      "Which JavaScript loop runs over array values?",
      [
        "for...of",
        "for...in only",
        "loop values",
        "each-value"
      ],
      "for...of"
    ],
    [
      "Which CSS pseudo-class styles hover state?",
      [
        ":hover",
        ":click",
        ":mouse",
        ":tap"
      ],
      ":hover"
    ],
    [
      "Which command runs a Vite development server in many projects?",
      [
        "npm run dev",
        "npm open",
        "vite build-only",
        "node css"
      ],
      "npm run dev"
    ]
  ],
  "hard": [
    [
      "Which JavaScript keyword waits for a Promise?",
      [
        "wait",
        "async",
        "await",
        "pause"
      ],
      "await"
    ],
    [
      "Which CSS unit is relative to viewport width?",
      [
        "rem",
        "vw",
        "px",
        "ms"
      ],
      "vw"
    ],
    [
      "What does JSON usually store?",
      [
        "Structured data",
        "Images only",
        "CSS animations",
        "Terminal history"
      ],
      "Structured data"
    ],
    [
      "Which command creates a new Git branch?",
      [
        "git new",
        "git branch name",
        "git make branch",
        "git save"
      ],
      "git branch name"
    ],
    [
      "Which method turns JSON text into an object?",
      [
        "JSON.parse()",
        "JSON.text()",
        "Object.read()",
        "parse.JSON()"
      ],
      "JSON.parse()"
    ],
    [
      "Which JavaScript feature handles errors?",
      [
        "try...catch",
        "if...style",
        "wait...error",
        "map...catch"
      ],
      "try...catch"
    ],
    [
      "What does localStorage store?",
      [
        "Browser-side key/value data",
        "Server database rows",
        "Only images",
        "Git commits"
      ],
      "Browser-side key/value data"
    ],
    [
      "Which CSS function gives responsive min/preferred/max values?",
      [
        "clamp()",
        "scale()",
        "range()",
        "fit()"
      ],
      "clamp()"
    ],
    [
      "Which Promise method runs multiple promises together?",
      [
        "Promise.all()",
        "Promise.group()",
        "Promise.wait()",
        "Promise.each()"
      ],
      "Promise.all()"
    ],
    [
      "Which regex flag means global search?",
      [
        "g",
        "i",
        "m",
        "x"
      ],
      "g"
    ],
    [
      "Which command shows Git commit history?",
      [
        "git log",
        "git history",
        "git commits",
        "git show-all"
      ],
      "git log"
    ],
    [
      "Which array method returns the first matching item?",
      [
        "find()",
        "filter()",
        "map()",
        "reduce()"
      ],
      "find()"
    ],
    [
      "Which JavaScript value means no value intentionally?",
      [
        "null",
        "NaN",
        "false",
        "0"
      ],
      "null"
    ],
    [
      "Which command publishes local commits to remote?",
      [
        "git push",
        "git upload",
        "git send",
        "git publish-now"
      ],
      "git push"
    ],
    [
      "What does Array.filter() return?",
      [
        "A new array of matching items",
        "Only one item",
        "A CSS file",
        "A terminal command"
      ],
      "A new array of matching items"
    ],
    [
      "What does Array.reduce() commonly do?",
      [
        "Combine values into one result",
        "Reload the page",
        "Create an image",
        "Open GitHub"
      ],
      "Combine values into one result"
    ],
    [
      "Which value is returned when no element matches querySelector?",
      [
        "null",
        "false",
        "0",
        "undefined always"
      ],
      "null"
    ],
    [
      "Which API can watch when an element enters the viewport?",
      [
        "IntersectionObserver",
        "ViewportReader",
        "ScrollWatcherOnly",
        "ElementTimer"
      ],
      "IntersectionObserver"
    ],
    [
      "Which command shows differences before commit?",
      [
        "git diff",
        "git compare",
        "git changes --visual",
        "git before"
      ],
      "git diff"
    ],
    [
      "Which Git command temporarily stores unfinished work?",
      [
        "git stash",
        "git pause",
        "git hold",
        "git temp"
      ],
      "git stash"
    ],
    [
      "Which CSS property can blur content behind an element?",
      [
        "backdrop-filter",
        "behind-blur",
        "background-blur-only",
        "filter-back"
      ],
      "backdrop-filter"
    ],
    [
      "Which HTTP status usually means server error?",
      [
        "500",
        "200",
        "304",
        "101"
      ],
      "500"
    ],
    [
      "Which JavaScript syntax catches rejected async work?",
      [
        "try { await work(); } catch (error) {}",
        "await catch work()",
        "if error await",
        "promise stop"
      ],
      "try { await work(); } catch (error) {}"
    ],
    [
      "Which operator reads a nested value safely?",
      [
        "?.",
        "!!",
        "::",
        "=>"
      ],
      "?."
    ],
    [
      "Which Python expression creates a list from a loop?",
      [
        "[x for x in items]",
        "{x => items}",
        "list: x in items",
        "(loop items)"
      ],
      "[x for x in items]"
    ],
    [
      "Which Python block handles exceptions?",
      [
        "try / except",
        "catch / then",
        "error / fix",
        "if / error"
      ],
      "try / except"
    ],
    [
      "Which command searches text in files quickly?",
      [
        "rg \"text\"",
        "look text",
        "git text",
        "scan-css"
      ],
      "rg \"text\""
    ],
    [
      "Which HTML attribute helps buttons describe icon-only actions?",
      [
        "aria-label",
        "icon-name",
        "button-text-hidden",
        "alt-button"
      ],
      "aria-label"
    ],
    [
      "Which JavaScript method schedules code later?",
      [
        "setTimeout()",
        "delayNow()",
        "later()",
        "sleep()"
      ],
      "setTimeout()"
    ],
    [
      "Which JavaScript method repeats code on a timer?",
      [
        "setInterval()",
        "repeatLater()",
        "loopTime()",
        "timer.each()"
      ],
      "setInterval()"
    ],
    [
      "Which Git command changes to another branch?",
      [
        "git checkout branch-name",
        "git open branch-name",
        "git move branch-name",
        "git switch-folder"
      ],
      "git checkout branch-name"
    ],
    [
      "Which command prints the Node.js version?",
      [
        "node --version",
        "npm node",
        "version node",
        "node show"
      ],
      "node --version"
    ],
    [
      "Which CSS rule defines animation steps?",
      [
        "@keyframes",
        "@motion",
        "@animate",
        "@frames-only"
      ],
      "@keyframes"
    ],
    [
      "Which JavaScript object reads URL query strings?",
      [
        "URLSearchParams",
        "QueryReader",
        "LocationQueryOnly",
        "ParamsCSS"
      ],
      "URLSearchParams"
    ],
    [
      "Which Python module reads JSON text?",
      [
        "json",
        "html",
        "css",
        "git"
      ],
      "json"
    ],
    [
      "Which CSS function repeats grid columns responsively?",
      [
        "repeat()",
        "again()",
        "columns()",
        "grid-loop()"
      ],
      "repeat()"
    ]
  ]
};

const toDariQuestion = (text) => `\u0633\u0624\u0627\u0644: ${text}`;

const rushSnippets = Object.entries(rushSnippetGroups).flatMap(([level, snippets]) =>
  snippets.map(([title, code]) => ({ level, title, code })),
);

const tapQuestions = Object.entries(tapQuestionGroups).flatMap(([level, questions]) =>
  questions.map(([en, options, answer]) => ({ level, en, fa: toDariQuestion(en), options, answer })),
);

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const STORAGE_CONSENT_KEY = 'naqsh-storage-consent';
let hasStorageConsent = false;

try {
  hasStorageConsent = localStorage.getItem(STORAGE_CONSENT_KEY) === 'accepted';
} catch {
  hasStorageConsent = false;
}

function readPreference(key, fallback = '') {
  if (!hasStorageConsent) return fallback;
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function savePreference(key, value) {
  if (!hasStorageConsent) return;
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage may be blocked; the game still works for the current session.
  }
}

let lang = readPreference('naqshGameLang', 'en');
let mode = window.matchMedia(DESKTOP_QUERY).matches ? 'rush' : 'tap';
let difficulty = readPreference('naqshGameDifficulty', 'mixed');
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
  return Number(readPreference(bestKey(currentMode), '0') || 0);
}

function setBest(score, currentMode = mode) {
  const best = Math.max(score, getBest(currentMode));
  savePreference(bestKey(currentMode), String(best));
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

function syncStorageConsent() {
  const consent = $('#storageConsent');
  if (!consent) return;
  consent.hidden = hasStorageConsent;
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
  syncStorageConsent();
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
  savePreference('naqshGameDifficulty', difficulty);
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
  if (!hasStorageConsent) return;
  const claims = JSON.parse(readPreference('naqsh-code-rush-claims', '[]') || '[]');
  claims.push({
    code,
    score,
    mode: modeName,
    difficulty,
    date: new Date().toISOString(),
  });
  savePreference('naqsh-code-rush-claims', JSON.stringify(claims.slice(-10)));
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

function acceptStorageConsent() {
  hasStorageConsent = true;
  try {
    localStorage.setItem(STORAGE_CONSENT_KEY, 'accepted');
  } catch {
    hasStorageConsent = false;
  }
  savePreference('naqshGameLang', lang);
  savePreference('naqshGameDifficulty', difficulty);
  syncStorageConsent();
}

function bindEvents() {
  $$('[data-lang-button]').forEach((button) => {
    button.addEventListener('click', () => {
      lang = button.dataset.langButton;
      savePreference('naqshGameLang', lang);
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
  $('#acceptStorage').addEventListener('click', acceptStorageConsent);
}

window.matchMedia(DESKTOP_QUERY).addEventListener('change', (event) => {
  if (!modeLocked) setMode(event.matches ? 'rush' : 'tap');
});

bindEvents();
applyLanguage();
setMode(mode);
