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
    prevArrow: $(".slider-arr .arr-left"),
    nextArrow: $(".slider-arr .arr-right"),
    dots: true,
  });

  let auction = $(".auction__slider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 4,
      prevArrow: $(".slider-arr__auction .arr-left"),
      nextArrow: $(".slider-arr__auction .arr-right"),
      dots: true,
      responsive: [
        {
          breakpoint: 1340,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            // variableWidth: true
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            variableWidth: true,
          },
        },
      ],
    });

  $(".brands__slider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 6,
      prevArrow: $(".slider-arr__brands .arr-left"),
      nextArrow: $(".slider-arr__brands .arr-right"),
      dots: false,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 2,
            variableWidth: true,
          },
        },
      ],
    });

  $(".info-btn").click(function () {
    $(this).next().slideToggle();
  });

  if (mediaChecker("max", 575)) {
    $(".footer__list-first").click(function () {
      $(this).next(".list-coll").slideToggle();
    });
  } else {
    $(".footer__list-first").unbind("click");
  }

  $(".cross").click(function () {
    $(this).closest(".selected__filter--item").fadeOut();
  });

  $(".auction-tool, .auction-price-btn, .info-buy").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });

  $(".catalog__filter").click(function () {
    $(this).toggleClass("active");
    $(this).next(".filter__inner").slideToggle();
  });

  $(".slider-desk .card__slider").slick({
    slidesToShow: 5,
    vertical: true,
    prevArrow: $(".card-left"),
    nextArrow: $(".card-right"),
  });
  $(".slider-mob .card__slider").slick({
    slidesToShow: 3,
    prevArrow: $(".card-left"),
    nextArrow: $(".card-right"),
  });

  $(".card__slider img").click(function () {
    let src = $(this).attr("src");
    console.log(src);
    $(".card__image picture source").attr("srcset", src);
  });

  var playVideo = $(".video-btn");
  var playButton = $(".video-btn");
  var video = $("#videoPlayer");
  // Event listener for the play/pause button
  playVideo.click(function () {
    if (video[0].paused == true) {
      // Play the video
      video[0].play();

      // Update the button text to 'Pause'
      playButton.fadeOut();
    } else {
      // Pause the video
      video[0].pause();

      // Update the button text to 'Play'
      playButton.fadeIn();
    }
  });


    // form validation
    $(".login-form").validate({
      errorPlacement: function() {

      },
      rules:{
        email:{
          required: true,
          minlength: 2,
          email: true
        },
        password:{
          required: true,
          minlength: 8
        },
        remember: {
          required: true,
          maxlength: 2
        }
      }
  });
  $(".register-form").validate({
    errorPlacement: function() {

    },
    rules:{
      name:{
        required: true,
        minlength: 2,
        integer: false
      },
      surname:{
        required: true,
        minlength: 2,
        integer: false
      },
      phone:{
        required: true,
        matches: "\+38[0-9]+",
        minlength:10,
      },
      email:{
        required: true,
        minlength: 2,
        email: true
      },
      password:{
        required: true,
        minlength: 8
      },
      remember: {
        required: true,
        maxlength: 2
      }
    }
});

  $('.header-info, .popup-cross, .overlay').click(function() {
    $('.popup__layout').fadeToggle();
    $('.popup__login').fadeToggle();
    $('body').toggleClass('overflowed');
  })

  $('.cart-delivery--item .checkbox-cart--wrapper input').click(function() {
    $('.cart-delivery--item').removeClass('active');
    $(this).closest('.cart-delivery--item').addClass('active');
  })
  $('.cart-payment--item .checkbox-cart--wrapper input').click(function() {
    $('.cart-payment--item').removeClass('active');
    $(this).closest('.cart-payment--item').addClass('active');
  })




  function mediaChecker(max_min, resolution, width = "width") {
    return window.matchMedia(`(${max_min}-${width}: ${resolution}px)`).matches;
  }
});
