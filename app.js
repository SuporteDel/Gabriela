const PHONE_WA = "5566992535958";
const EMAIL = "Gabrielacordeiroadvogada@hotmail.com";

const i18n = {
  pt: {
    nav_home: "Home",
    nav_about: "Sobre",
    nav_edu: "Educação",
    nav_exp: "Experiência",
    nav_contact: "Contato",
    btn_pdf: "Salvar em PDF",
    btn_agendar: "Agendar atendimento",

    modal_title: "Escolha o idioma",
    modal_sub: "Você pode trocar o idioma a qualquer momento nos botões do topo.",

    // HOME
    home_pill: "Ética • Estratégia • Atendimento humanizado",
    home_h1: "Direito Previdenciário e Tributário com foco em segurança, clareza e resultado.",
    home_p1: "Sou advogada atuante nas áreas de <strong>Direito Previdenciário</strong> e <strong>Direito Tributário</strong>, com foco em oferecer soluções jurídicas seguras, estratégicas e personalizadas para cada cliente.",
    home_p2: "Minha atuação é pautada pela ética, responsabilidade e compromisso com resultados. Busco sempre compreender a realidade de cada pessoa ou empresa que me procura, para construir a melhor estratégia jurídica, de forma clara, transparente e eficiente.",

    home_h2_help: "Como posso ajudar",
    home_card1_t: "Direito Previdenciário",
    home_card1_d: "Planejamento, concessão e revisão de benefícios, auxiliando a garantir direitos junto ao INSS com segurança e tranquilidade.",
    home_card2_t: "Direito Tributário",
    home_card2_d: "Orientação, recuperação de créditos, regularização fiscal e planejamento tributário para reduzir riscos e otimizar recursos.",
    home_card3_t: "Estratégia e prevenção",
    home_card3_d: "Análise do cenário, riscos e alternativas para definir o caminho jurídico mais adequado.",
    home_card4_t: "Atendimento humanizado",
    home_card4_d: "Escuta, empatia, responsabilidade e acompanhamento próximo em todas as etapas.",

    home_h2_comp: "Competências",
    comp1_t: "Ética e responsabilidade",
    comp1_d: "Atuação comprometida com segurança jurídica, sigilo e boas práticas.",
    comp2_t: "Comunicação clara",
    comp2_d: "Orientação transparente, com alinhamento de expectativas e próximos passos.",
    comp3_t: "Análise técnica",
    comp3_d: "Leitura e organização documental, avaliação de riscos e estratégia.",
    comp4_t: "Acompanhamento próximo",
    comp4_d: "Suporte consistente durante todo o atendimento.",

    // HOME SIDE
    side_kicker: "Atendimento",
    side_row1_l: "Formato",
    side_row1_v: "Online e presencial",
    side_row2_l: "Foco",
    side_row2_v: "Previdenciário e Tributário",
    side_row3_l: "Estilo",
    side_row3_v: "Claro, humano e técnico",
    side_row4_l: "Objetivo",
    side_row4_v: "Soluções seguras e estratégicas",
    side_quick_title: "Contato rápido",
    side_quick_email: "E-mail",
    side_quick_wa: "WhatsApp",
    side_tags_title: "Áreas atendidas",
    tag1: "Previdenciário",
    tag2: "Tributário",
    tag3: "Planejamento",
    tag4: "Regularização",
    tag5: "Revisões",

    // SOBRE
    about_pill: "Sobre • Perfil profissional",
    about_h1: "Atendimento próximo, com técnica e confiança.",
    about_p1: "Sou advogada atuante nas áreas de Direito Previdenciário e Direito Tributário, com foco em oferecer soluções jurídicas seguras, estratégicas e personalizadas para cada cliente.",
    about_p2: "Minha atuação é pautada pela ética, responsabilidade e compromisso com resultados. Busco sempre compreender a realidade de cada pessoa ou empresa que me procura, para construir a melhor estratégia jurídica, de forma clara, transparente e eficiente.",
    about_p3: "Acredito que um bom atendimento vai além do processo: envolve escuta, empatia, responsabilidade e acompanhamento próximo em todas as etapas. Meu compromisso é oferecer um serviço jurídico humanizado, técnico e confiável, sempre buscando a melhor solução para cada caso.",
    about_h2_help: "Como posso ajudar",
    about_card1_t: "Direito Previdenciário",
    about_card1_d: "Planejamento, concessão e revisão de benefícios, orientando com segurança para garantir seus direitos junto ao INSS.",
    about_card2_t: "Direito Tributário",
    about_card2_d: "Orientação, recuperação de créditos, regularização fiscal e planejamento tributário para reduzir riscos e manter conformidade.",
    about_h2_comp: "Competências",
    about_comp1_t: "Escuta e empatia",
    about_comp1_d: "Entendimento do contexto para orientar com segurança e objetividade.",
    about_comp2_t: "Transparência",
    about_comp2_d: "Explicações claras sobre cenário, prazos e expectativas.",
    about_comp3_t: "Estratégia e prevenção",
    about_comp3_d: "Planejamento para reduzir riscos e decidir com base técnica.",
    about_comp4_t: "Acompanhamento próximo",
    about_comp4_d: "Presença em todas as etapas, com orientação e retorno consistente.",

    // EDUCAÇÃO
    edu_pill: "Formação • Pós-graduação",
    edu_h1: "Educação e especialização",
    edu_p1: "Formação acadêmica e pós-graduações com foco em prática e estratégia.",
    edu_h2: "Formação",
    edu_item1_t: "Graduação",
    edu_item1_d: "Direito • Estácio • Teresina/PI",
    edu_h2_pos: "Pós-graduações",
    edu_pos_1: "Direito Tributário • EBRADI",
    edu_pos_2: "Processo Administrativo Fiscal e Estratégia Tributária",
    edu_pos_3: "Prática Tributária e Execuções Fiscais (Legale)",
    edu_pos_4: "Direito Previdenciário e Processo",
    edu_h2_focus: "Foco de atuação",
    edu_focus1_t: "Previdenciário",
    edu_focus1_d: "Planejamento, concessões e revisões de benefícios com orientação clara e segura.",
    edu_focus2_t: "Tributário",
    edu_focus2_d: "Regularização, recuperação de créditos e planejamento tributário com redução de riscos.",

    // EXPERIÊNCIA
    exp_pill: "Experiência • Atuação",
    exp_h1: "Atendimento consultivo e estratégico",
    exp_p1: "Atuação focada em orientação segura e soluções personalizadas, com acompanhamento próximo e comunicação transparente.",
    exp_h2: "Entregas mais comuns",
    exp_card1_t: "Previdenciário",
    exp_card1_d: "Planejamento, concessões e revisões; análise documental e estratégia para demandas junto ao INSS.",
    exp_card2_t: "Tributário",
    exp_card2_d: "Regularização, recuperação de créditos e planejamento para reduzir riscos e otimizar recursos.",
    exp_card3_t: "Diagnóstico e estratégia",
    exp_card3_d: "Levantamento de cenário, alternativas jurídicas e plano de ação objetivo.",
    exp_card4_t: "Acompanhamento",
    exp_card4_d: "Suporte contínuo, orientação e atualização sobre próximos passos.",
    exp_h2_tags: "Competências aplicadas",
    exp_tag1: "Análise técnica",
    exp_tag2: "Comunicação clara",
    exp_tag3: "Gestão de riscos",
    exp_tag4: "Atendimento humanizado",
    exp_tag5: "Estratégia",

    // CONTATO
    contact_pill: "Contato",
    contact_h1: "Vamos conversar?",
    contact_p1: "Para um atendimento mais rápido, utilize o WhatsApp ou envie um e-mail com um resumo do caso. O retorno é feito com atenção e clareza.",
    contact_card1_t: "E-mail",
    contact_card2_t: "WhatsApp",
    contact_card3_t: "Atendimento",
    contact_card3_d: "Atendimento mediante agendamento • Online e presencial • Acompanhamento próximo.",
    contact_card4_t: "Antes de enviar",
    contact_card4_d: "Se puder, informe: objetivo, prazos, documentos principais e um breve contexto do caso.",
    contact_h2: "Áreas atendidas",
    ctag1:"Direito Previdenciário",
    ctag2:"Direito Tributário",
    ctag3:"Planejamento",
    ctag4:"Regularização",
    ctag5:"Revisões",

    footer: "© 2026 • Gabriela Cordeiro"
  },

  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_edu: "Education",
    nav_exp: "Experience",
    nav_contact: "Contact",
    btn_pdf: "Save as PDF",
    btn_agendar: "Schedule appointment",

    modal_title: "Choose your language",
    modal_sub: "You can change it anytime using the buttons at the top.",

    home_pill: "Ethics • Strategy • Human-centered service",
    home_h1: "Social Security and Tax Law focused on safety, clarity, and results.",
    home_p1: "I am a lawyer working in <strong>Social Security Law</strong> and <strong>Tax Law</strong>, focused on delivering safe, strategic, and personalized legal solutions.",
    home_p2: "My practice is guided by ethics, responsibility, and commitment to outcomes. I seek to understand each client’s reality to build the best legal strategy with clarity, transparency, and efficiency.",

    home_h2_help: "How I can help",
    home_card1_t: "Social Security Law",
    home_card1_d: "Planning, granting and reviewing benefits, helping clients secure their rights with confidence.",
    home_card2_t: "Tax Law",
    home_card2_d: "Guidance, tax credit recovery, fiscal regularization, and tax planning to reduce risk and optimize resources.",
    home_card3_t: "Strategy & prevention",
    home_card3_d: "Scenario analysis, risk assessment, and options to define the best path.",
    home_card4_t: "Human-centered service",
    home_card4_d: "Listening, empathy, responsibility, and close follow-up at every stage.",

    home_h2_comp: "Core skills",
    comp1_t: "Ethics & responsibility",
    comp1_d: "Confidentiality, best practices, and legal safety.",
    comp2_t: "Clear communication",
    comp2_d: "Transparent guidance with defined next steps.",
    comp3_t: "Technical analysis",
    comp3_d: "Document review, risk evaluation, and strategy.",
    comp4_t: "Close follow-up",
    comp4_d: "Consistent support throughout the process.",

    side_kicker: "Service",
    side_row1_l: "Format",
    side_row1_v: "Online and in-person",
    side_row2_l: "Focus",
    side_row2_v: "Social Security & Tax",
    side_row3_l: "Style",
    side_row3_v: "Clear, human, and technical",
    side_row4_l: "Goal",
    side_row4_v: "Safe and strategic solutions",
    side_quick_title: "Quick contact",
    side_quick_email: "Email",
    side_quick_wa: "WhatsApp",
    side_tags_title: "Practice areas",
    tag1: "Social Security",
    tag2: "Tax",
    tag3: "Planning",
    tag4: "Regularization",
    tag5: "Reviews",

    about_pill: "About • Professional profile",
    about_h1: "Close support, with technique and trust.",
    about_p1: "I work in Social Security Law and Tax Law, focused on safe, strategic, and personalized solutions.",
    about_p2: "My practice is guided by ethics, responsibility, and commitment to results, always aiming for clarity and efficiency.",
    about_p3: "Great service goes beyond the case: it includes listening, empathy, responsibility, and close follow-up in every step.",
    about_h2_help: "How I can help",
    about_card1_t: "Social Security Law",
    about_card1_d: "Planning, granting and reviewing benefits with safe guidance.",
    about_card2_t: "Tax Law",
    about_card2_d: "Guidance, credit recovery, fiscal regularization, and planning to reduce risks.",
    about_h2_comp: "Skills",
    about_comp1_t: "Listening & empathy",
    about_comp1_d: "Understanding your context to guide you objectively.",
    about_comp2_t: "Transparency",
    about_comp2_d: "Clear explanations about scenarios and timelines.",
    about_comp3_t: "Strategy & prevention",
    about_comp3_d: "Planning to reduce risk and decide with technical basis.",
    about_comp4_t: "Close follow-up",
    about_comp4_d: "Presence at every stage with consistent updates.",

    edu_pill: "Education • Postgraduate",
    edu_h1: "Education and specialization",
    edu_p1: "Academic training and postgraduate programs focused on practice and strategy.",
    edu_h2: "Education",
    edu_item1_t: "Law degree",
    edu_item1_d: "Law • Estácio • Teresina, PI (Brazil)",
    edu_h2_pos: "Postgraduate programs",
    edu_pos_1: "Tax Law • EBRADI",
    edu_pos_2: "Administrative Tax Procedure & Tax Strategy",
    edu_pos_3: "Tax Practice & Tax Enforcement (Legale)",
    edu_pos_4: "Social Security Law & Procedure",
    edu_h2_focus: "Focus areas",
    edu_focus1_t: "Social Security",
    edu_focus1_d: "Planning, granting and reviewing benefits with safe guidance.",
    edu_focus2_t: "Tax",
    edu_focus2_d: "Regularization, credit recovery and tax planning with risk reduction.",

    exp_pill: "Experience • Practice",
    exp_h1: "Consultative and strategic service",
    exp_p1: "Focused on safe guidance and personalized solutions with close follow-up and transparent communication.",
    exp_h2: "Common deliverables",
    exp_card1_t: "Social Security",
    exp_card1_d: "Planning, granting and benefit reviews; document analysis and strategy.",
    exp_card2_t: "Tax",
    exp_card2_d: "Regularization, credit recovery and planning to reduce risk and optimize resources.",
    exp_card3_t: "Diagnosis & strategy",
    exp_card3_d: "Scenario assessment, options, and an objective action plan.",
    exp_card4_t: "Follow-up",
    exp_card4_d: "Ongoing support and clear next steps.",
    exp_h2_tags: "Applied skills",
    exp_tag1: "Technical analysis",
    exp_tag2: "Clear communication",
    exp_tag3: "Risk management",
    exp_tag4: "Human-centered service",
    exp_tag5: "Strategy",

    contact_pill: "Contact",
    contact_h1: "Let’s talk",
    contact_p1: "For faster service, use WhatsApp or email a brief summary of your case. You will receive a clear and careful response.",
    contact_card1_t: "Email",
    contact_card2_t: "WhatsApp",
    contact_card3_t: "Service",
    contact_card3_d: "By appointment • Online and in-person • Close follow-up.",
    contact_card4_t: "Before sending",
    contact_card4_d: "If possible, include: objective, deadlines, key documents and a brief context.",
    contact_h2: "Practice areas",
    ctag1:"Social Security Law",
    ctag2:"Tax Law",
    ctag3:"Planning",
    ctag4:"Regularization",
    ctag5:"Reviews",

    footer: "© 2026 • Gabriela Cordeiro"
  },

  es: {
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_edu: "Educación",
    nav_exp: "Experiencia",
    nav_contact: "Contacto",
    btn_pdf: "Guardar en PDF",
    btn_agendar: "Agendar cita",

    modal_title: "Elige el idioma",
    modal_sub: "Puedes cambiarlo cuando quieras con los botones de arriba.",

    home_pill: "Ética • Estrategia • Atención humana",
    home_h1: "Derecho Previsional y Tributario con enfoque en seguridad, claridad y resultados.",
    home_p1: "Soy abogada en <strong>Derecho Previsional</strong> y <strong>Derecho Tributario</strong>, enfocada en soluciones jurídicas seguras, estratégicas y personalizadas.",
    home_p2: "Mi trabajo se guía por ética, responsabilidad y compromiso con resultados. Busco comprender la realidad de cada persona o empresa para construir la mejor estrategia con claridad y eficiencia.",

    home_h2_help: "Cómo puedo ayudarte",
    home_card1_t: "Derecho Previsional",
    home_card1_d: "Planificación, concesión y revisión de beneficios, con orientación segura.",
    home_card2_t: "Derecho Tributario",
    home_card2_d: "Orientación, recuperación de créditos, regularización fiscal y planificación tributaria para reducir riesgos.",
    home_card3_t: "Estrategia y prevención",
    home_card3_d: "Análisis de escenario, riesgos y alternativas para definir el mejor camino.",
    home_card4_t: "Atención humanizada",
    home_card4_d: "Escucha, empatía y acompañamiento cercano en todas las etapas.",

    home_h2_comp: "Competencias",
    comp1_t: "Ética y responsabilidad",
    comp1_d: "Seguridad jurídica, confidencialidad y buenas prácticas.",
    comp2_t: "Comunicación clara",
    comp2_d: "Orientación transparente y próximos pasos definidos.",
    comp3_t: "Análisis técnico",
    comp3_d: "Revisión de documentos, evaluación de riesgos y estrategia.",
    comp4_t: "Acompañamiento cercano",
    comp4_d: "Soporte constante durante todo el proceso.",

    side_kicker: "Atención",
    side_row1_l: "Formato",
    side_row1_v: "Online y presencial",
    side_row2_l: "Enfoque",
    side_row2_v: "Previsional y Tributario",
    side_row3_l: "Estilo",
    side_row3_v: "Claro, humano y técnico",
    side_row4_l: "Objetivo",
    side_row4_v: "Soluciones seguras y estratégicas",
    side_quick_title: "Contacto rápido",
    side_quick_email: "Correo",
    side_quick_wa: "WhatsApp",
    side_tags_title: "Áreas",
    tag1: "Previsional",
    tag2: "Tributario",
    tag3: "Planificación",
    tag4: "Regularización",
    tag5: "Revisiones",

    about_pill: "Sobre mí • Perfil profesional",
    about_h1: "Acompañamiento cercano, con técnica y confianza.",
    about_p1: "Actúo en Derecho Previsional y Derecho Tributario, con soluciones seguras, estratégicas y personalizadas.",
    about_p2: "Mi práctica se guía por ética, responsabilidad y compromiso con resultados, con claridad y eficiencia.",
    about_p3: "Una buena atención va más allá del proceso: escucha, empatía y acompañamiento cercano en todas las etapas.",
    about_h2_help: "Cómo puedo ayudarte",
    about_card1_t: "Derecho Previsional",
    about_card1_d: "Planificación, concesión y revisión de beneficios con orientación segura.",
    about_card2_t: "Derecho Tributario",
    about_card2_d: "Orientación, recuperación de créditos, regularización fiscal y planificación para reducir riesgos.",
    about_h2_comp: "Competencias",
    about_comp1_t: "Escucha y empatía",
    about_comp1_d: "Comprender tu contexto para orientar con objetividad.",
    about_comp2_t: "Transparencia",
    about_comp2_d: "Explicaciones claras sobre escenarios y plazos.",
    about_comp3_t: "Estrategia y prevención",
    about_comp3_d: "Planificación para reducir riesgos y decidir con base técnica.",
    about_comp4_t: "Acompañamiento cercano",
    about_comp4_d: "Presencia en cada etapa con actualizaciones constantes.",

    edu_pill: "Educación • Posgrado",
    edu_h1: "Educación y especialización",
    edu_p1: "Formación académica y posgrados con enfoque práctico y estratégico.",
    edu_h2: "Formación",
    edu_item1_t: "Grado",
    edu_item1_d: "Derecho • Estácio • Teresina/PI",
    edu_h2_pos: "Posgrados",
    edu_pos_1: "Derecho Tributario • EBRADI",
    edu_pos_2: "Proceso Administrativo Fiscal y Estrategia Tributaria",
    edu_pos_3: "Práctica Tributaria y Ejecuciones Fiscales (Legale)",
    edu_pos_4: "Derecho Previsional y Proceso",
    edu_h2_focus: "Enfoque",
    edu_focus1_t: "Previsional",
    edu_focus1_d: "Planificación, concesiones y revisiones con orientación segura.",
    edu_focus2_t: "Tributario",
    edu_focus2_d: "Regularización, recuperación de créditos y planificación con reducción de riesgos.",

    exp_pill: "Experiencia • Actuación",
    exp_h1: "Atención consultiva y estratégica",
    exp_p1: "Enfoque en orientación segura y soluciones personalizadas con acompañamiento cercano.",
    exp_h2: "Entregables comunes",
    exp_card1_t: "Previsional",
    exp_card1_d: "Planificación, concesiones y revisiones; análisis documental y estrategia.",
    exp_card2_t: "Tributario",
    exp_card2_d: "Regularización, recuperación de créditos y planificación para reducir riesgos.",
    exp_card3_t: "Diagnóstico y estrategia",
    exp_card3_d: "Evaluación del escenario, alternativas y plan de acción.",
    exp_card4_t: "Acompañamiento",
    exp_card4_d: "Soporte continuo y próximos pasos claros.",
    exp_h2_tags: "Competencias aplicadas",
    exp_tag1: "Análisis técnico",
    exp_tag2: "Comunicación clara",
    exp_tag3: "Gestión de riesgos",
    exp_tag4: "Atención humanizada",
    exp_tag5: "Estrategia",

    contact_pill: "Contacto",
    contact_h1: "¿Hablamos?",
    contact_p1: "Para una atención más rápida, usa WhatsApp o envía un correo con un resumen del caso. Respuesta clara y cuidadosa.",
    contact_card1_t: "Correo",
    contact_card2_t: "WhatsApp",
    contact_card3_t: "Atención",
    contact_card3_d: "Con cita • Online y presencial • Acompañamiento cercano.",
    contact_card4_t: "Antes de enviar",
    contact_card4_d: "Si puedes, incluye: objetivo, plazos, documentos y contexto breve.",
    contact_h2: "Áreas",
    ctag1:"Derecho Previsional",
    ctag2:"Derecho Tributario",
    ctag3:"Planificación",
    ctag4:"Regularización",
    ctag5:"Revisiones",

    footer: "© 2026 • Gabriela Cordeiro"
  }
};

function setText(key, value, isHTML=false){
  const el = document.querySelector(`[data-i18n="${key}"]`);
  if(!el) return;
  if(isHTML) el.innerHTML = value;
  else el.textContent = value;
}

function applyLanguage(lang){
  const dict = i18n[lang] || i18n.pt;

  document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : lang);

  // nav + buttons
  setText("nav_home", dict.nav_home);
  setText("nav_about", dict.nav_about);
  setText("nav_edu", dict.nav_edu);
  setText("nav_exp", dict.nav_exp);
  setText("nav_contact", dict.nav_contact);
  setText("btn_pdf", dict.btn_pdf);
  setText("btn_agendar", dict.btn_agendar);

  // modal
  setText("modal_title", dict.modal_title);
  setText("modal_sub", dict.modal_sub);

  // HOME
  setText("home_pill", dict.home_pill);
  setText("home_h1", dict.home_h1);
  setText("home_p1", dict.home_p1, true);
  setText("home_p2", dict.home_p2);

  setText("home_h2_help", dict.home_h2_help);
  setText("home_card1_t", dict.home_card1_t);
  setText("home_card1_d", dict.home_card1_d);
  setText("home_card2_t", dict.home_card2_t);
  setText("home_card2_d", dict.home_card2_d);
  setText("home_card3_t", dict.home_card3_t);
  setText("home_card3_d", dict.home_card3_d);
  setText("home_card4_t", dict.home_card4_t);
  setText("home_card4_d", dict.home_card4_d);

  setText("home_h2_comp", dict.home_h2_comp);
  setText("comp1_t", dict.comp1_t);
  setText("comp1_d", dict.comp1_d);
  setText("comp2_t", dict.comp2_t);
  setText("comp2_d", dict.comp2_d);
  setText("comp3_t", dict.comp3_t);
  setText("comp3_d", dict.comp3_d);
  setText("comp4_t", dict.comp4_t);
  setText("comp4_d", dict.comp4_d);

  // HOME SIDE
  setText("side_kicker", dict.side_kicker);
  setText("side_row1_l", dict.side_row1_l);
  setText("side_row1_v", dict.side_row1_v);
  setText("side_row2_l", dict.side_row2_l);
  setText("side_row2_v", dict.side_row2_v);
  setText("side_row3_l", dict.side_row3_l);
  setText("side_row3_v", dict.side_row3_v);
  setText("side_row4_l", dict.side_row4_l);
  setText("side_row4_v", dict.side_row4_v);
  setText("side_quick_title", dict.side_quick_title);
  setText("side_quick_email", dict.side_quick_email);
  setText("side_quick_wa", dict.side_quick_wa);
  setText("side_tags_title", dict.side_tags_title);
  setText("tag1", dict.tag1);
  setText("tag2", dict.tag2);
  setText("tag3", dict.tag3);
  setText("tag4", dict.tag4);
  setText("tag5", dict.tag5);

  // ABOUT
  setText("about_pill", dict.about_pill);
  setText("about_h1", dict.about_h1);
  setText("about_p1", dict.about_p1);
  setText("about_p2", dict.about_p2);
  setText("about_p3", dict.about_p3);
  setText("about_h2_help", dict.about_h2_help);
  setText("about_card1_t", dict.about_card1_t);
  setText("about_card1_d", dict.about_card1_d);
  setText("about_card2_t", dict.about_card2_t);
  setText("about_card2_d", dict.about_card2_d);
  setText("about_h2_comp", dict.about_h2_comp);
  setText("about_comp1_t", dict.about_comp1_t);
  setText("about_comp1_d", dict.about_comp1_d);
  setText("about_comp2_t", dict.about_comp2_t);
  setText("about_comp2_d", dict.about_comp2_d);
  setText("about_comp3_t", dict.about_comp3_t);
  setText("about_comp3_d", dict.about_comp3_d);
  setText("about_comp4_t", dict.about_comp4_t);
  setText("about_comp4_d", dict.about_comp4_d);

  // EDU
  setText("edu_pill", dict.edu_pill);
  setText("edu_h1", dict.edu_h1);
  setText("edu_p1", dict.edu_p1);
  setText("edu_h2", dict.edu_h2);
  setText("edu_item1_t", dict.edu_item1_t);
  setText("edu_item1_d", dict.edu_item1_d);
  setText("edu_h2_pos", dict.edu_h2_pos);
  setText("edu_pos_1", dict.edu_pos_1);
  setText("edu_pos_2", dict.edu_pos_2);
  setText("edu_pos_3", dict.edu_pos_3);
  setText("edu_pos_4", dict.edu_pos_4);
  setText("edu_h2_focus", dict.edu_h2_focus);
  setText("edu_focus1_t", dict.edu_focus1_t);
  setText("edu_focus1_d", dict.edu_focus1_d);
  setText("edu_focus2_t", dict.edu_focus2_t);
  setText("edu_focus2_d", dict.edu_focus2_d);

  // EXP
  setText("exp_pill", dict.exp_pill);
  setText("exp_h1", dict.exp_h1);
  setText("exp_p1", dict.exp_p1);
  setText("exp_h2", dict.exp_h2);
  setText("exp_card1_t", dict.exp_card1_t);
  setText("exp_card1_d", dict.exp_card1_d);
  setText("exp_card2_t", dict.exp_card2_t);
  setText("exp_card2_d", dict.exp_card2_d);
  setText("exp_card3_t", dict.exp_card3_t);
  setText("exp_card3_d", dict.exp_card3_d);
  setText("exp_card4_t", dict.exp_card4_t);
  setText("exp_card4_d", dict.exp_card4_d);
  setText("exp_h2_tags", dict.exp_h2_tags);
  setText("exp_tag1", dict.exp_tag1);
  setText("exp_tag2", dict.exp_tag2);
  setText("exp_tag3", dict.exp_tag3);
  setText("exp_tag4", dict.exp_tag4);
  setText("exp_tag5", dict.exp_tag5);

  // CONTACT
  setText("contact_pill", dict.contact_pill);
  setText("contact_h1", dict.contact_h1);
  setText("contact_p1", dict.contact_p1);
  setText("contact_card1_t", dict.contact_card1_t);
  setText("contact_card2_t", dict.contact_card2_t);
  setText("contact_card3_t", dict.contact_card3_t);
  setText("contact_card3_d", dict.contact_card3_d);
  setText("contact_card4_t", dict.contact_card4_t);
  setText("contact_card4_d", dict.contact_card4_d);
  setText("contact_h2", dict.contact_h2);
  setText("ctag1", dict.ctag1);
  setText("ctag2", dict.ctag2);
  setText("ctag3", dict.ctag3);
  setText("ctag4", dict.ctag4);
  setText("ctag5", dict.ctag5);

  // Footer
  setText("footer", dict.footer);

  // UI language buttons state
  document.querySelectorAll(".langbtn").forEach(b => {
    b.classList.toggle("is-active", b.dataset.lang === lang);
  });

  // Save
  localStorage.setItem("site_lang", lang);
}

function showLangModal(){
  const modal = document.getElementById("langModal");
  if(modal) modal.classList.add("show");
}

function hideLangModal(){
  const modal = document.getElementById("langModal");
  if(modal) modal.classList.remove("show");
}

document.addEventListener("DOMContentLoaded", () => {
  // Page fade-in
  const page = document.querySelector(".page");
  requestAnimationFrame(() => page?.classList.add("is-ready"));

  // Nav transition
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
    const text = "Olá, Dra. Gabriela! Gostaria de agendar um atendimento. Pode me orientar sobre os próximos passos?";
    window.open(`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(text)}`, "_blank");
  });

  // Email & WhatsApp links
  const emailA = document.querySelectorAll('[data-email="true"]');
  emailA.forEach(a => a.setAttribute("href", `mailto:${EMAIL}`));
  const waA = document.querySelectorAll('[data-wa="true"]');
  waA.forEach(a => a.setAttribute("href", `https://wa.me/${PHONE_WA}`));

  // Language buttons
  document.querySelectorAll(".langbtn").forEach(btn => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  // Modal buttons
  document.querySelectorAll("[data-picklang]").forEach(btn => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.picklang);
      hideLangModal();
    });
  });

  // Pick language or show modal first time
  const saved = localStorage.getItem("site_lang");
  if(!saved){
    applyLanguage("pt");
    showLangModal();
  } else {
    applyLanguage(saved);
  }

  // Close modal if click outside
  const modal = document.getElementById("langModal");
  if(modal){
    modal.addEventListener("click", (e) => {
      if(e.target === modal) hideLangModal();
    });
  }
});
