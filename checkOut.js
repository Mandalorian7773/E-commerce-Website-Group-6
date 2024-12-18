const shoppingCart = [
    {
        id: 1,
        name: "Nike Air Max 270",
        color: "Black/White",
        price: 120.99,
        quantity: 1,
        image: "https://via.placeholder.com/150x100"
    },
    {
        id: 2,
        name: "Adidas Ultraboost",
        color: "White/Gray",
        price: 150.00,
        quantity: 2,
        image: "https://via.placeholder.com/150x100"
    }
];

function displayCartItems() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";

    if (shoppingCart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    shoppingCart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <p class="cart-item-name">${item.name}</p>
                <p class="cart-item-color">Color: ${item.color}</p>
                <p class="cart-item-quantity">Quantity: ${item.quantity}</p>
                <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });
}

document.addEventListener("DOMContentLoaded", displayCartItems);

document.getElementById("apply-coupon").addEventListener("click", function () {
    const couponInput = document.getElementById("coupon-code").value.trim();
    if (couponInput) {
        alert(`Coupon "${couponInput}" applied successfully!`);
    } else {
        alert("Please enter a coupon code.");
    }
});

const paymentRadios = document.querySelectorAll('input[name="payment"]');
const emailInput = document.getElementById("email");
const cardHolderInput = document.getElementById("card-holder");

paymentRadios.forEach(radio => {
    radio.addEventListener("change", () => {
        if (radio.value === "COD") {
            cardHolderInput.style.display = "none";
            cardHolderInput.required = false;
        } else {
            cardHolderInput.style.display = "block";
            cardHolderInput.required = true;
        }
    });
});