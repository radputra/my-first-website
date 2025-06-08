// Function to change the main image when a thumbnail is clicked

function swapImage(thumbnail) {
  document.getElementById("mainImage").src = thumbnail.src;
  document.getElementById("mainImage").alt = thumbnail.alt;
}

// Store add to cart functionality
function addToCart(name, price, image) {
  const product = { name, price, image };
  localStorage.setItem('cart', JSON.stringify([product]));
}

// Checkout
document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = cart[0];

  if (product) {
    const price = parseFloat(product.price);
    const shipping = 19.99;
    const total = price + shipping;

    document.getElementById("subtotal").textContent = `$${price.toFixed(2)}`;
    document.getElementById("shipping").textContent = `$${shipping.toFixed(2)}`;
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;
  }
});