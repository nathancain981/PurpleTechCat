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

async function checkStatus() {
  const statusText = document.getElementById("statusText");
  const statusBox = document.getElementById("statusBox");

  try {
    const response = await fetch("https://nathanc31.github.io/status.json");
    const data = await response.json();

    if (data.status === "online") {
      statusText.textContent = "🟢 Nathan is online";
      statusBox.classList.add("online");
      statusBox.classList.remove("offline");
    } else {
      statusText.textContent = "🟣 Nathan is offline";
      statusBox.classList.add("offline");
      statusBox.classList.remove("online");
    }
  } catch (error) {
    statusText.textContent = "⚠️ Status unavailable";
    statusBox.classList.add("offline");
    statusBox.classList.remove("online");
  }
}

checkStatus();
setInterval(checkStatus, 60000);
