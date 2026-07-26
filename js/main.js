(() => {
  const projects = {
    petrol: {
      title: "Petrol-Люкс",
      icon: "assets/icons/petrol.png",
      cover: "assets/works/petrol/00-desk-preview.png",
      blurb: "АЗС, one-pager, редизайн",
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
      shots: ["assets/works/petrol/00-full-desktop.png"],
    },
    globit: {
      title: "Glob-IT",
      icon: "assets/icons/globit.png",
      cover: "assets/works/globit-desktop.png",
      blurb: "IT, lavender bento",
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
      shots: ["assets/works/globit/00-full-desktop.png"],
    },
    inmis: {
      title: "Inmis",
      icon: "assets/icons/inmis.png",
      cover: "assets/works/inmis-desktop.png",
      blurb: "Медтех, продукт, лендинг",
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
      shots: ["assets/works/inmis/00-full-desktop.png"],
    },
    profite: {
      title: "ProfiTE",
      icon: "assets/icons/profite.png",
      cover: "assets/works/profite-desktop.png",
      blurb: "1С, B2B лендинг",
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
      shots: ["assets/works/profite/00-full-desktop.png"],
    },
    zoomir: {
      title: "Зоомир",
      icon: "assets/icons/zoomir.png",
      cover: "assets/works/zoomir/01-hero-desktop.png",
      blurb: "Зоомагазин, редизайн",
      desc: "Редизайн зоомагазина: ассортимент, витрина и спокойный фирменный тон.",
      intro:
        "Нужно было обновить сайт зоомагазина Зоомир так, чтобы он сразу выглядел современно и вызывал доверие: показать ассортимент, маршрут покупки и контакты. Главная задача — уйти от устаревшей подачи и собрать чистый one-pager под бренд.",
      problems:
        "Старый сайт не держал фокус: категории и товары терялись, на мобильном сложно ориентироваться, а первый экран не объяснял ценность магазина. Нужна ясная структура от оффера к ассортименту и заявке.",
      solution:
        "Собрал светлый редизайн с лавандово-синей палитрой, сильным hero, блоком ассортимента, туром по магазину и быстрым контактом. Визуал и адаптив ведут посетителя от атмосферы бренда к действию.",
      meta: [
        ["Клиент", "Зоомир"],
        ["Тип", "Зоомагазин · редизайн"],
        ["Работы", "UI, one-pager"],
        ["Год", "2025"],
      ],
      shots: ["assets/works/zoomir/00-full-desktop.png"],
    },
  };

  const yearText = String(new Date().getFullYear());
  document.querySelectorAll(".js-year").forEach((el) => {
    el.textContent = yearText;
  });

  const LAYOUT_KEY = "foddy-layout";
  const LAYOUTS = new Set(["clean", "split", "poster"]);
  const root = document.documentElement;
  const layoutGate = document.getElementById("layout-gate");
  let currentLayout = LAYOUTS.has(root.getAttribute("data-layout"))
    ? root.getAttribute("data-layout")
    : "clean";

  const renderProjectLists = () => {
    const entries = Object.entries(projects);

    document.querySelectorAll("[data-project-rows]").forEach((mount) => {
      mount.innerHTML = entries
        .map(
          ([id, item]) => `
        <button class="row" type="button" data-open="${id}">
          <span class="row-icon"><img src="${item.icon}" alt=""></span>
          <span class="row-text">
            <strong>${item.title}</strong>
            <small>${item.blurb}</small>
          </span>
          <span class="chev" aria-hidden="true">›</span>
        </button>`
        )
        .join("");
    });

    document.querySelectorAll("[data-split-projects]").forEach((mount) => {
      mount.innerHTML = entries
        .map(
          ([id, item], index) => `
        <button class="sp-item" type="button" data-open="${id}">
          <span class="num">${String(index + 1).padStart(2, "0")}</span>
          <span>
            <strong>${item.title}</strong>
            <small>${item.blurb}</small>
          </span>
          <img src="${item.cover}" alt="" loading="lazy">
        </button>`
        )
        .join("");
    });

    document.querySelectorAll("[data-poster-projects]").forEach((mount) => {
      mount.innerHTML = entries
        .map(
          ([id, item]) => `
        <button class="po-poster" type="button" data-open="${id}">
          <img src="${item.cover}" alt="" loading="lazy">
          <span class="po-poster-copy">
            <strong>${item.title}</strong>
            <small>${item.blurb}</small>
          </span>
        </button>`
        )
        .join("");
    });
  };

  const applyLayout = (layout) => {
    const next = LAYOUTS.has(layout) ? layout : "clean";
    currentLayout = next;
    root.setAttribute("data-layout", next);
    document.querySelectorAll("[data-layout-root]").forEach((el) => {
      el.hidden = el.getAttribute("data-layout-root") !== next;
    });
    document.querySelectorAll("[data-layout-pick]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-layout-pick") === next);
    });
    return next;
  };

  const closeLayoutGate = () => {
    if (!layoutGate) return;
    layoutGate.hidden = true;
    document.body.classList.remove("is-picking");
  };

  const openLayoutGate = () => {
    if (!layoutGate) return;
    layoutGate.hidden = false;
    document.body.classList.add("is-picking");
    applyLayout(currentLayout);
  };

  const pickLayout = (layout) => {
    const next = applyLayout(layout);
    try {
      localStorage.setItem(LAYOUT_KEY, next);
    } catch (_) {}
    root.dataset.layoutPicked = "1";
    closeLayoutGate();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  renderProjectLists();

  document.querySelectorAll("[data-layout-pick]").forEach((btn) => {
    btn.addEventListener("click", () => pickLayout(btn.getAttribute("data-layout-pick")));
  });

  document.querySelectorAll("[data-open-layout-gate]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (layoutGate && !layoutGate.hidden) closeLayoutGate();
      else openLayoutGate();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && root.dataset.layoutPicked === "1") closeLayoutGate();
  });

  if (root.dataset.layoutPicked !== "1") openLayoutGate();
  else applyLayout(currentLayout);

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

  const activeLayoutRoot = () =>
    document.querySelector(`[data-layout-root="${currentLayout}"]`);

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

  const showHome = async ({ push = true } = {}) => {
    if (busy) return;
    busy = true;

    if (!projectPanel.hidden) {
      projectPanel.classList.add("is-leaving");
      await wait(240);
      projectPanel.hidden = true;
      projectPanel.classList.remove("is-leaving");
    }

    applyLayout(currentLayout);
    const layoutRoot = activeLayoutRoot();
    if (layoutRoot) {
      layoutRoot.classList.add("is-entering");
      void layoutRoot.offsetWidth;
      layoutRoot.classList.remove("is-entering");
    }

    currentId = null;
    setNavActive("home");
    if (push) {
      const url = `${window.location.pathname}${window.location.search}`;
      window.history.pushState({ view: "home" }, "", url);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    busy = false;
  };

  const openProject = async (id, { push = true } = {}) => {
    if (!projects[id] || busy) return;
    busy = true;

    const switching = !projectPanel.hidden && currentId && currentId !== id;
    const fromHome = projectPanel.hidden;

    if (fromHome) {
      const layoutRoot = activeLayoutRoot();
      if (layoutRoot) {
        layoutRoot.classList.add("is-leaving");
        await wait(220);
        layoutRoot.hidden = true;
        layoutRoot.classList.remove("is-leaving");
      }
      fillProject(id);
      resetReveals();
      projectPanel.hidden = false;
      projectPanel.classList.add("is-entering");
      void projectPanel.offsetWidth;
      projectPanel.classList.remove("is-entering");
    } else if (switching) {
      projectPanel.classList.add("is-leaving");
      await wait(220);
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
      document.querySelectorAll("[data-layout-root]").forEach((el) => {
        el.hidden = true;
      });
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

  document.querySelectorAll("[data-panel='home']").forEach((link) => {
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
