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
