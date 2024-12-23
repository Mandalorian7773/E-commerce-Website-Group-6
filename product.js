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

     
      const sizeBoxes = document.querySelectorAll('.size-box');
      sizeBoxes.forEach(sizeBox => {
        sizeBox.addEventListener('click', () => {
        
          sizeBoxes.forEach(box => box.classList.remove('selected'));
          
        
          sizeBox.classList.add('selected');
          selectedSize = sizeBox.dataset.size; 
        });
      });

      document.getElementById("add-to-cart").addEventListener("click", () => {
        if (!selectedSize) {
          alert("Please select a size.");
          return;
        }

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const isProductInCart = cart.some(item => item.id === product.id && item.size === selectedSize);

        if (isProductInCart) {
          alert("This product with the selected size is already in your cart.");
        } else {
        
          cart.push({ ...product, size: selectedSize });
          localStorage.setItem("cart", JSON.stringify(cart));
          alert("Product added to cart!");
        }

        window.location.href = "cart.html";
      });
    } else {
      document.body.innerHTML = "<h1>Product not found</h1>";
    }
  })
  .catch(error => console.error("Error fetching product data:", error));
