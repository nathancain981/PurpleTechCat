/* =========================================================
   THEME TOGGLE (Dark / Light)
========================================================= */
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("theme-light");
    document.body.classList.toggle("theme-dark");

    // Update icon
    if (document.body.classList.contains("theme-light")) {
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }
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

// Close modal when clicking outside content
if (faqModal) {
  faqModal.addEventListener("click", (e) => {
    if (e.target === faqModal) {
      faqModal.setAttribute("aria-hidden", "true");
    }
  });
}

/* =========================================================
   STATUS CHECKER (Simple)
========================================================= */
const statusText = document.getElementById("statusText");

if (statusText) {
  // Simulate a quick status check
  setTimeout(() => {
    statusText.textContent = "🟢 Online — Nathan is available during support hours";
  }, 800);
}

/* =========================================================
   PAW TRACK ANIMATION (Lightweight)
========================================================= */
const paws = document.querySelectorAll(".paw");

if (paws.length > 0) {
  paws.forEach((paw, i) => {
    paw.style.animationDelay = `${i * 0.25}s`;
  });
}
