// list-gridview.js

// 1) Sample dataset (10 products)
const products = [
  { name: "Aurora Wireless Mouse", price: 24.99, availability: true },
  { name: "Midnight Mechanical Keyboard", price: 89.0, availability: true },
  { name: "Slate USB-C Hub (7-in-1)", price: 39.5, availability: false },
  { name: "Nebula Noise-Cancel Headphones", price: 129.99, availability: true },
  { name: "Vanta Desk Lamp", price: 32.0, availability: false },
  { name: "Carbon Laptop Stand", price: 27.49, availability: true },
  { name: "Arctic Water Bottle (1L)", price: 18.75, availability: true },
  { name: "Onyx Notebook Set", price: 12.99, availability: false },
  { name: "Pulse Fitness Tracker", price: 59.99, availability: true },
  { name: "Echo Portable Speaker", price: 44.95, availability: false },
];

// Utility: format as currency
function formatEUR(value) {
  // Change to "en-IE" and "EUR" since your context is Ireland.
  return new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(value);
}

// 2) Create one product card element
function createProductCard(product) {
  const isAvailable = product.availability;

  const card = document.createElement("article");
  card.className =
    "group rounded-2xl border border-slate-800 bg-slate-900/40 p-4 shadow-sm " +
    "transition hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-900/60";

  // Accent name (blue)
  const name = document.createElement("h2");
  name.className =
    "text-base font-semibold text-blue-400 tracking-tight group-hover:text-blue-300";
  name.textContent = product.name;

  // Price row
  const priceRow = document.createElement("div");
  priceRow.className = "mt-3 flex items-center justify-between gap-3";

  const price = document.createElement("p");
  price.className = "text-lg font-semibold text-slate-100";
  price.textContent = formatEUR(product.price);

  // Availability pill (green/red)
  const pill = document.createElement("span");
  pill.className =
    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium " +
    (isAvailable
      ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20"
      : "bg-rose-500/10 text-rose-300 ring-1 ring-rose-500/20");

  pill.textContent = isAvailable ? "Available" : "Unavailable";

  // Subtext
  const meta = document.createElement("p");
  meta.className = "mt-2 text-sm text-slate-400";
  meta.textContent = isAvailable
    ? "In stock and ready to ship."
    : "Currently out of stock.";

  // Assemble
  priceRow.appendChild(price);
  priceRow.appendChild(pill);

  card.appendChild(name);
  card.appendChild(meta);
  card.appendChild(priceRow);

  return card;
}

// 3) Render the grid
function renderGrid(items) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  // Clear existing
  grid.innerHTML = "";

  // Insert cards
  const fragment = document.createDocumentFragment();
  items.forEach((p) => fragment.appendChild(createProductCard(p)));

  grid.appendChild(fragment);
}

// Run
renderGrid(products);
