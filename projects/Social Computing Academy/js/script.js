$(document).ready(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('body').toggleClass('is-open');
        $('.header-nav').fadeToggle(500);
    })

    window.onresize = function() {
        mediaAction();
    }
    mediaAction();

    function mediaChecker(max_min, resolution, width = 'width') {
        return window.matchMedia(`(${max_min}-${width}: ${resolution}px)`).matches;
    }

    function mediaAction() {
        
        $('.container-custom').css('margin-left', `${parseInt($('#structure .container').css('margin-left')) + 20}px`)
    }
    if (mediaChecker('min', 769)) {
            var $stage = $('.goals__screen'),
            $animationUp = $('.goals-scrolling--first'),
            $animationUp2 = $('.goals-scrolling--second'),
            $animationUp3 = $('.goals-scrolling--third'),
            $animationUp4 = $('.goals-scrolling--fourth')

        // initialize controller
            var controller = new ScrollMagic.Controller();

            // build timeline with animation tweens
            var scrollAnimation = new TimelineMax();

            scrollAnimation
                .add(TweenMax.to($animationUp, 1, {top:"-300%", duration: 500, ease:Linear.easeNone}), 'first')
                .add(TweenMax.to($animationUp2, 1, {top: "-200%", duration: 500, ease:Linear.easeNone, delay: 0.05}), 'first')
                .add(TweenMax.to($animationUp3, 1, {top:"-100%", duration: 500, ease:Linear.easeNone, delay: 0.10}), 'first')
                .add(TweenMax.to($animationUp4, 1, {top: "0", duration: 500, ease:Linear.easeNone, delay: 0.15}), 'first')


            // build scene and link scrolling to animation
            var scene = new ScrollMagic.Scene({
                triggerElement: "#goals",
                duration: 2000})
                .setTween(scrollAnimation)
                .setPin(".goals__screen")
                .addTo(controller);

                scene.offset(400);
    } else {


    }

    var controller = new ScrollMagic.Controller();
    var _researchWidth;
    (function() {
      _researchWidth = mediaChecker('max', 360) ? 1525 : mediaChecker('max', 520) ? 1600 : mediaChecker('max', 700) ? 1750 : mediaChecker('max', 768) ? 2100 : 2400;
    })()
    var _researchW = _researchWidth - $(window).width() + parseInt($('#structure .container').css('margin-left')) + 'px';  
    var horizontalSlide = new TimelineMax()
    
    .to(".research__scroll--abs", 1,   {x: "-444px", ease:Linear.easeNone})	
    .to(".research__scroll--abs", 1,   {x: `-${_researchW}`, ease:Linear.easeNone})
  
    // create scene to pin and link animation
    new ScrollMagic.Scene({
      offset: $('.research__screen--main').height(),
      triggerElement: "#research",
      triggerHook: "onLeave",
      duration: "100%",
      triggerHook: 0
    })
      .setPin("#research")
      .setTween(horizontalSlide)
      .addTo(controller);










      var _structureWidth;
      (function() {
        _structureWidth = mediaChecker('max', 360) ? 1625 : mediaChecker('max', 445) ? 1875 : 2220;
      })()

    var controller = new ScrollMagic.Controller();

    var _structureW = _structureWidth - $(window).width() + parseInt($('#structure .container').css('margin-left')) + 'px';     

 
    var horizontalSlide = new TimelineMax()
    // animate panels
    .to(".structure__scrolling-abs", 1,   {x: "-444px", ease:Linear.easeNone})	
    .to(".structure__scrolling-abs", 1,   {x: `-${_structureW}`, ease:Linear.easeNone})
    
    console.log($(window).height())
      // create scene to pin and link animation
      new ScrollMagic.Scene({
        offset: () => mediaChecker('min', 700, 'height') ? $('.structure__screen--main').height() : 20,
        triggerElement: "#structure",
        triggerHook: "onLeave",
        duration: "100%",
        triggerHook: 0
      })
        .setPin("#structure")
        .setTween(horizontalSlide)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);









     


})