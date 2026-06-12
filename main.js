/* ============================
   THEME TOGGLE
============================ */
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("theme-light");
  document.body.classList.toggle("theme-dark");
});

/* ============================
   ACCESSIBILITY CONTROLS
============================ */
const btnInc = document.getElementById("a11y-font-inc");
const btnDec = document.getElementById("a11y-font-dec");
const btnContrast = document.getElementById("a11y-contrast-toggle");
const btnDys = document.getElementById("a11y-dyslexic-toggle");
const btnReset = document.getElementById("a11y-reset");

btnInc.addEventListener("click", () => {
  document.body.classList.remove("font-small");
  document.body.classList.add("font-large");
});

btnDec.addEventListener("click", () => {
  document.body.classList.remove("font-large");
  document.body.classList.add("font-small");
});

btnContrast.addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});

btnDys.addEventListener("click", () => {
  document.body.classList.toggle("dyslexic-font");
});

btnReset.addEventListener("click", () => {
  document.body.classList.remove(
    "font-small",
    "font-large",
    "font-xlarge",
    "high-contrast",
    "dyslexic-font"
  );
});

/* ============================
   FAQ MODAL
============================ */
const openFAQ = document.getElementById("open-faq");
const closeFAQ = document.getElementById("close-faq");
const faqModal = document.getElementById("faq-modal");

if (openFAQ && faqModal) {
  openFAQ.addEventListener("click", () => {
    faqModal.classList.add("visible");
  });
}

if (closeFAQ && faqModal) {
  closeFAQ.addEventListener("click", () => {
    faqModal.classList.remove("visible");
  });
}
