// 1. The Data: Array of Objects
const arrProducts = [
    {
        productID: 1001,
        name: "Laptop",
        price: 999.99,
        quantitySold: 150,
        inStock: true
    },
    {
        productID: 1002,
        name: "Wireless Mouse",
        price: 24.99,
        quantitySold: 300,
        inStock: true
    },
    {
        productID: 1003,
        name: "Mechanical Keyboard",
        price: 59.99,
        quantitySold: 200,
        inStock: false
    },
    {
        productID: 1004,
        name: "HD Monitor",
        price: 199.50,
        quantitySold: 85,
        inStock: true
    }
];

// 2. Target the container in the HTML
const listContainer = document.getElementById("product-list");

// 3. Loop through the array and generate HTML
arrProducts.forEach(product => {

    // Logic: Determine color and icon based on stock status
    const stockColor = product.inStock ? 'text-green-600' : 'text-red-600';
    const stockIcon = product.inStock ? '✅' : '❌';
    const stockText = product.inStock ? 'In Stock' : 'Out of Stock';

    // 4. Append the HTML template
    /* EXPLANATION OF LAYOUT CLASSES:
       - 'flex flex-col': On mobile, stack items vertically (Card view).
       - 'md:grid md:grid-cols-4': On desktop, switch to a 4-column row (Table view).
       - 'md:items-center': Vertically center the text in the row.
    */

    // Initial value of listContainer.innerHTML is an empty string ""
    listContainer.innerHTML += `
        <div class="p-4 border-b border-gray-100 hover:bg-gray-50 transition 
                    flex flex-col gap-2 
                    md:grid md:grid-cols-4 md:items-center">

            <div class="font-bold text-gray-800 text-lg md:text-base">
                ${product.name}
            </div>

            <div class="text-gray-600">
                <span class="font-bold text-gray-400 md:hidden uppercase text-xs">ID: </span>
                #${product.productID}
            </div>

            <div class="font-bold text-blue-600">
                <span class="font-bold text-gray-400 md:hidden uppercase text-xs">Price: </span>
                €${product.price}
            </div>

            <div class="${stockColor} font-medium text-sm">
                <span class="font-bold text-gray-400 md:hidden uppercase text-xs">Status: </span>
                ${stockIcon} ${stockText}
            </div>

        </div>
    `;
});