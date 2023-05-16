function showMenu() {
  const mobileMenu = document.querySelector('#mobile-menu');
  const img = document.querySelector('#menu-btn img');
  const a = document.querySelector('#header a');

  mobileMenu.style.display = 'block';
  img.src = './imgs/x.svg';
  a.style.opacity = 0;
}

function hideMenu() {
  const mobileMenu = document.querySelector('#mobile-menu');
  const img = document.querySelector('#menu-btn img');
  const a = document.querySelector('#header a');

  mobileMenu.style.display = 'none';
  img.src = './imgs/IconMenu.svg';
  a.style.opacity = 1;
}

function toggleHamburgerBtn() {
  const mobileMenu = document.querySelector('#mobile-menu');
  if (mobileMenu.style.display === 'none' || !mobileMenu.style.display) {
    showMenu();
  } else {
    hideMenu();
  }
}

toggleHamburgerBtn();