(() => {
  const projects = {
    petrol: {
      title: "Petrol-Люкс",
      icon: "assets/icons/petrol.svg",
      desc: "Современный one-pager сети АЗС: цены, станции и спокойная асфальтово-янтарная подача.",
      intro:
        "Нужно было обновить сайт сети АЗС так, чтобы он сразу вызывал доверие: показать актуальные цены, адреса станций и путь к контакту. Главная задача — выделить бренд на фоне типовых шаблонов АЗС и сделать страницу удобной и на телефоне.",
      problems:
        "Старый сайт плохо держал внимание: цены и станции были разрознены, на мобильном сложно ориентироваться, а первый экран не объяснял ценность сети. Нужно было собрать один понятный маршрут — от цены и адреса до заявки — без лишней «карточной» каши.",
      solution:
        "Собрал светлый лендинг с живыми ценами, раскрывающимися станциями на карте и адаптивной шапкой. Палитра асфальт/янтарь подчёркивает продукт, а структура блоков ведёт пользователя от оффера к адресам и контактам.",
      meta: [
        ["Клиент", "Petrol-Люкс"],
        ["Тип", "АЗС · one-pager"],
        ["Работы", "Редизайн, адаптив"],
        ["Год", "2025"],
      ],
      shots: [
        "assets/works/petrol/00-desk-preview.png",
        "assets/works/petrol/00-mobile-preview.png",
        "assets/works/petrol/01-full-desktop.png",
        "assets/works/petrol/02-hero-desktop.png",
        "assets/works/petrol/03-hero-mobile.png",
        "assets/works/petrol/04-prices-desktop.png",
        "assets/works/petrol/05-prices-mobile.png",
        "assets/works/petrol/06-stations-desktop.png",
        "assets/works/petrol/07-stations-mobile.png",
        "assets/works/petrol/08-about-desktop.png",
        "assets/works/petrol/09-corporate-desktop.png",
        "assets/works/petrol/10-contacts-desktop.png",
        "assets/works/petrol/11-mobile-main.png",
      ],
    },
    globit: {
      title: "Glob-IT",
      icon: "assets/icons/globit.svg",
      desc: "Лавандовый корпоративный редизайн: bento-сетка, услуги, тарифы и собственный продукт Церера.",
      intro:
        "Задача — разработать сайт, который повысит узнаваемость бренда и конверсию. При создании современного профессионального сайта главной целью было выделить компанию на фоне конкурентов и привлечь новых клиентов.",
      problems:
        "Чтобы справиться с этой задачей, нужно было сформировать уникальный фирменный стиль, который отражает принципы Glob-IT: системность, инновационность и надёжность. Старая подача не держала фокус на услугах 1С, тарифах и собственном продукте Церера.",
      solution:
        "Сделал лавандовый bento-редизайн: сильный hero, блок преимуществ, услуги по направлениям, прозрачные тарифы, отдельный акцент на Церере, клиенты, отзывы и быстрый контакт. Визуал и структура работают вместе на доверие и заявку.",
      meta: [
        ["Клиент", "Glob-IT · Крона"],
        ["Тип", "Корпоративный"],
        ["Работы", "Lavender bento, UI"],
        ["Год", "2025"],
      ],
      shots: [
        "assets/works/globit/01-hero.png",
        "assets/works/globit/02-stats.png",
        "assets/works/globit/03-advantages.png",
        "assets/works/globit/04-services.png",
        "assets/works/globit/05-tariffs.png",
        "assets/works/globit/06-cerera.png",
        "assets/works/globit/07-clients.png",
        "assets/works/globit/08-reviews.png",
        "assets/works/globit/09-contacts.png",
      ],
    },
    inmis: {
      title: "Inmis",
      icon: "assets/icons/inmis.svg",
      desc: "Медтех-лендинг: продукты, услуги и понятный путь для B2B-аудитории.",
      intro:
        "Нужно было собрать сайт медтех-продуктов, который быстро объясняет ценность решений и ведёт к заявке. Важно было показать линейку продуктов и сервисов без перегруза для B2B-аудитории.",
      problems:
        "Сложный продукт легко «тонет» в длинных текстах: непонятно, чем отличаются направления, куда смотреть про ЕГИСЗ/Улло и как быстро связаться. Нужна ясная иерархия и спокойный профессиональный тон.",
      solution:
        "Собрал структуру с сильным hero, блоками услуг и продуктов, отдельными страницами-секциями под ключевые решения и удобной формой контакта. Навигация и адаптив держат фокус на сути продукта.",
      meta: [
        ["Клиент", "Inmis"],
        ["Тип", "Медтех"],
        ["Работы", "Лендинг, UI"],
        ["Год", "2025"],
      ],
      shots: [
        "assets/works/inmis/01-home-full.png",
        "assets/works/inmis/02-hero-desktop.png",
        "assets/works/inmis/03-hero-mobile.png",
        "assets/works/inmis/04-services.png",
        "assets/works/inmis/05-products.png",
        "assets/works/inmis/06-products-mobile.png",
        "assets/works/inmis/07-egisz.png",
        "assets/works/inmis/08-ullo.png",
        "assets/works/inmis/09-contacts.png",
        "assets/works/inmis/10-home-mobile.png",
      ],
    },
    profite: {
      title: "ProfiTE",
      icon: "assets/icons/profite.svg",
      desc: "B2B-сайт интегратора 1С с услугами, калькулятором и быстрым контактом.",
      intro:
        "Нужно было обновить сайт интегратора 1С так, чтобы клиент быстро понимал услуги и мог оценить маршрут обновления. Главный акцент — доверие франчайзи и короткий путь к заявке.",
      problems:
        "Информация по 1С:ИТС, услугам и контактам была размазана. Не хватало понятного инструмента расчёта обновлений и сильного первого экрана под оффер «открыли ИП/ООО».",
      solution:
        "Собрал лендинг с услугами, калькулятором обновлений, картой и контактами. Визуал и CTA ведут к звонку или заявке, а структура помогает быстро выбрать нужное направление.",
      meta: [
        ["Клиент", "ProfiTE"],
        ["Тип", "B2B лендинг"],
        ["Работы", "1С, UI"],
        ["Год", "2025"],
      ],
      shots: [
        "assets/works/profite/01-home-desktop.png",
        "assets/works/profite/02-home-mobile.png",
        "assets/works/profite/03-services.png",
        "assets/works/profite/05-calculator.png",
        "assets/works/profite/06-calculator-ui.png",
        "assets/works/profite/07-its.png",
        "assets/works/profite/08-its-mobile.png",
        "assets/works/profite/04-contact.png",
        "assets/works/profite/13-worktime.png",
        "assets/works/profite/09-map.png",
        "assets/works/profite/12-map-mobile.png",
        "assets/works/profite/10-kit-hero.png",
        "assets/works/profite/11-kit.png",
      ],
    },
    bots: {
      title: "Бот ProfiTE",
      icon: "assets/icons/bots.svg",
      desc: "Калькулятор маршрута обновления 1С в Telegram и Max.",
      intro:
        "Нужно было сделать бота, который быстро считает маршрут обновления 1С и даёт ориентир по срокам и стоимости — без звонка на первом шаге.",
      problems:
        "Клиенту сложно понять, сколько шагов до FINAL и во сколько обойдётся обновление. Обычный сайт не закрывает диалог «здесь и сейчас», особенно в мессенджерах.",
      solution:
        "Собрал сценарий для Telegram и Max: превью бота, диалог, расчёт маршрута и посадочные экраны. Пользователь получает понятный результат и может сразу перейти к заявке.",
      meta: [
        ["Клиент", "ProfiTE"],
        ["Тип", "Telegram · Max"],
        ["Работы", "Бот, сценарий"],
        ["Год", "2025"],
      ],
      shots: [
        "assets/works/bots/01-telegram-desktop.png",
        "assets/works/bots/02-telegram-mobile.png",
        "assets/works/bots/05-telegram-landing.png",
        "assets/works/bots/03-max-desktop.png",
        "assets/works/bots/04-max-mobile.png",
      ],
    },
  };

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const toast = document.getElementById("toast");
  let toastTimer;
  const showToast = (msg) => {
    if (!toast) return;
    toast.textContent = msg;
    toast.hidden = false;
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.hidden = true;
    }, 1600);
  };

  document.querySelectorAll("[data-email]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const email = btn.getAttribute("data-email") || "";
      try {
        await navigator.clipboard.writeText(email);
        showToast("Email скопирован");
      } catch {
        showToast(email);
      }
    });
  });

  document.querySelector(".theme-toggle")?.addEventListener("click", () => {
    document.body.classList.toggle("is-dark");
  });

  const home = document.getElementById("panel-home");
  const projectPanel = document.getElementById("panel-project");
  const metaBox = document.getElementById("project-meta");
  const logoEl = document.getElementById("project-logo");
  const titleEl = document.getElementById("project-title");
  const descEl = document.getElementById("project-desc");
  const introEl = document.getElementById("project-intro");
  const problemsEl = document.getElementById("project-problems");
  const solutionEl = document.getElementById("project-solution");
  const galleryEl = document.getElementById("project-gallery");
  const otherEl = document.getElementById("other-projects");
  let busy = false;
  let currentId = null;

  const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

  const setNavActive = (mode) => {
    document.querySelectorAll(".nav-icon").forEach((el, idx) => {
      el.classList.toggle("is-active", mode === "home" ? idx === 0 : idx === 2);
    });
  };

  const resetReveals = () => {
    projectPanel.querySelectorAll(".case-reveal").forEach((el) => {
      el.classList.remove("is-in");
    });
  };

  const playReveals = async () => {
    const items = [...projectPanel.querySelectorAll(".case-reveal")];
    for (let i = 0; i < items.length; i += 1) {
      items[i].classList.add("is-in");
      await wait(70);
    }
  };

  const fillProject = (id) => {
    const data = projects[id];
    if (!data) return false;

    metaBox.innerHTML = data.meta
      .map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`)
      .join("");

    logoEl.innerHTML = `<img src="${data.icon}" alt="">`;
    logoEl.className = "project-logo";
    titleEl.textContent = data.title;
    descEl.textContent = data.desc;
    introEl.textContent = data.intro || "";
    problemsEl.textContent = data.problems || "";
    solutionEl.textContent = data.solution || "";

    galleryEl.innerHTML = data.shots
      .map((src, i) => {
        const tall = /mobile|preview-mobile|max-mobile/i.test(src);
        return `<figure class="shot ${tall ? "is-tall" : ""}"><img src="${src}" alt="${data.title} — кадр ${i + 1}" loading="lazy"></figure>`;
      })
      .join("");

    otherEl.innerHTML = Object.entries(projects)
      .filter(([key]) => key !== id)
      .map(
        ([key, item]) => `
        <button class="row" type="button" data-open="${key}">
          <span class="row-icon"><img src="${item.icon}" alt=""></span>
          <span class="row-text">
            <strong>${item.title}</strong>
            <small>${item.meta[1][1]}</small>
          </span>
          <span class="chev" aria-hidden="true">›</span>
        </button>`
      )
      .join("");

    return true;
  };

  const swapPanels = async (fromEl, toEl) => {
    fromEl.classList.add("is-leaving");
    await wait(280);
    fromEl.hidden = true;
    fromEl.classList.remove("is-leaving");

    toEl.hidden = false;
    toEl.classList.add("is-entering");
    // force reflow
    void toEl.offsetWidth;
    toEl.classList.remove("is-entering");
  };

  const showHome = async ({ push = true } = {}) => {
    if (busy) return;
    if (!projectPanel.hidden) {
      busy = true;
      await swapPanels(projectPanel, home);
      busy = false;
    } else {
      home.hidden = false;
      projectPanel.hidden = true;
    }
    currentId = null;
    setNavActive("home");
    if (push) {
      const url = `${window.location.pathname}${window.location.search}`;
      window.history.pushState({ view: "home" }, "", url);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openProject = async (id, { push = true } = {}) => {
    if (!projects[id] || busy) return;
    busy = true;

    const switching = !projectPanel.hidden && currentId && currentId !== id;
    const fromHome = projectPanel.hidden;

    if (fromHome) {
      fillProject(id);
      resetReveals();
      await swapPanels(home, projectPanel);
    } else if (switching) {
      projectPanel.classList.add("is-leaving");
      await wait(240);
      fillProject(id);
      resetReveals();
      projectPanel.classList.remove("is-leaving");
      projectPanel.classList.add("is-entering");
      void projectPanel.offsetWidth;
      projectPanel.classList.remove("is-entering");
    } else {
      fillProject(id);
      resetReveals();
      projectPanel.hidden = false;
      home.hidden = true;
    }

    currentId = id;
    setNavActive("project");
    if (push) {
      window.history.pushState({ view: "project", id }, "", `#project/${id}`);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
    await wait(40);
    await playReveals();
    busy = false;
  };

  document.addEventListener("click", (e) => {
    const openBtn = e.target.closest("[data-open]");
    if (openBtn) {
      e.preventDefault();
      openProject(openBtn.getAttribute("data-open"));
    }
  });

  document.getElementById("back-home")?.addEventListener("click", () => showHome());

  document.querySelectorAll(".nav-icon[data-panel='home']").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (!projectPanel.hidden) {
        e.preventDefault();
        showHome();
      }
    });
  });

  window.addEventListener("popstate", () => {
    const match = window.location.hash.match(/^#project\/([a-z]+)/i);
    if (match && projects[match[1]]) openProject(match[1], { push: false });
    else showHome({ push: false });
  });

  const boot = window.location.hash.match(/^#project\/([a-z]+)/i);
  if (boot && projects[boot[1]]) openProject(boot[1], { push: false });
})();
