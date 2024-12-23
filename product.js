const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

fetch("seller.json")
  .then(response => response.json())
  .then(data => {
    const product = data.shoesData.find(item => item.id === productId);

    if (product) {
      document.getElementById("product-img").src = product.img;
      document.getElementById("product-name").innerText = product.modelName;
      document.getElementById("product-description").innerText = product.description || "No description available.";
      document.getElementById("product-details").innerText = product.details || "No details available.";
      document.getElementById("product-price").innerText = "$" + product.price;
      
      let selectedSize = null;

      document.querySelectorAll('.size-box').forEach(sizeBox => {
        sizeBox.addEventListener('click', () => {
          document.querySelectorAll('.size-box').forEach(box => box.classList.remove('active'));
          sizeBox.classList.add('active');
          selectedSize = sizeBox.getAttribute('data-size');
        });
      });

      document.getElementById("add-to-cart").addEventListener("click", () => {
        if (!selectedSize) {
          alert("Please select a size before adding to the cart.");
          return;
        }

        const quantity = document.getElementById("quantity-input").value;

        const productWithSize = {
          ...product,
          size: selectedSize,
          quantity: parseInt(quantity)
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProduct = cart.find(item => item.id === product.id && item.size === selectedSize);

        if (existingProduct) {
          existingProduct.quantity += productWithSize.quantity;
        } else {
          cart.push(productWithSize);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart!");
        window.location.href = "cart.html";
      });
    } else {
      document.body.innerHTML = "<h1>Product not found</h1>";
    }
  })
  .catch(error => console.error("Error fetching product data:", error));
