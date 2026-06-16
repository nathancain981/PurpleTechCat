// ============================
// LOAD SETTINGS
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("theme-dark");
    setIcon(true);
  }
});

// ============================
// THEME TOGGLE
// ============================
const themeToggle = document.getElementById("theme-toggle");

function setIcon(isDark) {
  if (themeToggle) {
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  }
}

themeToggle?.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("theme-dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");
  setIcon(isDark);
});

// ============================
// ACCESSIBILITY
// ============================
const btnInc = document.getElementById("a11y-font-inc");
const btnDec = document.getElementById("a11y-font-dec");
const btnContrast = document.getElementById("a11y-contrast-toggle");
const btnDys = document.getElementById("a11y-dyslexic-toggle");
const btnReset = document.getElementById("a11y-reset");

btnInc?.addEventListener("click", () => {
  document.body.classList.remove("font-small");
  document.body.classList.add("font-large");
});

btnDec?.addEventListener("click", () => {
  document.body.classList.remove("font-large");
  document.body.classList.add("font-small");
});

btnContrast?.addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});

btnDys?.addEventListener("click", () => {
  document.body.classList.toggle("dyslexic-font");
});

btnReset?.addEventListener("click", () => {
  document.body.className = "";
  localStorage.clear();
});

// ============================
// ONLINE STATUS
// ============================
function updateStatus() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  let online =
    ((day === 6 || day === 0) && hour >= 7 && hour < 10) ||
    ((day === 2 || day === 3) && hour >= 18 && hour < 22) ||
    (day === 4 && hour >= 20 && hour < 22);

  const statusText = document.getElementById("statusText");

  if (statusText) {
    statusText.textContent = online
      ? "🟢 Online – I’m here to help!"
      : "🔴 Offline – I will reply during support hours.";
  }
}

updateStatus();
setInterval(updateStatus, 60000);

// ============================
// FAQ MODAL
// ============================
const openFAQ = document.getElementById("open-faq");
const closeFAQ = document.getElementById("close-faq");
const faqModal = document.getElementById("faq-modal");

openFAQ?.addEventListener("click", () => {
  faqModal.classList.add("visible");
});

closeFAQ?.addEventListener("click", () => {
  faqModal.classList.remove("visible");
});

// ============================
// FORM
// ============================
const form = document.getElementById("contactForm");

form?.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    alert("Please fill in all fields!");
  } else {
    setTimeout(() => {
      window.location.href = "thankyou.html";
    }, 800);
  }
});
