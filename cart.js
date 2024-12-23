document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-container");
  const totalPriceElement = document.getElementById("total-price");

  const updateTotalPrice = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    totalPriceElement.innerText = total.toFixed(2);
  };

  const renderCart = () => {
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
      cartContainer.innerHTML = "<h2>Your cart is empty</h2>";
      return;
    }

    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");

      itemDiv.innerHTML = `
        <div class="cart-item-bar">
          <img src="${item.img}" alt="${item.modelName}" width="100">
          <h3>${item.modelName}</h3>
          <p>Size: ${item.size}</p>
          <p>Quantity: ${item.quantity}</p>
          <p>Price: $${item.price * item.quantity}</p>
          <button class="remove-btn" data-index="${index}">Remove</button>
        </div>
      `;
      cartContainer.appendChild(itemDiv);
    });

    const checkoutButton = document.createElement("button");
    checkoutButton.innerText = "Checkout";
    checkoutButton.id = "checkout-button";
    cartContainer.appendChild(checkoutButton);

    checkoutButton.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Cart is empty. Please add items to proceed.");
        return;
      }

      window.location.href = "orderC.html";
    });
  };

  cartContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
      const itemIndex = event.target.dataset.index;

      cart.splice(itemIndex, 1);

      localStorage.setItem("cart", JSON.stringify(cart));

      renderCart();
      updateTotalPrice();
    }
  });

  renderCart();
  updateTotalPrice();
});
