// Fade-in ao carregar e ao trocar de página
document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");
  requestAnimationFrame(() => page?.classList.add("is-ready"));

  // Intercepta cliques no menu para transição suave
  document.querySelectorAll('a[data-nav="true"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http")) return;

      e.preventDefault();
      page?.classList.remove("is-ready");
      setTimeout(() => (window.location.href = href), 220);
    });
  });

  // Botão PDF (imprime a página atual)
  const btnPdf = document.querySelector('[data-action="pdf"]');
  btnPdf?.addEventListener("click", () => window.print());

  // Botão Agendar (troque o link aqui)
  const btnAgendar = document.querySelector('[data-action="agendar"]');
  btnAgendar?.addEventListener("click", () => {
    // Troque para WhatsApp/Calendly/Google Agenda quando quiser:
    window.open("https://wa.me/55SEUNUMEROAQUI?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento.", "_blank");
  });
});
