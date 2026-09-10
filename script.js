/* AJM Engineering: minimal progressive enhancement */
(function () {
  "use strict";

  /* Current year in footer */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      menu.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }
})();
