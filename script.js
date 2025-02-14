const products = [
    { name: "Diaper", price: 10, image: "th1.jpg" },
    { name: "Freska Tuna", price: 35, image: "th2.jpg" },
    { name: "Pancit Canton", price: 15, image: "th3.jpg" }
];

const cart = [];

function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}"><br>
            <strong>${product.name}</strong><br>
            Price: $${product.price}<br>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(index) {
    cart.push(products[index]);
    renderCart();
}

function renderCart() {
    const cartDiv = document.getElementById("cart");
    const totalSpan = document.getElementById("total");
    cartDiv.innerHTML = "";
    let total = 0;
    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartDiv.appendChild(cartItem);
        total += item.price;
    });
    totalSpan.textContent = total.toFixed(2);
}

renderProducts();
