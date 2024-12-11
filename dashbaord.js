
// JavaScript for Shopping Cart
document.addEventListener("DOMContentLoaded", () => {
    const quantities = document.querySelectorAll(".quantity");
    const totalElement = document.getElementById("total");

    function updateTotal() {
        let total = 0;
        quantities.forEach((quantity) => {
            const price = parseFloat(quantity.dataset.price);
            total += price * parseInt(quantity.value);
        });
        totalElement.textContent = total.toFixed(2);
    }

    quantities.forEach((quantity) => {
        quantity.addEventListener("input", updateTotal);
    });

    // Apply promo code logic if required
    const promoInput = document.getElementById("promo");
    promoInput.addEventListener("input", () => {
        // Add promo code handling logic here
    });
});


