/* =========================================================
   THEME TOGGLE (Dark / Light)
========================================================= */
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("theme-light");
    document.body.classList.toggle("theme-dark");

    themeToggle.textContent =
      document.body.classList.contains("theme-light") ? "☀️" : "🌙";
  });
}

/* =========================================================
   ACCESSIBILITY TOOLBAR
========================================================= */
const btnFontInc = document.getElementById("a11y-font-inc");
const btnFontDec = document.getElementById("a11y-font-dec");
const btnContrast = document.getElementById("a11y-contrast-toggle");
const btnDyslexic = document.getElementById("a11y-dyslexic-toggle");
const btnReset = document.getElementById("a11y-reset");

let fontScale = 1;

if (btnFontInc) {
  btnFontInc.addEventListener("click", () => {
    fontScale = Math.min(fontScale + 0.1, 1.5);
    document.documentElement.style.fontSize = fontScale + "em";
  });
}

if (btnFontDec) {
  btnFontDec.addEventListener("click", () => {
    fontScale = Math.max(fontScale - 0.1, 0.7);
    document.documentElement.style.fontSize = fontScale + "em";
  });
}

if (btnContrast) {
  btnContrast.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
  });
}

if (btnDyslexic) {
  btnDyslexic.addEventListener("click", () => {
    document.body.classList.toggle("dyslexic-font");
  });
}

if (btnReset) {
  btnReset.addEventListener("click", () => {
    fontScale = 1;
    document.documentElement.style.fontSize = "1em";
    document.body.classList.remove("high-contrast", "dyslexic-font");
  });
}

/* =========================================================
   FAQ MODAL
========================================================= */
const faqModal = document.getElementById("faq-modal");
const openFaq = document.getElementById("open-faq");
const closeFaq = document.getElementById("close-faq");

if (openFaq && faqModal) {
  openFaq.addEventListener("click", () => {
    faqModal.setAttribute("aria-hidden", "false");
  });
}

if (closeFaq && faqModal) {
  closeFaq.addEventListener("click", () => {
    faqModal.setAttribute("aria-hidden", "true");
  });
}

if (faqModal) {
  faqModal.addEventListener("click", (e) => {
    if (e.target === faqModal) {
      faqModal.setAttribute("aria-hidden", "true");
    }
  });
}

/* =========================================================
   REAL-TIME SUPPORT STATUS (ONLINE / OFFLINE)
========================================================= */

// Support hours (UK time)
const hours = [
  { day: 2, start: 18, end: 22 }, // Tue 6pm–10pm
  { day: 3, start: 18, end: 22 }, // Wed 6pm–10pm
  { day: 4, start: 20, end: 22 }, // Thu 8pm–10pm
  { day: 6, start: 7,  end: 10 }, // Sat 7am–10am
  { day: 0, start: 7,  end: 10 }  // Sun 7am–10am
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

/* =========================================================
   PAW TRACK ANIMATION
========================================================= */
const paws = document.querySelectorAll(".paw");

if (paws.length > 0) {
  paws.forEach((paw, i) => {
    paw.style.animationDelay = `${i * 0.25}s`;
  });
}
