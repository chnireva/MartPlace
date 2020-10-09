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

  $('.settings__price').on('click', function () {
    $('.settings__price-menu').slideToggle();
  });

  $('.settings__items').on('click', function () {
    $('.settings__items-menu').slideToggle();
  });

  $('.aside__title-categories').on('click', function () {
    $('.category__list').slideToggle();
  });

  $('.aside__title-filter').on('click', function () {
    $('.filter__list').slideToggle();
  });

  $('.aside__title-price').on('click', function () {
    $('.aside__price-form').slideToggle();
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

  $('input[type="checkbox"], input[type="radio"], select').styler();

  $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });

  $('.header__btn-user').on('click', function () {
    $('.header__box').toggleClass('active');
  });

  var mixer = mixitup('.products__inner-box');


});