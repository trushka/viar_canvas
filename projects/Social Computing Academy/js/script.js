$(document).ready(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('body').toggleClass('is-open');
        $('.header-nav').fadeToggle(500);
    })




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





    // build scene
    var scene = new ScrollMagic.Scene({
        triggerElement: "#structure"
    })
        .setTween("#proposals", 0.2, {backgroundColor: "#F2EEFF"}) // trigger a TweenMax.to tween
        .addTo(controller);



})