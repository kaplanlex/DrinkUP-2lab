const STORAGE_KEYS = {
  cart: "drinkup:cart",
  selectedProductId: "drinkup:selectedProductId",
  lastOrder: "drinkup:lastOrder",
};

const CATEGORY_LABELS = {
  lemonade: "Лимонад",
  juice: "Сік",
  coffee: "Айс-кава",
  smoothie: "Смузі",
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
    theme: "lime",
    image: "assets/drink-lime.png",
    features: ["Свіжий лайм", "Без консервантів", "Охолоджений"],
    details: [
      ["Обʼєм", "0.5 л"],
      ["Температура", "4°C"],
      ["Калорійність", "120 ккал"],
    ],
  },
  {
    id: "mint-cucumber",
    name: "Mint Cucumber Lemonade",
    short: "Огірок, мʼята, лимон",
    price: 94,
    oldPrice: 0,
    category: "lemonade",
    isDiscounted: false,
    theme: "lime",
    image: "assets/drink-lime.png",
    features: ["Свіжий огірок", "Легка кислинка", "Мʼятний післясмак"],
    details: [
      ["Обʼєм", "0.5 л"],
      ["Температура", "4°C"],
      ["Калорійність", "98 ккал"],
    ],
  },
  {
    id: "strawberry-lemon",
    name: "Strawberry Lemon",
    short: "Полуниця, лимон, сода",
    price: 99,
    oldPrice: 119,
    category: "lemonade",
    isDiscounted: true,
    theme: "berry",
    image: "assets/drink-berry.png",
    features: ["Полуничне пюре", "Газована основа", "Без штучних барвників"],
    details: [
      ["Обʼєм", "0.5 л"],
      ["Температура", "5°C"],
      ["Калорійність", "132 ккал"],
    ],
  },
  {
    id: "mango-breeze",
    name: "Mango Breeze",
    short: "Манго, лайм, тонік",
    price: 108,
    oldPrice: 0,
    category: "lemonade",
    isDiscounted: false,
    theme: "orange",
    image: "assets/drink-orange.png",
    features: ["Стигле манго", "Тропічний аромат", "Подається з льодом"],
    details: [
      ["Обʼєм", "0.5 л"],
      ["Температура", "4°C"],
      ["Калорійність", "146 ккал"],
    ],
  },
  {
    id: "orange-splash",
    name: "Orange Splash",
    short: "Апельсин, лимон, сода",
    price: 92,
    oldPrice: 110,
    category: "juice",
    isDiscounted: true,
    theme: "orange",
    image: "assets/drink-orange.png",
    features: ["Свіжий апельсин", "Газована основа", "Без барвників"],
    details: [
      ["Обʼєм", "0.5 л"],
      ["Температура", "4°C"],
      ["Калорійність", "128 ккал"],
    ],
  },
  {
    id: "apple-green",
    name: "Green Apple Juice",
    short: "Яблуко, лайм, лід",
    price: 86,
    oldPrice: 0,
    category: "juice",
    isDiscounted: false,
    theme: "lime",
    image: "assets/drink-lime.png",
    features: ["Свіжий яблучний сік", "Лаймова нотка", "Без доданого цукру"],
    details: [
      ["Обʼєм", "0.4 л"],
      ["Температура", "5°C"],
      ["Калорійність", "112 ккал"],
    ],
  },
  {
    id: "grapefruit-tonic",
    name: "Grapefruit Tonic",
    short: "Грейпфрут, тонік, розмарин",
    price: 104,
    oldPrice: 0,
    category: "juice",
    isDiscounted: false,
    theme: "orange",
    image: "assets/drink-orange.png",
    features: ["Грейпфрутовий фреш", "Тонік", "Розмариновий аромат"],
    details: [
      ["Обʼєм", "0.45 л"],
      ["Температура", "4°C"],
      ["Калорійність", "118 ккал"],
    ],
  },
  {
    id: "berry-ice-tea",
    name: "Berry Ice Tea",
    short: "Ягоди, чай, лід",
    price: 95,
    oldPrice: 0,
    category: "juice",
    isDiscounted: false,
    theme: "berry",
    image: "assets/drink-berry.png",
    features: ["Натуральні ягоди", "Холодний чай", "Легкий смак"],
    details: [
      ["Обʼєм", "0.5 л"],
      ["Температура", "5°C"],
      ["Калорійність", "135 ккал"],
    ],
  },
  {
    id: "classic-cold-brew",
    name: "Classic Cold Brew",
    short: "Кава, лід, мʼяка гірчинка",
    price: 105,
    oldPrice: 0,
    category: "coffee",
    isDiscounted: false,
    theme: "berry",
    image: "assets/drink-berry.png",
    features: ["12 годин настоювання", "Мʼякий смак", "Без молока"],
    details: [
      ["Обʼєм", "0.35 л"],
      ["Температура", "6°C"],
      ["Калорійність", "24 ккал"],
    ],
  },
  {
    id: "vanilla-iced-latte",
    name: "Vanilla Iced Latte",
    short: "Еспресо, молоко, ваніль",
    price: 109,
    oldPrice: 130,
    category: "coffee",
    isDiscounted: true,
    theme: "orange",
    image: "assets/drink-orange.png",
    features: ["Подвійний еспресо", "Ванільний сироп", "Охолоджене молоко"],
    details: [
      ["Обʼєм", "0.4 л"],
      ["Температура", "6°C"],
      ["Калорійність", "188 ккал"],
    ],
  },
  {
    id: "cocoa-frappe",
    name: "Cocoa Frappe",
    short: "Какао, кава, лід",
    price: 118,
    oldPrice: 0,
    category: "coffee",
    isDiscounted: false,
    theme: "berry",
    image: "assets/drink-berry.png",
    features: ["Кавова основа", "Какао", "Кремова текстура"],
    details: [
      ["Обʼєм", "0.45 л"],
      ["Температура", "5°C"],
      ["Калорійність", "215 ккал"],
    ],
  },
  {
    id: "green-smoothie",
    name: "Green Detox Smoothie",
    short: "Шпинат, яблуко, лайм",
    price: 115,
    oldPrice: 135,
    category: "smoothie",
    isDiscounted: true,
    theme: "lime",
    image: "assets/drink-lime.png",
    features: ["Шпинат", "Зелене яблуко", "Натуральна основа"],
    details: [
      ["Обʼєм", "0.45 л"],
      ["Температура", "5°C"],
      ["Калорійність", "164 ккал"],
    ],
  },
  {
    id: "berry-smoothie",
    name: "Berry Smoothie",
    short: "Малина, чорниця, банан",
    price: 119,
    oldPrice: 145,
    category: "smoothie",
    isDiscounted: true,
    theme: "berry",
    image: "assets/drink-berry.png",
    features: ["Лісові ягоди", "Бананова текстура", "Без консервантів"],
    details: [
      ["Обʼєм", "0.45 л"],
      ["Температура", "5°C"],
      ["Калорійність", "198 ккал"],
    ],
  },
  {
    id: "banana-energy",
    name: "Banana Energy Smoothie",
    short: "Банан, йогурт, мед",
    price: 112,
    oldPrice: 0,
    category: "smoothie",
    isDiscounted: false,
    theme: "orange",
    image: "assets/drink-orange.png",
    features: ["Банан", "Йогурт", "Легкий медовий смак"],
    details: [
      ["Обʼєм", "0.45 л"],
      ["Температура", "5°C"],
      ["Калорійність", "226 ккал"],
    ],
  },
  {
    id: "watermelon-fresh",
    name: "Watermelon Fresh",
    short: "Кавун, лайм, мʼята",
    price: 105,
    oldPrice: 125,
    category: "smoothie",
    isDiscounted: true,
    theme: "berry",
    image: "assets/drink-berry.png",
    features: ["Кавуновий фреш", "Лайм", "Свіжа мʼята"],
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

const page = document.body.dataset.page;

document.addEventListener("DOMContentLoaded", () => {
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

  const popularProducts = PRODUCTS.slice(0, 6);
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
}

/*
  Головна функція рендеру каталогу.
  filter: "all" | "discounts" | "lemonade" | "juice" | "coffee" | "smoothie"
*/
function renderProducts(filter = "all") {
  const catalogGrid = document.querySelector("#catalogGrid");
  const emptyMessage = document.querySelector("#emptyMessage");
  const catalogCount = document.querySelector("#catalogCount");
  const normalizedFilter = normalizeFilter(filter);
  const filteredProducts = getFilteredProducts(normalizedFilter);

  currentCatalogFilter = normalizedFilter;
  updateCatalogTexts(normalizedFilter, filteredProducts.length);
  updateFilterButtons(normalizedFilter);
  updateCatalogNavLinks(normalizedFilter);

  if (!catalogGrid) return;

  catalogGrid.innerHTML = filteredProducts
    .map(createProductCardMarkup)
    .join("");

  if (emptyMessage) {
    emptyMessage.hidden = filteredProducts.length > 0;
  }

  if (catalogCount) {
    catalogCount.textContent = String(filteredProducts.length);
  }
}

function getFilteredProducts(filter) {
  if (filter === "discounts") {
    return PRODUCTS.filter((product) => product.isDiscounted);
  }

  if (Object.prototype.hasOwnProperty.call(CATEGORY_LABELS, filter)) {
    return PRODUCTS.filter((product) => product.category === filter);
  }

  return PRODUCTS;
}

function createProductCardMarkup(product) {
  const discountBadge = product.isDiscounted
    ? `<span class="discount-badge">-${getDiscountPercent(product)}%</span>`
    : "";

  const oldPriceMarkup = product.isDiscounted
    ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>`
    : "";

  return `
    <a class="product-card" href="cart.html?id=${encodeURIComponent(product.id)}" aria-label="Відкрити товар ${escapeHtml(product.name)}">
      ${discountBadge}
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
          <span class="card-action" aria-hidden="true">→</span>
        </div>
      </div>
    </a>
  `;
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
  bindProductControls();
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
  const orderButton = document.querySelector("#orderBtn");

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

  if (orderButton) {
    orderButton.addEventListener("click", () => {
      const product = PRODUCTS[currentProductIndex];

      setStorageItem(STORAGE_KEYS.cart, {
        productId: product.id,
        quantity: currentQuantity,
        price: product.price,
        oldPrice: product.oldPrice,
        name: product.name,
        isDiscounted: product.isDiscounted,
        createdAt: new Date().toISOString(),
      });

      window.location.href = "checkout.html";
    });
  }
}

function createDrinkArtwork(product) {
  const badgeMarkup = product.isDiscounted
    ? `<span class="discount-badge product-discount-badge">-${getDiscountPercent(product)}%</span>`
    : "";

  return `
    ${badgeMarkup}
    <img class="drink-png product-drink" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" />
  `;
}

function initCheckoutPage() {
  const cart = getCartWithFallback();

  renderCheckoutSummary(cart);
  bindCheckoutQuantity(cart);
  bindCheckoutForm(cart);
  bindModalControls();
}

function getCartWithFallback() {
  const storedCart = getStorageItem(STORAGE_KEYS.cart);

  if (storedCart && storedCart.productId) {
    return storedCart;
  }

  const product = PRODUCTS[0];

  return {
    productId: product.id,
    quantity: 1,
    price: product.price,
    oldPrice: product.oldPrice,
    name: product.name,
    isDiscounted: product.isDiscounted,
    createdAt: new Date().toISOString(),
  };
}

function renderCheckoutSummary(cart) {
  const product = getProductById(cart.productId) || PRODUCTS[0];
  const quantity = Number(cart.quantity) || 1;
  const total = product.price * quantity;

  updateText("#summaryName", product.name);
  updateText("#summaryPrice", formatPrice(product.price));
  updateText("#checkoutQuantity", quantity);
  updateText("#summaryTotal", formatPrice(total));
}

function bindCheckoutQuantity(cart) {
  const buttons = document.querySelectorAll("[data-checkout-qty]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.checkoutQty;
      const nextQuantity = updateQuantity(Number(cart.quantity) || 1, action);
      const product = getProductById(cart.productId) || PRODUCTS[0];

      cart.quantity = nextQuantity;
      cart.price = product.price;
      cart.oldPrice = product.oldPrice;
      cart.name = product.name;
      cart.isDiscounted = product.isDiscounted;

      setStorageItem(STORAGE_KEYS.cart, cart);
      renderCheckoutSummary(cart);
    });
  });
}

function bindCheckoutForm(cart) {
  const form = document.querySelector("#checkoutForm");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    clearFormErrors(form);

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

    const product = getProductById(cart.productId) || PRODUCTS[0];
    const quantity = Number(cart.quantity) || 1;
    const order = {
      customer: values,
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        oldPrice: product.oldPrice,
        isDiscounted: product.isDiscounted,
        quantity,
        total: product.price * quantity,
      },
      createdAt: new Date().toISOString(),
    };

    setStorageItem(STORAGE_KEYS.lastOrder, order);
    localStorage.removeItem(STORAGE_KEYS.cart);
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
    modalText.textContent = `Ваш напій «${order.product.name}» (${order.product.quantity} шт.) вже готується. Сума: ${formatPrice(order.product.total)}. Очікуйте дзвінок оператора.`;
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
    return Math.min(currentValue + 1, 20);
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
