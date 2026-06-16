document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;

  // ============================
  // THEME TOGGLE
  // ============================
  const themeToggle = document.getElementById("theme-toggle");

  const saved = localStorage.getItem("theme");

  if (saved === "light") {
    body.classList.add("theme-light");
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }

  themeToggle?.addEventListener("click", () => {
    const isLight = body.classList.toggle("theme-light");

    localStorage.setItem("theme", isLight ? "light" : "dark");
    themeToggle.textContent = isLight ? "☀️" : "🌙";
  });

  // ============================
  // ACCESSIBILITY BUTTONS
  // ============================
  const inc = document.getElementById("a11y-font-inc");
  const dec = document.getElementById("a11y-font-dec");
  const contrast = document.getElementById("a11y-contrast-toggle");
  const dys = document.getElementById("a11y-dyslexic-toggle");
  const reset = document.getElementById("a11y-reset");

  inc?.addEventListener("click", () => {
    body.classList.remove("font-small");
    body.classList.add("font-large");
  });

  dec?.addEventListener("click", () => {
    body.classList.remove("font-large");
    body.classList.add("font-small");
  });

  contrast?.addEventListener("click", () => {
    body.classList.toggle("high-contrast");
  });

  dys?.addEventListener("click", () => {
    body.classList.toggle("dyslexic-font");
  });

  reset?.addEventListener("click", () => {
    body.className = "theme-dark";
    localStorage.clear();
    themeToggle.textContent = "🌙";
  });

});
