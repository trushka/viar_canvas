$(document).ready(function () {
  // hamburger

  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    $("body").toggleClass("overflowed");
    if (!$(this).hasClass("is-active")) {
      $(".mobile-menu--inner").toggleClass("opened");
      $(".mobile-menu").fadeToggle(500);
    } else {
      $(".mobile-menu").fadeToggle(0);
      $(".mobile-menu--inner").toggleClass("opened");
    }
  });

  // media queries

  mediaActions();
  window.onresize = function () {
    mediaActions();
  };

  function mediaActions() {
    if (mediaChecker("min", 1700)) {
      $(".main__screen").css({
        "background-position": `${
          parseInt($(".container").css("margin-left")) - 179
        }px 0`,
        "background-size": "100% 100%",
      });
    } else {
      $(".main__screen").css({
        "background-position": `-160px 0`,
        "background-size": "cover",
      });
    }

    $(".ell_r").css(
      "right",
      `-${parseInt($(".container").css("margin-left")) + 20}px`
    );
  }

  function mediaChecker(max_min, resolution, width = "width") {
    return window.matchMedia(`(${max_min}-${width}: ${resolution}px)`).matches;
  }

  //   slider

  let slider = $(".platform-slider");
  slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".platform-slider--arrow .arrow-left",
    nextArrow: ".platform-slider--arrow .arrow-right",
    infinite: false,
  });
  slider.on("afterChange", function (event, slick, currentSlide, nextSlide) {
    let target = $(`.slider-nav--item[data-count='${currentSlide}']`);
    let text = target.find(".slider-nav--text").text();
    $(".slider-nav--item").removeClass("active");
    target.addClass("active");
    $(".platform-block--title").text(text);
  });
  $(".slider-nav--item").click(function () {
    let slide = $(this).data("count");
    let text = $(this).find(".slider-nav--text").text();
    $(".slider-nav--item").removeClass("active");
    $(this).addClass("active");
    slider.slick("slickGoTo", slide);
    $(".platform-block--title").text(text);
  });


  
});
