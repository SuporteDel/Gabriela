// js/calendar.js
(function () {
  "use strict";

  // Helpers para datas
  window.CalendarHelpers = {
    toISODate(d) {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${y}-${m}-${day}`;
    },
    fromISO(iso) {
      const [y, m, d] = iso.split("-").map(Number);
      return new Date(y, m - 1, d);
    },
  };

  // Disponibilidade (por padrão: todos os dias do ano atual)
  (function generateAllDaysOfYear() {
    const now = new Date();
    const year = now.getFullYear();
    const start = new Date(year, 0, 1);
    const end = new Date(year, 11, 31);

    const out = [];
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      out.push(window.CalendarHelpers.toISODate(d));
    }
    window.AVAILABLE_DATES = out;
  })();

  function localeFromLang(lang) {
    if (lang === "pt") return "pt-BR";
    if (lang === "en") return "en-US";
    if (lang === "es") return "es-ES";
    if (lang === "fr") return "fr-FR";
    return "pt-BR";
  }

  function monthTitle(monthCursor, lang) {
    const locale = localeFromLang(lang);
    return monthCursor.toLocaleDateString(locale, { month: "long", year: "numeric" });
  }

  function dowLabels(lang) {
    // Começando em Domingo (0)
    const locale = localeFromLang(lang);
    const base = new Date(2024, 0, 7); // domingo
    const labels = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      labels.push(d.toLocaleDateString(locale, { weekday: "short" }).replace(".", ""));
    }
    return labels;
  }

  window.initCalendar = function initCalendar(lang = "pt") {
    const mount = document.getElementById("calendar");
    const selectedLabel = document.getElementById("selectedLabel");
    const confirmBtn = document.getElementById("confirmBtn");

    if (!mount) return;

    // prepara UI
    mount.className = "calendarWrap";
    let selectedISO = null;

    const available = new Set(window.AVAILABLE_DATES || []);

    // Datas já confirmadas (persistência local)
    const BOOKED_KEY = "gc_booked_dates";
    function loadBooked() {
      try {
        const raw = localStorage.getItem(BOOKED_KEY);
        const arr = raw ? JSON.parse(raw) : [];
        return new Set(Array.isArray(arr) ? arr : []);
      } catch {
        return new Set();
      }
    }
    function saveBooked(set) {
      try {
        localStorage.setItem(BOOKED_KEY, JSON.stringify(Array.from(set)));
      } catch {}
    }

    let booked = loadBooked();

    // Se a página vier "redirecionada" com ?date=YYYY-MM-DD (ou #...date=YYYY-MM-DD),
    // marcamos como já utilizada e impedimos nova seleção.
    (function absorbDateFromUrl() {
      let iso = null;
      try {
        const sp = new URLSearchParams(window.location.search);
        iso = sp.get("date");
      } catch {}
      if (!iso) {
        const h = String(window.location.hash || "");
        const m = h.match(/date=(\d{4}-\d{2}-\d{2})/);
        if (m) iso = m[1];
      }
      if (iso && available.has(iso)) {
        booked.add(iso);
        saveBooked(booked);
      }
    })();

    const now = new Date();
    let monthCursor = new Date(now.getFullYear(), now.getMonth(), 1);

    function setSelected(iso) {
      selectedISO = iso;

      if (selectedLabel) {
        if (!iso) {
          selectedLabel.textContent =
            (window.I18N?.[lang]?.["agenda.none"]) || "—";
        } else {
          const d = window.CalendarHelpers.fromISO(iso);
          const locale = localeFromLang(lang);
          selectedLabel.textContent = d.toLocaleDateString(locale, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "2-digit",
          });
        }
      }

      if (confirmBtn) confirmBtn.disabled = !iso;
    }

    function confirmWhats() {
      if (!selectedISO) return;

      // salva como indisponível antes de abrir o WhatsApp
      booked.add(selectedISO);
      saveBooked(booked);
      const locale = localeFromLang(lang);
      const d = window.CalendarHelpers.fromISO(selectedISO);
      const human = d.toLocaleDateString(locale, { year: "numeric", month: "2-digit", day: "2-digit" });

      // pega do app.js (mesmo phone E164)
      const phoneE164 = window.SITE_PHONE_E164 || "5565999964842";
      const msg =
        (window.I18N?.[lang]?.["whats.home"] || "Olá!") +
        " " +
        `Gostaria de agendar atendimento para ${human}.`;

      const link = `https://wa.me/${phoneE164}?text=${encodeURIComponent(msg)}`;
      window.open(link, "_blank", "noopener");

      // Atualiza UI: impede selecionar novamente
      setSelected(null);
      render();
    }

    function render() {
      const title = monthTitle(monthCursor, lang);
      const dows = dowLabels(lang);

      const y = monthCursor.getFullYear();
      const m = monthCursor.getMonth();
      const first = new Date(y, m, 1);
      const last = new Date(y, m + 1, 0);
      const startDow = first.getDay(); // 0 dom ... 6 sáb
      const daysInMonth = last.getDate();

      // header + grid
      mount.innerHTML = `
        <div class="calendar">
          <div class="calendar__head">
            <button type="button" id="calPrev" aria-label="Prev">‹</button>
            <div class="calendar__title">${title}</div>
            <button type="button" id="calNext" aria-label="Next">›</button>
          </div>

          <div class="calendar__grid" aria-label="Calendar grid">
            ${dows.map((w) => `<div class="calendar__dow">${w}</div>`).join("")}
            ${Array.from({ length: startDow }).map(() => `<div class="day day--blank"></div>`).join("")}
            ${Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNum = i + 1;
              const iso = window.CalendarHelpers.toISODate(new Date(y, m, dayNum));
              const isBooked = booked.has(iso);
              const isAvail = available.has(iso) && !isBooked;
              const isSel = selectedISO === iso;

              const cls = [
                "day",
                isAvail ? "day--available" : "",
                isBooked ? "day--booked" : "",
                isSel ? "day--selected" : "",
              ].join(" ").trim();

              return `<div class="${cls}" data-iso="${iso}" role="button" aria-label="${iso}">${dayNum}</div>`;
            }).join("")}
          </div>
        </div>
        <div class="note">
          ${window.I18N?.[lang]?.["agenda.lead"] || "Selecione uma data disponível e confirme."}
        </div>
      `;

      // events
      mount.querySelector("#calPrev").addEventListener("click", () => {
        monthCursor = new Date(y, m - 1, 1);
        render();
      });
      mount.querySelector("#calNext").addEventListener("click", () => {
        monthCursor = new Date(y, m + 1, 1);
        render();
      });

      mount.querySelectorAll(".day--available").forEach((el) => {
        el.addEventListener("click", () => {
          const iso = el.getAttribute("data-iso");
          setSelected(iso);
          render();
        });
      });
    }

    if (confirmBtn) {
      confirmBtn.addEventListener("click", confirmWhats);
    }

    setSelected(null);
    render();
  };
})();
