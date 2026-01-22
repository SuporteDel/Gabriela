document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");
  requestAnimationFrame(() => page?.classList.add("is-ready"));

  // Transição suave ao navegar
  document.querySelectorAll('a[data-nav="true"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http")) return;

      e.preventDefault();
      page?.classList.remove("is-ready");
      setTimeout(() => (window.location.href = href), 220);
    });
  });

  // PDF
  const btnPdf = document.querySelector('[data-action="pdf"]');
  btnPdf?.addEventListener("click", () => window.print());

  // Agendar (WhatsApp)
  const btnAgendar = document.querySelector('[data-action="agendar"]');
  btnAgendar?.addEventListener("click", () => {
    const phone = "5566992535958";
    const text =
      "Olá, Dra. Gabriela! Gostaria de agendar um atendimento. Pode me orientar sobre os próximos passos?";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  });
});
