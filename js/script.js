document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".abstract-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const panelId = toggle.getAttribute("aria-controls");
      const panel = document.getElementById(panelId);
      const isOpen = toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
    });
  });
});
