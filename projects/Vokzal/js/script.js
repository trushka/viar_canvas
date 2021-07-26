$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".overlay").toggleClass("hide");
    $(this).toggleClass("is-active");
    $(".mobile__menu").toggleClass("closed");
    $("body").toggleClass("fixed-position");



  });

  let _dataMobile = [".mobile__slider--nav div[data-slide", ".menu__inner--slider"];
  let mobileMenu        = $(".menu__inner--slider").slick({
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  let mobileMenuRight   = $(".mobile__slider--nav .slider__button--right");
  let mobileMenuLeft    = $(".mobile__slider--nav .slider__button--left");
  let mobileMenuData    = $(".mobile__slider--nav div[data-slide]");
  mobileMenuRight.click(() => {
    checkSliderNav(_dataMobile);
    mobileMenu.slick("slickNext");
    checkSliderButtons(mobileMenu, this, mobileMenuLeft);
  });
  mobileMenuLeft.click(() => {
    checkSliderNav(_dataMobile);
    mobileMenu.slick("slickPrev");
    checkSliderButtons(mobileMenu, mobileMenuRight, this);
  });
  mobileMenu.on("swipe", function () {
    checkSliderNav(_dataMobile);
    checkSliderButtons(mobileMenu, mobileMenuRight, mobileMenuLeft);
  });
  mobileMenu.on("afterChange", function () {
    checkSliderNav(_dataMobile);
    checkSliderButtons(mobileMenu, mobileMenuRight, mobileMenuLeft);
  });

  mobileMenuData.click(function (e) {
    e.preventDefault();
    mobileMenuData.removeClass("active-slide");
    $(this).addClass("active-slide");
    var slideNo = $(this).data("slide");
    mobileMenu.slick("slickGoTo", slideNo - 1);
  });


  let _dataBars = [".bars-gallery__navigation > div[data-slide", ".bars-gallery__slider"];
  let barsGallerySlider         = $(".bars-gallery__slider").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
  });
  let barsGallerySliderRight    = $(".bars__slider--button.slider__button--right");
  let barsGallerySliderLeft     = $(".bars__slider--button.slider__button--left");
  let barsGallerySliderData     = $(".bars-gallery__navigation > div[data-slide]");
  let barsGallerySliderDataN    = $(".bars__gallery--tab[data-slideN]");
  barsGallerySliderRight.click(() => {
    checkSliderNav(_dataBars);
    barsGallerySlider.slick("slickNext");
    checkSliderButtons(barsGallerySlider, this, barsGallerySliderLeft);
  });
  barsGallerySliderLeft.click(() => {
    checkSliderNav(_dataBars);
    barsGallerySlider.slick("slickPrev");
    checkSliderButtons(barsGallerySlider, barsGallerySliderRight, this);
  });
  barsGallerySlider.on("swipe", function () {
    checkSliderNav(_dataBars);
    checkSliderButtons(
      barsGallerySlider,
      barsGallerySliderRight,
      barsGallerySliderLeft
    );
  });
  barsGallerySlider.on("afterChange", function () {
    checkSliderNav(_dataBars);
    checkSliderButtons(
      barsGallerySlider,
      barsGallerySliderRight,
      barsGallerySliderLeft
    );
  });

  barsGallerySliderData.click(function (e) {
    e.preventDefault();
    barsGallerySliderData.removeClass("active-slide");
    $(this).addClass("active-slide");
    var slideNo = $(this).data("slide");
    console.log(slideNo);
    barsGallerySlider.slick("slickGoTo", slideNo - 1);
  });
  barsGallerySliderDataN.click(function (e) {
    e.preventDefault();
    var slideNo = $(this).data("sliden");
    barsGallerySlider.slick("slickGoTo", slideNo - 1);
    checkSliderNav(_dataBars);
    checkSliderButtons(
      barsGallerySlider,
      barsGallerySliderRight,
      barsGallerySliderLeft
    );
  });

  function checkSliderButtons(slider, sliderRight, sliderLeft) {
    if (
      slider.find(".slick-track").children().first().hasClass("slick-active")
    ) {
      $(sliderLeft).removeClass("active-arrow");
      $(sliderRight).addClass("active-arrow");
    } else if (
      slider.find(".slick-track").children().last().hasClass("slick-active")
    ) {
      $(sliderLeft).addClass("active-arrow");
      $(sliderRight).removeClass("active-arrow");
    } else {
      $(sliderLeft).addClass("active-arrow");
      $(sliderRight).addClass("active-arrow");
    }
  }

  function checkSliderNav(scope) {
    setTimeout(() => {
      $(`${scope[0]}]`).removeClass("active-slide");
      const index = $(`${scope[1]} .slick-active`).data("slick-index") + 1;
      $(`${scope[0]}='${index}']`).addClass("active-slide");
    }, 100);
  }






  var bars__list = $('.gallery__item');

  $('.bars__gallery--tab').click(function () {
    bars__list.css('display', 'block').addClass('showed');
    var tab_target = $(this).data("tab");
    if (tab_target) {
        bars__list.filter((i, elem) => {
            if ($(elem).data().tab) {
              return ($(elem).data().tab).search(tab_target) == -1;  
            } else {
                return true;
            }
            
        }).css('display', 'none').removeClass('showed');        
    }
    

    // $('html, body').animate({
    //     scrollTop: $(".gallery__items").offset().top
    // }, 1000);

    
    })


    $('.gallery__item, .gallery__popup--cross').click(function(e) {
        $(".overlay").toggleClass("hide");
        $('.gallery__popup').toggleClass('visibilited');
        $('.gallery__popup').fadeToggle();
        setTimeout(() => {
            let slider = $('.showed').clone();
            $('.gallery__popup--slides').append("<div class='popup__slider--inner'></div>");
            $('.popup__slider--inner').html(slider);
            $('.popup__slider--inner').not('.slick-initialized').slick({
                arrows: false,
                infinite: true,
                slidesToShow: 1,
                centerMode: true
            })
        if (e.currentTarget.className == 'gallery__popup--cross') {
            $('.popup__slider--inner').remove();
        }
        }, 100);

    })



  // let _deliveryPageData = [".delivery__page-slider--nav div[data-slide", ".delivery__page__inner--slider"];
  let deliverySliderPage        = $(".delivery__page__inner--slider").slick({
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  let deliverySliderPageRight   = $(".delivery__page-slider--nav .slider__button--right");
  let deliverySliderPageLeft    = $(".delivery__page-slider--nav .slider__button--left");
  deliverySliderPageRight.click(() => {
    deliverySliderPage.slick("slickNext");
    checkSliderButtons(deliverySliderPage, this, deliverySliderPageLeft);
  });
  deliverySliderPageLeft.click(() => {
    deliverySliderPage.slick("slickPrev");
    checkSliderButtons(deliverySliderPage, deliverySliderPageRight, this);
  });
  deliverySliderPage.on("swipe", function () {
    checkSliderButtons(deliverySliderPage, deliverySliderPageRight, deliverySliderPageLeft);
  });
  deliverySliderPage.on("afterChange", function () {
    checkSliderButtons(deliverySliderPage, deliverySliderPageRight, deliverySliderPageLeft);
  });












  var menu = document.querySelector('.mobile__menu');
  menu.onscroll = function() { headerMobileScroll()};


  var header = document.querySelector("header");


  var sticky = header.offsetTop;


  function headerMobileScroll() {
    if ($('body').hasClass('fixed-position')) {
      if (menu.scrollTop > sticky) {
        header.classList.add("fadeIt");
      } else {
        header.classList.remove("fadeIt");
      }      
    }

  }








  
});
