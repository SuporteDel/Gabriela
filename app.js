(function () {
  // Marcar link ativo no menu
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  // Transição suave ao navegar
  const page = document.querySelector(".page");
  document.querySelectorAll('a[data-nav="true"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http")) return;

      e.preventDefault();
      if (page) page.classList.add("is-exiting");

      setTimeout(() => {
        window.location.href = href;
      }, 180);
    });
  });

  // PDF (print)
  const pdfBtn = document.getElementById("btnPdf");
  if (pdfBtn) pdfBtn.addEventListener("click", () => window.print());

  // Ano automático
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
