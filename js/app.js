// js/app.js
(function () {
  "use strict";

  /* =======================
     CONFIGURAÇÕES FIXAS
  ======================= */
  const phoneE164 = "5566992535958";
  const phoneDisplay = "(66) 99253-5958";
  const email = "Gabrielacordeiroadvogada@hotmail.com";
  const address = "Teresina/PI";

  // expõe config pro calendar.js
  window.SITE = {
    phoneE164,
    waLink: (message) =>
      `https://wa.me/${phoneE164}?text=${encodeURIComponent(message)}`,
  };

  const LANG_KEY = "rs_lang";
  let currentLang = localStorage.getItem(LANG_KEY) || "pt";

  // normalize stored lang keys (avoid showing i18n keys)
  function normalizeLang(lang){
    const k = String(lang||"").trim();
    if (k === "pt-BR" || k === "pt_br" || k === "ptbr") return "pt";
    return k || "pt";
  }
  currentLang = normalizeLang(currentLang);
  // if i18n is not available for the stored lang, fallback to pt
  if (window.I18N && !window.I18N[currentLang]) currentLang = "pt";

  /* =======================
     ELEMENTOS BASE
  ======================= */
  const pageEl = document.getElementById("page");
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Topbar premium: transparente no topo e sólida ao rolar
  const topbarEl = document.querySelector('.topbar');
  function syncTopbar(){
    if (!topbarEl) return;
    topbarEl.classList.toggle('is-scrolled', window.scrollY > 18);
  }
  window.addEventListener('scroll', syncTopbar, { passive:true });
  syncTopbar();

  // Animações discretas ao aparecer
  let revealObserver = null;
  function setupReveal(root){
    if (!root) return;
    // marca elementos comuns como "reveal"
    root.querySelectorAll('.section__title, .section__lead, .card, .grid, .aboutGrid, .promo').forEach(el=>{
      el.classList.add('reveal');
    });

    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver((entries)=>{
      for (const e of entries){
        if (e.isIntersecting){
          e.target.classList.add('is-visible');
          revealObserver.unobserve(e.target);
        }
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });

    root.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
  }

  /* =======================
     I18N HELPERS
  ======================= */
  function t(key) {
    const dict = window.I18N?.[currentLang] || {};
    // suporta chaves com "." e "_" (compatibilidade com HTML antigo)
    const alt1 = key.includes("_") ? key.replace(/_/g, ".") : null;
    const alt2 = key.includes(".") ? key.replace(/\./g, "_") : null;

    const v =
      (dict[key] ?? (alt1 ? dict[alt1] : undefined) ?? (alt2 ? dict[alt2] : undefined));

    return (v === undefined || v === null || v === "") ? key : v;
  }

  function applyI18n(root = document) {
    root.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      el.textContent = t(k);
    });

    // opcional (se você quiser usar depois):
    root.querySelectorAll("[data-i18n-title]").forEach((el) => {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });
    root.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    syncLangButtons();
    renderSinglePage();
  }

  function syncLangButtons() {
    document.querySelectorAll(".lang__btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === currentLang);
    });
    document.documentElement.setAttribute("lang", currentLang === "pt" ? "pt-BR" : currentLang);
  }

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  /* =======================
     UTILIDADES
  ======================= */
  function divider() {
    return `<div class="divider"></div>`;
  }

  function waLink(message) {
    return window.SITE.waLink(message);
  }

  /* =======================
     PÁGINAS
  ======================= */

  function pageInicio() {
    const civilItems = [
      "Contratos e obrigações",
      "Indenizações",
      "Responsabilidade civil",
      "Direito do consumidor",
      "Cobranças e defesas",
      "Consultoria preventiva",
    ];

    return `
      <div class="section section--home">
        <div class="hero hero--center introBlock">
          <h3 class="section__title">${t("home.title")}</h3>
          <span class="kicker">${t("home.kicker")}</span>
          <h4 class="h4">${t("brand.nameFull")}</h4>
          <p class="meta">${t("home.meta1")} • ${t("home.meta2")} • ${t("home.meta3")}</p>
          <p class="section__lead">${t("home.lead")}</p>
        </div>

        ${divider()}

        <h4 class="h4 h4--center">${t("home.helpTitle")}</h4>

        <div class="grid grid--3 grid--servicesIntro">
          <div class="card card--serviceIntro">
            <h4 class="card__title">${t("home.prevTitle")}</h4>
            <ul class="list">
              ${[1,2,3,4,5,6,7].map(i => `<li>${t("home.prev."+i)}</li>`).join("")}
            </ul>
          </div>

          <div class="card card--serviceIntro">
            <h4 class="card__title">${t("home.tribTitle")}</h4>
            <ul class="list">
              ${[1,2,3,4,5,6].map(i => `<li>${t("home.trib."+i)}</li>`).join("")}
            </ul>
          </div>

          <div class="card card--serviceIntro">
            <h4 class="card__title">Cível</h4>
            <ul class="list">
              ${civilItems.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </div>

        ${divider()}

        <h4 class="h4 h4--center">${t("home.diffTitle")}</h4>
        <ul class="list list--centered">
          ${[1,2,3,4,5].map(i => `<li>${t("home.diff."+i)}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  function pageQuemSou() {
    return `
      <div class="section section--about">
        <h3 class="section__title">Sobre Mim</h3>

        <div class="aboutPremium">
          <div class="aboutPhoto aboutPhoto--center">
            <img src="./assets/perfil.jpeg" class="aboutImg" alt="Gabriela Cordeiro" />
          </div>

          <div class="aboutText aboutText--center">
            <p class="section__lead aboutLead">Sou advogada com atuação especializada nas áreas de <strong>Direito Tributário</strong> e <strong>Direito Previdenciário</strong>, com formação acadêmica direcionada à análise técnica, estratégica e aprofundada das relações entre contribuinte e Estado.</p>

            <p class="muted aboutParagraph">Possuo pós-graduação em <strong>Direito Tributário e Processo Tributário</strong>, com ênfase na interpretação da legislação fiscal, planejamento tributário, recuperação de créditos e contencioso judicial. Também sou pós-graduada em <strong>Processo Administrativo Tributário</strong>, área essencial para atuação perante órgãos fazendários, defesa em autos de infração e acompanhamento de fiscalizações.</p>

            <p class="muted aboutParagraph">Além disso, detenho pós-graduação em <strong>Direito Previdenciário</strong>, o que me permite atuar de forma estratégica na proteção de direitos relacionados a benefícios previdenciários, revisões, planejamento e regularização de contribuições.</p>
          </div>

          <div class="card card--aboutStatement mt">
            <h4 class="card__title card__title--center">Minha atuação é pautada em:</h4>
            <ul class="list list--statement">
              <li><strong>Análise técnica aprofundada</strong></li>
              <li><strong>Estratégia jurídica personalizada</strong></li>
              <li><strong>Atuação preventiva e contenciosa</strong></li>
              <li><strong>Segurança e clareza na orientação ao cliente</strong></li>
            </ul>
            <p class="muted mt aboutClosing">Acredito que o Direito deve ser utilizado como instrumento de organização, economia e proteção patrimonial, sempre com responsabilidade, ética e compromisso com resultados consistentes.</p>
          </div>
        </div>
      </div>
    `;
  }

  function pageAtuacao() {
    const civilItems = [
      "Contratos e obrigações",
      "Indenizações por danos materiais e morais",
      "Responsabilidade civil",
      "Direito do consumidor",
      "Cobranças e defesas judiciais",
      "Consultoria preventiva e estratégica",
    ];

    return `
      <div class="section section--areas">
        <h3 class="section__title">${t("nav.areas")}</h3>
        <p class="section__lead">${t("areas.lead")}</p>

        <div class="grid grid--3 grid--areasPremium">
          <div class="card card--area">
            <h4>${t("areas.prevTitle")}</h4>
            <ul class="list">
              ${[1,2,3,4,5,6,7].map(i => `<li>${t("areas.prev."+i)}</li>`).join("")}
            </ul>
          </div>

          <div class="card card--area">
            <h4>${t("areas.tribTitle")}</h4>
            <ul class="list">
              ${[1,2,3,4,5,6].map(i => `<li>${t("areas.trib."+i)}</li>`).join("")}
            </ul>
          </div>

          <div class="card card--area">
            <h4>Cível</h4>
            <ul class="list">
              ${civilItems.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="card card--strategy mt">
          <h4>${t("strategy.title")}</h4>
          <p>${t("strategy.text")}</p>
        </div>
      </div>
    `;
  }

  
  const SERVICES = {
    previdenciario: [
    {id:"prev01", title:"Aposentadoria Especial", text:"A aposentadoria especial é destinada ao segurado que exerceu atividades exposto a agentes nocivos à saúde ou à integridade física, de forma habitual e permanente, conforme previsto na legislação previdenciária. Esse benefício é concedido mediante comprovação técnica da exposição, por meio de documentos como PPP, LTCAT e laudos periciais, observadas as regras vigentes após a Reforma da Previdência. A principal vantagem é a possibilidade de aposentadoria com tempo reduzido de contribuição , garantindo proteção ao trabalhador que atuou condições prejudiciais à saúde."},
    {id:"prev02", title:"Aposentadoria por Idade", text:"A aposentadoria por idade é concedida ao segurado que atinge a idade mínima legal e cumpre o tempo mínimo de contribuição exigido pelo INSS, conforme as regras atuais. É uma das modalidades mais comuns, especialmente para trabalhadores urbanos, rurais e segurados especiais. A principal vantagem é a garantia de renda na fase da maturidade , assegurando estabilidade financeira e dignidade ao segurado."},
    {id:"prev03", title:"Aposentadoria por Tempo de Contribuição", text:"A aposentadoria por tempo de contribuição aplica-se aos segurados que preencheram os requisitos antes da Reforma da Previdência ou que se enquadram nas regras de transição. Exige análise detalhada do histórico contributivo e da documentação previdenciária. A principal vantagem é a possibilidade de antecipar a aposentadoria , quando preenchidos os requisitos legais."},
    {id:"prev04", title:"Aposentadoria e Revisão para Servidores Públicos", text:"Este serviço abrange a concessão e revisão de benefícios previdenciários de servidores públicos , vinculados a regimes próprios de previdência. Inclui análise de regras de transição, paridade, integralidade e tempo de serviço público. A principal vantagem é a garantia do correto enquadramento do benefício , evitando perdas financeiras ao servidor."},
    {id:"prev05", title:"Aposentadoria por Invalidez (Incapacidade Permanente)", text:"A aposentadoria por incapacidade permanente é concedida ao segurado considerado definitivamente inapto para o trabalho, mediante avaliação médica do INSS. Pode decorrer de doença comum, ocupacional ou acidente. A principal vantagem é a proteção financeira ao segurado incapacitado , assegurando subsistência digna."},
    {id:"prev06", title:"Aposentadoria da Pessoa com Deficiência (PCD)", text:"A aposentadoria da pessoa com deficiência é destinada ao segurado que possua deficiência física, mental, intelectual ou sensorial, nos termos da legislação. O grau da deficiência influencia nos requisitos do benefício. A principal vantagem é a redução dos requisitos de tempo e idade , promovendo inclusão e proteção social."},
    {id:"prev07", title:"Análise de Viabilidade de Previdência Complementar e Privada", text:"Este serviço consiste na avaliação técnica da previdência privada e complementar , considerando perfil financeiro, objetivos e planejamento futuro. Inclui análise de planos, rentabilidade, riscos e benefícios. A principal vantagem é a construção de uma aposentadoria mais segura e personalizada ."},
    {id:"prev08", title:"Análise de Acordo com a Nova Reforma da Previdência", text:"A análise da Reforma da Previdência avalia o enquadramento do segurado nas regras de transição ou permanentes. Permite identificar o melhor momento para requerer o benefício. A principal vantagem é a maximização do valor da aposentadoria , evitando escolhas prejudiciais. Auxílio-Doença (Auxílio por Incapacidade Temporária) O auxílio por incapacidade temporária é concedido ao segurado temporariamente incapaz para o trabalho por motivo de doença ou acidente. Depende de perícia médica e cumprimento dos requisitos legais. A principal vantagem é a manutenção da renda durante o período de afastamento ."},
    {id:"prev09", title:"", text:"Auxílio-Acidente O auxílio-acidente é um benefício indenizatório concedido ao segurado que apresenta redução permanente da capacidade laboral após acidente ou doença. Pode ser acumulado com salário. A principal vantagem é a indenização mensal vitalícia , sem impedir o retorno ao trabalho."},
    {id:"prev10", title:"", text:"BPC/LOAS – Benefício Assistencial O BPC/LOAS garante um salário mínimo mensal à pessoa com deficiência ou ao idoso situação de vulnerabilidade social. Não exige contribuição ao INSS! A principal vantagem é a proteção social para quem não possui meios de subsistência ."},
    {id:"prev11", title:"Cálculos Previdenciários", text:"Os cálculos previdenciários consistem na apuração técnica do tempo de contribuição, salários, coeficientes e valor do benefício. São fundamentais antes do pedido ao INSS. A principal vantagem é a segurança na concessão do benefício mais vantajoso ."},
    {id:"prev12", title:"Pensão por Morte", text:"A pensão por morte é devida aos dependentes do segurado falecido, conforme critérios legais. Pode ser concedida a cônjuge, companheiro(a), filhos e outros dependentes. A principal vantagem é a proteção financeira da família momento de vulnerabilidade."},
    {id:"prev13", title:"Planejamento Previdenciário", text:"O planejamento previdenciário é uma análise estratégica da vida contributiva do segurado, com foco na melhor aposentadoria possível. Inclui simulações, projeções e orientações personalizadas. A principal vantagem é a preparação antecipada para uma aposentadoria mais vantajosa ."},
    {id:"prev14", title:"Salário-Maternidade", text:"O salário-maternidade é devido à segurada razão do nascimento, adoção ou guarda judicial de criança. Pode ser concedido a empregadas, autônomas, seguradas especiais e desempregadas. A principal vantagem é a garantia de renda no período de afastamento maternal ."},
    {id:"prev15", title:"Revisões de Benefícios Previdenciários", text:"As revisões previdenciárias visam corrigir erros na concessão ou no cálculo dos benefícios. Podem resultar aumento do valor mensal e pagamento de atrasados. A principal vantagem é a recuperação de valores pagos incorretamente ."},
    {id:"prev16", title:"Soluções Previdenciárias para Empresas", text:"Este serviço envolve a assessoria previdenciária para empresas, incluindo folha de pagamento, vínculos, contribuições e benefícios. Visa prevenir passivos e autuações. A principal vantagem é a redução de riscos trabalhistas e previdenciários , com conformidade legal."}
    ],
    tributario: [
    {id:"trib01", title:"Parcelamento de Débitos Tributários", text:"O parcelamento de débitos tributários é um instrumento legal que permite ao contribuinte regularizar seus débitos fiscais junto aos entes federativos (União, Estados e Municípios), por meio do pagamento fracionado do valor devido, conforme as condições previstas na legislação vigente. Esse mecanismo pode abranger tributos inscritos ou não em dívida ativa, bem como débitos em fase administrativa ou judicial, dependendo da modalidade disponível no momento da adesão. Além de possibilitar a quitação de débitos de forma organizada e compatível com a realidade financeira do contribuinte, o parcelamento suspende a exigibilidade do crédito tributário, nos termos do artigo 151, inciso VI, do Código Tributário Nacional. Isso significa que, enquanto estiver sendo regularmente cumprido, impede a adoção de medidas como protestos, execuções fiscais e restrições cadastrais. A principal vantagem do parcelamento tributário é a regularização da situação fiscal com segurança jurídica , permitindo que pessoas físicas e jurídicas retomem sua regularidade perante o Fisco, preservem suas atividades e evitem sanções legais, sem comprometer excessivamente o fluxo financeiro. Com acompanhamento jurídico especializado, é possível analisar a melhor modalidade disponível, reduzir riscos, evitar prejuízos e garantir o cumprimento correto das obrigações assumidas."},
    {id:"trib02", title:"Restituição de Tributos", text:"A restituição de tributos é o direito assegurado ao contribuinte de reaver valores pagos indevidamente ou a maior ao Fisco, em razão de erro de cálculo, interpretação equivocada da legislação, aplicação incorreta de alíquotas ou exigência indevida. Esse direito encontra fundamento no artigo 165 do Código Tributário Nacional, que garante ao contribuinte a possibilidade de solicitar a devolução dos valores pagos indevidamente, seja por meio de restituição em dinheiro, seja por compensação com tributos futuros, conforme previsto na legislação aplicável. A restituição pode abranger tributos federais, estaduais e municipais, bem como contribuições previdenciárias e demais encargos, respeitados os prazos legais e os procedimentos administrativos ou judiciais cabíveis. Em muitos casos, o contribuinte possui valores significativos a recuperar, mas deixa de exercer esse direito por desconhecimento, falta de orientação especializada ou receio quanto à burocracia envolvida. A principal vantagem da restituição de tributos é a recuperação de valores pagos indevidamente , fortalecendo o caixa da empresa ou da pessoa física de forma lícita, segura e amparada pela legislação. Com assessoria jurídica especializada, é possível identificar oportunidades de recuperação, estruturar corretamente os pedidos e reduzir riscos de indeferimento, assegurando que o contribuinte exerça plenamente seus direitos perante o Fisco."},
    {id:"trib03", title:"Desbloqueio de Acordos com a PGFN", text:"O desbloqueio de acordos com a Procuradoria-Geral da Fazenda Nacional (PGFN) consiste na regularização de parcelamentos, transações tributárias ou negociações fiscais que foram suspensos, rescindidos ou bloqueados em razão do descumprimento de condições contratuais, inconsistências cadastrais ou pendências formais. Esses acordos, firmados no âmbito da dívida ativa da União, são instrumentos que permitem ao contribuinte negociar seus débitos com condições diferenciadas, como descontos, prazos estendidos e formas facilitadas de pagamento, conforme previsto na legislação e nas normas da PGFN. Quando ocorre o bloqueio ou a rescisão do acordo, o débito retorna à condição de exigibilidade plena, podendo resultar na retomada de cobranças, protestos, restrições cadastrais e execuções fiscais, gerando impactos diretos na atividade financeira e na imagem do contribuinte. Diante desse cenário, a atuação jurídica especializada é fundamental para analisar a causa do bloqueio, adotar as medidas administrativas ou judiciais cabíveis e viabilizar a reativação do acordo ou a celebração de nova negociação. A principal vantagem do desbloqueio de acordos com a PGFN é a restauração da regularidade fiscal e da segurança jurídica , evitando a retomada de medidas coercitivas e preservando os benefícios originalmente concedidos ao contribuinte. Com acompanhamento jurídico qualificado, é possível minimizar prejuízos, renegociar condições e garantir o cumprimento adequado das obrigações, assegurando maior estabilidade financeira e tranquilidade nas relações com o Fisco."},
    {id:"trib04", title:"Compensação de Débitos Tributários com Precatórios", text:"A compensação de débitos tributários com precatórios é uma alternativa legal que permite ao contribuinte utilizar créditos reconhecidos judicialmente contra a Fazenda Pública para quitar débitos tributários, observadas as regras constitucionais e infralegais aplicáveis. Os precatórios correspondem a valores devidos pelo Poder Público em razão de condenações judiciais definitivas, e, em determinadas hipóteses, podem ser utilizados para a compensação de tributos inscritos ou não em dívida ativa, conforme previsto na Constituição Federal, na legislação específica e nas normas dos entes federativos. Essa modalidade exige análise técnica criteriosa, uma vez que envolve requisitos formais, prazos, natureza do crédito e regulamentações próprias, variáveis conforme o ente federado responsável. A assessoria jurídica especializada é essencial para assegurar a viabilidade da operação, evitar nulidades e garantir a efetividade da compensação. A principal vantagem da compensação com precatórios é a redução significativa do passivo tributário sem impacto direto no caixa , proporcionando maior equilíbrio financeiro ao contribuinte. Com orientação adequada, é possível transformar créditos judiciais em instrumento estratégico de regularização fiscal, com segurança jurídica e planejamento."},
    {id:"trib05", title:"Planejamento Tributário para Empresas do Simples Nacional", text:"O planejamento tributário para empresas optantes pelo Simples Nacional consiste na análise estruturada da atividade empresarial, do enquadramento fiscal e da forma de apuração dos tributos, com o objetivo de reduzir a carga tributária dentro dos limites legais. Mesmo inseridas em regime simplificado, muitas empresas pagam mais tributos do que o necessário, em razão de enquadramentos incorretos, classificação inadequada de atividades ou falta de análise periódica da legislação. O planejamento envolve o estudo das faixas de faturamento, anexos aplicáveis, fator “R”, composição da folha de pagamento e demais variáveis que impactam diretamente no valor dos tributos devidos. A principal vantagem do planejamento tributário no Simples Nacional é a redução legal e sustentável da carga tributária , aumentando a lucratividade e a competitividade da empresa. Com acompanhamento jurídico especializado, o empresário toma decisões mais seguras e estratégicas, evitando riscos fiscais e autuações futuras."},
    {id:"trib06", title:"Revisão de Tributação Monofásica no Simples Nacional", text:"A revisão da tributação monofásica no Simples Nacional consiste na análise dos produtos comercializados pela empresa para verificar a correta aplicação do regime monofásico de PIS e COFINS, no qual a tributação é concentrada no fabricante ou importador. Empresas do comércio, como farmácias, autopeças, cosméticos e bebidas, frequentemente recolhem esses tributos indevidamente no Simples, por desconhecimento da legislação ou falhas na classificação fiscal dos produtos. A revisão técnica permite identificar pagamentos indevidos e viabilizar a restituição ou compensação dos valores recolhidos a maior, respeitados os prazos legais. A principal vantagem da revisão monofásica é a recuperação de valores pagos indevidamente e a redução da carga tributária futura , fortalecendo o fluxo de caixa da empresa. Com atuação jurídica especializada, o procedimento é realizado de forma segura, evitando riscos de autuação e questionamentos fiscais."},
    {id:"trib07", title:"Assessoria em Transações Tributárias com a PGFN", text:"A assessoria em transações tributárias com a PGFN envolve a orientação jurídica completa para a negociação de débitos inscritos em dívida ativa da União, por meio dos programas de transação previstos na legislação vigente. Essas transações permitem a obtenção de benefícios como descontos sobre juros e multas, prazos estendidos e condições diferenciadas de pagamento, conforme a capacidade econômica do contribuinte. A correta estruturação da proposta e a análise dos requisitos são fundamentais para o deferimento e manutenção dos benefícios concedidos. A principal vantagem da transação tributária é a regularização do passivo fiscal com condições mais favoráveis e segurança jurídica , reduzindo impactos financeiros e riscos de cobrança. Com assessoria especializada, o contribuinte maximiza os benefícios disponíveis e evita a perda dos acordos firmados."},
    {id:"trib08", title:"Consultoria em Regularização Fiscal", text:"A consultoria em regularização fiscal consiste no diagnóstico completo da situação tributária do contribuinte, com a identificação de débitos, inconsistências, pendências cadastrais e riscos fiscais perante os órgãos fazendários. Esse serviço envolve a análise de tributos federais, estaduais e municipais, bem como obrigações acessórias, parcelamentos, inscrições em dívida ativa e eventuais processos administrativos ou judiciais. A partir desse diagnóstico, são elaboradas estratégias personalizadas para a regularização, conforme a realidade financeira e operacional do cliente. A principal vantagem da consultoria em regularização fiscal é a reorganização da vida tributária com previsibilidade e segurança , permitindo ao contribuinte retomar suas atividades sem receio de sanções ou bloqueios. Com acompanhamento jurídico contínuo, é possível manter a conformidade fiscal, prevenir passivos futuros e fortalecer a credibilidade perante o mercado."}
    ]
  };

  function initServiceAccordions(root) {
    const grids = root.querySelectorAll(".svcGrid");
    grids.forEach((grid) => {
      // Evita múltiplos listeners se a página for re-renderizada
      if (grid.__svcBound) return;
      grid.__svcBound = true;

      grid.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-acc-btn]");
        if (!btn) return;

        const card = btn.closest("[data-accordion]");
        if (!card) return;

        // Fecha outros cards do MESMO grid (comportamento profissional)
        grid.querySelectorAll("[data-accordion].is-open").forEach((c) => {
          if (c === card) return;
          const b = c.querySelector("[data-acc-btn]");
          const body = c.querySelector("[data-acc-body]");
          if (b) b.setAttribute("aria-expanded", "false");
          if (body) body.hidden = true;
          c.classList.remove("is-open");
        });

        const body = card.querySelector("[data-acc-body]");
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", expanded ? "false" : "true");
        if (body) body.hidden = expanded;
        card.classList.toggle("is-open", !expanded);
      });
    });
  }

function pageServicos() {
        const mkCards = (arr, groupId) => `
      <div class="svcGrid">
        ${arr
          .map(
            (s, i) => {
              const contentId = `${groupId}-body-${i}`;
              return `
          <article class="svcCard" data-accordion id="${groupId}-${s.id}">
            <header class="svcCard__head">
              <h5 class="svcCard__title">${s.title}</h5>
              <button class="svcCard__toggle" type="button" data-acc-btn aria-expanded="false" aria-controls="${contentId}">
                Saiba mais <span class="svcCard__chev" aria-hidden="true">▾</span>
              </button>
            </header>
            <div class="svcCard__body" id="${contentId}" data-acc-body hidden>
              <div class="svcCard__text">${s.text}</div>
            </div>
          </article>
        `;
            }
          )
          .join("")}
      </div>
    `;


    return `
      <div class="section">
        <h3 class="section__title">${t("nav.services")}</h3>
        <p class="section__lead">${t("services.lead")}</p>

        <div class="svcSection">
          <div class="promo promo--mini" role="region" aria-label="Destaque Previdenciário">
            <div class="promo__kicker">DIREITO PREVIDENCIÁRIO</div>
            <h4 class="promo__title">Você pode estar deixando dinheiro no INSS!</h4>
            <p class="promo__text">Nós garantimos que seus direitos sejam reconhecidos e pagos.</p>
            <a class="btn btn--gold promo__btn" target="_blank" rel="noopener" href="${waLink(t("whats.services"))}">
              Fale Conosco
            </a>
          </div>
          <h4 class="h4">Direito Previdenciário</h4>
          ${mkCards(SERVICES.previdenciario, 'prev')}
        </div>

        <div class="svcSection">
          <div class="promo promo--mini" role="region" aria-label="Destaque Tributário">
            <div class="promo__kicker">ATUAÇÃO TRIBUTÁRIA</div>
            <h4 class="promo__title">Conseguimos até 70% de desconto nos seus débitos tributários!</h4>
            <p class="promo__text">Atendemos pessoas físicas e jurídicas que precisam regularizar sua situação fiscal, reduzir ou parcelar débitos tributários, restituir tributos pagos indevidamente e garantir a segurança jurídica de suas operações.</p>
            <a class="btn btn--gold promo__btn" target="_blank" rel="noopener" href="${waLink(t("whats.services"))}">
              Fale Conosco
            </a>
          </div>
          <h4 class="h4">Direito Tributário</h4>
          ${mkCards(SERVICES.tributario, 'trib')}
        </div>
      </div>
    `;
  }

  function pageAssinatura() {
    return `
      <div class="section">
        <h3 class="section__title">${t("plans.title")}</h3>
        <p class="section__lead">${t("plans.lead")}</p>

        <div class="grid grid--4">
          ${["normal","plus","premium","emp"].map(p => `
            <div class="card plan">
              <h4>${t("plans."+p+".title")}</h4>
              <ul class="list">
                ${t("plans."+p+".items").split("|").map(i => `<li>${i}</li>`).join("")}
              </ul>
              <a class="btn btn--gold mt" target="_blank" rel="noopener"
                 href="${waLink(t("plans.whats")+" "+t("plans."+p+".title"))}">
                 ${t("plans.choose")}
              </a>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  function pageContato() {
    return `
      <div class="section">
        <h3 class="section__title">${t("nav.contact")}</h3>
        <p class="section__lead">${t("contact.lead")}</p>

        <div class="grid grid--2">
          <div class="card soft">
            <p><strong>${t("contact.phone")}:</strong> ${phoneDisplay}</p>
            <p><strong>${t("contact.email")}:</strong> ${email}</p>
            <p><strong>${t("contact.addr")}:</strong> ${address}</p>

            <a class="btn btn--gold mt" href="${waLink(t("whats.contact"))}" target="_blank" rel="noopener">
              Fale Conosco
            </a>
          </div>

          <div class="card">
            <h4>${t("agenda.title")}</h4>
            <p>${t("agenda.text")}</p>
            <a class="btn btn--soft" href="#agendamento">${t("agenda.open")}</a>
          </div>
        </div>
      </div>
    `;
  }

  function pageAgendamento() {
    return `
      <div class="section">
        <h3 class="section__title">${t("nav.schedule")}</h3>
        <p class="section__lead">${t("agenda.lead")}</p>

        <div class="calendarWrap">
          <div id="calendar"></div>

          <div class="mt">
            <strong>${t("agenda.selected")}:</strong>
            <span id="selectedLabel">—</span>
          </div>

          <button id="confirmBtn" class="btn btn--gold mt" disabled>
            ${t("agenda.confirm")}
          </button>

          <p class="note">${t("agenda.text")}</p>
        </div>
      </div>
    `;
  }

  function pageAtendimento() {
    return `
      <div class="section">
        <h3 class="section__title">${t("care.title")}</h3>
        <p class="section__lead">${t("care.lead")}</p>

        <div class="grid grid--2">
          <div class="card">
            <h4>${t("agenda.title")}</h4>
            <p>${t("agenda.text")}</p>
            <a class="btn btn--soft mt" href="#agendamento">${t("agenda.open")}</a>
          </div>

          <div class="card">
            <h4>${t("nav.contact")}</h4>
            <p>${t("contact.lead")}</p>
            <a class="btn btn--gold mt" href="${waLink(t("whats.home"))}" target="_blank" rel="noopener">Fale Conosco</a>
          </div>
        </div>
      </div>
    `;
  }

  function pageStub(titleKey, bodyText) {
    return `
      <div class="section">
        <h3 class="section__title">${t(titleKey)}</h3>
        <p class="section__lead">${bodyText}</p>

        <div class="card">
          <p class="card__text">${bodyText}</p>
        </div>
      </div>
    `;
  }

  
  function pageConteudos() {
    return `
      <div class="section">
        <h3 class="section__title">${t("contents.title")}</h3>
        <p class="section__lead">Artigos, materiais e atualizações organizados para você.</p>

        <div class="grid grid--3">
          <a class="card card--link" href="#/artigos">
            <h4 class="card__title">${t("articles.title")}</h4>
            <p class="card__text">Publicações e conteúdos informativos.</p>
          </a>

          <a class="card card--link" href="#/materiais">
            <h4 class="card__title">${t("materials.title")}</h4>
            <p class="card__text">Guias, modelos e materiais úteis.</p>
          </a>

          <a class="card card--link" href="#/atualizacoes">
            <h4 class="card__title">${t("updates.title")}</h4>
            <p class="card__text">Comunicados, novidades e avisos.</p>
          </a>

          <a class="card card--link" href="#/faq">
            <h4 class="card__title">${t("faq.title")}</h4>
            <p class="card__text">Dúvidas frequentes, de forma objetiva.</p>
          </a>
        </div>
      </div>
    `;
  }

/* =======================
     ROTAS
  ======================= */
  const routes = {
    "/": pageInicio,
    "/inicio": pageInicio,
    "/quem-sou": pageQuemSou,
    "/atuacao": pageAtuacao,
    "/servicos": pageServicos,
    "/conteudos": pageConteudos,
    "/assinatura": pageAssinatura,
    "/contato": pageContato,
    "/agendamento": pageAgendamento,
    "/atendimento": pageAtendimento,

    "/artigos": () => pageStub("articles.title", "Em breve, conteúdos e publicações."),
    "/atualizacoes": () => pageStub("updates.title", "Em breve, comunicados e atualizações."),
    "/materiais": () => pageStub("materials.title", "Em breve, materiais informativos."),
    "/faq": () => pageStub("faq.title", "Em breve, perguntas frequentes."),
    "/privacidade": () => pageStub("privacy.title", "Em breve, política de privacidade."),
    "/termos": () => pageStub("terms.title", "Em breve, termos de uso."),
  };

  /* =======================
     DROPDOWN (Conteúdos)
  ======================= */
  function initDropdown() {
    const btn = document.getElementById("btnConteudos");
    const menu = document.getElementById("menuConteudos");
    if (!btn || !menu) return;

    const open = () => {
      menu.classList.add("is-open");
      menu.setAttribute("aria-hidden", "false");
    };
    const close = () => {
      menu.classList.remove("is-open");
      menu.setAttribute("aria-hidden", "true");
    };
    const toggle = () => (menu.classList.contains("is-open") ? close() : open());

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      toggle();
    });

    document.addEventListener("click", (e) => {
      if (!menu.classList.contains("is-open")) return;
      const target = e.target;
      if (btn.contains(target) || menu.contains(target)) return;
      close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });

    // fecha ao navegar por item
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  }

  /* =======================
     SCROLL NAV
  ======================= */
  function syncActiveAnchor(id){
    document.querySelectorAll(".nav__link, .topnav__link").forEach((a)=>{
      const href=a.getAttribute("href")||"";
      if(!href.startsWith("#")) return;
      const target=href.replace("#","");
      a.classList.toggle("is-active", target===id);
    });
  }

  function smoothScroll(){
    document.querySelectorAll('a[href^="#"]').forEach((a)=>{
      a.addEventListener("click",(e)=>{
        const href=a.getAttribute("href");
        if(!href || href==="#" ) return;
        const id=href.slice(1);
        const el=document.getElementById(id);
        if(!el) return;
        e.preventDefault();
        el.scrollIntoView({behavior:"smooth", block:"start"});
      });
    });
  }

  function initScrollSpy(){
    const sections=[...document.querySelectorAll("section[data-section]")];
    if(!sections.length) return;
    const obs=new IntersectionObserver((entries)=>{
      const visible=entries
        .filter(en=>en.isIntersecting)
        .sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible) syncActiveAnchor(visible.target.id);
    }, {root:null, threshold:[0.25,0.4,0.55]});

    sections.forEach(s=>obs.observe(s));
  }

  /* =======================
     RENDER (ONE PAGE)
  ======================= */
  function renderSinglePage(){
    pageEl.classList.remove("page--enter");
    void pageEl.offsetWidth;
    pageEl.classList.add("page--enter");

    pageEl.innerHTML = `
      <section id="inicio" class="pageBand pageBand--dark" data-section>${pageInicio()}</section>
      <section id="quem-sou" class="pageBand pageBand--light" data-section>${pageQuemSou()}</section>
      <section id="atuacao" class="pageBand pageBand--dark" data-section>${pageAtuacao()}</section>
      <section id="servicos" class="pageBand pageBand--light" data-section>${pageServicos()}</section>
      <section id="agendamento" class="pageBand pageBand--dark" data-section>${pageAgendamento()}</section>
      <section id="atendimento" class="pageBand pageBand--light" data-section>${pageAtendimento()}</section>
      <section id="conteudos" class="pageBand pageBand--dark" data-section>${pageConteudos()}</section>
      <section id="contato" class="pageBand pageBand--light" data-section>${pageContato()}</section>
    `;

    applyI18n(pageEl);
    setupReveal(pageEl);
    initServiceAccordions(pageEl);

    // WhatsApp flutuante
    const wf=document.getElementById("whatsFloat");
    if(wf) wf.href = waLink(t("whats.float"));

    if (window.initCalendar) {
      window.initCalendar(currentLang);
    }

    const heroWhats=document.getElementById("heroWhats");
    if (heroWhats) heroWhats.remove();
  }

  // init
  syncLangButtons();
  initDropdown();
  renderSinglePage();
  smoothScroll();
  initScrollSpy();
})();

