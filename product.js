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

      // Select size event listener
      document.querySelectorAll('.size-box').forEach(sizeBox => {
        sizeBox.addEventListener('click', () => {
          // Remove the active class from all size boxes
          document.querySelectorAll('.size-box').forEach(box => box.classList.remove('active'));
          // Add the active class to the clicked size box
          sizeBox.classList.add('active');
          selectedSize = sizeBox.getAttribute('data-size');
        });
      });

      // Add to Cart button functionality
      document.getElementById("add-to-cart").addEventListener("click", () => {
        if (!selectedSize) {
          alert("Please select a size before adding to the cart.");
          return;
        }

        const quantity = document.getElementById("quantity-input").value;

        // Create the product object with size and quantity
        const productWithSize = {
          ...product,
          size: selectedSize,
          quantity: quantity
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if the product is already in the cart
        const isProductInCart = cart.some(item => item.id === product.id && item.size === selectedSize);

        if (isProductInCart) {
          alert("This product (size " + selectedSize + ") is already in your cart.");
        } else {
          cart.push(productWithSize);
          localStorage.setItem("cart", JSON.stringify(cart));
          alert("Product added to cart!");
          window.location.href = "cart.html";  // Redirect to the cart page
        }
      });
    } else {
      document.body.innerHTML = "<h1>Product not found</h1>";
    }
  })
  .catch(error => console.error("Error fetching product data:", error));
