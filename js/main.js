// ===== Simple Cart System =====
let cart = [];

// Select all Add to Cart buttons
const buttons = document.querySelectorAll(".product button");

// When user clicks "Add to Cart"
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const product = button.parentElement;
    const name = product.querySelector("h3").innerText;
    const price = product.querySelector("p").innerText;
    const imgSrc = product.querySelector("img").src;

    const item = { name, price, imgSrc };
    cart.push(item);

    alert(`${name} added to cart!`);
    updateCart();
  });
});

// ===== Update Cart Display =====
function updateCart() {
  const cartCount = document.querySelector("#cart-count");
  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

// ===== Display Cart Items in Popup =====
function showCart() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let message = "🛍 Your Cart:\n\n";
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - ${item.price}\n`;
  });

  message += "\nProceed to checkout?";
  if (confirm(message)) {
    checkout();
  }
}

// ===== Checkout =====
function checkout() {
  alert("Thank you for your order! 🖤 Prince Catter Hair Factory will contact you soon!");
  cart = [];
  updateCart();
}
