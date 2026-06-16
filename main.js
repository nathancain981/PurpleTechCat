document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");

  // ============================
  // LOAD SETTINGS (ALL)
  // ============================
  const settings = JSON.parse(localStorage.getItem("settings")) || {};

  if (settings.theme === "light") {
    body.classList.add("theme-light");
    setIcon(true);
  } else {
    setIcon(false);
  }

  if (settings.font === "large") body.classList.add("font-large");
  if (settings.font === "small") body.classList.add("font-small");
  if (settings.contrast) body.classList.add("high-contrast");
  if (settings.dys) body.classList.add("dyslexic-font");

  // ============================
  // ICON SWITCH
  // ============================
  function setIcon(light) {
    if (themeToggle) {
      themeToggle.textContent = light ? "☀️" : "🌙";
    }
  }

  // ============================
  // SAVE SETTINGS
  // ============================
  function save(settingsObj) {
    localStorage.setItem("settings", JSON.stringify(settingsObj));
  }

  // ============================
  // THEME TOGGLE (SMOOTH)
  // ============================
  themeToggle?.addEventListener("click", () => {

    body.classList.add("ui-transition");

    const isLight = body.classList.toggle("theme-light");
    settings.theme = isLight ? "light" : "dark";

    setIcon(isLight);
    save(settings);

    // remove animation class
    setTimeout(() => {
      body.classList.remove("ui-transition");
    }, 300);

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
    body.classList.remove("font-small");
    body.classList.add("font-large");
    settings.font = "large";
    flash("Font increased");
    save(settings);
  });

  dec?.addEventListener("click", () => {
    body.classList.remove("font-large");
    body.classList.add("font-small");
    settings.font = "small";
    flash("Font decreased");
    save(settings);
  });

  contrast?.addEventListener("click", () => {
    body.classList.toggle("high-contrast");
    settings.contrast = body.classList.contains("high-contrast");
    flash("Contrast toggled");
    save(settings);
  });

  dys?.addEventListener("click", () => {
    body.classList.toggle("dyslexic-font");
    settings.dys = body.classList.contains("dyslexic-font");
    flash("Dyslexic font toggled");
    save(settings);
  });

  reset?.addEventListener("click", () => {
    body.className = "theme-dark";
    localStorage.clear();
    setIcon(false);
    flash("Settings reset");
  });

  // ============================
  // ONLINE STATUS (LIVE)
  // ============================
  function updateStatus() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    const online =
      ((day === 6 || day === 0) && hour >= 7 && hour < 10) ||
      ((day === 2 || day === 3) && hour >= 18 && hour < 22) ||
      (day === 4 && hour >= 20 && hour < 22);

    const statusText = document.getElementById("statusText");

    if (statusText) {
      statusText.textContent = online
        ? "🟢 Online – I’m here to help!"
        : "🔴 Offline – I’ll reply during support hours.";
    }
  }

  updateStatus();
  setInterval(updateStatus, 60000);

  // ============================
  // FUTURISTIC FEEDBACK (FLASH)
  // ============================
  function flash(text) {

    const el = document.createElement("div");
    el.textContent = text;

    el.style.position = "fixed";
    el.style.bottom = "20px";
    el.style.left = "50%";
    el.style.transform = "translateX(-50%)";
    el.style.padding = "10px 16px";
    el.style.background = "#8f5fff";
    el.style.color = "#fff";
    el.style.borderRadius = "999px";
    el.style.zIndex = "9999";
    el.style.opacity = "0";

    document.body.appendChild(el);

    setTimeout(() => el.style.opacity = "1", 10);

    setTimeout(() => {
      el.style.opacity = "0";
      setTimeout(() => el.remove(), 300);
    }, 1200);
  }

});
