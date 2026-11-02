/* Carrega cada partial (partials/*.html) para dentro do <div data-include="..."> correspondente.
   Funciona em qualquer hosting. Para pré-visualizar no seu computador, use um servidor
   local (ex.: `python3 -m http.server`) em vez de abrir o ficheiro diretamente. */
document.addEventListener("DOMContentLoaded", () => {
  const slots = document.querySelectorAll("[data-include]");

  const load = (el) =>
    fetch(el.dataset.include)
      .then((r) => {
        if (!r.ok) throw new Error(r.status);
        return r.text();
      })
      .then((html) => {
        el.innerHTML = html;
      })
      .catch(() => {
        el.innerHTML =
          '<p style="padding:20px;color:#a00">Não foi possível carregar ' +
          el.dataset.include +
          "</p>";
      });

  Promise.all([...slots].map(load)).then(() => {
    // Menu mobile (só existe depois de o header ser carregado)
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("mainNav");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => nav.classList.remove("open"))
      );
    }

    // Ano automático no rodapé
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  });
});
