const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");

  if (saved === "light") {
    document.body.classList.add("theme-light");
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

// Toggle theme
themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("theme-light");

  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
});
