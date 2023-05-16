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

function toggleHamburgerBtn() { // eslint-disable-line no-unused-vars
  const mobileMenu = document.querySelector('#mobile-menu');
<<<<<<< HEAD
=======
  
>>>>>>> 983b7bd52daae6d01d31ab223704f94463d6184f
  if (mobileMenu.style.display === 'none' || !mobileMenu.style.display) {
    showMenu();
  } else {
    hideMenu();
  }
}