$(function () {

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "15px",
    readOnly: true,
    ratedFill: "#ffc000"
  });


  $('.slider__inner-content').slick({
    dots: false,
    arrows: true,
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/slider-weekly/arrow-left.png" alt=""></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/slider-weekly/arrow-right.png" alt=""></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: 3000
  });

  $('.slider__followers-inner').slick({
    dots: false,
    arrows: true,
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/slider-weekly/arrow-left.png" alt=""></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/slider-weekly/arrow-right.png" alt=""></button>',
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: 3000
  });

  var mixer = mixitup('.products__inner-box');


});