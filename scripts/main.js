let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    },600);
});

let btnTop = $('.btn-top');
$(window).on('scroll', function(){
    if ($(window).scrollTop() >= 80){
        btnTop.fadeIn();
    }else{
        btnTop.fadeOut();
    }
});

btnTop.on('click', function(){
   $('html,body').animate({scrollTop:0},900); 
});

$(document).ready(function(){
    $('.sidebarBtn').click(function(){
      $('.sidebar').toggleClass('active');
      $('.sidebarBtn').toggleClass('toggle');
    });
  });
  
  $('.pretty').click(function(){
    $(this).toggleClass('pretty-active');
});
$(document).ready(function(){
    $('.close').click(function(){
      $('.sidebar').removeClass('active');
      $('.sidebarBtn').removeClass('toggle');
    });
});

$('.products-slider').slick({
    dots: true,
    slidesPerRow: 4,
    rows: 2,
    responsive: [
    {
        breakpoint: 1060,
        settings: {
            rows: 2,
            slidesPerRow: 3,
        }
    },
    {
        breakpoint: 992,
        settings: {
            rows: 2,
            slidesPerRow: 3,
        }
    },
    {
        breakpoint: 776,
        settings: {
            rows: 2,
            slidesPerRow: 2,
        }
    },
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesPerRow: 1,
        }
    },
  ]
});

$('.main-products-slider').slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
  {
      breakpoint: 1060,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
  },
  {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
  },
  {
      breakpoint: 776,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
  },
  {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
  },
]
});

$('.news-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          arrows: false,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    arrows: true,
  });

  $('#minus-quantity').click(function(e){
    e.preventDefault();
    var quantity = $('#quantity-input').val();
    if(quantity == 1){
      quantity = quantity;
    }else if(quantity != 1){
      quantity -= 1;
    }
    $('#quantity-input').val(quantity)
  });

  $('#plus-quantity').click(function(e){
    e.preventDefault();
    var quantity = $('#quantity-input').val();
    quantity = Number(quantity);
    quantity += 1;
    $('#quantity-input').val(quantity)
  });