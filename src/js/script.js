
$(document).ready(function(){
    $('.carousel__inner').slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
      responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }
    ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })
    $('.catalog-item__back').each(function(i) {
      $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
  })


  // Modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
  });

// Оптимизация валидации форм

  function valideForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите своё имя",
          minlength: jQuery.validator.format("Введите {0} символа!")
        },
        email: {
          required: "Пожалуйста, введите свой почтовый адресс",
          email: "Неправильно введён адресс почты. Пожалуйста, введите её в формате name@domain.com"
        },
        phone: "Пожалуйста, введите свой номер телефона"
      }
    });
  };

// Один раз прописали форму сверху и снизу присваеваем её всем необходимым формам 

  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

// Устанавливаем маску ввода номера  

  $("input[name=phone]").mask("+7 (999) 999-99-99");
  
});

   