var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}); 
const translations = {
  uz: {
    mainTitle: "SVEZA Rasmiy Dilleri",
    menuPlywood: "Faneralar",
    menuBoards: "Plita materiallari",
    menuDelivery: "Dostavka",
    menuContact: "Kontaktlar",
    sectionTitle: "Fanerani ulgurji sotish",
    sectionText:
      "Biz mijozlarimiz bilan uzoq muddatli hamkorlik siyosatini yuritamiz.",
    footerText: "© 2025 Ecotaxt. Barcha huquqlar himoyalangan.",
  },
  ru: {
    mainTitle: "Официальный дилер SVEZA",
    menuPlywood: "Фанера",
    menuBoards: "Плитные материалы",
    menuDelivery: "Доставка",
    menuContact: "Контакты",
    sectionTitle: "Оптовая продажа фанеры",
    sectionText:
      "Мы придерживаемся политики долгосрочного и надежного сотрудничества с нашими клиентами.",
    footerText: "© 2025 Ecotaxt. Все права защищены.",
  },
  en: {
    mainTitle: "Official Dealer of SVEZA",
    menuPlywood: "Plywood",
    menuBoards: "Board Materials",
    menuDelivery: "Delivery",
    menuContact: "Contacts",
    sectionTitle: "Wholesale Plywood Sales",
    sectionText:
      "We adhere to a policy of long-term and reliable cooperation with our clients.",
    footerText: "© 2025 Ecotaxt. All rights reserved.",
  },
};

const langButtons = document.querySelectorAll(".lang-btn");
const elements = document.querySelectorAll("[data-key]");

function changeLanguage(lang) {
  elements.forEach((el) => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
  localStorage.setItem("language", lang);
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    changeLanguage(lang);
  });
});

const savedLang = localStorage.getItem("language") || "uz";
changeLanguage(savedLang);
  let lastScroll = 0;
    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add("hide");
      } else {
        header.classList.remove("hide");
      }

      lastScroll = currentScroll;
    });