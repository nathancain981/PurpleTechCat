/* THEME TOGGLE WITH PERSISTENCE */
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.body.classList.remove("theme-dark", "theme-light");
  document.body.classList.add(theme);
  if (themeToggle) {
    themeToggle.textContent = theme === "theme-light" ? "☀️" : "🌙";
  }
  localStorage.setItem("ptc-theme", theme);
}

const savedTheme = localStorage.getItem("ptc-theme") || "theme-dark";
applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.body.classList.contains("theme-light")
      ? "theme-light"
      : "theme-dark";
    const next = current === "theme-light" ? "theme-dark" : "theme-light";
    applyTheme(next);
  });
}

/* ACCESSIBILITY TOOLS (SPECIAL-SCHOOL FRIENDLY) */
const a11yButtons = document.querySelectorAll(".a11y-btn");
let fontScale = Number(localStorage.getItem("ptc-font-scale") || "1");

function applyFontScale() {
  document.documentElement.style.fontSize = `${100 * fontScale}%`;
}

function applyA11yState() {
  const contrast = localStorage.getItem("ptc-contrast") === "1";
  const dyslexia = localStorage.getItem("ptc-dyslexia") === "1";
  const motion = localStorage.getItem("ptc-motion") === "1";

  document.body.classList.toggle("a11y-contrast", contrast);
  document.body.classList.toggle("a11y-dyslexia", dyslexia);
  document.body.classList.toggle("a11y-motion", motion);
  applyFontScale();
}

applyA11yState();

a11yButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;
    if (action === "font-inc") {
      fontScale = Math.min(fontScale + 0.1, 1.6);
      localStorage.setItem("ptc-font-scale", String(fontScale));
      applyFontScale();
    } else if (action === "font-dec") {
      fontScale = Math.max(fontScale - 0.1, 0.8);
      localStorage.setItem("ptc-font-scale", String(fontScale));
      applyFontScale();
    } else if (action === "contrast") {
      const current = localStorage.getItem("ptc-contrast") === "1";
      localStorage.setItem("ptc-contrast", current ? "0" : "1");
      applyA11yState();
    } else if (action === "dyslexia") {
      const current = localStorage.getItem("ptc-dyslexia") === "1";
      localStorage.setItem("ptc-dyslexia", current ? "0" : "1");
      applyA11yState();
    } else if (action === "motion") {
      const current = localStorage.getItem("ptc-motion") === "1";
      localStorage.setItem("ptc-motion", current ? "0" : "1");
      applyA11yState();
    } else if (action === "reset") {
      fontScale = 1;
      localStorage.setItem("ptc-font-scale", "1");
      localStorage.setItem("ptc-contrast", "0");
      localStorage.setItem("ptc-dyslexia", "0");
      localStorage.setItem("ptc-motion", "0");
      applyA11yState();
    }
  });
});

/* REAL-TIME SUPPORT STATUS (UK HOURS) */
const hours = [
  { day: 2, start: 18, end: 22 }, // Tue 6–10pm
  { day: 3, start: 18, end: 22 }, // Wed 6–10pm
  { day: 4, start: 20, end: 22 }, // Thu 8–10pm
  { day: 6, start: 7,  end: 10 }, // Sat 7–10am
  { day: 0, start: 7,  end: 10 }  // Sun 7–10am
];

const statusBox = document.getElementById("statusBox");
const statusText = document.getElementById("statusText");

function updateStatus() {
  if (!statusBox || !statusText) return;

  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  const active = hours.some(h => h.day === day && hour >= h.start && hour < h.end);

  if (active) {
    statusBox.classList.remove("offline");
    statusBox.classList.add("online");
    statusText.textContent = "🟢 Online — Nathan is available now";
  } else {
    statusBox.classList.remove("online");
    statusBox.classList.add("offline");
    statusText.textContent = "🔴 Offline — Nathan will reply during support hours";
  }
}

updateStatus();
setInterval(updateStatus, 60000);
