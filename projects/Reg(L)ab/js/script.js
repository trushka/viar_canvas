$(document).ready(function () {
  // hamburger menu trigger
  $(".hamburger").click(function () {
    $("body").toggleClass("overflowed");
    $(".header-menu__layout").fadeToggle(500);
    $(this).toggleClass("is-active");
    $(".header-main__menu").toggleClass("active");
  });

  // menu collapse
  $(".menu__nav ul > li").click(function () {
    $(".menu__nav ul > li").removeClass("active");
    $(this).addClass("active");
    if ($(this).hasClass("menu__nav--collapser")) {
      if (mediaChecker("min", 526)) {
        $(".menu-column_sublist ul").addClass("collapsed__list");
      } else {
        $(".collapse-block").slideToggle();
      }
    } else {
      $(".menu-column_sublist ul").removeClass("collapsed__list");
    }
  });

  // media actions
  mediaActions();
  window.onresize = function () {
    mediaActions();
  };
  function mediaActions() {
    if (mediaChecker("min", 526)) {
      $(".collapse-block").slideUp();
    }

    // if (mediaChecker("max", 600)) {
    //   if (!($(".activity-item").parent().is(".activity--slider"))) {
    //     $(".activity-item").wrapAll("<div class='activity--slider'></div>");
    //   }
    // } else {
    //   if ($(".activity-item").parent().is(".activity--slider")) {
    //     $(".activity-item").unwrap();
    //   }
    // }
  }
  
  // sticky menu
  var header = document.querySelector(".header-main");
  var sticky = header.offsetTop;

  window.onscroll = function () {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };





  // sliders
  let machineSlider = $(".machine__items");
  let initialCount = machineSlider.find(".machine__item").length;
  let progressBarLabel = $(".machine-progress .progress-item");
  let status = $(".machine-progress .progress-count");
  progressBarLabel.css("width", (1 / initialCount) * 100 + "%");
  machineSlider.on(
    "beforeChange init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var calc = ((nextSlide + 1) / slick.slideCount) * 100;

      progressBarLabel.css("width", calc + "%").attr("aria-valuenow", calc);

      var i = (currentSlide ? currentSlide : 0) + 1;

      status.text(i + "/" + initialCount);
    }
  );

  machineSlider.slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 5000,
        settings: "unslick",
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });
  $(window).on("resize orientationChange", function (event) {
    machineSlider.slick("reinit");
  });

  let activitySlider = $(".activity--slider");
  let initialCount2 = activitySlider.find(".activity-item").length;
  let progressBarLabel2 = $(".activity-progress .progress-item");
  let status2 = $(".activity-progress .progress-count");
  progressBarLabel2.css("width", (1 / initialCount2) * 100 + "%");
  activitySlider.on(
    "beforeChange init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var calc = ((nextSlide + 1) / slick.slideCount) * 100;

      progressBarLabel2.css("width", calc + "%").attr("aria-valuenow", calc);

      var i = (currentSlide ? currentSlide : 0) + 1;

      status2.text(i + "/" + initialCount2);
    }
  );

  activitySlider.slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    infinite: false,
    variableWidth: true,
    touchThreshold: 200,
  });



  // media checker function

  function mediaChecker(max_min, resolution, width = "width") {
    return window.matchMedia(`(${max_min}-${width}: ${resolution}px)`).matches;
  }
});
