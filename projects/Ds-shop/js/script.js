$(document).ready(function () {
  var length, lenRes;
  length = parseInt($(".header__main--wrapper").width()) - 39;
  lenRes = $(".header__main--wrapper").width();

  mediaAction();
  window.onresize = function () {
    mediaAction();
  };

  function mediaAction() {
    length = parseInt($(".header__main--wrapper").width()) - 39;
    lenRes = $(".header__main--wrapper").width();
    if (mediaChecker("max", 425)) {
      $(".form-collapse--body").css("display", "none");
    }
  }

  if (mediaChecker("max", 768)) {
    $(".hamburger").click(function () {
      $(this).toggleClass("is-active");
      $(".header__menu").fadeToggle();
    });
  } else {
    $(".hamburger").unbind("click");
    $(".hamburger").removeClass("is-active");
    $(".header__menu").css("display", "none");
  }

  $(".collapse-heading").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("collapsed");
    $(this).next(".collapse-body").toggleClass("collapsed-body");
    $(this).next(".collapse-body").slideToggle();
  });

  if (mediaChecker("max", 425)) {
    $(".search-btn").click(function () {
      $(".header__main--wrapper").toggleClass("active");
      $(".input-wrapper").fadeToggle();
      $(".form-collapse--body").css("width", `${lenRes}px`);
      $(".form-collapse--body").css("left", `-${length}px`);
      $(".input-wrapper").css("width", `${length}px`);
      $(".header__logo, .header__tools").fadeToggle(0);

      if (!$(".header__main--wrapper").hasClass("active")) {
        $(".input-wrapper").css("width", `0`);
      }

      return false;
    });
  }

  $(".input-search").on("keyup", function (e) {
    var $this = $(this),
      val = $this.val();

    if (val.length >= 1) {
      $(".form-collapse--body").css("display", "block");
    } else {
      $(".form-collapse--body").css("display", "none");
    }
  });



  $(".main__slider").slick({
    slidesToShow: 1,
    prevArrow: $('.slider-arr .arr-left'),
    nextArrow: $('.slider-arr .arr-right'),
    dots: true
  });

  
  let auction = $('.auction__slider').not('.slick-initialized').slick({
    slidesToShow: 4,
    prevArrow: $('.slider-arr__auction .arr-left'),
    nextArrow: $('.slider-arr__auction .arr-right'),
    dots: true,
    responsive: [
      {
          breakpoint: 1440,
          settings: {
              slidesToShow: 3
          }
      },
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 2
          }
      },
      {
          breakpoint: 700,
          settings: {
              slidesToShow: 1,
              variableWidth: true 
          }
      }
    ]
  })

  $('.brands__slider').not('.slick-initialized').slick({
    slidesToShow: 6,
    prevArrow: $('.slider-arr__brands .arr-left'),
    nextArrow: $('.slider-arr__brands .arr-right'),
    dots: false,
    responsive: [
      {
          breakpoint: 1440,
          settings: {
              slidesToShow: 5
          }
      },
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 4
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 3 
          }
      },
      {
          breakpoint: 425,
          settings: {
              slidesToShow: 2,
              variableWidth: true 
          }
      }
    ]
  })

  $('.info-btn').click(function() {
      $(this).next().slideToggle();
  })


  if (mediaChecker('max', 575)) {
    $('.footer__list-first').click(function() {
        $(this).next('.list-coll').slideToggle();
    })
  } else {
    $('.footer__list-first').unbind('click');
  }



  $('.auction-tool, .auction-price-btn, .info-buy').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
   
  })

  function mediaChecker(max_min, resolution, width = "width") {
    return window.matchMedia(`(${max_min}-${width}: ${resolution}px)`).matches;
  }
});
