/* ============================
   THEME TOGGLE
   ============================ */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("theme-dark");
    document.body.classList.toggle("theme-light", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("theme-dark");
  } else {
    document.body.classList.add("theme-light");
  }
}


/* ============================
   ACCESSIBILITY PANEL OPEN/CLOSE
   ============================ */

const a11yOpenBtn = document.getElementById("a11y-open");
const a11yPanel = document.getElementById("a11y-panel");
const a11yCloseBtn = document.getElementById("a11y-close");

if (a11yOpenBtn && a11yPanel && a11yCloseBtn) {
  a11yOpenBtn.addEventListener("click", () => {
    a11yPanel.style.display = "block";
  });

  a11yCloseBtn.addEventListener("click", () => {
    a11yPanel.style.display = "none";
  });
}


/* ============================
   ACCESSIBILITY FUNCTIONS
   ============================ */

function toggleDyslexia() {
  document.body.classList.toggle("dyslexia-font");
  saveA11ySetting("dyslexia-font");
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
  saveA11ySetting("high-contrast");
}

function toggleMotion() {
  document.body.classList.toggle("reduce-motion");
  saveA11ySetting("reduce-motion");
}

function increaseText() {
  let current = parseFloat(localStorage.getItem("text-size") || "1");
  current = Math.min(current + 0.1, 1.6);
  document.body.style.fontSize = current + "rem";
  localStorage.setItem("text-size", current);
}

function decreaseText() {
  let current = parseFloat(localStorage.getItem("text-size") || "1");
  current = Math.max(current - 0.1, 0.7);
  document.body.style.fontSize = current + "rem";
  localStorage.setItem("text-size", current);
}


/* ============================
   SAVE + LOAD ACCESSIBILITY SETTINGS
   ============================ */

function saveA11ySetting(setting) {
  const enabled = document.body.classList.contains(setting);
  localStorage.setItem(setting, enabled ? "on" : "off");
}

function loadA11ySettings() {
  const settings = ["dyslexia-font", "high-contrast", "reduce-motion"];

  settings.forEach(setting => {
    if (localStorage.getItem(setting) === "on") {
      document.body.classList.add(setting);
    }
  });

  const savedSize = localStorage.getItem("text-size");
  if (savedSize) {
    document.body.style.fontSize = savedSize + "rem";
  }
}

window.addEventListener("load", loadA11ySettings);


/* ============================
   STATUS CHECKER (kept from your site)
   ============================ */

function checkStatus() {
  const statusText = document.getElementById("statusText");
  const statusBox = document.getElementById("statusBox");

  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday...
  const hour = now.getHours();
  const minute = now.getMinutes();

  // Convert time to decimal (e.g., 20:30 → 20.5)
  const time = hour + minute / 60;

  // Weekly availability schedule
  const schedule = {
    0: [7, 10],      // Sunday 7:00–10:00
    1: null,         // Monday (none)
    2: [18, 22],     // Tuesday 18:00–22:00
    3: [18, 22],     // Wednesday 18:00–22:00
    4: [20, 22], // Thursday 20:00–22:00
    5: null,         // Friday (none)
    6: [7, 10]       // Saturday 7:00–10:00
  };

  const today = schedule[day];

  let online = false;

  if (today && time >= today[0] && time < today[1]) {
    online = true;
  }

  if (online) {
    statusText.textContent = "🟢 Nathan is online";
    statusBox.classList.add("online");
    statusBox.classList.remove("offline");
  } else {
    statusText.textContent = "🔴 Nathan is offline";
    statusBox.classList.add("offline");
    statusBox.classList.remove("online");
  }
}

checkStatus();
setInterval(checkStatus, 60000);
