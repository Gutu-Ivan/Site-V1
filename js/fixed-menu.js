$(document).ready(function(){
  $(window).bind('scroll', function() 
    {var navHeight = $( window ).height() - 60;
  if ($(window).scrollTop() > navHeight) {
   $('nav').addClass('fixed-menu');
 }
  else {
   $('nav').removeClass('fixed-menu');
 } 
  }); 
});
