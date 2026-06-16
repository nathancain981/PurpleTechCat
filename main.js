document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;

  /* =========================================================
     THEME TOGGLE
  ========================================================= */
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
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

  /* =========================================================
     ACCESSIBILITY TOOLS
  ========================================================= */

  const btnInc = document.getElementById("a11y-font-inc");
  const btnDec = document.getElementById("a11y-font-dec");
  const btnContrast = document.getElementById("a11y-contrast-toggle");
  const btnDys = document.getElementById("a11y-dyslexic-toggle");
  const btnReset = document.getElementById("a11y-reset");

  // Increase font size
  btnInc?.addEventListener("click", () => {
    body.classList.remove("font-small");
    body.classList.add("font-large");
  });

  // Decrease font size
  btnDec?.addEventListener("click", () => {
    body.classList.remove("font-large");
    body.classList.add("font-small");
  });

  // High contrast mode
  btnContrast?.addEventListener("click", () => {
    body.classList.toggle("high-contrast");
  });

  // Dyslexia-friendly font
  btnDys?.addEventListener("click", () => {
    body.classList.toggle("dyslexic-font");
  });

  // Reset all accessibility settings
  btnReset?.addEventListener("click", () => {
    body.classList.remove(
      "font-small",
      "font-large",
      "high-contrast",
      "dyslexic-font",
      "theme-light"
    );

    localStorage.removeItem("theme");
  });

  /* =========================================================
     FAQ MODAL
  ========================================================= */

  const faqModal = document.getElementById("faq-modal");
  const openFaq = document.getElementById("open-faq");
  const closeFaq = document.getElementById("close-faq");

  // Open FAQ
  openFaq?.addEventListener("click", () => {
    faqModal?.classList.add("visible");
  });

  // Close FAQ
  closeFaq?.addEventListener("click", () => {
    faqModal?.classList.remove("visible");
  });

  // Close when clicking outside the FAQ box
  faqModal?.addEventListener("click", (e) => {
    if (e.target === faqModal) {
      faqModal.classList.remove("visible");
    }
  });

  // Close with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      faqModal?.classList.remove("visible");
    }
  });

});
