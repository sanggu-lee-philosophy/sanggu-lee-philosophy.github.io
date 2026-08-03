document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".abstract-toggle, .bibtex-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const panelId = toggle.getAttribute("aria-controls");
      const panel = document.getElementById(panelId);
      const isOpen = toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
    });
  });

  document.querySelectorAll(".copy-button").forEach((button) => {
    button.addEventListener("click", async () => {
      const code = button.parentElement.querySelector("code").innerText;

      try {
        await navigator.clipboard.writeText(code);
        const oldText = button.textContent;
        button.textContent = "Copied";
        setTimeout(() => {
          button.textContent = oldText;
        }, 1400);
      } catch {
        button.textContent = "Copy failed";
      }
    });
  });
});
