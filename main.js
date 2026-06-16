// ============================
// INIT (load saved settings)
// ============================
const themeToggle = document.getElementById("theme-toggle");

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("theme-dark");
    setThemeIcon(true);
  } else {
    setThemeIcon(false);
  }
});

// ============================
// THEME TOGGLE
// ============================
function setThemeIcon(isDark) {
  if (themeToggle) {
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  }
}

themeToggle?.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("theme-dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");
  setThemeIcon(isDark);
});

// ============================
// ACCESSIBILITY CONTROLS
// ============================
const a11yButtons = {
  inc: document.getElementById("a11y-font-inc"),
  dec: document.getElementById("a11y-font-dec"),
  contrast: document.getElementById("a11y-contrast-toggle"),
  dys: document.getElementById("a11y-dyslexic-toggle"),
  reset: document.getElementById("a11y-reset"),
};

a11yButtons.inc?.addEventListener("click", () => {
  document.body.classList.remove("font-small");
  document.body.classList.add("font-large");
});

a11yButtons.dec?.addEventListener("click", () => {
  document.body.classList.remove("font-large");
  document.body.classList.add("font-small");
});

a11yButtons.contrast?.addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});

a11yButtons.dys?.addEventListener("click", () => {
  document.body.classList.toggle("dyslexic-font");
});

a11yButtons.reset?.addEventListener("click", () => {
  document.body.className = "";
  localStorage.clear();
  setThemeIcon(false);
});

// ============================
// ONLINE STATUS
// ============================
function updateStatus() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  const online =
    ((day === 6 || day === 0) && hour >= 7 && hour < 10) ||
    ((day === 2 || day === 3) && hour >= 18 && hour < 22) ||
    (day === 4 && hour >= 20 && hour < 22);
