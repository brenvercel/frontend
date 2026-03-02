/* list-listview.js */

(function () {
  "use strict";

  // --- Sample dataset (10 products) ---
  /** @type {{name: string, price: number, availability: boolean}[]} */
  const products = [
    { name: "Aurora Wireless Headphones", price: 129.99, availability: true },
    { name: "Nebula Smart Lamp", price: 49.5, availability: true },
    { name: "Slate Mechanical Keyboard", price: 89.0, availability: false },
    { name: "Pulse Fitness Tracker", price: 59.99, availability: true },
    { name: "Comet USB-C Hub", price: 34.95, availability: true },
    { name: "Drift Ergonomic Mouse", price: 39.99, availability: false },
    { name: "Echo Bluetooth Speaker", price: 79.99, availability: true },
    { name: "Nimbus Desk Stand", price: 24.99, availability: true },
    { name: "Orbit Travel Charger", price: 29.99, availability: false },
    { name: "Vanta Laptop Sleeve", price: 19.99, availability: true }
  ];

  // --- Utilities ---
  const formatPrice = (n) =>
    new Intl.NumberFormat(undefined, { style: "currency", currency: "EUR" }).format(n);

  const availabilityMeta = (isAvailable) => {
    if (isAvailable) {
      return {
        text: "Available",
        pillClasses: "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30",
        dotClasses: "bg-emerald-400"
      };
    }
    return {
      text: "Unavailable",
      pillClasses: "bg-red-500/15 text-red-300 ring-1 ring-red-500/30",
      dotClasses: "bg-red-400"
    };
  };

  // --- Render ---
  function renderList(items) {
    const listEl = document.getElementById("productList");
    if (!listEl) return;

    listEl.innerHTML = ""; // clear

    const frag = document.createDocumentFragment();

    items.forEach((p) => {
      const meta = availabilityMeta(p.availability);

      const row = document.createElement("article");
      row.className =
        "px-4 py-4 transition hover:bg-slate-900/60 focus-within:bg-slate-900/60";

      // Desktop layout: 3 columns (md:grid)
      // Mobile layout: stacked with prominent name and muted details
      row.innerHTML = `
        <div class="grid gap-2 md:grid-cols-12 md:items-center md:gap-4">
          <!-- Name -->
          <div class="md:col-span-6">
            <h2 class="text-base font-semibold leading-snug text-blue-300">
              ${escapeHtml(p.name)}
            </h2>

            <!-- Mobile-only details -->
            <div class="mt-2 flex flex-wrap items-center gap-2 text-sm md:hidden">
              <span class="text-slate-300">${escapeHtml(formatPrice(p.price))}</span>
              <span class="inline-flex items-center gap-2 rounded-full px-2 py-1 text-xs font-semibold ${meta.pillClasses}">
                <span class="h-2 w-2 rounded-full ${meta.dotClasses}"></span>
                ${meta.text}
              </span>
            </div>
          </div>

          <!-- Price (hidden on mobile; shown on md+) -->
          <div class="hidden text-sm text-slate-200 md:col-span-3 md:block">
            ${escapeHtml(formatPrice(p.price))}
          </div>

          <!-- Availability (hidden on mobile; shown on md+) -->
          <div class="hidden md:col-span-3 md:block">
            <span class="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold ${meta.pillClasses}">
              <span class="h-2 w-2 rounded-full ${meta.dotClasses}"></span>
              ${meta.text}
            </span>
          </div>
        </div>
      `;

      frag.appendChild(row);
    });

    listEl.appendChild(frag);
  }

  // Basic HTML escaping for safe string insertion
  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // Run
  renderList(products);
})();
