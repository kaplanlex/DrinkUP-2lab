const STORAGE_KEYS = {
  cart: "drinkup:cart",
  selectedProductId: "drinkup:selectedProductId",
  lastOrder: "drinkup:lastOrder",
  theme: "drinkup:theme",
};

const CATEGORY_LABELS = {
  lemonade: "Лимонади",
  juice: "Соки",
  coffee: "Айс-кава",
  smoothie: "Смузі",
};

const BADGE_LABELS = {
  hit: "Хіт",
  new: "Новинка",
  "no-sugar": "Без цукру",
  discount: "Акція",
};

const FILTER_TITLES = {
  all: {
    kicker: "Каталог",
    title: "Усі напої",
  },
  discounts: {
    kicker: "Акції",
    title: "Акційні напої",
  },
  lemonade: {
    kicker: "Категорія",
    title: "Лимонади",
  },
  juice: {
    kicker: "Категорія",
    title: "Соки",
  },
  coffee: {
    kicker: "Категорія",
    title: "Айс-кава",
  },
  smoothie: {
    kicker: "Категорія",
    title: "Смузі",
  },
};

const PRODUCTS = [
  {
    id: "fresh-lime",
    name: "Лимонад Fresh Lime",
    short: "Лайм, мʼята, лід",
    price: 89,
    oldPrice: 109,
    category: "lemonade",
    isDiscounted: true,
    popularity: 98,
    badge: "discount",
    theme: "lime",
    image: "assets/drink-lime.png",
    keywords: ["лимонад", "лайм", "мʼята", "лід", "освіжаючий"],
    features: ["Свіжий лайм", "Без консервантів", "Добре охолоджений"],
    details: [
      ["Обʼєм", "0.5 л"],
      ["Температура", "4°C"],
      ["Калорійність", "120 ккал"],
    ],
  },
  {
    id: "mint-cucumber",
    name: "Огірково-мʼятний лимонад",
    short: "Огірок, мʼята, лимон",
    price: 94,
    oldPrice: 0,
    category: "lemonade",
    isDiscounted: false,
    popularity: 84,
    badge: "no-sugar",
    theme: "lime",
    image: "assets/drink-lime.png",
    keywords: ["лимонад", "огірок", "мʼята", "лимон", "без цукру"],
    features: ["Свіжий огірок", "Легка кислинка", "Мʼятний післясмак"],
    details: [
      ["Обʼєм", "0.5 л"],
      ["Температура", "4°C"],
      ["Калорійність", "98 ккал"],
    ],
  },
  {
    id: "strawberry-lemon",
    name: "Полуничний лимонад",
    short: "Полуниця, лимон, сода",
    price: 99,
    oldPrice: 119,
    category: "lemonade",
    isDiscounted: true,
    popularity: 91,
    badge: "discount",
    theme: "berry",
    image: "assets/drink-berry.png",
    keywords: ["лимонад", "полуниця", "лимон", "сода"],
    features: ["Полуничне пюре", "Газована основа", "Без штучних барвників"],
    details: [
      ["Обʼєм", "0.5 л"],
      ["Температура", "5°C"],
      ["Калорійність", "132 ккал"],
    ],
  },
  {
    id: "mango-breeze",
    name: "Манговий бриз",
    short: "Манго, лайм, тонік",
    price: 108,
    oldPrice: 0,
    category: "lemonade",
    isDiscounted: false,
    popularity: 87,
    badge: "new",
    theme: "orange",
    image: "assets/drink-orange.png",
    keywords: ["лимонад", "манго", "лайм", "тонік"],
    features: ["Стигле манго", "Тропічний аромат", "Подається з льодом"],
    details: [
      ["Обʼєм", "0.5 л"],
      ["Температура", "4°C"],
      ["Калорійність", "146 ккал"],
    ],
  },
  {
    id: "orange-splash",
    name: "Апельсиновий фреш",
    short: "Апельсин, лимон, лід",
    price: 92,
    oldPrice: 110,
    category: "juice",
    isDiscounted: true,
    popularity: 88,
    badge: "discount",
    theme: "orange",
    image: "assets/drink-orange.png",
    keywords: ["сік", "фреш", "апельсин", "лимон", "свіжий"],
    features: ["Свіжий апельсин", "Лимонна нотка", "Без барвників"],
    details: [
      ["Обʼєм", "0.5 л"],
      ["Температура", "4°C"],
      ["Калорійність", "128 ккал"],
    ],
  },
  {
    id: "apple-green",
    name: "Зелений яблучний сік",
    short: "Яблуко, лайм, лід",
    price: 86,
    oldPrice: 0,
    category: "juice",
    isDiscounted: false,
    popularity: 80,
    badge: "no-sugar",
    theme: "lime",
    image: "assets/drink-lime.png",
    keywords: ["сік", "яблуко", "лайм", "без цукру"],
    features: ["Свіжий яблучний сік", "Лаймова нотка", "Без доданого цукру"],
    details: [
      ["Обʼєм", "0.4 л"],
      ["Температура", "5°C"],
      ["Калорійність", "112 ккал"],
    ],
  },
  {
    id: "grapefruit-tonic",
    name: "Грейпфрутовий тонік",
    short: "Грейпфрут, тонік, розмарин",
    price: 104,
    oldPrice: 0,
    category: "juice",
    isDiscounted: false,
    popularity: 76,
    badge: "hit",
    theme: "orange",
    image: "assets/drink-orange.png",
    keywords: ["сік", "грейпфрут", "тонік", "розмарин"],
    features: ["Грейпфрутовий фреш", "Освіжаючий тонік", "Розмариновий аромат"],
    details: [
      ["Обʼєм", "0.45 л"],
      ["Температура", "4°C"],
      ["Калорійність", "118 ккал"],
    ],
  },
  {
    id: "berry-ice-tea",
    name: "Ягідний холодний чай",
    short: "Ягоди, чорний чай, лід",
    price: 95,
    oldPrice: 0,
    category: "juice",
    isDiscounted: false,
    popularity: 82,
    badge: "new",
    theme: "berry",
    image: "assets/drink-berry.png",
    keywords: ["чай", "холодний чай", "ягоди", "лід"],
    features: ["Натуральні ягоди", "Охолоджений чай", "Легкий ягідний смак"],
    details: [
      ["Обʼєм", "0.5 л"],
      ["Температура", "5°C"],
      ["Калорійність", "135 ккал"],
    ],
  },
  {
    id: "classic-cold-brew",
    name: "Класичний колд брю",
    short: "Кава, лід, мʼяка гірчинка",
    price: 105,
    oldPrice: 0,
    category: "coffee",
    isDiscounted: false,
    popularity: 89,
    badge: "hit",
    theme: "berry",
    image: "assets/drink-berry.png",
    keywords: ["кава", "айс-кава", "колд брю", "лід"],
    features: ["12 годин настоювання", "Мʼякий смак", "Без молока"],
    details: [
      ["Обʼєм", "0.35 л"],
      ["Температура", "6°C"],
      ["Калорійність", "24 ккал"],
    ],
  },
  {
    id: "vanilla-iced-latte",
    name: "Ванільний айс латте",
    short: "Еспресо, молоко, ваніль",
    price: 109,
    oldPrice: 130,
    category: "coffee",
    isDiscounted: true,
    popularity: 94,
    badge: "discount",
    theme: "orange",
    image: "assets/drink-orange.png",
    keywords: ["кава", "айс-кава", "лате", "ваніль", "молоко"],
    features: ["Подвійний еспресо", "Ванільний сироп", "Охолоджене молоко"],
    details: [
      ["Обʼєм", "0.4 л"],
      ["Температура", "6°C"],
      ["Калорійність", "188 ккал"],
    ],
  },
  {
    id: "cocoa-frappe",
    name: "Какао-фрапе",
    short: "Какао, кава, лід",
    price: 118,
    oldPrice: 0,
    category: "coffee",
    isDiscounted: false,
    popularity: 73,
    badge: "new",
    theme: "berry",
    image: "assets/drink-berry.png",
    keywords: ["кава", "фрапе", "какао", "лід"],
    features: ["Кавова основа", "Натуральне какао", "Кремова текстура"],
    details: [
      ["Обʼєм", "0.45 л"],
      ["Температура", "5°C"],
      ["Калорійність", "215 ккал"],
    ],
  },
  {
    id: "green-smoothie",
    name: "Зелений детокс-смузі",
    short: "Шпинат, яблуко, лайм",
    price: 115,
    oldPrice: 135,
    category: "smoothie",
    isDiscounted: true,
    popularity: 85,
    badge: "discount",
    theme: "lime",
    image: "assets/drink-lime.png",
    keywords: ["смузі", "детокс", "шпинат", "яблуко", "лайм"],
    features: ["Свіжий шпинат", "Зелене яблуко", "Натуральна основа"],
    details: [
      ["Обʼєм", "0.45 л"],
      ["Температура", "5°C"],
      ["Калорійність", "164 ккал"],
    ],
  },
  {
    id: "berry-smoothie",
    name: "Ягідний смузі",
    short: "Малина, чорниця, банан",
    price: 119,
    oldPrice: 145,
    category: "smoothie",
    isDiscounted: true,
    popularity: 92,
    badge: "discount",
    theme: "berry",
    image: "assets/drink-berry.png",
    keywords: ["смузі", "ягоди", "малина", "чорниця", "банан"],
    features: ["Лісові ягоди", "Бананова текстура", "Без консервантів"],
    details: [
      ["Обʼєм", "0.45 л"],
      ["Температура", "5°C"],
      ["Калорійність", "198 ккал"],
    ],
  },
  {
    id: "banana-energy",
    name: "Банановий енерджі-смузі",
    short: "Банан, йогурт, мед",
    price: 112,
    oldPrice: 0,
    category: "smoothie",
    isDiscounted: false,
    popularity: 78,
    badge: "hit",
    theme: "orange",
    image: "assets/drink-orange.png",
    keywords: ["смузі", "банан", "йогурт", "мед", "енергія"],
    features: ["Стиглий банан", "Натуральний йогурт", "Легкий медовий смак"],
    details: [
      ["Обʼєм", "0.45 л"],
      ["Температура", "5°C"],
      ["Калорійність", "226 ккал"],
    ],
  },
  {
    id: "watermelon-fresh",
    name: "Кавуновий фреш",
    short: "Кавун, лайм, мʼята",
    price: 105,
    oldPrice: 125,
    category: "smoothie",
    isDiscounted: true,
    popularity: 90,
    badge: "discount",
    theme: "berry",
    image: "assets/drink-berry.png",
    keywords: ["фреш", "смузі", "кавун", "лайм", "мʼята"],
    features: ["Кавуновий фреш", "Свіжий лайм", "Свіжа мʼята"],
    details: [
      ["Обʼєм", "0.5 л"],
      ["Температура", "4°C"],
      ["Калорійність", "142 ккал"],
    ],
  },
];

let currentProductIndex = 0;
let currentQuantity = 1;
let currentCatalogFilter = "all";
let currentSearchQuery = "";
let currentSortType = "popular";

const page = document.body.dataset.page;

applySavedTheme();

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initBurgerMenu();
  setActiveHeaderLink();

  if (page === "home") {
    initHomePage();
  }

  if (page === "catalog") {
    initCatalogPage();
  }

  if (page === "product") {
    initProductPage();
  }

  if (page === "checkout") {
    initCheckoutPage();
  }
});

function applySavedTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || "dark";
  document.body.classList.toggle("light-theme", savedTheme === "light");
}

function initThemeToggle() {
  const themeButtons = document.querySelectorAll("[data-theme-toggle]");

  updateThemeToggleIcons();

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light-theme");
      localStorage.setItem(STORAGE_KEYS.theme, isLight ? "light" : "dark");
      updateThemeToggleIcons();
    });
  });
}

function updateThemeToggleIcons() {
  const isLight = document.body.classList.contains("light-theme");
  const nextIcon = isLight ? "🌙" : "☀️";
  const nextLabel = isLight ? "Увімкнути темну тему" : "Увімкнути світлу тему";

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    const icon = button.querySelector("[data-theme-icon]");

    if (icon) {
      icon.textContent = nextIcon;
    }

    button.setAttribute("aria-label", nextLabel);
    button.setAttribute("title", nextLabel);
  });
}

function initBurgerMenu() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".site-nav");

  if (!burger || !nav) return;

  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    const target = event.target;

    if (target instanceof HTMLElement && target.closest("a")) {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }
  });
}

function setActiveHeaderLink() {
  const navLinks = document.querySelectorAll(".site-nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";

    if (page === "home" && href === "index.html") {
      link.classList.add("is-active");
    }

    if (page === "catalog" && href.startsWith("catalog.html")) {
      const filterFromUrl = getFilterFromUrl();
      const navFilter = link.dataset.catalogNav || "all";

      if (
        filterFromUrl === navFilter ||
        (filterFromUrl === "all" && navFilter === "all")
      ) {
        link.classList.add("is-active");
      }
    }
  });
}

function initHomePage() {
  const popularGrid = document.querySelector("#popularGrid");

  if (!popularGrid) return;

  const popularProducts = [...PRODUCTS]
    .sort(
      (firstProduct, secondProduct) =>
        secondProduct.popularity - firstProduct.popularity,
    )
    .slice(0, 6);

  popularGrid.innerHTML = popularProducts.map(createProductCardMarkup).join("");
}

function initCatalogPage() {
  currentCatalogFilter = getFilterFromUrl();
  bindCatalogControls();
  renderProducts(currentCatalogFilter);
}

function bindCatalogControls() {
  const filterButtons = document.querySelectorAll("[data-filter]");
  const navLinks = document.querySelectorAll("[data-catalog-nav]");
  const searchInput = document.querySelector("#search-input");
  const sortSelect = document.querySelector("#sort-select");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";
      renderProducts(filter);
      updateCatalogUrl(filter);
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const filter = link.dataset.catalogNav || "all";
      renderProducts(filter);
      updateCatalogUrl(filter);
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      currentSearchQuery = event.target.value.trim().toLowerCase();
      renderProducts(currentCatalogFilter);
    });
  }

  if (sortSelect) {
    currentSortType = sortSelect.value || "popular";

    sortSelect.addEventListener("change", (event) => {
      currentSortType = event.target.value;
      renderProducts(currentCatalogFilter);
    });
  }
}

/*
  Головна функція рендеру каталогу.
  filter: "all" | "discounts" | "lemonade" | "juice" | "coffee" | "smoothie"
  Пошук та сортування працюють поверх вибраного фільтра.
*/
function renderProducts(filter = "all") {
  const catalogGrid = document.querySelector("#catalogGrid");
  const emptyMessage = document.querySelector("#emptyMessage");
  const catalogCount = document.querySelector("#catalogCount");
  const normalizedFilter = normalizeFilter(filter);
  const filteredProducts = getCatalogProducts(
    normalizedFilter,
    currentSearchQuery,
    currentSortType,
  );

  currentCatalogFilter = normalizedFilter;
  updateCatalogTexts(normalizedFilter, filteredProducts.length);
  updateFilterButtons(normalizedFilter);
  updateCatalogNavLinks(normalizedFilter);

  if (!catalogGrid) return;

  catalogGrid.innerHTML = filteredProducts
    .map(createProductCardMarkup)
    .join("");

  if (emptyMessage) {
    const hasSearch = currentSearchQuery.length > 0;
    emptyMessage.hidden = filteredProducts.length > 0;
    emptyMessage.textContent = hasSearch
      ? "За вашим пошуком напоїв не знайдено. Спробуйте інший запит."
      : "За цим фільтром поки немає напоїв.";
  }

  if (catalogCount) {
    catalogCount.textContent = String(filteredProducts.length);
  }
}

function getCatalogProducts(filter, searchQuery, sortType) {
  const normalizedSearch = String(searchQuery || "")
    .trim()
    .toLowerCase();

  return getFilteredProducts(filter)
    .filter((product) => matchesSearchQuery(product, normalizedSearch))
    .sort((firstProduct, secondProduct) =>
      sortProducts(firstProduct, secondProduct, sortType),
    );
}

function getFilteredProducts(filter) {
  if (filter === "discounts") {
    return PRODUCTS.filter((product) => product.isDiscounted);
  }

  if (Object.prototype.hasOwnProperty.call(CATEGORY_LABELS, filter)) {
    return PRODUCTS.filter((product) => product.category === filter);
  }

  return [...PRODUCTS];
}

function matchesSearchQuery(product, searchQuery) {
  if (!searchQuery) return true;

  const searchableText = [
    product.name,
    product.short,
    CATEGORY_LABELS[product.category],
    product.category,
    ...(product.keywords || []),
    ...(product.features || []),
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(searchQuery);
}

function sortProducts(firstProduct, secondProduct, sortType) {
  switch (sortType) {
    case "price-asc":
      return firstProduct.price - secondProduct.price;
    case "price-desc":
      return secondProduct.price - firstProduct.price;
    case "discounts-first":
      return (
        Number(secondProduct.isDiscounted) -
          Number(firstProduct.isDiscounted) ||
        secondProduct.popularity - firstProduct.popularity
      );
    case "popular":
    default:
      return secondProduct.popularity - firstProduct.popularity;
  }
}

function createProductCardMarkup(product) {
  const badgeData = getProductBadge(product);
  const badgeMarkup = badgeData
    ? `<span class="product-badge ${badgeData.className}">${escapeHtml(badgeData.label)}</span>`
    : "";

  const oldPriceMarkup =
    product.isDiscounted && product.oldPrice > product.price
      ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>`
      : "";

  return `
    <a class="product-card" href="cart.html?id=${encodeURIComponent(product.id)}" aria-label="Відкрити товар ${escapeHtml(product.name)}">
      ${badgeMarkup}
      <div class="product-card-image" data-theme="${escapeHtml(product.theme)}">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" />
      </div>

      <div class="product-card-body">
        <div>
          <h3>${escapeHtml(product.name)}</h3>
          <p>${escapeHtml(product.short)}</p>
          <div class="product-meta-row">
            <span class="category-pill">${escapeHtml(CATEGORY_LABELS[product.category] || "Напій")}</span>
          </div>
        </div>

        <div class="product-card-footer">
          <div class="price-stack">
            ${oldPriceMarkup}
            <span class="catalog-price">${formatPrice(product.price)}</span>
          </div>
          <span class="card-action" aria-hidden="true">
            <svg class="card-action-icon" viewBox="0 0 24 24" focusable="false">
              <path d="M5 12h12m-5-5 5 5-5 5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  `;
}

function getProductBadge(product) {
  if (product.isDiscounted && product.oldPrice > product.price) {
    return {
      label: `-${getDiscountPercent(product)}%`,
      className: "badge-discount",
    };
  }

  if (!product.badge) return null;

  return {
    label: BADGE_LABELS[product.badge] || product.badge,
    className: `badge-${product.badge}`,
  };
}

function updateCatalogTexts(filter, count) {
  const titleData = FILTER_TITLES[filter] || FILTER_TITLES.all;

  updateText("#catalogKicker", titleData.kicker);
  updateText("#catalogSectionTitle", titleData.title);
  updateText(
    "#catalogTitle",
    filter === "discounts"
      ? "Акційні напої DrinkUp"
      : "Напої для будь-якого настрою",
  );
  updateText("#catalogCount", count);
}

function updateFilterButtons(filter) {
  const filterButtons = document.querySelectorAll("[data-filter]");

  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });
}

function updateCatalogNavLinks(filter) {
  const navLinks = document.querySelectorAll("[data-catalog-nav]");

  navLinks.forEach((link) => {
    const navFilter = link.dataset.catalogNav || "all";
    link.classList.toggle(
      "is-active",
      navFilter === filter || (navFilter === "all" && filter !== "discounts"),
    );
  });
}

function updateCatalogUrl(filter) {
  const nextUrl =
    filter === "all"
      ? "catalog.html"
      : `catalog.html?filter=${encodeURIComponent(filter)}`;
  window.history.replaceState({}, "", nextUrl);
}

function getFilterFromUrl() {
  const filterFromUrl =
    new URLSearchParams(window.location.search).get("filter") || "all";
  return normalizeFilter(filterFromUrl);
}

function normalizeFilter(filter) {
  const allowedFilters = ["all", "discounts", ...Object.keys(CATEGORY_LABELS)];
  return allowedFilters.includes(filter) ? filter : "all";
}

function initProductPage() {
  const productIdFromUrl = new URLSearchParams(window.location.search).get(
    "id",
  );
  const savedProductId = getStorageItem(STORAGE_KEYS.selectedProductId);
  const initialProductId = productIdFromUrl || savedProductId || PRODUCTS[0].id;
  const foundIndex = PRODUCTS.findIndex(
    (product) => product.id === initialProductId,
  );

  currentProductIndex = foundIndex === -1 ? 0 : foundIndex;
  currentQuantity = 1;

  renderProduct();
  renderCartPage();
  bindProductControls();
  bindCartPageControls();
}

function renderProduct() {
  const product = PRODUCTS[currentProductIndex];
  const title = document.querySelector("#productTitle");
  const price = document.querySelector("#productPrice");
  const priceBox = document.querySelector("#productPriceBox");
  const quantityValue = document.querySelector("#quantityValue");
  const featureList = document.querySelector("#featureList");
  const detailsList = document.querySelector("#detailsList");
  const productVisual = document.querySelector("#productVisual");

  setStorageItem(STORAGE_KEYS.selectedProductId, product.id);

  if (title) title.textContent = product.name;
  if (quantityValue) quantityValue.textContent = String(currentQuantity);

  if (price) {
    price.textContent = formatPrice(product.price);
    price.classList.toggle("is-discounted", product.isDiscounted);
  }

  if (priceBox) {
    const oldPriceElement = priceBox.querySelector(".product-old-price");

    if (oldPriceElement) {
      oldPriceElement.remove();
    }

    if (product.isDiscounted && product.oldPrice > product.price) {
      priceBox.insertAdjacentHTML(
        "afterbegin",
        `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>`,
      );
    }
  }

  if (featureList) {
    featureList.innerHTML = product.features
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
  }

  if (detailsList) {
    detailsList.innerHTML = product.details
      .map(
        ([label, value]) => `
      <div>
        <dt>${escapeHtml(label)}:</dt>
        <dd>${escapeHtml(value)}</dd>
      </div>
    `,
      )
      .join("");
  }

  if (productVisual) {
    productVisual.dataset.theme = product.theme;
    productVisual.innerHTML = createDrinkArtwork(product);
  }

  window.history.replaceState(
    {},
    "",
    `cart.html?id=${encodeURIComponent(product.id)}`,
  );
}

function bindProductControls() {
  const quantityButtons = document.querySelectorAll("[data-qty]");
  const nextButton = document.querySelector("#nextProductBtn");
  const addButton = document.querySelector("#orderBtn");
  const checkoutButton = document.querySelector("#checkoutBtn");

  quantityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.qty;
      currentQuantity = updateQuantity(currentQuantity, action);
      updateText("#quantityValue", currentQuantity);
    });
  });

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      currentProductIndex = (currentProductIndex + 1) % PRODUCTS.length;
      currentQuantity = 1;
      renderProduct();
    });
  }

  if (addButton) {
    addButton.addEventListener("click", () => {
      const product = PRODUCTS[currentProductIndex];
      addToCart(product.id, currentQuantity);
      currentQuantity = 1;
      updateText("#quantityValue", currentQuantity);
      renderCartPage();
      showToast(`«${product.name}» додано до кошика.`);
    });
  }

  if (checkoutButton) {
    checkoutButton.addEventListener("click", (event) => {
      const cart = getCartItems();

      if (cart.length === 0) {
        event.preventDefault();
        showToast("Спочатку додайте напій до кошика.");
      }
    });
  }
}

function createDrinkArtwork(product) {
  const badgeData = getProductBadge(product);
  const badgeMarkup = badgeData
    ? `<span class="product-badge product-discount-badge ${badgeData.className}">${escapeHtml(badgeData.label)}</span>`
    : "";

  return `
    ${badgeMarkup}
    <img class="drink-png product-drink" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" />
  `;
}

/* =========================================================
   Кошик з кількома різними напоями
   ========================================================= */

function addToCart(productId, quantity = 1) {
  const product = getProductById(productId);
  if (!product) return [];

  const cart = getCartItems();
  const existingItem = cart.find((item) => item.productId === productId);
  const amount = Math.max(Number(quantity) || 1, 1);

  if (existingItem) {
    existingItem.quantity = Math.min(
      (Number(existingItem.quantity) || 1) + amount,
      99,
    );
    existingItem.price = product.price;
    existingItem.oldPrice = product.oldPrice;
    existingItem.name = product.name;
    existingItem.isDiscounted = product.isDiscounted;
    existingItem.image = product.image;
    existingItem.updatedAt = new Date().toISOString();
  } else {
    cart.push({
      productId: product.id,
      quantity: amount,
      price: product.price,
      oldPrice: product.oldPrice,
      name: product.name,
      isDiscounted: product.isDiscounted,
      image: product.image,
      createdAt: new Date().toISOString(),
    });
  }

  saveCartItems(cart);
  return cart;
}

function getCartItems() {
  const storedCart = getStorageItem(STORAGE_KEYS.cart);

  if (Array.isArray(storedCart)) {
    return normalizeCartItems(storedCart);
  }

  // Сумісність зі старою версією, де в localStorage зберігався один обʼєкт.
  if (storedCart && storedCart.productId) {
    return normalizeCartItems([storedCart]);
  }

  return [];
}

function normalizeCartItems(items) {
  return items
    .map((item) => {
      const product = getProductById(item.productId);
      if (!product) return null;

      return {
        productId: product.id,
        quantity: Math.max(Number(item.quantity) || 1, 1),
        price: product.price,
        oldPrice: product.oldPrice,
        name: product.name,
        isDiscounted: product.isDiscounted,
        image: product.image,
        createdAt: item.createdAt || new Date().toISOString(),
        updatedAt: item.updatedAt || item.createdAt || new Date().toISOString(),
      };
    })
    .filter(Boolean);
}

function saveCartItems(items) {
  setStorageItem(STORAGE_KEYS.cart, normalizeCartItems(items));
}

function updateCartItemQuantity(productId, action) {
  const cart = getCartItems();
  const item = cart.find((cartItem) => cartItem.productId === productId);

  if (!item) return cart;

  item.quantity = updateQuantity(Number(item.quantity) || 1, action);
  item.updatedAt = new Date().toISOString();
  saveCartItems(cart);
  return getCartItems();
}

function removeFromCart(productId) {
  const nextCart = getCartItems().filter(
    (item) => item.productId !== productId,
  );
  saveCartItems(nextCart);
  return nextCart;
}

function clearCart() {
  localStorage.removeItem(STORAGE_KEYS.cart);
}

function getCartTotals(cart = getCartItems()) {
  return cart.reduce(
    (totals, item) => {
      const product = getProductById(item.productId);
      const price = product ? product.price : Number(item.price) || 0;
      const quantity = Number(item.quantity) || 1;

      totals.quantity += quantity;
      totals.total += price * quantity;
      return totals;
    },
    { quantity: 0, total: 0 },
  );
}

function createCartItemMarkup(item, options = {}) {
  const product = getProductById(item.productId);
  if (!product) return "";

  const quantity = Number(item.quantity) || 1;
  const subtotal = product.price * quantity;
  const oldPriceMarkup =
    product.isDiscounted && product.oldPrice > product.price
      ? `<span class="cart-old-price">${formatPrice(product.oldPrice)}</span>`
      : "";
  const removeButtonMarkup =
    options.allowRemove === false
      ? ""
      : `<button class="cart-remove" type="button" data-remove-cart="${escapeHtml(product.id)}" aria-label="Видалити ${escapeHtml(product.name)} з кошика">
        <svg class="cart-remove-icon" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
          <path d="M7 7l10 10M17 7 7 17" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
        </svg>
      </button>`;

  return `
    <article class="cart-item" data-cart-item="${escapeHtml(product.id)}">
      <img class="cart-item-image" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" />

      <div class="cart-item-content">
        <div class="cart-item-top">
          <div>
            <h3>${escapeHtml(product.name)}</h3>
            <p>${escapeHtml(product.short)}</p>
          </div>
          ${removeButtonMarkup}
        </div>

        <div class="cart-item-bottom">
          <div class="cart-price-stack">
            ${oldPriceMarkup}
            <strong>${formatPrice(product.price)}</strong>
          </div>

          <div class="quantity small" aria-label="Кількість ${escapeHtml(product.name)}">
            <button class="quantity-btn" type="button" data-cart-qty="minus" data-product-id="${escapeHtml(product.id)}" aria-label="Зменшити кількість">−</button>
            <span>${quantity}</span>
            <button class="quantity-btn" type="button" data-cart-qty="plus" data-product-id="${escapeHtml(product.id)}" aria-label="Збільшити кількість">+</button>
          </div>

          <div class="cart-subtotal">
            <span>Сума</span>
            <strong>${formatPrice(subtotal)}</strong>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCartPage() {
  const cartList = document.querySelector("#cartItems");
  const cartTotal = document.querySelector("#cartTotal");
  const cartCount = document.querySelector("#cartCount");
  const emptyCart = document.querySelector("#emptyCart");
  const checkoutLinks = document.querySelectorAll("[data-checkout-link]");

  if (!cartList && !cartTotal && !cartCount && !emptyCart) return;

  const cart = getCartItems();
  const totals = getCartTotals(cart);

  if (cartList) {
    cartList.innerHTML =
      cart.length > 0
        ? cart.map((item) => createCartItemMarkup(item)).join("")
        : "";
  }

  if (cartTotal) cartTotal.textContent = formatPrice(totals.total);
  if (cartCount) cartCount.textContent = `${totals.quantity} шт.`;
  if (emptyCart) emptyCart.hidden = cart.length > 0;

  checkoutLinks.forEach((link) => {
    link.classList.toggle("is-disabled", cart.length === 0);
    link.setAttribute("aria-disabled", String(cart.length === 0));
  });
}

function bindCartPageControls() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const qtyButton = target.closest("[data-cart-qty]");
    const removeButton = target.closest("[data-remove-cart]");
    const clearButton = target.closest("[data-clear-cart]");

    if (qtyButton) {
      const productId = qtyButton.dataset.productId;
      const action = qtyButton.dataset.cartQty;
      if (!productId || !action) return;

      updateCartItemQuantity(productId, action);
      renderCartPage();
      renderCheckoutCart();
    }

    if (removeButton) {
      const productId = removeButton.dataset.removeCart;
      if (!productId) return;

      removeFromCart(productId);
      renderCartPage();
      renderCheckoutCart();
    }

    if (clearButton) {
      clearCart();
      renderCartPage();
      renderCheckoutCart();
    }
  });
}

function initCheckoutPage() {
  renderCheckoutCart();
  bindCartPageControls();
  bindCheckoutForm();
  bindModalControls();
}

function renderCheckoutCart() {
  const checkoutItems = document.querySelector("#checkoutItems");
  const checkoutEmpty = document.querySelector("#checkoutEmpty");
  const summaryTotal = document.querySelector("#summaryTotal");
  const summaryQuantity = document.querySelector("#summaryQuantity");
  const submitButton = document.querySelector("#submitOrderBtn");

  if (!checkoutItems && !summaryTotal && !summaryQuantity && !checkoutEmpty)
    return;

  const cart = getCartItems();
  const totals = getCartTotals(cart);

  if (checkoutItems) {
    checkoutItems.innerHTML =
      cart.length > 0
        ? cart.map((item) => createCartItemMarkup(item)).join("")
        : "";
  }

  if (checkoutEmpty) checkoutEmpty.hidden = cart.length > 0;
  if (summaryTotal) summaryTotal.textContent = formatPrice(totals.total);
  if (summaryQuantity) summaryQuantity.textContent = `${totals.quantity} шт.`;
  if (submitButton) submitButton.disabled = cart.length === 0;
}

function bindCheckoutForm() {
  const form = document.querySelector("#checkoutForm");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    clearFormErrors(form);

    const cart = getCartItems();

    if (cart.length === 0) {
      showToast("Кошик порожній. Додайте хоча б один напій.");
      return;
    }

    const formData = new FormData(form);
    const values = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      address: String(formData.get("address") || "").trim(),
      payment: String(formData.get("payment") || "Готівка"),
    };

    const errors = validateOrderForm(values);

    if (Object.keys(errors).length > 0) {
      showFormErrors(form, errors);
      return;
    }

    const totals = getCartTotals(cart);
    const order = {
      customer: values,
      items: cart.map((item) => {
        const product = getProductById(item.productId);
        const quantity = Number(item.quantity) || 1;
        const price = product ? product.price : Number(item.price) || 0;

        return {
          id: item.productId,
          name: product ? product.name : item.name,
          price,
          oldPrice: product ? product.oldPrice : item.oldPrice,
          isDiscounted: product ? product.isDiscounted : item.isDiscounted,
          quantity,
          total: price * quantity,
        };
      }),
      totalQuantity: totals.quantity,
      total: totals.total,
      createdAt: new Date().toISOString(),
    };

    setStorageItem(STORAGE_KEYS.lastOrder, order);
    clearCart();
    renderCheckoutCart();
    openSuccessModal(order);
    form.reset();
  });
}

function validateOrderForm(values) {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneDigits = values.phone.replace(/\D/g, "");

  if (values.name.length < 2) {
    errors.name = "Вкажіть імʼя мінімум з 2 символів.";
  }

  if (!emailRegex.test(values.email)) {
    errors.email = "Вкажіть коректний E-mail.";
  }

  if (phoneDigits.length < 10) {
    errors.phone = "Вкажіть коректний номер телефону.";
  }

  if (values.address.length < 5) {
    errors.address = "Вкажіть адресу доставки.";
  }

  return errors;
}

function clearFormErrors(form) {
  form.querySelectorAll(".field-error").forEach((error) => {
    error.textContent = "";
  });

  form.querySelectorAll("input.invalid").forEach((input) => {
    input.classList.remove("invalid");
  });
}

function showFormErrors(form, errors) {
  Object.entries(errors).forEach(([fieldName, message]) => {
    const errorElement = form.querySelector(`[data-error="${fieldName}"]`);
    const inputElement = form.querySelector(`[name="${fieldName}"]`);

    if (errorElement) errorElement.textContent = message;
    if (inputElement) inputElement.classList.add("invalid");
  });

  const firstInvalid = form.querySelector(".invalid");
  if (firstInvalid) firstInvalid.focus();
}

function openSuccessModal(order) {
  const modal = document.querySelector("#successModal");
  const modalText = document.querySelector("#modalText");

  if (!modal) return;

  if (modalText) {
    const itemText =
      order.totalQuantity === 1 ? "1 напій" : `${order.totalQuantity} напої(в)`;
    modalText.textContent = `Ваше замовлення на ${itemText} прийнято. Сума: ${formatPrice(order.total)}. Очікуйте дзвінок оператора.`;
  }

  document.body.classList.add("modal-open");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function bindModalControls() {
  const modal = document.querySelector("#successModal");
  const homeLink = document.querySelector("[data-modal-home]");

  if (!modal) return;

  modal.addEventListener("click", (event) => {
    const target = event.target;

    if (target instanceof HTMLElement && target.matches("[data-close-modal]")) {
      closeModal(modal);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal(modal);
    }
  });

  if (homeLink) {
    homeLink.addEventListener("click", () => {
      closeModal(modal);
    });
  }
}

function closeModal(modal) {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function updateQuantity(currentValue, action) {
  if (action === "plus") {
    return Math.min(currentValue + 1, 99);
  }

  if (action === "minus") {
    return Math.max(currentValue - 1, 1);
  }

  return currentValue;
}

function getProductById(productId) {
  return PRODUCTS.find((product) => product.id === productId);
}

function getDiscountPercent(product) {
  if (
    !product.isDiscounted ||
    !product.oldPrice ||
    product.oldPrice <= product.price
  ) {
    return 0;
  }

  return Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100,
  );
}

function formatPrice(value) {
  return `${Number(value)} грн`;
}

function updateText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = String(value);
}

function showToast(message) {
  let toast = document.querySelector(".toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getStorageItem(key) {
  try {
    const rawValue = localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : null;
  } catch (error) {
    console.warn("Не вдалося прочитати localStorage:", error);
    return null;
  }
}

function setStorageItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Не вдалося записати localStorage:", error);
  }
}
