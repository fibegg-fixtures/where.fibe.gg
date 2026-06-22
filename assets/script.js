/*
 * where.fibe.gg — page behavior
 *
 *   1. Stamp the current year in the footer.
 */

(() => {
  "use strict";

  const onReady = (fn) =>
    document.readyState === "loading"
      ? document.addEventListener("DOMContentLoaded", fn, { once: true })
      : fn();

  onReady(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  });
})();
