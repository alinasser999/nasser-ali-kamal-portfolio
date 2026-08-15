import { portfolioData } from './data.js';
import {
  createIcons,
  Briefcase,
  HardHat,
  Award,
  Compass,
  Hammer,
  CheckCheck,
  CheckCircle2,
  Building,
  Building2,
  Layers,
  Zap,
  ShieldCheck,
  ClipboardList,
  ArrowLeft,
  ArrowRight,
  Printer,
  Phone,
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  X,
  ExternalLink,
  ChevronRight,
  Eye,
  Sliders,
  FileText,
  Search,
  Grid,
  LayoutGrid
} from 'lucide';

// Translations Dictionary for UI static text
const translations = {
  ar: {
    top_status: "سجل معتمد - الهيئة السعودية للمهندسين | الرياض، المملكة العربية السعودية",
    brand_name: "م. ناصر علي كمال",
    brand_sub: "مدير تطوير عقاري ومعماري رئيسي",
    nav_about: "الرؤية والخبرة",
    nav_competencies: "التخصصات",
    nav_projects: "المشاريع المطورة",
    nav_gallery: "سجل التوثيق الميداني",
    nav_clients: "العملاء والشركاء",
    nav_credentials: "الاعتمادات",
    nav_contact: "طلب استشارة",
    btn_print: "تصدير الدوسيه PDF",
    btn_cad: "نمط CAD Blueprint",
    quick_about: "الرؤية",
    quick_projects: "المشاريع",
    quick_gallery: "التوثيق",
    quick_contact: "استشارة",
    swipe_hint: "اسحب أفقياً لاستعراض المشاريع",
    swipe_gallery_hint: "اسحب لمشاهدة لقطات التنفيذ الميداني",
    btn_see_all_short: "عرض فهرس المشاريع بالكامل",
    btn_see_all: "فتح دليل كافة المشاريع (12 مشروعاً مطوراً)",
    archive_badge: "ARCHITECTURAL DOSSIER CATALOG",
    archive_title: "فهرس المشاريع الشامل (12 صرحاً ومجمعاً)",
    archive_search_placeholder: "ابحث باسم المشروع، الكود، أو الجهة (مثال: جامعة نورة، بريمان، KAP)...",
    hero_badge_loc: "المملكة العربية السعودية",
    hero_greeting: "المعماري ومدير التطوير",
    hero_name: "ناصر علي كمال",
    hero_name_full: "م. ناصر علي كمال",
    hero_subtitle: "دمج الرؤية المعمارية الإبداعية مع حوكمة المشاريع الكبرى، البنية التحتية، ومشاريع تسليم المفتاح EPC بالمملكة العربية السعودية.",
    tab_architect: "الرؤية المعمارية",
    tab_dev: "إدارة التطوير EPC",
    persona_arch_title: "الرؤية المعمارية وتخطيط الفراغات",
    persona_arch_desc: "صياغة الهوية المعمارية، تصميم الواجهات المستدامة والمعاصرة، التنسيق الفراغي، والديكورات الترفيهية والتجارية الفاخرة ومطابقة كود البناء السعودي.",
    persona_dev_title: "إدارة التطوير العقاري وتسليم المفتاح (EPC)",
    persona_dev_desc: "قيادة الجدوى الاقتصادية، حوكمة الميزانيات والعطاءات، إدارة التوريدات وسلاسل الإمداد، والإشراف الميداني الصارم حتى التشغيل والتسليم.",
    tag_arch: "Architecture & Master-Planning",
    tag_dev: "Real Estate Development",
    tag_turnkey: "Turnkey EPC Delivery",
    tag_code: "Saudi Building Code SBC",
    hero_btn_projects: "استعراض سجل المشاريع",
    hero_btn_contact: "طلب استشارة أو اجتماع",
    legend_title: "المعماري ومدير التطوير",
    caption_name: "م. ناصر علي كمال",
    caption_role: "مدير تطوير عقاري ومهندس معماري",
    caption_site_role: "مدير تطوير وإشراف ميداني EPC",
    sec_about_sub: "الرؤية والخبرة المعمارية",
    sec_about_title: "فلسفة التطوير والتصميم الشامل",
    pillar1_title: "التصميم المعماري وتخطيط الماستر بلان",
    pillar1_desc: "دراسة الفراغات، الكتل المعمارية، وابتكار واجهات معاصرة مستدامة.",
    pillar2_title: "إدارة التطوير العقاري والمناقصات",
    pillar2_desc: "إعداد دراسات الجدوى، حوكمة الميزانيات، التوريدات، وإدارة المقاولين.",
    pillar3_title: "تسليم المفتاح والالتزام بالجودة والسلامة",
    pillar3_desc: "مطابقة اشتراطات كود البناء السعودي (SBC) والدفاع المدني والإشراف الصارم.",
    team_caption_1: "المهندس ناصر علي كمال مع قيادات وفريق العمل في حفل تسليم وافتتاح المشاريع",
    team_caption_2: "الجولات الميدانية والإشراف الهندسي المباشر على جودة التنفيذ بالموقع",
    sec_comp_sub: "القدرات والخبرات التخصصية",
    sec_comp_title: "مجالات التميز في التطوير والمعمار",
    sec_proj_sub: "سابقة الأعمال والمنجزات",
    sec_proj_title: "أبرز المشاريع الاستراتيجية المطورة",
    sec_proj_desc: "توثيق تفصيلي للمشاريع الوطنية الكبرى، أعمال البنية التحتية، الأبراج، والمجمعات السكنية والترفيهية.",
    btn_view_details: "عرض ملف وتفاصيل المشروع",
    sec_gallery_sub: "التنفيذ الميداني بالصور",
    sec_gallery_title: "سجل التوثيق الهندسي والميداني",
    sec_gallery_desc: "صور واقعية من مراحل صب الخرسانات، تركيب حديد التسليح، الجدران الاستنادية، والتشطيبات الفاخرة.",
    sec_cred_sub: "الوثائق والشهادات الرسمية",
    sec_cred_title: "الاعتمادات والتراخيص النظامية",
    sec_clients_sub: "سجل الثقة والشركاء الاستراتيجيين",
    sec_clients_title: "كبار الشركاء والجهات الحكومية وصناع التطوير",
    sec_clients_desc: "سجل حافل من الشراكات المعتمدة في إدارة التطوير، التنفيذ العام، وتسليم المفتاح EPC مع كبرى الوزارات السيادية والشركات المساهمة والمجموعات الاستثمارية في المملكة.",
    trust_metric_gov: "وزارة وجهة حكومية سيادية",
    trust_metric_corp: "شركة مساهمة ومطور عقاري",
    trust_metric_delivery: "نسبة الإنجاز والاعتماد النظامي",
    trust_metric_val: "ريال حجم المشاريع المنفذة",
    official_boards_tag: "OFFICIAL ACCREDITED CLIENT REGISTRY • DOCUMENTED PROOF",
    official_boards_title: "لوحات العملاء والشركاء المعتمدة رسمياً في وثائق وسجلات المنشأة",
    btn_zoom_proof: "تكبير وفحص السجل المعتمد",
    clients_proof_1: "عملاء القطاع التجاري وكبرى الشركات المساهمة والمطورين",
    clients_proof_2: "الوزارات والجهات الحكومية وشركاء النجاح السياديين",
    sec_contact_sub: "التواصل المباشر",
    sec_contact_title: "جاهزون لبحث المشاريع والاستشارات الإنشائية والمعمارية",
    sec_contact_desc: "للتواصل مع المعماري ومدير التطوير ناصر علي كمال بخصوص إدارة التطوير العقاري، الاستشارات المعمارية، والإشراف والتنفيذ العام للمشاريع في المملكة العربية السعودية.",
    contact_phone_label: "الجوال المباشر / واتساب",
    contact_landline_label: "الهاتف الثابت",
    contact_email_label: "البريد الإلكتروني الرسمي",
    contact_location_label: "المقر والعنوان",
    contact_location_val: "الرياض - حي الوزارات - المملكة العربية السعودية",
    btn_whatsapp: "مراسلة مباشرة عبر واتساب",
    form_title: "إرسال استفسار أو طلب استشارة",
    form_name: "الاسم الكريم / الجهة",
    form_phone: "رقم الهاتف أو الجوال",
    form_project_type: "نوع المشروع أو الاستشارة",
    opt_arch: "استشارة وتصميم معماري",
    opt_dev: "إدارة وتطوير عقاري شامل",
    opt_turnkey: "مشروع تسليم مفتاح (Turnkey EPC)",
    opt_commercial: "مجمع تجاري أو سكني",
    opt_fitout: "تشطيبات وديكورات ترفيهية",
    opt_other: "أخرى",
    form_msg: "تفاصيل المشروع أو الاستشارة",
    form_submit: "إرسال الاستفسار الآن",
    footer_sub: "السيرة المهنية وملف سابقة الأعمال المعمارية والتطويرية | الرياض، المملكة العربية السعودية",
    footer_rights: "جميع الحقوق محفوظة - م. ناصر علي كمال",
    modal_highlights_title: "أبرز مواصفات ومنجزات المشروع:",
    modal_technical_title: "النطاق الهندسي والتطويري:"
  },
  en: {
    top_status: "Accredited Member - Saudi Council of Engineers | Riyadh, Kingdom of Saudi Arabia",
    brand_name: "Arch. Nasser Ali Kamal",
    brand_sub: "Senior Development Manager & Principal Architect",
    nav_about: "Vision & Experience",
    nav_competencies: "Specializations",
    nav_projects: "Key Projects",
    nav_gallery: "Site Ledger",
    nav_clients: "Clients & Partners",
    nav_credentials: "Credentials",
    nav_contact: "Consultation",
    btn_print: "Export Dossier PDF",
    btn_cad: "CAD Blueprint Mode",
    quick_about: "Vision",
    quick_projects: "Projects",
    quick_gallery: "Site Ledger",
    quick_contact: "Consult",
    swipe_hint: "Swipe horizontally to explore projects",
    swipe_gallery_hint: "Swipe to view on-site execution photos",
    btn_see_all_short: "View Complete Projects Index",
    btn_see_all: "Open Full Project Catalog (12 Projects)",
    archive_badge: "ARCHITECTURAL DOSSIER CATALOG",
    archive_title: "Complete Landmark Projects Index (12 Facilities)",
    archive_search_placeholder: "Search by project name, code, or client (e.g. Princess Nora, Briman, KAP)...",
    hero_badge_loc: "Kingdom of Saudi Arabia",
    hero_greeting: "Architect & Development Director",
    hero_name: "Nasser Ali Kamal",
    hero_name_full: "Arch. Nasser Ali Kamal",
    hero_subtitle: "Harmonizing visionary architectural design with mega-project development governance, strategic infrastructure, and turnkey EPC execution across Saudi Arabia.",
    tab_architect: "Architectural Vision",
    tab_dev: "EPC Development",
    persona_arch_title: "Architectural Direction & Spatial Design",
    persona_arch_desc: "Mastering contextual architectural form, high-performance building envelopes, spatial circulation, thematic interiors, and Saudi Building Code (SBC) compliance.",
    persona_dev_title: "Real Estate Development & EPC Management",
    persona_dev_desc: "Leading the complete project lifecycle: feasibility models, tender orchestration, procurement logistics, on-site QA/QC, and turnkey commissioning.",
    tag_arch: "Architecture & Master-Planning",
    tag_dev: "Real Estate Development",
    tag_turnkey: "Turnkey EPC Delivery",
    tag_code: "Saudi Building Code SBC",
    hero_btn_projects: "Explore Project Folio",
    hero_btn_contact: "Request Consultation",
    legend_title: "Architect & Development Director",
    caption_name: "Arch. Nasser Ali Kamal",
    caption_role: "Development Manager & Architect",
    caption_site_role: "EPC Development & Site Director",
    sec_about_sub: "Vision & Practice",
    sec_about_title: "Comprehensive Development & Architectural Philosophy",
    pillar1_title: "Architectural Design & Master Planning",
    pillar1_desc: "Spatial programming, massing studies, and innovative sustainable modern facades.",
    pillar2_title: "Development Management & Tender Strategy",
    pillar2_desc: "Feasibility studies, budget governance, procurement, and contractor orchestration.",
    pillar3_title: "Turnkey Commissioning & Quality Assurance",
    pillar3_desc: "Strict compliance with Saudi Building Code (SBC) and Civil Defense fire-life safety mandates.",
    team_caption_1: "Arch. Nasser Ali Kamal with executive leadership and engineering teams celebrating milestone facility handovers",
    team_caption_2: "Direct on-site engineering supervision and technical quality control audits at active work sites",
    sec_comp_sub: "Core Specializations",
    sec_comp_title: "Domains of Excellence in Architecture & Development",
    sec_proj_sub: "Track Record & Folio",
    sec_proj_title: "Featured Landmark Developed Projects",
    sec_proj_desc: "Comprehensive engineering dossier covering national infrastructure, turnkey government complexes, commercial high-rises, and thematic entertainment destinations.",
    btn_view_details: "View Project Dossier",
    sec_gallery_sub: "Field Execution in Photos",
    sec_gallery_title: "Engineering Progress & Construction Ledger",
    sec_gallery_desc: "Real-world photographic documentation of deep foundation pours, rebar reinforcement, retaining walls, and luxury interior completions.",
    sec_cred_sub: "Official Documentation",
    sec_cred_title: "Corporate Licensing & Accreditations",
    sec_clients_sub: "Strategic Partnerships & Track Record",
    sec_clients_title: "Sovereign Ministries & Premier Corporate Developers",
    sec_clients_desc: "A proven track record of accredited development management, general contracting, and turnkey EPC delivery with Saudi Arabia's premier ministries, publicly traded industrial groups, and real estate developers.",
    trust_metric_gov: "Sovereign Ministries & Gov Bodies",
    trust_metric_corp: "Publicly Traded & Corporate Developers",
    trust_metric_delivery: "Milestone Compliance & Statutory Approval",
    trust_metric_val: "SAR Total Project Value Supervised",
    official_boards_tag: "OFFICIAL ACCREDITED CLIENT REGISTRY • DOCUMENTED PROOF",
    official_boards_title: "Official Government & Corporate Client Registries from Company Dossier",
    btn_zoom_proof: "Click to Inspect Documented Board",
    clients_proof_1: "Commercial Conglomerates & Corporate Developers",
    clients_proof_2: "Government Ministries & Sovereign Authorities",
    sec_contact_sub: "Get In Touch",
    sec_contact_title: "Ready to Discuss Real Estate Development & Architectural Consultations",
    sec_contact_desc: "Available for real estate development management, architectural consultations, and turnkey project direction across Saudi Arabia.",
    contact_phone_label: "Direct Mobile / WhatsApp",
    contact_landline_label: "Landline Office",
    contact_email_label: "Official Email",
    contact_location_label: "Headquarters",
    contact_location_val: "Al Wizarat Dist, Riyadh, Kingdom of Saudi Arabia",
    btn_whatsapp: "Chat on WhatsApp Directly",
    form_title: "Send an Inquiry or Request a Consultation",
    form_name: "Your Name / Organization",
    form_phone: "Phone / Mobile Number",
    form_project_type: "Project or Consultation Type",
    opt_arch: "Architectural Design & Space Planning",
    opt_dev: "Real Estate Development Management",
    opt_turnkey: "Turnkey EPC Project Delivery",
    opt_commercial: "Commercial Complex or Tower",
    opt_fitout: "Thematic / Entertainment Fit-Out",
    opt_other: "Other Inquiries",
    form_msg: "Project Details or Consultation Request",
    form_submit: "Submit Request Now",
    footer_sub: "Senior Development Manager & Architect Dossier | Riyadh, Kingdom of Saudi Arabia",
    footer_rights: "All Rights Reserved - Arch. Nasser Ali Kamal",
    modal_highlights_title: "Key Specifications & Milestone Achievements:",
    modal_technical_title: "Engineering & Development Scope:"
  }
};

let currentLang = 'ar';
let activeCategory = 'all';
let archiveCategory = 'all';
let archiveSearchTerm = '';
let currentPersona = 'architect';
let statsAnimated = false;
window.currentLang = currentLang;

// Initialize Lucide Icons
function refreshIcons() {
  createIcons({
    icons: {
      Briefcase,
      HardHat,
      Award,
      Compass,
      Hammer,
      CheckCheck,
      CheckCircle2,
      Building,
      Building2,
      Layers,
      Zap,
      ShieldCheck,
      ClipboardList,
      ArrowLeft,
      ArrowRight,
      Printer,
      Phone,
      PhoneCall,
      Mail,
      MapPin,
      MessageCircle,
      Send,
      X,
      ExternalLink,
      ChevronRight,
      Eye,
      Sliders,
      FileText,
      Search,
      Grid,
      LayoutGrid
    }
  });
}

// Update DOM elements with translations
function updateLanguage(lang) {
  currentLang = lang;
  window.currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Update button appearance
  const langToggle = document.getElementById('langToggle');
  if (lang === 'ar') {
    langToggle.innerHTML = '<span class="lang-flag">🇬🇧</span><span class="lang-text">EN</span>';
  } else {
    langToggle.innerHTML = '<span class="lang-flag">🇸🇦</span><span class="lang-text">عربي</span>';
  }

  const archiveSearchInput = document.getElementById('archiveSearchInput');
  if (archiveSearchInput) {
    archiveSearchInput.placeholder = translations[lang].archive_search_placeholder;
  }

  // Update static i18n tags
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Re-render dynamic components
  renderPersona();
  renderStats();
  renderAboutText();
  renderCompetencies();
  renderCategoryFilters();
  renderProjects();
  renderGallery();
  renderCredentials();
  renderClients();
  renderArchiveFilters();
  renderArchiveProjects();
  refreshIcons();
  setupScrollReveals();
}

// Render Persona Highlight & Portrait
function renderPersona() {
  const personaTitle = document.getElementById('personaTitle');
  const personaDesc = document.getElementById('personaDesc');
  const portraitSubText = document.getElementById('portraitSubText');
  const portraitDwgCode = document.getElementById('portraitDwgCode');

  if (currentPersona === 'architect') {
    if (personaTitle) personaTitle.textContent = translations[currentLang].persona_arch_title;
    if (personaDesc) personaDesc.textContent = translations[currentLang].persona_arch_desc;
    if (portraitSubText) portraitSubText.textContent = translations[currentLang].caption_role;
    if (portraitDwgCode) portraitDwgCode.textContent = 'DWG-DIR-001';
  } else {
    if (personaTitle) personaTitle.textContent = translations[currentLang].persona_dev_title;
    if (personaDesc) personaDesc.textContent = translations[currentLang].persona_dev_desc;
    if (portraitSubText) portraitSubText.textContent = translations[currentLang].caption_site_role;
    if (portraitDwgCode) portraitDwgCode.textContent = 'DWG-EPC-002';
  }
}

// Render Stats Matrix with Animated Number Count-Up
function renderStats() {
  const statsContainer = document.getElementById('statsMatrix');
  if (!statsContainer) return;

  statsContainer.innerHTML = portfolioData.profile.stats.map((stat) => `
    <div class="stat-box">
      <div class="stat-num">
        <span class="stat-counter" data-target="${stat.value.replace(/[^0-9]/g, '')}" data-suffix="${stat.value.replace(/[0-9]/g, '')}">
          ${stat.value}
        </span>
        <span class="stat-unit">${stat.unit[currentLang]}</span>
      </div>
      <span class="stat-label">${stat.label[currentLang]}</span>
      <span class="stat-sub">${stat.sub[currentLang]}</span>
    </div>
  `).join('');

  if (statsAnimated) {
    animateStatNumbers();
  }
}

// Number Count-Up Animation
function animateStatNumbers() {
  const counters = document.querySelectorAll('.stat-counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const suffix = counter.getAttribute('data-suffix') || '';
    if (isNaN(target)) return;

    let start = 0;
    const duration = 1600;
    const startTime = performance.now();

    function updateCounter(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(start + (target - start) * easeOut);
      counter.textContent = currentVal + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + suffix;
      }
    }
    requestAnimationFrame(updateCounter);
  });
}

// Render About Text
function renderAboutText() {
  const aboutContainer = document.getElementById('aboutText');
  if (aboutContainer) {
    aboutContainer.textContent = portfolioData.profile.about[currentLang];
  }
}

// Render Competencies
function renderCompetencies() {
  const container = document.getElementById('competenciesGrid');
  if (!container) return;

  container.innerHTML = portfolioData.competencies.map(comp => `
    <div class="comp-card">
      <div class="comp-card-header">
        <span class="comp-num font-mono">${comp.num}</span>
        <div class="comp-icon">
          <i data-lucide="${comp.icon}"></i>
        </div>
      </div>
      <h3 class="comp-title">${comp.title[currentLang]}</h3>
      <p class="comp-desc">${comp.desc[currentLang]}</p>
    </div>
  `).join('');
}

// Render Category Filter Tabs
function renderCategoryFilters() {
  const container = document.getElementById('categoryFilters');
  if (!container) return;

  container.innerHTML = portfolioData.categories.map((cat, idx) => `
    <button class="filter-btn ${cat.id === activeCategory ? 'active' : ''}" data-category="${cat.id}">
      <span class="font-mono">[ 0${idx} ]</span>
      <span>${cat.label[currentLang]}</span>
    </button>
  `).join('');

  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-category');
      renderCategoryFilters();
      renderProjects();
    });
  });
}

// Render Projects Folio Grid
function renderProjects() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  const filteredProjects = activeCategory === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  container.innerHTML = filteredProjects.map(proj => {
    return `
      <div class="project-folio-card" data-project-id="${proj.id}">
        <div class="folio-header font-mono">
          <span class="folio-code">${proj.dwgCode}</span>
          <span>${proj.year}</span>
        </div>
        <div class="folio-thumb-box">
          <img src="${proj.image}" alt="${proj.title[currentLang]}" class="folio-thumb" loading="lazy">
        </div>
        <div class="folio-body">
          <div class="folio-meta-row font-mono">
            <span class="folio-typology">${proj.typology[currentLang]}</span>
            <span>${proj.location[currentLang]}</span>
          </div>
          <h3 class="folio-title">${proj.title[currentLang]}</h3>
          <div class="folio-role">${proj.role[currentLang]}</div>
          <p class="folio-scope">${proj.scope[currentLang]}</p>
          
          <div class="folio-footer">
            <span class="font-mono">${translations[currentLang].btn_view_details}</span>
            <i data-lucide="arrow-left" class="arrow-icon"></i>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.project-folio-card').forEach(card => {
    card.addEventListener('click', () => {
      const projId = card.getAttribute('data-project-id');
      openProjectModal(projId);
    });
  });

  refreshIcons();
}

// Render Archive Filters
function renderArchiveFilters() {
  const container = document.getElementById('archiveCategoryFilters');
  if (!container) return;

  container.innerHTML = portfolioData.categories.map((cat, idx) => `
    <button class="archive-cat-btn ${cat.id === archiveCategory ? 'active' : ''}" data-category="${cat.id}">
      <span class="font-mono">0${idx} •</span> ${cat.label[currentLang]}
    </button>
  `).join('');

  container.querySelectorAll('.archive-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      archiveCategory = btn.getAttribute('data-category');
      renderArchiveFilters();
      renderArchiveProjects();
    });
  });
}

// Arabic normalization helper
function normalizeText(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/[\u064B-\u065F]/g, ''); // strip diacritics
}

// Render Archive Projects Grid
function renderArchiveProjects() {
  const container = document.getElementById('archiveProjectsGrid');
  if (!container) return;

  let list = portfolioData.projects;

  if (archiveCategory !== 'all') {
    list = list.filter(p => p.category === archiveCategory);
  }

  if (archiveSearchTerm.trim()) {
    const q = normalizeText(archiveSearchTerm.trim());
    list = list.filter(p => {
      const titleAr = normalizeText(p.title.ar);
      const titleEn = normalizeText(p.title.en);
      const code = normalizeText(p.dwgCode);
      const locAr = normalizeText(p.location.ar);
      const locEn = normalizeText(p.location.en);
      const clientAr = normalizeText(p.client.ar);
      const clientEn = normalizeText(p.client.en);
      return titleAr.includes(q) || titleEn.includes(q) || code.includes(q) || locAr.includes(q) || locEn.includes(q) || clientAr.includes(q) || clientEn.includes(q);
    });
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: #94A3B8;">
        <i data-lucide="search" style="width: 48px; height: 48px; margin-inline: auto; margin-bottom: 1rem; opacity: 0.5;"></i>
        <p style="font-size: 1.1rem; font-weight: 700; color: #FFFFFF;">${currentLang === 'ar' ? 'لم يتم العثور على مشاريع مطابقة للبحث' : 'No projects matching your search'}</p>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${currentLang === 'ar' ? 'جرب البحث باسم آخر أو اختر قسماً مختلفاً' : 'Try searching another keyword or selecting a different typology'}</p>
      </div>
    `;
    refreshIcons();
    return;
  }

  container.innerHTML = list.map(proj => `
    <div class="project-folio-card" data-project-id="${proj.id}">
      <div class="folio-header font-mono">
        <span class="folio-code">${proj.dwgCode}</span>
        <span>${proj.year}</span>
      </div>
      <div class="folio-thumb-box">
        <img src="${proj.image}" alt="${proj.title[currentLang]}" class="folio-thumb" loading="lazy">
      </div>
      <div class="folio-body">
        <div class="folio-meta-row font-mono">
          <span class="folio-typology">${proj.typology[currentLang]}</span>
          <span>${proj.location[currentLang]}</span>
        </div>
        <h3 class="folio-title">${proj.title[currentLang]}</h3>
        <div class="folio-role">${proj.role[currentLang]}</div>
        <p class="folio-scope">${proj.scope[currentLang]}</p>
        
        <div class="folio-footer">
          <span class="font-mono">${translations[currentLang].btn_view_details}</span>
          <i data-lucide="arrow-left" class="arrow-icon"></i>
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.project-folio-card').forEach(card => {
    card.addEventListener('click', () => {
      const projId = card.getAttribute('data-project-id');
      openProjectModal(projId);
    });
  });

  refreshIcons();
}

// Open Project Modal
function openProjectModal(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');

  let activeImg = project.gallery[0] || project.image;

  function buildModalHtml() {
    return `
      <div class="modal-gallery-hero">
        <img src="${activeImg}" alt="${project.title[currentLang]}" id="modalHeroImg">
      </div>

      ${project.gallery.length > 1 ? `
        <div class="modal-thumbs-row">
          ${project.gallery.map(img => `
            <button class="modal-thumb-btn ${img === activeImg ? 'active' : ''}" data-src="${img}">
              <img src="${img}" alt="thumbnail">
            </button>
          `).join('')}
        </div>
      ` : ''}

      <div class="modal-code-tag font-mono">${project.dwgCode} • ${project.year} • ${project.location[currentLang]}</div>
      <h2 class="modal-title">${project.title[currentLang]}</h2>
      <div class="modal-role-tag">${project.role[currentLang]}</div>
      <div class="modal-client font-mono"><i data-lucide="building-2"></i> ${project.client[currentLang]}</div>

      <div class="modal-desc-block">
        <h4>${translations[currentLang].modal_technical_title}</h4>
        <p>${project.details[currentLang]}</p>
      </div>

      <div class="mb-4">
        <h4 style="color: var(--ink-primary); margin-bottom: 0.75rem; font-size: 0.95rem; font-weight: 800;">${translations[currentLang].modal_highlights_title}</h4>
        <div class="modal-highlights">
          ${project.highlights.map(hl => `
            <div class="modal-hl-item">
              <i data-lucide="award"></i>
              <span>${hl[currentLang]}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  modalContent.innerHTML = buildModalHtml();
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  modalContent.querySelectorAll('.modal-thumb-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      activeImg = btn.getAttribute('data-src');
      modalContent.innerHTML = buildModalHtml();
      openProjectModal(projectId);
    });
  });

  refreshIcons();
}

// Render Field Gallery Masonry
function renderGallery() {
  const container = document.getElementById('galleryMasonry');
  if (!container) return;

  const galleryItems = [
    { log: "LOG-01", src: "/assets/projects/concrete_pump_rebar.png", caption: { ar: "صب الخرسانة الجاهزة وتثبيت حديد التسليح", en: "Concrete Pump Pouring & Rebar Rigging" } },
    { log: "LOG-02", src: "/assets/projects/jeddah_water_reservoir_1.png", caption: { ar: "خزانات المياه الاستراتيجية ببريمان (170M لتر)", en: "Strategic Water Reservoir, Briman (170M Liters)" } },
    { log: "LOG-03", src: "/assets/projects/pnu_housing_villas.png", caption: { ar: "أساسات ولبشة 50 فيلا - جامعة الأميرة نورة", en: "50 Villas Raft Foundation - PNU Housing" } },
    { log: "LOG-04", src: "/assets/projects/pnu_library_tunnels.png", caption: { ar: "الجدران الاستنادية وأنفاق الخدمات بجامعة الأميرة نورة", en: "Retaining Walls & Service Tunnels - PNU" } },
    { log: "LOG-05", src: "/assets/projects/spemaco_tower.png", caption: { ar: "برج سبيماكو وقواعد المضخات والمحولات", en: "SPEMACO Tower & Transformer Base Works" } },
    { log: "LOG-06", src: "/assets/projects/saffori_land_khafji.png", caption: { ar: "ديكورات وأعمدة سفوري لاند الترفيهية المضيئة", en: "Saffori Land Thematic Illuminated Pillars" } },
    { log: "LOG-07", src: "/assets/projects/eldeyar_residence_pool.png", caption: { ar: "مسبح ومرافق مجمع عمارات الديار السكني", en: "Indoor Pool & Leisure Facilities - El-Deyar" } },
    { log: "LOG-08", src: "/assets/projects/xtreme_zone.png", caption: { ar: "اكستريم زون بنمط الحاويات الصناعية المعاصر", en: "Xtreme Zone Industrial Container Concept" } },
    { log: "LOG-09", src: "/assets/projects/luxury_villa_facade.png", caption: { ar: "واجهات الفلل السكنية الفاخرة والتشطيبات", en: "Luxury Residential Villa Architecture" } }
  ];

  container.innerHTML = galleryItems.map(item => `
    <div class="gallery-card" data-src="${item.src}">
      <div class="gallery-card-header font-mono">
        <span>${item.log}</span>
        <span>SITE INSPECTION</span>
      </div>
      <div class="gallery-card-img-box">
        <img src="${item.src}" alt="${item.caption[currentLang]}" class="gallery-card-img" loading="lazy">
      </div>
      <div class="gallery-card-caption">
        <span>${item.caption[currentLang]}</span>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.gallery-card').forEach(item => {
    item.addEventListener('click', () => {
      openDocModal(item.getAttribute('data-src'), item.querySelector('.gallery-card-caption').textContent);
    });
  });
}

// Render Official Credentials
function renderCredentials() {
  const container = document.getElementById('credentialsGrid');
  if (!container) return;

  container.innerHTML = portfolioData.credentials.map(cred => `
    <div class="cred-card" data-img="${cred.image}" data-title="${cred.title[currentLang]}">
      <div class="cred-header font-mono">
        <span>${cred.code}</span>
      </div>
      <div class="cred-thumb-box">
        <img src="${cred.image}" alt="${cred.title[currentLang]}" class="cred-thumb" loading="lazy">
      </div>
      <div class="cred-body">
        <h4 class="cred-title">${cred.title[currentLang]}</h4>
        <div class="cred-no font-mono">${cred.no}</div>
        <div class="cred-issuer">${cred.issuer[currentLang]}</div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.cred-card').forEach(card => {
    card.addEventListener('click', () => {
      openDocModal(card.getAttribute('data-img'), card.getAttribute('data-title'));
    });
  });
}

// Open Document Preview Modal
function openDocModal(imageSrc, title) {
  const docModal = document.getElementById('docModal');
  const docModalContent = document.getElementById('docModalContent');

  docModalContent.innerHTML = `
    <h3 style="color: var(--ink-primary); margin-bottom: 1.25rem; font-size: 1.25rem; font-weight: 800;">${title}</h3>
    <img src="${imageSrc}" alt="${title}" style="max-width: 100%; border: 1px solid var(--ink-primary);">
  `;

  docModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Render Clients & Strategic Partners Grid and Horizontal Moving Marquee
function renderClients() {
  // 1. Render Infinite Marquee Tracks
  const track1 = document.getElementById('marqueeTrack1');
  const track2 = document.getElementById('marqueeTrack2');

  if (track1 && track2 && portfolioData.marqueeLogos) {
    const marqueeHtml = portfolioData.marqueeLogos.map(item => `
      <div class="marquee-logo-card" title="${item.name}">
        <img src="${item.src}" alt="${item.name}" class="marquee-logo-img" loading="lazy">
      </div>
    `).join('');

    track1.innerHTML = marqueeHtml;
    track2.innerHTML = marqueeHtml;
  }

  // 2. Render Tier-1 Strategic Clients Grid
  const container = document.getElementById('clientsGrid');
  if (!container) return;

  container.innerHTML = portfolioData.clients.map(client => `
    <div class="client-proof-item">
      <div class="client-item-top">
        <div class="client-item-icon">
          ${client.logo ? `<img src="${client.logo}" alt="${client.name[currentLang]}" style="max-width: 100%; max-height: 100%; object-fit: contain;">` : `<i data-lucide="${client.icon || 'building-2'}"></i>`}
        </div>
        <span class="client-tier-badge font-mono">${client.tier[currentLang]}</span>
      </div>

      <h4 class="client-name-title">${client.name[currentLang]}</h4>
      <div class="client-sector-tag">${client.sector[currentLang]}</div>

      <div class="client-proof-linkage">
        <span class="linkage-label font-mono">${currentLang === 'ar' ? 'سجل الإنجاز والمشروع المنفذ:' : 'DELIVERED PROJECT & SCOPE:'}</span>
        <span class="linkage-project">${client.project[currentLang]}</span>
        <span class="linkage-scope font-mono">
          <i data-lucide="check-circle-2" style="width: 12px; height: 12px; color: var(--accent-ochre);"></i>
          ${client.scope[currentLang]}
        </span>
      </div>
    </div>
  `).join('');

  // 3. Setup click zoom on official client boards
  document.querySelectorAll('.client-proof-cards .proof-card').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.getAttribute('data-img');
      const title = card.getAttribute('data-title');
      openDocModal(img, title);
    });
  });

  refreshIcons();
}

// Setup Scroll Progress Bar, Elevation Tracker, and Active QuickNav
function setupScrollTracker() {
  const progressBar = document.getElementById('scrollProgressBar');
  const elevationText = document.getElementById('elevationText');
  const quickNavPills = document.querySelectorAll('.quicknav-pill[data-nav]');

  const sectionLevels = {
    hero: { code: 'LVL 00 • DATUM', nav: 'about' },
    about: { code: 'LVL 01 • VISION', nav: 'about' },
    competencies: { code: 'LVL 02 • DISCIPLINE', nav: 'about' },
    projects: { code: 'LVL 03 • MEGA EPC', nav: 'projects' },
    gallery: { code: 'LVL 04 • FIELD LOG', nav: 'gallery' },
    clients: { code: 'LVL 05 • PARTNERS', nav: 'clients' },
    credentials: { code: 'LVL 06 • ACCREDITED', nav: 'clients' },
    contact: { code: 'LVL 07 • CONSULT', nav: 'contact' }
  };

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
    }

    // Determine current visible section
    const sections = ['contact', 'credentials', 'clients', 'gallery', 'projects', 'competencies', 'about', 'hero'];
    for (const secId of sections) {
      const el = document.getElementById(secId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          const info = sectionLevels[secId];
          if (info) {
            if (elevationText) elevationText.textContent = info.code;
            quickNavPills.forEach(pill => {
              pill.classList.toggle('active', pill.getAttribute('data-nav') === info.nav);
            });
          }
          break;
        }
      }
    }
  }, { passive: true });
}

// Setup Scroll Reveals and Number Counter Rollers
let clientsStatsAnimated = false;

function setupScrollReveals() {
  const revealTargets = document.querySelectorAll('.editorial-header, .about-editorial-grid, .competencies-grid, .projects-grid, .gallery-masonry, .credentials-grid, .clients-proof-grid, .contact-card, .clients-trust-strip');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        
        if (entry.target.id === 'statsMatrix' && !statsAnimated) {
          statsAnimated = true;
          animateStatNumbers();
        }

        if (entry.target.classList.contains('clients-trust-strip') && !clientsStatsAnimated) {
          clientsStatsAnimated = true;
          animateTrustNumbers();
        }
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -20px 0px'
  });

  revealTargets.forEach(el => {
    if (el.id === 'competenciesGrid' || el.id === 'projectsGrid' || el.id === 'galleryMasonry' || el.id === 'credentialsGrid' || el.id === 'clientsGrid') {
      el.classList.add('reveal-stagger');
    } else {
      el.classList.add('reveal');
    }
    observer.observe(el);
  });

  const statsMatrix = document.getElementById('statsMatrix');
  if (statsMatrix) {
    observer.observe(statsMatrix);
  }
}

// Eased Number Counter Animation for Clients Trust Strip
function animateTrustNumbers() {
  const items = document.querySelectorAll('.clients-trust-strip .trust-metric-box .trust-num');
  if (!items.length) return;

  const targets = [
    { target: 12, suffix: '+' },
    { target: 25, suffix: '+' },
    { target: 100, suffix: '%' },
    { target: 500, prefix: '+', suffix: 'M' }
  ];

  items.forEach((el, idx) => {
    const config = targets[idx];
    if (!config) return;

    const duration = 1800;
    const startTime = performance.now();

    function update(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(ease * config.target);
      el.textContent = `${config.prefix || ''}${val}${config.suffix || ''}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = `${config.prefix || ''}${config.target}${config.suffix || ''}`;
      }
    }
    requestAnimationFrame(update);
  });
}

// Setup 3D Mouse Parallax Tilt on Portrait Matte Frame
function setupPortraitTilt() {
  const frame = document.getElementById('portraitMatteFrame');
  if (!frame) return;

  frame.addEventListener('mousemove', (e) => {
    const rect = frame.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    
    frame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  });

  frame.addEventListener('mouseleave', () => {
    frame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

// Setup Custom Drafting Cursor Follower
function setupCustomCursor() {
  const cursor = document.getElementById('draftingCursor');
  const coords = document.getElementById('cursorCoords');
  if (!cursor || !coords) return;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    coords.textContent = `X:${mouseX} Y:${mouseY}`;
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.25;
    cursorY += (mouseY - cursorY) * 0.25;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);
}

// Setup Reading Scroll Progress Bar & Floating Bar
function setupScrollProgress() {
  const progressBar = document.getElementById('readingProgressBar');
  const floatingBar = document.getElementById('floatingBar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollY / docHeight : 0;

    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress})`;
    }

    if (floatingBar) {
      if (scrollY > 350) {
        floatingBar.classList.add('visible');
      } else {
        floatingBar.classList.remove('visible');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Setup Blueprint CAD Mode Toggle (Desktop & Mobile)
function setupBlueprintMode() {
  const toggleBtn = document.getElementById('blueprintToggle');
  const mobileToggleBtn = document.getElementById('mobileBlueprintToggle');

  const savedTheme = localStorage.getItem('arch_theme');
  if (savedTheme === 'cad') {
    document.body.classList.add('cad-blueprint-mode');
  }

  function toggle() {
    document.body.classList.toggle('cad-blueprint-mode');
    const isCad = document.body.classList.contains('cad-blueprint-mode');
    localStorage.setItem('arch_theme', isCad ? 'cad' : 'editorial');
    refreshIcons();
  }

  if (toggleBtn) toggleBtn.addEventListener('click', toggle);
  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', toggle);
}

// Setup Full-Screen Archive Modal
function setupArchiveModal() {
  const seeAllTop = document.getElementById('seeAllProjectsBtn');
  const mobileSeeAll = document.getElementById('mobileSeeAllProjectsBtn');
  const archiveModal = document.getElementById('archiveModal');
  const archiveCloseBtn = document.getElementById('archiveCloseBtn');
  const archiveSearchInput = document.getElementById('archiveSearchInput');

  function openArchive() {
    if (!archiveModal) return;
    archiveModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    renderArchiveFilters();
    renderArchiveProjects();
  }

  function closeArchive() {
    if (!archiveModal) return;
    archiveModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (seeAllTop) seeAllTop.addEventListener('click', openArchive);
  if (mobileSeeAll) mobileSeeAll.addEventListener('click', openArchive);
  if (archiveCloseBtn) archiveCloseBtn.addEventListener('click', closeArchive);

  if (archiveSearchInput) {
    archiveSearchInput.addEventListener('input', (e) => {
      archiveSearchTerm = e.target.value;
      renderArchiveProjects();
    });
  }
}

// Event Listeners Setup
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  updateLanguage('ar');
  setupScrollReveals();
  setupScrollTracker();
  setupPortraitTilt();
  setupCustomCursor();
  setupScrollProgress();
  setupBlueprintMode();
  setupArchiveModal();

  // Initial Hero Laser Scan Wow Moment
  const scanner = document.querySelector('.laser-scanner');
  if (scanner) {
    scanner.classList.add('scanning');
    setTimeout(() => scanner.classList.remove('scanning'), 2000);
  }

  document.getElementById('langToggle').addEventListener('click', () => {
    updateLanguage(currentLang === 'ar' ? 'en' : 'ar');
  });

  const printBtn = document.getElementById('printBtn');
  const mobilePrintBtn = document.getElementById('mobilePrintBtn');
  if (printBtn) printBtn.addEventListener('click', () => window.print());
  if (mobilePrintBtn) mobilePrintBtn.addEventListener('click', () => window.print());

  // Hero Drafting Console Switcher with Laser Scan Trigger
  const tabArchitect = document.getElementById('tabArchitect');
  const tabDevManager = document.getElementById('tabDevManager');
  const heroPortraitImg = document.getElementById('heroPortraitImg');

  function triggerLaserScan() {
    if (!scanner) return;
    scanner.classList.remove('scanning');
    void scanner.offsetWidth; // trigger reflow
    scanner.classList.add('scanning');
    setTimeout(() => scanner.classList.remove('scanning'), 1800);
  }

  tabArchitect.addEventListener('click', () => {
    tabArchitect.classList.add('active');
    tabDevManager.classList.remove('active');
    currentPersona = 'architect';
    renderPersona();
    triggerLaserScan();
    heroPortraitImg.style.opacity = '0.2';
    setTimeout(() => {
      heroPortraitImg.src = portfolioData.profile.images.formal;
      heroPortraitImg.style.opacity = '1';
      refreshIcons();
    }, 150);
  });

  tabDevManager.addEventListener('click', () => {
    tabDevManager.classList.add('active');
    tabArchitect.classList.remove('active');
    currentPersona = 'devManager';
    renderPersona();
    triggerLaserScan();
    heroPortraitImg.style.opacity = '0.2';
    setTimeout(() => {
      heroPortraitImg.src = portfolioData.profile.images.site;
      heroPortraitImg.style.opacity = '1';
      refreshIcons();
    }, 150);
  });

  // Modals Close Listeners
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const projectModal = document.getElementById('projectModal');
  modalCloseBtn.addEventListener('click', () => {
    projectModal.classList.remove('open');
    document.body.style.overflow = '';
  });

  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  const docModalCloseBtn = document.getElementById('docModalCloseBtn');
  const docModal = document.getElementById('docModal');
  docModalCloseBtn.addEventListener('click', () => {
    docModal.classList.remove('open');
    document.body.style.overflow = '';
  });

  docModal.addEventListener('click', (e) => {
    if (e.target === docModal) {
      docModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Mobile Drawer Controls
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }

  if (mobileDrawerClose && mobileDrawer) {
    mobileDrawerClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
    });
  });

  // Scroll Spy for Desktop and Mobile QuickNav
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.main-nav a[href*=${sectionId}]`);
      const quickLink = document.querySelector(`.mobile-sticky-quicknav a[href*=${sectionId}]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (navLink) navLink.classList.add('active');
        if (quickLink) quickLink.classList.add('pill-accent');
      } else {
        if (navLink) navLink.classList.remove('active');
        if (quickLink && !quickLink.classList.contains('pill-default-accent')) {
          quickLink.classList.remove('pill-accent');
        }
      }
    });
  });
});
