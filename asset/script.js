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

  window.addEventListener('load', () => {
    // カスタムブートストラップ検証スタイルを適用するすべてのフォームを取得
    let forms = document.getElementsByClassName('needs-validation');
    // ループして帰順を防ぐ
    let validation = Array.prototype.filter.call(forms, (form) => {
      // submitボタンを押したら以下を実行
      form.addEventListener('change', (event) => {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

  //モーダルウィンドウ
  $('.js-modal-open').on('click' , () => {
    $('.js-modal').fadeIn();
    let formControlName =[];
    $('.form-control').each((i,elem) => {
      formControlName.push($(elem).val());
      $($('.table td')[i]).text(formControlName[i]);
    })
    return false;
  });

  $('.js-modal-close').on('click',() => {
    $('.js-modal').fadeOut();
    return false;
  });

  $('.js-modal-send').on('click', () => {
    return true;
  })
});