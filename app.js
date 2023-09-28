var updateButton = function() {
  if ($(window).scrollTop() >= 300) {
    $('.back-to-top').fadeIn();
  } else {
    $('.back-to-top').fadeOut();
  }
};

$(window).on('scroll', updateButton);

$('.back-to-top').on('click',function(e){
  e.preventDefault();

  $('html,body').animate({scrollTop: 0}, 600);
});

updateButton();