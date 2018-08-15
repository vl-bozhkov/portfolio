$(document).ready(function() {
  /* Navigation scroll */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              // scrollTop: target.offset().top
              scrollTop: target.offset().top - $('nav').height()
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});
// Dark Theme Functionality
const header = document.querySelector('header');
const btnColorChanger = document.querySelector('.js--btn-color');
const navItems = document.querySelectorAll('.nav-link');
const iconsGrid = document.querySelectorAll('.icons-grid a i');
const iconsGridMenuOverlay = document.querySelectorAll('.icons-grid');
const worksLinkH6 = document.querySelector('.works-link h6');
const worksLink = document.querySelector('.works-link a');
const btnGhost = document.querySelector('header .btn-ghost');
const overlayIconsGrid = document.querySelector('.icons-grid');
let showDarkTheme = false;

// btnColorChanger.addEventListener('click', function() {
//   if (!showDarkTheme) {
//     header.classList.add('dark-theme');
//     worksLinkH6.classList.add('dark-theme-color');
//     worksLink.classList.add('dark-theme-color');
//     btnGhost.classList.add('btn-dark-border');
//     navItems.forEach(item => item.classList.add('dark-theme-color'));
//     iconsGrid.forEach(item => item.classList.add('dark-theme-color'));
//     // nav.classList.add('dark-theme-color');
//     showDarkTheme = true;
//   } else {
//     header.classList.remove('dark-theme');
//     // nav.classList.remove('dark-theme-color');
//     navItems.forEach(item => item.classList.remove('dark-theme-color'));
//     iconsGrid.forEach(item => item.classList.remove('dark-theme-color'));
//     worksLinkH6.classList.remove('dark-theme-color');
//     worksLink.classList.remove('dark-theme-color');
//     btnGhost.classList.remove('btn-dark-border');
//     showDarkTheme = false;
//   }
// });
// Menu Functionality
const burgerBtn = document.querySelector('.js--nav-icon');
const burgerIcon = document.querySelector('.js--nav-icon i');
const nav = document.querySelector('nav');

burgerBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (burgerIcon.classList.contains('ion-md-menu')) {
    burgerIcon.classList.add('ion-md-close');
    burgerIcon.classList.remove('ion-md-menu');
    nav.classList.add('menu-overlay');
    // iconsGridMenuOverlay.classList.add('icons-menu-overlay');
    nav.style.visibility = 'visible';
    overlayIconsGrid.classList.add('icons-grid-overlay');
  } else {
    burgerIcon.classList.add('ion-md-menu');
    burgerIcon.classList.remove('ion-md-remove');
    nav.classList.remove('menu-overlay');
    // iconsGridMenuOverlay.classList.remove('icons-menu-overlay');
    nav.classList.remove('nav-visible');
    nav.style.visibility = 'hidden';
    overlayIconsGrid.classList.remove('icons-grid-overlay');
  }
});

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function() {
    nav.classList.remove('menu-overlay');
    burgerIcon.classList.add('ion-md-menu');
    burgerIcon.classList.remove('ion-md-remove');
    iconsGridMenuOverlay.classList.remove('icons-menu-overlay');
  });
}
