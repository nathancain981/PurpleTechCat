document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;

  // ============================
  // THEME TOGGLE
  // ============================
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
      body.classList.add("theme-light");
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }

    themeToggle.addEventListener("click", () => {
      const isLight = body.classList.toggle("theme-light");

      localStorage.setItem("theme", isLight ? "light" : "dark");
      themeToggle.textContent = isLight ? "☀️" : "🌙";
    });
  }

  // ============================
// ACCESSIBILITY BUTTONS
// ============================

const body = document.body;

const ids = [
  "a11y-font-inc",
  "a11y-font-dec",
  "a11y-contrast-toggle",
  "a11y-dyslexic-toggle",
  "a11y-reset"
];

console.log("Buttons found:");

ids.forEach(id => {
  const btn = document.getElementById(id);
  console.log(id, btn);
});

// Buttons
const inc = document.getElementById("a11y-font-inc");
const dec = document.getElementById("a11y-font-dec");
const contrast = document.getElementById("a11y-contrast-toggle");
const dys = document.getElementById("a11y-dyslexic-toggle");
const reset = document.getElementById("a11y-reset");

// Increase font
inc?.addEventListener("click", () => {
  console.log("A+ clicked");
  body.classList.remove("font-small");
  body.classList.add("font-large");
});

// Decrease font
dec?.addEventListener("click", () => {
  console.log("A- clicked");
  body.classList.remove("font-large");
  body.classList.add("font-small");
});

// Contrast
contrast?.addEventListener("click", () => {
  console.log("Contrast clicked");
  body.classList.toggle("high-contrast");
});

// Dyslexia font
dys?.addEventListener("click", () => {
  console.log("Dys clicked");
  body.classList.toggle("dyslexic-font");
});

// Reset
reset?.addEventListener("click", () => {
  console.log("Reset clicked");

  body.classList.remove(
    "font-small",
    "font-large",
    "high-contrast",
    "dyslexic-font"
  );

  body.classList.remove("theme-light");
  body.classList.add("theme-dark");

  localStorage.clear();
});

});
// Close when clicking outside the FAQ box
faqModal.addEventListener("click", (e) => {
  if (e.target === faqModal) {
    faqModal.classList.remove("visible");
  }
});

// Close with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    faqModal.classList.remove("visible");
  }
});
