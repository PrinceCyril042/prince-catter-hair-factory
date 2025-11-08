/* ===== main.js - mobile menu + floating social handlers ===== */
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  // toggle mobile nav
  function toggleNav() {
    if (!mainNav) return;
    mainNav.classList.toggle('mobile-open');
  }
  if (menuToggle) menuToggle.addEventListener('click', toggleNav);

  // close mobile nav if clicking outside
  document.addEventListener('click', function (e) {
    if (!mainNav) return;
    if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
      mainNav.classList.remove('mobile-open');
    }
  });

  // Optional: improve hero background on resize (not required)
  function adjustHeroPosition() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    // smaller screens get slightly different focal point
    if (window.innerWidth < 640) hero.style.backgroundPosition = 'center 35%';
    else hero.style.backgroundPosition = 'center 28%';
  }
  adjustHeroPosition();
  window.addEventListener('resize', adjustHeroPosition);
});





<script>
let cart = [];

document.querySelectorAll(".addToCartBtn").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));

    cart.push({ name, price });
    updateCartDisplay();
  });
});

document.getElementById("cartButton").addEventListener("click", () => {
  const modal = document.getElementById("cartModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
});

document.getElementById("clearCart").addEventListener("click", () => {
  cart = [];
  updateCartDisplay();
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
  alert("Proceeding to checkout with " + cart.length + " items!");
});

function updateCartDisplay() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<li>Your cart is empty</li>";
  } else {
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price}`;
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "❌";
      removeBtn.style.background = "none";
      removeBtn.style.border = "none";
      removeBtn.style.cursor = "pointer";
      removeBtn.addEventListener("click", () => {
        cart.splice(index, 1);
        updateCartDisplay();
      });
      li.appendChild(removeBtn);
      cartItems.appendChild(li);
    });
  }
}
</script>
