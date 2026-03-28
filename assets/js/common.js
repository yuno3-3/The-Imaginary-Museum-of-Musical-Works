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
})();