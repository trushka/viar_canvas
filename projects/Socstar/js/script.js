$(document).ready(function() {



    $('.promotion__item, .question__block').click(function() {
        $(this).toggleClass('c-collapsed');
    })

    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('body').toggleClass('overflowed');
        $('.mobile-menu').toggleClass('closed');
    })

    $('.cabinet-auth').click(function() {
        $(this).toggleClass('opened-auth');
    })
    $('.input-block').click(function() {
        $('.input-block').removeClass('selected-pay');
        $(this).addClass('selected-pay');
    })

    $('.cross, .choose-btn, .popup-close').click(function() {
        $('.overlay').toggleClass('hidden');
        $('.overlay-wrapper').css('max-height', `${$('#starter').offset().top - 10}px`);
        $('.popup').fadeToggle();
        
    })

    window.onload = function() {
        loader();
    }
    function loader() {
        if (window.matchMedia('(max-width: 475px)').matches) {
            
        }
    }
    loader();
    let serviceSlider = $('.service__slider').not('.slick-initialized').slick({
        slidesToShow: 1,
        prevArrow: $('.service-nav .arr-left'),
        nextArrow: $('.service-nav .arr-right'),
        centerPadding: 0,
        infinite: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick",
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

    let reviewSlider = $('.reviews-slider').not('.slick-initialized').slick({
        slidesToShow: 3,
        prevArrow: $('.review-nav .arr-left'),
        nextArrow: $('.review-nav .arr-right'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
    
    let orderSlider = $('.order-slider').not('.slick-initialized').slick({
        slidesToShow: 2,
        prevArrow: $('.order-nav .arr-left'),
        nextArrow: $('.order-nav .arr-right'),
        infinite: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick",
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
})