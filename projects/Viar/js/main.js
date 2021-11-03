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
          slidesToShow: 1
        },
      },
    ],
  });


  let stageSlider = $(".stages-row");
  stageSlider.slick({
    infinite: false,
    slidesToShow: 1,
    lazyLoad: "ondemand",
    prevArrow: ".examples-prev4",
    nextArrow: ".examples-next4",
    responsive: [
      {
        breakpoint: 5000,
        settings: 'unslick'
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        },
      },
    ],
  });

  $('.ba-slider').beforeAfter();

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



  $('.examples-slider__inner img').click(function() {
    let first = $(this).attr('src');
    let second = $(this).data('image');
    $(".ba-slider > img").attr("src", first);
    $(".ba-slider .resize img").attr("src", second);
  })


  $('.formalization-tab').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('opened-tab');
    $(this).parent().next().fadeToggle();
  })

  $('.form-image').click(function() {
    $('.form-image').removeClass('active');
    $(this).toggleClass('active');
  })

	$('.kviz-c-group .kviz-radio').click(function (e) {
		$(this).closest(".kviz-c-group").find('.kviz-radio').removeClass('kviz-radio_active');
		$(this).addClass('kviz-radio_active');
	});


  $('.kviz-types').click(function() {
    _this = $(this);
    _parent = _this.parent();
    if (_this.data('count') == 1) {
      _parent.find('.input-group').addClass('input_disabled');
      _parent.next().addClass('input_disabled');
      _parent.next().find('input').prop('disabled', true);
      _parent.next().find('.kviz-radio').removeClass('kviz-radio_active');
      _parent.find('.input-group input').prop('disabled', true);
    } else {
      _parent.find('.input-group').removeClass('input_disabled');
      _parent.next().removeClass('input_disabled');
      _parent.next().find('input').prop('disabled', false);
      _parent.find('.input-group input').prop('disabled', false);
    }
  })


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




  $('.hidden-trigger').click(function() {
    $(this).toggleClass('active');
    $(this).closest('.about__block').toggleClass('brief-v');
    $('html, body').animate({
      scrollTop: $(".about__screen--wrapper").offset().top
  }, 2000);
  })






  
});
