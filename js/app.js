
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#servicesGrid");
  if (!grid) return;

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-more");
    if (!btn) return;

    const card = btn.closest(".service-card");
    if (!card) return;

    grid.querySelectorAll(".service-card.is-open").forEach(c => {
      if (c !== card) c.classList.remove("is-open");
    });

    card.classList.toggle("is-open");
  });
});
