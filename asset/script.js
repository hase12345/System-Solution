$(() => {
  $(window).scroll(() => {
    if ($(this).scrollTop() > 10) {
      $('header').css({
        'background-color':'#000',
        'border':'0'
      })
    } else {
      $('header').css({
        'background-color':'transparent',
        'border-bottom':'1px solid #fff'
      })
    }
  });

  $('.drawer').drawer();

  $('.header__logo, .footer__title img , .footer__title h4').click(() =>{
    $('html').animate({
      scrollTop:0
    },800);
    return false;
  })
});