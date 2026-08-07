(() => {
  const projects = {
    profite: {
      group: "works",
      title: "ProfiTE",
      icon: "assets/icons/profite.webp",
      desc: "Запущенный B2B-сайт интегратора 1С: услуги, калькулятор и быстрый контакт.",
      intro:
        "Реализованный проект: обновил сайт интегратора 1С так, чтобы клиент быстро понимал услуги и мог оценить маршрут обновления. Акцент — доверие франчайзи и короткий путь к заявке. Сайт в работе: profite.ru.",
      problems:
        "Информация по 1С:ИТС, услугам и контактам была размазана. Не хватало понятного инструмента расчёта обновлений и сильного первого экрана под оффер «открыли ИП/ООО».",
      solution:
        "Собрал и запустил лендинг с услугами, калькулятором обновлений, картой и контактами. Визуал и CTA ведут к звонку или заявке, а структура помогает быстро выбрать нужное направление.",
      meta: [
        ["Клиент", "ProfiTE"],
        ["Тип", "Сайт · B2B лендинг"],
        ["Статус", "Запущен"],
        ["Год", "2025"],
      ],
      shots: [
        "assets/works/profite/after-live-v3.webp",
      ],
      beforeAfter: {
        before: "assets/works/profite/before-desktop.webp",
        after: "assets/works/profite/after-live-v3.webp",
        issues: [
          "Форма входа и оранжевое меню съедают внимание вместо оффера",
          "Баннеры и битые картинки снижают доверие",
          "Нет чистого маршрута «открыли ИП → купить и настроить 1С»",
          "Визуал и типографика выглядят как старый корпоративный портал",
        ],
      },
    },
    profitebot: {
      group: "works",
      title: "ProfiTE · бот",
      icon: "assets/icons/bots.webp",
      desc: "Бот для подсчёта обновлений 1С — Telegram и Max.",
      intro:
        "Реализованный проект для ProfiTE: бот, который помогает быстро посчитать обновления 1С и вести клиента к заявке. Работает в Telegram и Max — тот же сценарий, без лишних шагов.",
      problems:
        "Клиентам было неудобно вручную разбираться в объёме обновлений: долго ждать ответ, легко ошибиться в конфигурации и сроках. Нужен был простой диалог «вопрос → расчёт → заявка».",
      solution:
        "Собрал сценарий бота под подсчёт обновлений: меню, уточняющие шаги, результат и передача заявки менеджеру. Один поток для Telegram и Max, чтобы команда ProfiTE принимала обращения в одном формате.",
      meta: [
        ["Клиент", "ProfiTE"],
        ["Тип", "Бот · Telegram / Max"],
        ["Статус", "Запущен"],
        ["Год", "2025"],
      ],
      shots: [
        "assets/works/bots/01-telegram-desktop.webp",
        "assets/works/bots/02-telegram-mobile.webp",
        "assets/works/bots/03-max-desktop.webp",
        "assets/works/bots/04-max-mobile.webp",
        "assets/works/bots/05-telegram-landing.webp",
      ],
    },
    petrol: {
      group: "portfolio",
      title: "Petrol-Люкс",
      icon: "assets/icons/petrol.webp",
      desc: "Набросок one-pager сети АЗС: цены, станции и асфальтово-янтарная подача.",
      intro:
        "Концепт редизайна сайта сети АЗС: показать, как мог бы выглядеть спокойный современный one-pager с ценами, станциями и понятным путём к контакту. Это набросок из портфолио, не запущенный проект.",
      problems:
        "Типовые сайты АЗС плохо держат внимание: цены и станции разрознены, на мобильном сложно ориентироваться, первый экран не объясняет ценность сети. В наброске собрал один маршрут — от цены и адреса до заявки.",
      solution:
        "Набросал светлый лендинг с живыми ценами, раскрывающимися станциями на карте и адаптивной шапкой. Палитра асфальт/янтарь подчёркивает продукт, структура ведёт от оффера к адресам и контактам.",
      meta: [
        ["Бренд", "Petrol-Люкс"],
        ["Тип", "Набросок · АЗС"],
        ["Формат", "One-pager, редизайн"],
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
      group: "portfolio",
      title: "Glob-IT",
      icon: "assets/icons/globit.webp",
      desc: "Набросок корпоративного редизайна: lavender bento, услуги, тарифы и Церера.",
      intro:
        "Концепт сайта IT-компании: повысить узнаваемость и сделать услуги, тарифы и продукт Церера читаемыми с первого экрана. Набросок из портфолио — визуал и структура как предложение, не продакшен.",
      problems:
        "Старая подача не держала фокус на услугах 1С, тарифах и собственном продукте. Нужен был фирменный стиль под системность и надёжность — без типового корпоративного шаблона.",
      solution:
        "Набросал лавандовый bento: сильный hero, преимущества, услуги по направлениям, тарифы, акцент на Церере, клиенты и быстрый контакт. Визуал и блоки работают вместе на доверие и заявку.",
      meta: [
        ["Бренд", "Glob-IT · Крона"],
        ["Тип", "Набросок · корпоративный"],
        ["Формат", "Lavender bento, UI"],
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
      group: "portfolio",
      title: "Inmis",
      icon: "assets/icons/inmis.webp",
      desc: "Набросок медтех-лендинга: продукты, услуги и путь для B2B.",
      intro:
        "Концепт лендинга медтех-продуктов: быстро объяснить ценность решений и довести до заявки без перегруза. Это набросок из портфолио, не запущенный сайт.",
      problems:
        "Сложный продукт тонет в длинных текстах: непонятно, чем отличаются направления, куда смотреть про ЕГИСЗ/Улло и как связаться. Нужна ясная иерархия и спокойный тон.",
      solution:
        "Набросал структуру с сильным hero, блоками услуг и продуктов, акцентами на ключевые решения и удобной формой. Навигация и адаптив держат фокус на сути продукта.",
      meta: [
        ["Бренд", "Inmis"],
        ["Тип", "Набросок · медтех"],
        ["Формат", "Лендинг, UI"],
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
    zoomir: {
      group: "portfolio",
      title: "Зоомир",
      icon: "assets/icons/zoomir.webp",
      desc: "Набросок редизайна зоомагазина: ассортимент, витрина и фирменный тон.",
      intro:
        "Концепт сайта зоомагазина Зоомир: современная витрина, ассортимент и спокойный путь к контакту. Набросок из портфолио — предложение по виду и структуре, не запуск.",
      problems:
        "Текущий сайт выглядит шаблонно: стоковый hero, слабые акценты на ассортимент и доверие. Не хватает маршрута от оффера к категориям, 3D-туру и заявке.",
      solution:
        "Набросал светлый one-pager с лавандово-синей палитрой, сильным hero, блоком ассортимента, туром по магазину и быстрым контактом. Визуал ведёт от атмосферы бренда к действию.",
      meta: [
        ["Бренд", "Зоомир"],
        ["Тип", "Набросок · зоомагазин"],
        ["Формат", "UI, one-pager"],
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
    update1c: {
      title: "Обновление 1С и ККТ",
      tag: "1С",
      icon: "ico-boxes",
      lead: "Помогаю с обновлением 1С, настройкой и подключением ККТ / онлайн-касс — без лишней путаницы.",
      test: "1–2 дня",
      full: "2–5 дней",
      price: "Индивидуально",
      items: [
        "Обновление конфигураций 1С",
        "Проверка и настройка обменов",
        "Подключение и настройка ККТ / онлайн-касс",
        "Краткий инструктаж по работе после обновления",
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

  const allReviews = [
    {
      text: "Сайт стал выглядеть современно, цены и станции наконец в одном месте. Клиенты стали чаще писать с формы.",
      name: "Андрей Смирнов",
      company: "Petrol-Люкс",
    },
    {
      text: "Сделали аккуратно и по делу: структура понятная, услуги читаются, заявки пошли быстрее обычного.",
      name: "Елена Котова",
      company: "Glob-IT",
    },
    {
      text: "Быстро собрали лендинг и довели до запуска. Удобно, что сразу показали тестовый вариант.",
      name: "Максим Орлов",
      company: "ProfiTE",
    },
    {
      text: "Раньше сайт выглядел устаревшим. После редизайна ассортимент читается, клиенты чаще звонят и спрашивают доставку.",
      name: "Олег Ефимов",
      company: "Зоомир",
    },
    {
      text: "Нужен был понятный медтех-лендинг без воды. Сделали структуру, адаптив и форму — стало проще объяснять услуги.",
      name: "Татьяна Волкова",
      company: "Inmis",
    },
  ];

  const listModal = document.getElementById("list-modal");
  const listTitle = document.getElementById("list-title");
  const listTag = document.getElementById("list-tag");
  const listBody = document.getElementById("list-body");
  let listKind = null;

  const closeList = () => {
    if (!listModal || listModal.hidden) return;
    listModal.hidden = true;
    document.body.classList.remove("list-open");
    document.querySelectorAll("[data-all].is-active").forEach((btn) => {
      btn.classList.remove("is-active");
    });
    listKind = null;
  };

  const openList = (kind) => {
    if (!listModal || !listBody) return;
    listKind = kind;
    document.querySelectorAll("[data-all]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-all") === kind);
    });

    if (kind === "works") {
      listTag.textContent = "Реализованные";
      listTitle.textContent = "Все проекты";
      listBody.innerHTML = `<div class="rows">${Object.entries(projects)
        .filter(([, item]) => item.group === "works")
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
        .join("")}</div>`;
    } else if (kind === "portfolio") {
      listTag.textContent = "Наброски";
      listTitle.textContent = "Всё портфолио";
      listBody.innerHTML = `<div class="rows">${Object.entries(projects)
        .filter(([, item]) => item.group === "portfolio")
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
        .join("")}</div>`;
    } else if (kind === "reviews") {
      listTag.textContent = "Клиенты";
      listTitle.textContent = "Все отзывы";
      listBody.innerHTML = `<div class="reviews">${allReviews
        .map(
          (item) => `
          <article class="review">
            <p>«${item.text}»</p>
            <footer>
              <strong>${item.name}</strong>
              <span>${item.company}</span>
            </footer>
          </article>`
        )
        .join("")}</div>`;
    } else {
      return;
    }

    listModal.hidden = false;
    document.body.classList.add("list-open");
  };

  document.addEventListener("click", (e) => {
    const allBtn = e.target.closest("[data-all]");
    if (allBtn) {
      openList(allBtn.getAttribute("data-all"));
      return;
    }

    if (e.target.closest("[data-close-list]")) {
      closeList();
      return;
    }

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
    if (e.key === "Escape") {
      closeList();
      closeService();
    }
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
  const otherLabel = document.getElementById("other-label");
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

    if (otherLabel) {
      otherLabel.textContent =
        data.group === "portfolio" ? "Другие наброски" : "Другие проекты";
    }

    otherEl.innerHTML = Object.entries(projects)
      .filter(([key, item]) => key !== id && item.group === data.group)
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
      closeList();
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
