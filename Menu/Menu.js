
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

// Get .articles and header h1
const nonHeaderBody = document.querySelector('.articles');
const headerH1 = document.querySelector('.header h1');

// Remove Menu--open class
nonHeaderBody.addEventListener('click', function () {
  menu.classList.remove('menu--open');
});
headerH1.addEventListener('click', function () {
  menu.classList.remove('menu--open');
});
