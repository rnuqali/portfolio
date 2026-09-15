/* =========================
   YEAR
========================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================
   REVEAL ANIMATION
========================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => observer.observe(el));


/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


/* =========================
   PAGE TRANSLATIONS
========================= */

const translations = {

  /* ================= ENGLISH ================= */

  en: {
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skills",
    navExperience: "Experience",
    navContact: "Contact",
    resume: "Resume",

    heroEyebrow: "HELLO, I'M",
    heroTitle1: "Computer Science Graduate",
    heroTitle2: "AI & Data Enthusiast",

    heroText:
      "I build practical software and AI-powered solutions with a focus on intelligent systems, data-driven decision making, and user-centered technology.",

    viewProjects: "View Projects",
    downloadCV: "Download CV",
    emailLink: "Email ↗",

    aboutEyebrow: "ABOUT ME",

    aboutTitle:
      "Building technology that solves real problems.",

    aboutText1:
      "Computer Science graduate from Umm Al-Qura University with hands-on experience in software development, IT operations, and AI-powered systems through internship and academic projects.",

    aboutText2:
      "My work spans machine learning, computer vision, web development, system analysis, and intelligent decision-support systems.",

    gpa: "GPA",
    honors: "Honors",
    graduate: "Graduate",
    graduation: "Graduation",

    gpaHighlight: "GPA 3.58/4.00",
    honorsHighlight: "Second-Class Honors",
    graduationHighlight: "Class of 2026",

    projectsEyebrow: "FEATURED WORK",
    projectsTitle: "Selected Projects",

    projectsText:
      "Projects combining AI, software engineering, data, and real-world problem solving.",

    fredtTitle:
      "FREDT — AI-Powered Smart Evacuation System",

    fredtText:
      "An intelligent emergency-response platform for indoor fire scenarios. It combines crowd monitoring, fire-risk prediction, and risk-aware route optimization to support safer evacuation decisions.",

    nlpTitle:
      "Sentiment Analysis with Transformer Models",

    nlpText:
      "Comparative NLP project using DistilBERT, RoBERTa, and BERT for sentiment classification on IMDb movie reviews, including model evaluation, performance comparison, and an interactive Streamlit application.",

    ckdTitle:
      "Chronic Kidney Disease Prediction",

    ckdText:
      "Machine learning project for CKD classification using Logistic Regression and Naïve Bayes, with ROC/AUC evaluation, confusion matrices, K-Means clustering, PCA visualization, and an interactive prediction demo.",

    salesforceTitle:
      "Cloud-Based Hospital Referral System",

    salesforceText:
      "A cloud-based healthcare referral management prototype developed on the Salesforce Platform to organize patient records, manage referrals, track priority and status, and provide reports and dashboard visualizations.",

    liveDemo: "Live Demo ",
    viewNotebook: "View Notebook ",
    viewCode: "View Code ",
    projectShowcase: "Project Showcase",

    skillsEyebrow: "TOOLS & TECHNOLOGIES",
    skillsTitle: "Skills",

    skillsProgramming:
      "Programming & Web",

    skillsAI:
      "AI & Data",

    skillsSystems:
      "Systems & Tools",

    skillsProfessional:
      "Professional",

    background: "BACKGROUND",

    educationExperience:
      "Education & Experience",

    degree:
      "Bachelor of Computer Science",

    university:
      "Umm Al-Qura University · Makkah, Saudi Arabia",

    educationDetails:
      "GPA 3.58/4.00 · Graduated with Second-Class Honors",

    internTitle:
      "IT Intern",

    hospital:
      "Hiraa General Hospital · Makkah, Saudi Arabia",

    internText:
      "Developed a referral management system, supported troubleshooting and maintenance, participated in testing and documentation, and collaborated with healthcare staff.",

    learning:
      "CONTINUOUS LEARNING",

    certificates:
      "Certificates",

    contactEyebrow:
      "LET'S CONNECT",

    contactTitle:
      "Interested in working together?",

    contactText:
      "I'm open to opportunities in AI, data, software, and technology roles.",

    footerText:
      "Designed & built with care."
  },


  /* ================= ARABIC ================= */

  ar: {
    navAbout: "نبذة عني",
    navProjects: "المشاريع",
    navSkills: "المهارات",
    navExperience: "الخبرات",
    navContact: "التواصل",
    resume: "السيرة الذاتية",

    heroEyebrow: "مرحبًا، أنا",

    heroTitle1:
      "خريجة علوم الحاسب",

    heroTitle2:
      "مهتمة بالذكاء الاصطناعي وتحليل البيانات",

    heroText:
      "أطوّر حلولًا برمجية وعملية مدعومة بالذكاء الاصطناعي، مع التركيز على الأنظمة الذكية، واتخاذ القرار المبني على البيانات، وتجربة المستخدم.",

    viewProjects:
      "عرض المشاريع",

    downloadCV:
      "تحميل السيرة الذاتية",

    emailLink:
      "البريد الإلكتروني ↗",

    aboutEyebrow:
      "نبذة عني",

    aboutTitle:
      "أبني حلولًا تقنية لمشكلات حقيقية.",

    aboutText1:
      "خريجة علوم الحاسب من جامعة أم القرى، ولدي خبرة عملية في تطوير البرمجيات، والدعم التقني، والأنظمة المدعومة بالذكاء الاصطناعي من خلال التدريب والمشاريع الأكاديمية.",

    aboutText2:
      "تشمل خبراتي تعلم الآلة، والرؤية الحاسوبية، وتطوير الويب، وتحليل الأنظمة، وأنظمة دعم القرار الذكية.",

    gpa:
      "المعدل",

    honors:
      "مرتبة الشرف",

    graduate:
      "خريجة",

    graduation:
      "سنة التخرج",

    gpaHighlight:
      "المعدل 3.58 من 4.00",

    honorsHighlight:
      "مرتبة الشرف الثانية",

    graduationHighlight:
      "خريجة عام 2026",

    projectsEyebrow:
      "أبرز الأعمال",

    projectsTitle:
      "المشاريع",

    projectsText:
      "مشاريع تجمع بين الذكاء الاصطناعي، وهندسة البرمجيات، والبيانات، وحل المشكلات الواقعية.",

    fredtTitle:
      "FREDT — نظام ذكي للإخلاء في حالات الطوارئ",

    fredtText:
      "منصة ذكية للاستجابة لحالات الحرائق داخل المباني، تجمع بين مراقبة الازدحام، وتوقّع مخاطر الحريق، وتحسين مسارات الإخلاء بالاعتماد على مستوى الخطر لدعم قرارات إخلاء أكثر أمانًا.",

    nlpTitle:
      "تحليل المشاعر باستخدام نماذج المحولات",

    nlpText:
      "مشروع في معالجة اللغة الطبيعية يقارن بين DistilBERT وRoBERTa وBERT لتصنيف مشاعر مراجعات الأفلام، مع تقييم الأداء ومقارنة النماذج وتطبيق تفاعلي باستخدام Streamlit.",

    ckdTitle:
      "التنبؤ بمرض الكلى المزمن",

    ckdText:
      "مشروع تعلم آلة لتصنيف حالات مرض الكلى المزمن باستخدام الانحدار اللوجستي وNaïve Bayes، مع تقييم ROC/AUC ومصفوفات الالتباس وK-Means وPCA وتجربة تنبؤ تفاعلية.",

    salesforceTitle:
      "نظام سحابي لإدارة الإحالات بين المستشفيات",

    salesforceText:
      "نموذج أولي لنظام إحالات صحية مبني على منصة Salesforce لتنظيم سجلات المرضى، وإدارة الإحالات، وتتبع الأولوية والحالة، وعرض التقارير ولوحات المعلومات.",

    liveDemo:
      "تجربة المشروع ",

    viewNotebook:
      "عرض دفتر المشروع ",

    viewCode:
      "عرض الكود ",

    projectShowcase:
      "عرض المشروع",

    skillsEyebrow:
      "الأدوات والتقنيات",

    skillsTitle:
      "المهارات",

    skillsProgramming:
      "البرمجة وتطوير الويب",

    skillsAI:
      "الذكاء الاصطناعي والبيانات",

    skillsSystems:
      "الأنظمة والأدوات",

    skillsProfessional:
      "المهارات المهنية",

    background:
      "المسار الأكاديمي والمهني",

    educationExperience:
      "التعليم والخبرة",

    degree:
      "بكالوريوس علوم الحاسب",

    university:
      "جامعة أم القرى · مكة المكرمة، المملكة العربية السعودية",

    educationDetails:
      "المعدل 3.58 من 4.00 · التخرج بمرتبة الشرف الثانية",

    internTitle:
      "متدربة تقنية معلومات",

    hospital:
      "مستشفى حراء العام · مكة المكرمة، المملكة العربية السعودية",

    internText:
      "طورت نظامًا لإدارة الإحالات، وساهمت في الدعم الفني والصيانة والاختبارات والتوثيق، وتعاونت مع فرق العمل في البيئة الصحية.",

    learning:
      "التعلم المستمر",

    certificates:
      "الشهادات",

    contactEyebrow:
      "لنتواصل",

    contactTitle:
      "هل لديك فرصة مناسبة؟",

    contactText:
      "مهتمة بالفرص في مجالات الذكاء الاصطناعي، وتحليل البيانات، والبرمجيات، والتقنية.",

    footerText:
      "تم التصميم والتطوير بعناية."
  }
};


/* =========================
   TAG TRANSLATIONS
========================= */

const tagTranslations = {

  /* English text -> Arabic text */

  "Machine Learning": "تعلم الآلة",

  "Computer Vision": "الرؤية الحاسوبية",

  "Cloud Computing": "الحوسبة السحابية",

  "Reports & Dashboards": "التقارير ولوحات المعلومات",

  "Logistic Regression": "الانحدار اللوجستي",

  "Data Preprocessing": "معالجة البيانات",

  "Evaluation": "التقييم",

  "System Analysis": "تحليل الأنظمة",

  "Software Documentation": "توثيق البرمجيات",

  "Problem Solving": "حل المشكلات",

  "Agile Development": "التطوير الرشيق",

  "IT Support": "الدعم التقني",

  "Cybersecurity Fundamentals": "أساسيات الأمن السيبراني",

  "Linux (Basic)": "لينكس - أساسي",

  "Git & GitHub": "Git و GitHub",

  "REST APIs": "واجهات REST البرمجية",

  "A* Pathfinding": "خوارزمية A* للمسارات",

  "NLP": "معالجة اللغة الطبيعية"
};


/* =========================
   TAG LANGUAGE FUNCTION
========================= */

function applyTagLanguage(language) {

  const tagElements =
    document.querySelectorAll(
      ".tags span, .skill-list span"
    );

  tagElements.forEach((tag) => {

    /*
      Save the original English text once.
      This lets us return to English later.
    */

    if (!tag.dataset.enText) {
      tag.dataset.enText =
        tag.textContent.trim();
    }

    const englishText =
      tag.dataset.enText;

    if (
      language === "ar" &&
      tagTranslations[englishText]
    ) {
      tag.textContent =
        tagTranslations[englishText];
    } else {
      tag.textContent =
        englishText;
    }

  });
}


/* =========================
   LANGUAGE SWITCHER
========================= */

const languageToggle =
  document.getElementById("languageToggle");

let currentLanguage =
  localStorage.getItem("portfolio-language") ||
  "en";


function applyLanguage(language) {

  const html =
    document.documentElement;

  html.lang = language;


  /* =========================
     DIRECTION + BUTTON
  ========================= */

  if (language === "ar") {

    html.dir = "rtl";

    if (languageToggle) {

      languageToggle.textContent =
        "English";

      languageToggle.setAttribute(
        "aria-label",
        "Switch to English"
      );
    }

  } else {

    html.dir = "ltr";

    if (languageToggle) {

      languageToggle.textContent =
        "العربية";

      languageToggle.setAttribute(
        "aria-label",
        "التبديل إلى العربية"
      );
    }

  }


  /* =========================
     NORMAL TEXT
  ========================= */

  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {

      const key =
        element.getAttribute("data-i18n");

      if (
        translations[language] &&
        translations[language][key]
      ) {
        element.textContent =
          translations[language][key];
      }

    });


  /* =========================
     TAGS
  ========================= */

  applyTagLanguage(language);


  /* =========================
     SAVE LANGUAGE
  ========================= */

  localStorage.setItem(
    "portfolio-language",
    language
  );

  currentLanguage = language;
}


/* Apply saved/default language */

applyLanguage(currentLanguage);


/* Toggle language */

if (languageToggle) {

  languageToggle.addEventListener(
    "click",
    () => {

      const newLanguage =
        currentLanguage === "en"
          ? "ar"
          : "en";

      applyLanguage(newLanguage);

    }
  );

}


/* =========================
   CLOSE MOBILE MENU
   WHEN CLICKING OUTSIDE
========================= */

document.addEventListener(
  "click",
  (event) => {

    if (!mainNav || !menuToggle) {
      return;
    }

    const clickedInsideNav =
      mainNav.contains(event.target);

    const clickedMenuButton =
      menuToggle.contains(event.target);

    if (
      !clickedInsideNav &&
      !clickedMenuButton
    ) {

      mainNav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }
);


/* =========================
   ESC KEY CLOSES MENU
========================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      mainNav
    ) {

      mainNav.classList.remove("open");

      if (menuToggle) {

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    }

  }
);


/* =========================
   BACK TO TOP
========================= */

const backToTop =
  document.getElementById("backToTop");

if (backToTop) {

  window.addEventListener(
    "scroll",
    () => {

      if (window.scrollY > 350) {

        backToTop.classList.add("show");

      } else {

        backToTop.classList.remove("show");

      }

    }
  );


  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}
