(() => {
  const byId = (id) => document.getElementById(id);

  const setTextById = (id, value) => {
    const el = byId(id);
    if (el) el.textContent = value;
  };

  const setAttrById = (id, attr, value) => {
    const el = byId(id);
    if (el) el.setAttribute(attr, value);
  };

  const getQueryParam = (name, fallback = "") => {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || fallback;
  };

  window.AppCommon = {
    byId,
    setTextById,
    setAttrById,
    getQueryParam,
  };

  const navItems = Array.from(document.querySelectorAll(".nav-item"));
  const navTriggers = Array.from(document.querySelectorAll(".nav-trigger"));

  const closeAllNavItems = () => {
    navItems.forEach((item) => {
      item.classList.remove("is-open");
      const trigger = item.querySelector(".nav-trigger");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    });
  };

  navTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      const item = trigger.closest(".nav-item");
      if (!item) return;

      const isOpen = item.classList.contains("is-open");
      closeAllNavItems();

      if (!isOpen) {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }

      event.stopPropagation();
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".main-nav")) {
      closeAllNavItems();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAllNavItems();
  });
})();
