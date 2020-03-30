$(document).ready(function(){
    $('.reviews_slider').slick();
  });

$('.burger-menu').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('burger-menu_active');
  $('.nav__link').toggleClass('nav__link_active');
});

$(document).ready(function(){
    $('.footer__title').click(function(event){
      $(this).toggleClass('active').next().slideToggle(1).css({
        display:'flex'
      });
    }); 
});

