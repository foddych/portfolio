(() => {
  const projects = {
    petrol: {
      title: "Petrol-Люкс",
      icon: "assets/icons/petrol.webp",
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
        "assets/works/petrol/00-full-desktop.webp",
      ],
      beforeAfter: {
        before: "assets/works/petrol/before-desktop.webp",
        after: "assets/works/petrol/00-full-desktop.webp",
        issues: [
          "Устаревший шаблон: 3D-баннер и таблица цен не вызывают доверия",
          "Цены в сухой таблице — нет акцента и удобного сравнения",
          "Новости слева отвлекают от главного действия",
          "Нет сильного CTA и нормального адаптива под телефон",
        ],
      },
    },
    globit: {
      title: "Glob-IT",
      icon: "assets/icons/globit.webp",
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
        "assets/works/globit/00-full-desktop.webp",
      ],
      beforeAfter: {
        before: "assets/works/globit/before-desktop.webp",
        after: "assets/works/globit/00-full-desktop.webp",
        issues: [
          "Тёмный стоковый hero не объясняет ценность и не цепляет",
          "Шапка перегружена контактами — сложно сфокусироваться",
          "Услуги, тарифы и Церера не выделены на первом экране",
          "Выглядит как типовой корпоративный шаблон 2010-х",
        ],
      },
    },
    inmis: {
      title: "Inmis",
      icon: "assets/icons/inmis.webp",
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
        "assets/works/inmis/00-full-desktop.webp",
      ],
      beforeAfter: {
        before: "assets/works/inmis/before-desktop.webp",
        after: "assets/works/inmis/00-full-desktop.webp",
        issues: [
          "Hero без CTA — непонятно, что делать дальше",
          "Иллюстрация и заголовок есть, а ценность решений не раскрыта",
          "ЕГИСЗ / Улло не выделены на первом экране",
          "Холодно и шаблонно — мало доверия для B2B медтех",
        ],
      },
    },
    profite: {
      title: "ProfiTE",
      icon: "assets/icons/profite.webp",
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
        "assets/works/profite/00-full-desktop.webp",
      ],
      beforeAfter: {
        before: "assets/works/profite/before-desktop.webp",
        after: "assets/works/profite/00-full-desktop.webp",
        issues: [
          "Форма входа и оранжевое меню съедают внимание вместо оффера",
          "Баннеры и битые картинки снижают доверие",
          "Нет чистого маршрута «открыли ИП → купить и настроить 1С»",
          "Визуал и типографика выглядят как старый корпоративный портал",
        ],
      },
    },
    zoomir: {
      title: "Зоомир",
      icon: "assets/icons/zoomir.webp",
      desc: "Редизайн зоомагазина: ассортимент, витрина и спокойный фирменный тон.",
      intro:
        "Нужно было обновить сайт зоомагазина Зоомир так, чтобы он сразу выглядел современно и вызывал доверие: показать ассортимент, маршрут покупки и контакты. Главная задача — уйти от устаревшей подачи и собрать чистый one-pager под бренд.",
      problems:
        "Текущий сайт выглядит шаблонно: hero на стоковом фото, без сильных акцентов на ассортимент и доверие. Не хватает ясной структуры от оффера к категориям, 3D-туру и заявке — бренд Зоомир не запоминается.",
      solution:
        "Собрал светлый редизайн с лавандово-синей палитрой, сильным hero, блоком ассортимента, туром по магазину и быстрым контактом. Визуал и адаптив ведут посетителя от атмосферы бренда к действию.",
      meta: [
        ["Клиент", "Зоомир"],
        ["Тип", "Зоомагазин · редизайн"],
        ["Работы", "UI, one-pager"],
        ["Год", "2025"],
      ],
      shots: [
        "assets/works/zoomir/00-full-desktop.webp",
      ],
      beforeAfter: {
        before: "assets/works/zoomir/before-live.webp",
        after: "assets/works/zoomir/00-full-desktop.webp",
        issues: [
          "Hero шаблонный: стоковое фото корги и декоративные фигуры вместо атмосферы магазина",
          "Нет цифр и доказательств на первом экране — только общий текст",
          "Ассортимент и 3D-тур не читаются сразу с первого экрана",
          "Слабая иерархия: оранжевый блок и шаблонный тон не держат бренд",
        ],
      },
    },
  };

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const services = {
    redesign: {
      title: "Редизайн сайтов",
      tag: "Сайты",
      icon: "ico-redesign",
      lead: "Обновляю внешний вид, структуру и путь пользователя — чтобы сайт выглядел современно и вёл к заявке.",
      test: "1–2 дня",
      full: "3–7 дней",
      price: "Индивидуально",
      items: [
        "Анализ текущего сайта и узких мест",
        "Новая структура блоков и иерархия",
        "Аккуратный визуал под бренд",
        "Адаптив под телефон и десктоп",
      ],
    },
    landing: {
      title: "Лендинги под оффер",
      tag: "Лендинг",
      icon: "ico-landing",
      lead: "Собираю одну страницу под конкретную задачу: оффер, доверие и быстрый контакт.",
      test: "1–2 дня",
      full: "3–7 дней",
      price: "Индивидуально",
      items: [
        "Hero и оффер под вашу аудиторию",
        "Блоки преимуществ, услуг и доказательств",
        "CTA и удобный путь к заявке",
        "Адаптив и аккуратная типографика",
      ],
    },
    shop: {
      title: "Магазины и бренды",
      tag: "Бренд",
      icon: "ico-dog",
      lead: "Делаю витрину бренда или магазина: каталог, атмосфера и понятный путь к покупке.",
      test: "1–2 дня",
      full: "3–7 дней",
      price: "Индивидуально",
      items: [
        "Подача бренда и ассортимента",
        "Карточки товаров / направлений",
        "Навигация и акценты на ключевые разделы",
        "Адаптив и визуальный ритм",
      ],
    },
    bots: {
      title: "Боты Telegram и Max",
      tag: "Боты",
      icon: "ico-bots",
      lead: "Собираю ботов под заявки, FAQ и сценарии — чтобы клиент быстро получал ответ.",
      test: "1–2 дня",
      full: "3–7 дней",
      price: "Индивидуально",
      items: [
        "Сценарий диалога под задачу",
        "Приём заявок и уведомления",
        "FAQ / меню / кнопки",
        "Простая админка или связка с чатом",
      ],
    },
  };

  const serviceModal = document.getElementById("service-modal");
  const serviceTitle = document.getElementById("service-title");
  const serviceTag = document.getElementById("service-tag");
  const serviceLead = document.getElementById("service-lead");
  const serviceTest = document.getElementById("service-test");
  const serviceFull = document.getElementById("service-full");
  const servicePrice = document.getElementById("service-price");
  const serviceList = document.getElementById("service-list");
  const serviceNote = document.getElementById("service-note");
  const serviceIcon = document.getElementById("service-icon");
  const serviceTg = document.getElementById("service-tg");

  const closeService = () => {
    if (!serviceModal || serviceModal.hidden) return;
    serviceModal.hidden = true;
    document.body.classList.remove("service-open");
  };

  const openService = (id) => {
    const data = services[id];
    if (!data || !serviceModal) return;
    serviceTag.textContent = data.tag;
    serviceTitle.textContent = data.title;
    serviceLead.textContent = data.lead;
    serviceTest.textContent = data.test;
    serviceFull.textContent = data.full;
    servicePrice.textContent = data.price;
    serviceList.innerHTML = data.items.map((item) => `<li>${item}</li>`).join("");
    serviceNote.textContent =
      "Срок зависит от сложности. Тестовый вариант — обычно 1–2 дня, готовый — от 3 до 7 дней. Цена и объём обговариваются индивидуально.";
    serviceIcon.innerHTML = `<span class="ico ${data.icon}" aria-hidden="true"></span>`;
    if (serviceTg) {
      serviceTg.href = `https://t.me/foddy1337?text=${encodeURIComponent(
        `Привет! Интересует услуга: ${data.title}`
      )}`;
    }
    serviceModal.hidden = false;
    document.body.classList.add("service-open");
  };

  document.addEventListener("click", (e) => {
    const svc = e.target.closest("[data-service]");
    if (svc) {
      e.preventDefault();
      openService(svc.getAttribute("data-service"));
      return;
    }
    if (e.target.closest("[data-close-service]")) {
      closeService();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeService();
  });

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
    try {
      localStorage.setItem(
        "portfolio-theme",
        document.body.classList.contains("is-dark") ? "dark" : "light"
      );
    } catch {
      /* ignore */
    }
  });

  try {
    if (localStorage.getItem("portfolio-theme") === "dark") {
      document.body.classList.add("is-dark");
    }
  } catch {
    /* ignore */
  }

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
  const baBlock = document.getElementById("project-ba");
  const baBefore = document.getElementById("project-ba-before");
  const baAfter = document.getElementById("project-ba-after");
  const shotFrame = document.querySelector("#panel-project .shot-frame");
  let busy = false;
  let currentId = null;

  const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

  const shotHtml = (src, alt, { eager = false } = {}) => {
    const load = eager
      ? 'loading="eager" fetchpriority="high"'
      : 'loading="lazy"';
    return `<figure class="shot"><img src="${src}" alt="${alt}" ${load} decoding="async"></figure>`;
  };

  const setBaView = (mode) => {
    if (!baBlock || baBlock.hidden) return;
    const before = mode === "before";
    baBlock.querySelectorAll(".ba-tab").forEach((tab) => {
      const active = tab.getAttribute("data-ba") === mode;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });
    if (baBefore) {
      baBefore.hidden = !before;
      baBefore.classList.toggle("is-active", before);
    }
    if (baAfter) {
      baAfter.hidden = before;
      baAfter.classList.toggle("is-active", !before);
    }
  };

  const fillBeforeAfter = (data) => {
    if (!baBlock || !baBefore || !baAfter) return;
    const ba = data.beforeAfter;
    if (!ba?.before || !ba?.after) {
      baBlock.hidden = true;
      baBefore.innerHTML = "";
      baAfter.innerHTML = "";
      if (shotFrame) shotFrame.hidden = false;
      return;
    }

    const issues = (ba.issues || [])
      .map((item) => `<li>${item}</li>`)
      .join("");

    baBlock.hidden = false;
    // Hide gallery below — after shot already lives in the «После» tab
    if (shotFrame) shotFrame.hidden = true;

    baBefore.innerHTML = `
      ${shotHtml(ba.before, `${data.title} — до`, { eager: true })}
      <div class="ba-notes">
        <p class="ba-notes-title">Что не так</p>
        <ul>${issues}</ul>
      </div>`;
    baAfter.innerHTML = shotHtml(ba.after, `${data.title} — после`);
    // Warm after image while user reads «До»
    const warm = new Image();
    warm.decoding = "async";
    warm.src = ba.after;
    setBaView("before");
  };

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

    logoEl.innerHTML = `<img src="${data.icon}" alt="" width="48" height="48" decoding="async">`;
    logoEl.className = "project-logo";
    titleEl.textContent = data.title;
    descEl.textContent = data.desc;
    introEl.textContent = data.intro || "";
    problemsEl.textContent = data.problems || "";
    solutionEl.textContent = data.solution || "";

    galleryEl.innerHTML = data.shots
      .map((src, i) => {
        const tall = /mobile|preview-mobile|max-mobile/i.test(src);
        return `<figure class="shot ${tall ? "is-tall" : ""}"><img src="${src}" alt="${data.title} — кадр ${i + 1}" loading="lazy" decoding="async"></figure>`;
      })
      .join("");

    fillBeforeAfter(data);

    otherEl.innerHTML = Object.entries(projects)
      .filter(([key]) => key !== id)
      .map(
        ([key, item]) => `
        <button class="row" type="button" data-open="${key}">
          <span class="row-icon"><img src="${item.icon}" alt="" width="40" height="40" loading="lazy" decoding="async"></span>
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
      return;
    }

    const baTab = e.target.closest(".ba-tab[data-ba]");
    if (baTab && baBlock && !baBlock.hidden) {
      setBaView(baTab.getAttribute("data-ba"));
    }
  });

  document.getElementById("faq-list")?.addEventListener("toggle", (e) => {
    const item = e.target;
    if (!(item instanceof HTMLDetailsElement) || !item.open) return;
    document.querySelectorAll("#faq-list .faq-item").forEach((el) => {
      if (el !== item) el.open = false;
    });
  }, true);

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
