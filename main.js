// ============================
// WAIT FOR PAGE LOAD
// ============================
document.addEventListener("DOMContentLoaded", () => {

  const themeToggle = document.getElementById("theme-toggle");

  // ============================
  // LOAD SAVED THEME
  // ============================
  const saved = localStorage.getItem("theme");

  if (saved === "light") {
    document.body.classList.add("theme-light");
    if (themeToggle) themeToggle.textContent = "☀️";
  } else {
    if (themeToggle) themeToggle.textContent = "🌙";
  }

  // ============================
  // THEME TOGGLE
  // ============================
  themeToggle?.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("theme-light");

    localStorage.setItem("theme", isLight ? "light" : "dark");
    themeToggle.textContent = isLight ? "☀️" : "🌙";
  });

  // ============================
  // ACCESSIBILITY
  // ============================
  const inc = document.getElementById("a11y-font-inc");
  const dec = document.getElementById("a11y-font-dec");
  const contrast = document.getElementById("a11y-contrast-toggle");
  const dys = document.getElementById("a11y-dyslexic-toggle");
  const reset = document.getElementById("a11y-reset");

  inc?.addEventListener("click", () => {
    document.body.classList.remove("font-small");
    document.body.classList.add("font-large");
  });

  dec?.addEventListener("click", () => {
    document.body.classList.remove("font-large");
    document.body.classList.add("font-small");
  });

  contrast?.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
  });

  dys?.addEventListener("click", () => {
    document.body.classList.toggle("dyslexic-font");
  });

  reset?.addEventListener("click", () => {
    document.body.className = "";
    localStorage.clear();
  });

});
