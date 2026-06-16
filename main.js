// ============================
// LOAD SAVED SETTINGS
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
});

// ============================
// THEME TOGGLE
// ============================
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("theme-dark");

    const isDark = document.body.classList.contains("theme-dark");
    localStorage.setItem("theme", isDark ? "theme-dark" : "");
  });
}

// ============================
// ACCESSIBILITY CONTROLS
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
  let online = false;

  if ((day === 6 || day === 0) && hour >= 7 && hour < 10) online = true;
  if ((day === 2 || day === 3) && hour >= 18 && hour < 22) online = true;
  if (day === 4 && hour >= 20 && hour < 22) online = true;

  const statusText = document.getElementById("statusText");
  if (statusText) {
    statusText.textContent = online
      ? "🟢 Online – I’m here to help!"
      : "🔴 Offline – I will reply during my support hours.";
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
// CONTACT FORM
// ============================
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      alert("Please fill in all fields!");
    } else {
      setTimeout(() => {
        window.location.href = "thankyou.html";
      }, 800);
    }
  });
}
