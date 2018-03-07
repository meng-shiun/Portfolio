$(document).ready(function() {
  // enable transitions only after page load
  $('body').removeClass('preload');
});


$('.button-header').on('click', function() {
  smoothScroll($('#intro'));
});


function smoothScroll(target) {
  $('html, body').animate({ scrollTop: target.offset().top }, 800);
};

// TODO: add more effects on button and images
