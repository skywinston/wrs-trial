$(document).ready(function() {
  $('.signup-form').hide();

  $('.try').click(function(e){
    e.preventDefault();

    $(this).fadeOut();
    $('.hero > .hero-text > h1').fadeOut();
    $('.hero-byline').fadeOut(function(){
      $('.signup-form').fadeIn();
    });

  });
  
});
