const productsData = [
  {
      modelName: "Ja 2 'Nightmare' EP",
      price: 11500,
      image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_449,c_limit/0170bf4f-3211-4860-956e-c0cd974e10a9/ja-2-nightmare-ep-basketball-shoes-pPZpsS.png",
      category: "Sneakers"
  },
  {
      modelName: "Tatum 3",
      price: 6000,
      image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_449,c_limit/d57e5066-b53b-4f9b-bd37-37d4c01b41a9/tatum-3-pf-welcome-to-garden-basketball-shoes-Rxx3lS.png",
      category: "Running Shoes"
  },
  // Add other products here...
];

// Generate product cards
function displayProducts(filterCategory = "all") {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  productsData.forEach(product => {
      if (filterCategory === "all" || product.category === filterCategory) {
          const card = document.createElement("div");
          card.classList.add("card");

          card.innerHTML = `
              <img src="${product.image}" alt="${product.modelName}">
              <h5>${product.modelName}</h5>
              <p>₹${product.price}</p>
          `;

          productsContainer.appendChild(card);
      }
  });
}

// Filter products
function filterProduct(category) {
  document.querySelectorAll(".button-value").forEach(button => {
      button.classList.remove("active");
      if (button.innerText.toLowerCase() === category.toLowerCase()) {
          button.classList.add("active");
      }
  });

  displayProducts(category === "all" ? "all" : category);
}

// Search functionality
document.getElementById("search").addEventListener("click", () => {
  const searchInput = document.getElementById("search-input").value.toLowerCase();
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  productsData.forEach(product => {
      if (product.modelName.toLowerCase().includes(searchInput)) {
          const card = document.createElement("div");
          card.classList.add("card");

          card.innerHTML = `
              <img src="${product.image}" alt="${product.modelName}">
              <h5>${product.modelName}</h5>
              <p>₹${product.price}</p>
          `;

          productsContainer.appendChild(card);
      }
  });
});

// Initialize
window.onload = () => displayProducts("all");