$(document).ready(function () {
  let exampleSlider = $(".examples-about__slider");
  exampleSlider.slick({
    infinite: false,
    slidesToShow: 4,
    lazyLoad: "ondemand",
    prevArrow: ".examples-prev.examples-prev1",
    nextArrow: ".examples-next.examples-next1",
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 702,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  let exampleSlider2 = $(".examples-slider__inner");
  exampleSlider2.slick({
    infinite: false,
    slidesToShow: 2,
    lazyLoad: "ondemand",
    prevArrow: ".examples-prev.examples-prev2",
    nextArrow: ".examples-next.examples-next2",
    responsive: [
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  let othersSlider = $(".others-slider");
  othersSlider.slick({
    infinite: false,
    slidesToShow: 2,
    lazyLoad: "ondemand",
    prevArrow: ".examples-prev3",
    nextArrow: ".examples-next3",
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  let stageSlider = $(".stages-row");
  stageSlider.slick({
    infinite: false,
    slidesToShow: 1,
    prevArrow: ".examples-prev4",
    nextArrow: ".examples-next4",
    responsive: [
      {
        breakpoint: 5000,
        settings: "unslick",
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".ba-slider1").beforeAfter();
  $(".ba-slider2").beforeAfter();
  $(".ba-slider3").beforeAfter();





    // sharj slider

    let sharjBirthdaySlider = $(".sharj__birthday-slider");
    sharjBirthdaySlider.slick({
      slidesToShow: 1,
      infinite: false,
      prevArrow: ".birthday-arrow .sharj-prev",
      nextArrow: ".birthday-arrow .sharj-next",
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick",
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            // variableWidth: true
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            variableWidth: false
          },
        },
      ],
    })




    let sharjWeddingSlider = $(".sharj__wedding-slider");
    sharjWeddingSlider.slick({
      slidesToShow: 1,
      infinite: false,
      prevArrow: ".wedding-arrow .sharj-prev",
      nextArrow: ".wedding-arrow .sharj-next",
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick",
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            // variableWidth: true
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            variableWidth: false
          },
        },
      ],
    })

    let sharjCollegueSlider = $(".sharj__collegue-slider");
    sharjCollegueSlider.slick({
      slidesToShow: 1,
      infinite: false,
      prevArrow: ".collegue-arrow .sharj-prev",
      nextArrow: ".collegue-arrow .sharj-next",
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick",
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            // variableWidth: true
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            variableWidth: false
          },
        },
      ],
    })

    let sharjGrouppedSlider = $(".sharj__groupped-slider");
    sharjGrouppedSlider.slick({
      slidesToShow: 1,
      infinite: false,
      prevArrow: ".groupped-arrow .sharj-prev",
      nextArrow: ".groupped-arrow .sharj-next",
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick",
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            // variableWidth: true
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            variableWidth: false
          },
        },
      ],
    })


    let sharjFamilySlider = $(".sharj__family-slider");
    sharjFamilySlider.slick({
      slidesToShow: 1,
      infinite: false,
      prevArrow: ".family-arrow .sharj-prev",
      nextArrow: ".family-arrow .sharj-next",
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick",
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            // variableWidth: true
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            variableWidth: false
          },
        },
      ],
    })

    


    let sharjWhiteblackSlider = $(".sharj__whiteblack-slider");
    sharjWhiteblackSlider.slick({
      slidesToShow: 1,
      infinite: false,
      prevArrow: ".whiteblack-arrow .sharj-prev",
      nextArrow: ".whiteblack-arrow .sharj-next",
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick",
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            // variableWidth: true
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            variableWidth: false
          },
        },
      ],
    })


    let sharjPatternSlider = $(".sharj__pattern-slider");
    sharjPatternSlider.slick({
      slidesToShow: 1,
      infinite: false,
      prevArrow: ".pattern-arrow .sharj-prev",
      nextArrow: ".pattern-arrow .sharj-next",
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick",
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            // variableWidth: true
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            variableWidth: false
          },
        },
      ],
    })


    let sharjEpisodesSlider = $(".sharj__episodes-slider");
    sharjEpisodesSlider.slick({
      slidesToShow: 1,
      infinite: false,
      prevArrow: ".episodes-arrow .sharj-prev",
      nextArrow: ".episodes-arrow .sharj-next",
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick",
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            // variableWidth: true
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            variableWidth: false
          },
        },
      ],
    })

    let sharjPopupSlider = $(".sharj__popup-slider");
    sharjPopupSlider.slick({
      slidesToShow: 1,
      infinite: false,
      prevArrow: ".popup-arrow .sharj-prev",
      nextArrow: ".popup-arrow .sharj-next",
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick",
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            // variableWidth: true
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            variableWidth: false
          },
        },
      ],
    })

  // TABS FUNCTIONS

  function changeActiveTab(
    _this,
    selectorTabWrap,
    selectorTabContent,
    selectorTabLink,
    classLinkActive
  ) {
    _this
      .closest(selectorTabWrap)
      .querySelectorAll(selectorTabLink)
      .forEach((element) => {
        element.classList.remove(classLinkActive);
      });

    _this.classList.add(classLinkActive);

    const indexTab = [..._this.parentElement.children].indexOf(_this);
    const newActiveTabContent = _this
      .closest(selectorTabWrap)
      .querySelectorAll(selectorTabContent)[indexTab];

    _this
      .closest(selectorTabWrap)
      .querySelectorAll(selectorTabContent)
      .forEach((element) => {
        element.classList.add("hidden-block");
      });

    newActiveTabContent.classList.remove("hidden-block");
  }
  // trigger for comments
  document.querySelectorAll(".about-tab").forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      let _this = this;
      changeActiveTab(
        _this,
        ".about__screen",
        ".about__block",
        ".about-tab",
        "active"
      );
      exampleSlider[0]?.slick?.refresh();

      return false;
    });
  });


  $(".formalization-tab").click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass("opened-tab");
    $(this).parent().next().fadeToggle();
  });

  $(".form-image").click(function () {
    $(".form-image").removeClass("active");
    $(this).toggleClass("active");
  });

  $(".kviz-c-group .kviz-radio").click(function (e) {
    $(this)
      .closest(".kviz-c-group")
      .find(".kviz-radio")
      .removeClass("kviz-radio_active");
    $(this).addClass("kviz-radio_active");
  });

  $(".kviz-types").click(function () {
    _this = $(this);
    _parent = _this.parent();
    if (_this.data("count") == 1) {
      _parent.find(".input-group").addClass("input_disabled");
      _parent.next().addClass("input_disabled");
      _parent.next().find("input").prop("disabled", true);
      _parent.next().find(".kviz-radio").removeClass("kviz-radio_active");
      _parent.find(".input-group input").prop("disabled", true);
    } else {
      _parent.find(".input-group").removeClass("input_disabled");
      _parent.next().removeClass("input_disabled");
      _parent.next().find("input").prop("disabled", false);
      _parent.find(".input-group input").prop("disabled", false);
    }
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

  $(".hidden-trigger").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).closest(".about__block").toggleClass("brief-v");
    if ($(this).closest(".about__block").hasClass("brief-v")) {
      $(".about__screen")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start", // or "end"
      });
    }
  });

  function mediaChecker(max_min, resolution, width = "width") {
    return window.matchMedia(`(${max_min}-${width}: ${resolution}px)`).matches;
  }

  window.onresize = function () {
    mediaAction();
  };
  mediaAction();
  function mediaAction() {
    if (mediaChecker("max", 750)) {
      sharjBirthdaySlider[0]?.slick?.refresh();
      sharjWeddingSlider[0]?.slick?.refresh();
      sharjCollegueSlider[0]?.slick?.refresh();
      sharjGrouppedSlider[0]?.slick?.refresh();
      sharjFamilySlider[0]?.slick?.refresh();
      sharjWhiteblackSlider[0]?.slick?.refresh();
      sharjPatternSlider[0]?.slick?.refresh();
      sharjEpisodesSlider[0]?.slick?.refresh();
      sharjPopupSlider[0]?.slick?.refresh();
    }
    if (mediaChecker("max", 500)) {
      stageSlider[0]?.slick?.refresh();
    }

    var bgPos = `${parseInt($('.retouch__blocks').height() + 600)}px`;
    $('.form-bg').css('top', bgPos)

    let whySharjHeight = $('.sharj-why__screen').height();

    $('.sharj-why__screen').css('margin-top', `-${parseInt(whySharjHeight)}px`);
    $('.sharj-formalization').css('padding-bottom', `${parseInt(whySharjHeight)}px`);
  }

  // let bf_obj = $(".bf-obj");

  // bf_obj.each((i,e)=>{
  //   $(e).slick({
  //     slidesToShow: 7,
  //     infinite: false,
  //     prevArrow: ".bf-arr_l",
  //     nextArrow: ".bf-arr_r",
  //   });
  
  // })







  let bf_objP = $(".bf-objP");
  let bf_obj1 = $(".bf-obj1");
  let bf_obj2 = $(".bf-obj2");
  let bf_obj3 = $(".bf-obj3");

  
  bf_objP.slick({
    slidesToShow: 7,
    infinite: false,
    prevArrow: ".before-after__navP .bf-arr_l",
    nextArrow: ".before-after__navP .bf-arr_r",
  });
  bf_obj1.slick({
    slidesToShow: 7,
    infinite: false,
    prevArrow: ".before-after__nav1 .bf-arr_l",
    nextArrow: ".before-after__nav1 .bf-arr_r",
  });
  bf_obj2.slick({
    slidesToShow: 7,
    infinite: false,
    prevArrow: ".before-after__nav2 .bf-arr_l",
    nextArrow: ".before-after__nav2 .bf-arr_r",
  });
  bf_obj3.slick({
    slidesToShow: 7,
    infinite: false,
    prevArrow: ".before-after__nav3 .bf-arr_l",
    nextArrow: ".before-after__nav3 .bf-arr_r",
  });

  document.querySelectorAll(".retouch-tab").forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      let _this = this;
      changeActiveTab(
        _this,
        ".retouch__inner",
        ".retouch__block",
        ".retouch-tab",
        "active"
      );


        bf_obj1[0]?.slick?.refresh();
        bf_obj2[0]?.slick?.refresh();
        bf_obj3[0]?.slick?.refresh();


      return false;
    });
  });
  $(".examples-slider__inner img").click(function () {
    let first = $(this).attr("src");
    let second = $(this).data("image");
    let slideTarget = $(this).closest(".examples-slide");
    let index =
      [...slideTarget[0].parentElement.children].indexOf(slideTarget[0]) + 1;
    fromSliderBeforeAfterSetter(first, second);
    beforeAfterNavSetter(index);
  });

  $(".bf-obj li").click(function () {
    $(this).parent().find(`li`).removeClass("active");
    $(this).addClass("active");
    let first = $(this).data("imageb");
    let second = $(this).data("imagea");
    fromSliderBeforeAfterSetter(first, second);
  });

  function fromSliderBeforeAfterSetter(first, second) {
    $(".ba-slider > picture img").attr("srcset", first);
    $(".ba-slider > picture source").attr("srcset", first);
    $(".ba-slider .resize img").attr("srcset", second);
    $(".ba-slider .resize source").attr("srcset", second);
  }

  let _beforeAfterCount = $(".bf-obj li").length;
  console.log(_beforeAfterCount);
  if (_beforeAfterCount <= 7) {
    bf_obj.slick("unslick");
    $(".bf-arr").remove();
    $(".before-after__nav").css("justify-content", "center");
  }
  let el = $(".examples-slider__inner .examples-slide:nth-child(3)");

  function beforeAfterNavSetter(index) {
    console.log(_this);
    let slickIndex = index - 1;
    $(`.bf-obj li`).removeClass("active");
    $(`.bf-obj li:nth-child(${index})`).addClass("active");
    console.log(slickIndex);
    bf_obj.slick("slickGoTo", slickIndex);
  }

  $(".mobile-sizes--inner ul li").click(function () {
    let index = [...$(this)[0].parentElement.children].indexOf($(this)[0]) + 1;
    $(".sizes-item").removeClass("active");
    $(`.sizes-item:nth-child(${index})`).addClass("active");
  });

  var docWidth = document.documentElement.offsetWidth;

  [].forEach.call(document.querySelectorAll("*"), function (el) {
    if (el.offsetWidth > docWidth) {
      // console.log(el);
    }
  });

  $('.patterns-btn').click(function (e) {
		e.preventDefault();
		$('body').addClass('open-frame');
		$('.popup-frame').css("display", "flex").hide().fadeIn();
    if (mediaChecker('max', 750)) {
      sharjPopupSlider[0]?.slick?.refresh();
    }
		$('.popup-sharj').fadeIn();
	});
  $('.formalization-btn').click(function (e) {
		e.preventDefault();
		$('body').addClass('open-frame');
		$('.popup-frame').css("display", "flex").hide().fadeIn();

		$('.popup-cart').fadeIn();
	});
  $('.sharj-item--btn:not(.patterns-btn), .sharj-btn, .js-popup-photo-sharj, .js-examples-sharj').click(function(e) {
    e.preventDefault();
    $('body').addClass('open-frame');
		$('.popup-frame').css("display", "flex").hide().fadeIn();
    if (mediaChecker('max', 750)) {
      sharjPopupSlider[0]?.slick?.refresh();
    }
    console.log($(this))
    if ($(this).hasClass('sharj-btn-text')) {
      $('.popup-sharj-individual').find('.sharj-individual-text').fadeOut(0);
    } else {
      $('.popup-sharj-individual').find('.sharj-individual-text').fadeIn(0);
    }
		$('.popup-sharj').fadeOut(0);
		$('.popup-sharj-individual').fadeIn();
  })

  $('.ba-canvas_nav-item').click(function() {
    $('.ba-canvas_nav-item').removeClass('active');
    $(this).addClass('active');
    let first = $(this).data("imageb");
    let second = $(this).data("imagea");
    fromSliderBeforeAfterSetter(first, second);
  })

  var fileCounter = 0;
  $(".canvas-loader--add").click(function (e) {
    e.preventDefault();
    fileCounter++;
    $(".loader-canvas:eq(" + fileCounter + ")")
      .fadeIn();
    $(".loader-canvas:eq(" + fileCounter + ")")
      .find("input")
      .removeClass("file-input_hide");
    if (fileCounter == 9) {
      $(".canvas-loader--add").hide();
    }
  });


  $('.loader-canvas input').on('change', function() {
    let container = $(this).closest('.loader-canvas');
    let target = container.find('.file-save__title p:first-child');
    container.find('svg').html(`<use xlink:href="sprite.svg#picture"></use>`)
    container.find('.file-save__title span:nth-child(2)').text(`${(this.files[0].size / 1024).toFixed(2)} KB`)
    console.log(this.files[0])
    target.text(this.files[0].name);
  })


  $('.form-image').click(function() {
    targetId = $(this).data('id');
    $('.accordion__sizes-block').addClass('hidden-block');
    $(`.accordion__sizes-block[data-id="${targetId}"]`).removeClass('hidden-block');
  })

  

  $('.popup-log-check').on('click', function() {
      $('.additional-hidden').fadeToggle();
  })
});
