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
  });

  $('.feedback__content-inner').slick({
    dots: false,
    arrows: true,
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/icons/slider-left.png" alt=""></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/icons/slider-right.png" alt=""></button>',
    slidesToShow: 2,
    slidesToScroll: 2,
  });

  $('.top__items-dots').on('click', function () {
    $('.dots__menu').slideToggle();
  });

  $('.search__form-all').on('click', function () {
    $('.search__form-all-menu').slideToggle();
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 330,
    from: 30,
    to: 300,
    prefix: "$"
  });

  $('.settings__btn-item-list').on('click', function () {
    $('.product__item').addClass('list');
    $('.product__item-list').addClass('list');
    $('.settings__btn-item-list').addClass('list');
    $('.settings__btn-item-grid').addClass('list');
    $('.settings__btn-item-grid--gray').addClass('list');
    $('.settings__btn-item-list--blue').addClass('list');
    $('.settings__btn-item-list').addClass('active');
    $('.settings__btn-item-grid').removeClass('active');
  });

  $('.settings__btn-item-grid').on('click', function () {
    $('.product__item').removeClass('list');
    $('.product__item-list').removeClass('list');
    $('.settings__btn-item-grid').removeClass('list');
    $('.settings__btn-item-list').removeClass('list');
    $('.settings__btn-item-grid--gray').removeClass('list');
    $('.settings__btn-item-list--blue').removeClass('list');
    $('.settings__btn-item-grid').addClass('active');
    $('.settings__btn-item-list').removeClass('active');
  });

  $('.settings__btn-item-list--blue').on('click', function () {
    $('.product__item').addClass('list');
    $('.product__item-list').addClass('list');
    $('.settings__btn-item-list').addClass('list');
    $('.settings__btn-item-grid').addClass('list');
    $('.settings__btn-item-grid--gray').addClass('list');
    $('.settings__btn-item-list--blue').addClass('list');
    $('.settings__btn-item-list').addClass('active');
    $('.settings__btn-item-grid').removeClass('active');
  });

  $('.settings__btn-item-grid--gray').on('click', function () {
    $('.product__item').removeClass('list');
    $('.product__item-list').removeClass('list');
    $('.settings__btn-item-grid').removeClass('list');
    $('.settings__btn-item-list').removeClass('list');
    $('.settings__btn-item-grid--gray').removeClass('list');
    $('.settings__btn-item-list--blue').removeClass('list');
    $('.settings__btn-item-grid').addClass('active');
    $('.settings__btn-item-list').removeClass('active');
  });

  var mixer = mixitup('.products__inner-box');


});