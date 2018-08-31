// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('.nav-link');

//Set initial menu state
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.style.display = 'block';
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuBranding.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    //Set  menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuBranding.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    //Set  menu state
    showMenu = false;
  }
}

// turn menu button to black when scrolls to white background
const btnLines = document.querySelectorAll('.menu-btn .btn-line');
console.log(btnLines);
const waypoint = new Waypoint({
  element: document.getElementById('js--works'),
  handler: function() {
    btnLines.forEach(line => {
      console.log(line);
      line.classList.toggle('black-menu');
    });
  }
});

// close the menu overlay on nav link click
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    menu.style.display = 'none';
    showMenu = true;
    toggleMenu();
  });
}
//smooth scrolling
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 2000
});

var w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName('body')[0],
  x = w.innerWidth || e.clientWidth || g.clientWidth,
  y = w.innerHeight || e.clientHeight || g.clientHeight;
console.log(x + ' × ' + y);
