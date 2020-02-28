$(document).ready(function(){
    $('.reviews_slider').slick();
  });

$('.burger-menu').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('burger-menu_active');
  $('.nav__link').toggleClass('nav__link_active');
});  