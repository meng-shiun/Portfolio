$(document).ready(function() {
  // enable transitions only after page load
  $('body').removeClass('preload');
});


$('.button-header').on('click', function() {
  smoothScroll($('#intro'));
  // Avoid jumping to #intro tag after reloading page
  return false;
});


function smoothScroll(target) {
  $('html, body').animate({ scrollTop: target.offset().top }, 800);
};

// TODO: add more effects on button and images
