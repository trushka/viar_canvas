$(document).ready(function () {
  // hamburger menu trigger
  $(".header__hamburger").click(function () {
    $("body").toggleClass("overflowed");
    $(".header-menu__layout").fadeToggle(500);
    $(this).find(".hamburger").toggleClass("is-active");
    $(".header-main__menu").toggleClass("active");
  });

  // menu collapse
  $(".menu__nav > ul > li > a").hover(navMenuHoverFocus);
  $(".menu__nav > ul > li > a").focus(navMenuHoverFocus);

  function navMenuHoverFocus() {
    $(".menu__nav > ul > li").removeClass("active");
    $(this).parents("li").addClass("active");
    if ($(this).parents("li").hasClass("menu__nav--collapser")) {
      if (mediaChecker("min", 526)) {
        $(".menu-column_sublist ul").addClass("collapsed__list");
      } else {
        $(".collapse-block").slideToggle();
      }
    } else {
      $(".menu-column_sublist ul").removeClass("collapsed__list");
    }
  }

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

    scrollFunction();
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
    accessibility: true,
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
  if (mediaChecker("min", 601)) {
    machineSlider
      .find(".machine__item, .machine__item a")
      .removeAttr("tabindex");
  }

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

  // scroll up

  var scrollToUp = document.querySelector("#scroll-up");

  function scrollFunction() {
    if (
      (document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200) &&
      mediaChecker("min", 600)
    ) {
      scrollToUp.style.right = `${
        parseInt($(".container").css("margin-right")) + 18
      }px`;
    } else {
      scrollToUp.style.right = "-150px";
    }
  }

  // form validation
  $(".subscribe-form").validate({
    errorPlacement: function () {},
    rules: {
      email: {
        required: true,
        email: true,
      },
    },

  });
  $(".subscribe-form").change(function () {
    if ($(this).valid()) {
      $(this).closest('.subscribe-inner').removeClass('error');
    } else {
      $(this).closest('.subscribe-inner').addClass('error');
    }
  });
  $(".subscribe-btn").click(function (e) {
    e.preventDefault();
    if ($(".subscribe-form").valid()) {
      $(this).closest('.subscribe-inner').addClass('success').removeClass('error');
      $('.subscribe-form')[0].reset();
    } else {
      $(this).closest('.subscribe-inner').removeClass('success');
    }
  });
  // media checker function

  function mediaChecker(max_min, resolution, width = "width") {
    return window.matchMedia(`(${max_min}-${width}: ${resolution}px)`).matches;
  }
});
