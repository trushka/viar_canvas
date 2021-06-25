$(document).ready(function() {
    media();
    window.onresize = media;
    $('.hamburger, .menu-close, .menu-close__mobile').click(function() {
        $('.overlay__menu').fadeToggle(500);
        $('body').toggleClass('overlayed');
    })


    function media() {
        if (window.matchMedia('(min-width: 1440px)').matches) {
            $('.school-abs').css({'right': `${parseInt($(".container").css("marginRight"))}px`})
            $('.course-abs').css({'right': `${parseInt($(".container").css("marginRight"))}px`})
        }
        
    }
    function checkSliderButtons(slider, sliderRight, sliderLeft) {
        console.log(sliderRight, sliderLeft)
        if (slider.find('.slick-track').children().first().hasClass('slick-active')) {
            $(sliderLeft).css({'opacity': 0.4});
            $(sliderRight).css({'opacity': 1});
        } else if (slider.find('.slick-track').children().last().hasClass('slick-active')) {
            $(sliderLeft).css({'opacity': 1});
            $(sliderRight).css({'opacity': 0.4});
        } else {
            $(sliderLeft).css({'opacity': 1});
            $(sliderRight).css({'opacity': 1});
        }
    }

    let sertificateSlider = $('.sertificate__slider').slick({
        slidesToShow: 6,
        arrows: false,
        centerPadding: 0,
        infinite: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5 
                }
            },
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
    $('.sertificate__slider--nav .left').click(function() {
        sertificateSlider.slick('slickPrev');
        checkSliderButtons(sertificateSlider, $('.sertificate__slider--nav .right'), $('.sertificate__slider--nav .left'));
    })
    $('.sertificate__slider--nav .right').click(function() {
        sertificateSlider.slick('slickNext');
        checkSliderButtons(sertificateSlider, $('.sertificate__slider--nav .right'), $('.sertificate__slider--nav .left'));
    })


    let coursesSlider = $('.courses__slider').slick({
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        // variableWidth: 
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 2 
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true 
                }
            }
        ]
    })
    $('.courses__slider--nav .left').click(function() {
        coursesSlider.slick('slickPrev');
        checkSliderButtons(coursesSlider, $('.courses__slider--nav .right'), $('.courses__slider--nav .left'));
    })
    $('.courses__slider--nav .right').click(function() {
        coursesSlider.slick('slickNext');
        checkSliderButtons(coursesSlider, $('.courses__slider--nav .right'), $('.courses__slider--nav .left'));
    })


    
    let blogSlider = $('.blog-slider').slick({
        slidesToShow: 3,
        arrows: false,
        // variableWidth: true,
        centerMode: true,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 2 
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true 
                }
            }
        ]
    })
    $('.blog__slider--nav .left').click(function() {
        blogSlider.slick('slickPrev');
        checkSliderButtons(blogSlider, $('.blog__slider--nav .right'), $('.blog__slider--nav .left'));
    })
    $('.blog__slider--nav .right').click(function() {
        blogSlider.slick('slickNext');
        checkSliderButtons(blogSlider, $('.blog__slider--nav .right'), $('.blog__slider--nav .left'));
    })



    let reviewsSlider = $('.reviews-slider').slick({
        slidesToShow: 4,
        arrows: false,
        centerPadding: 0,
        infinite: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3 
                }
            },
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true 
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true 
                }
            }
        ]
    })
    $('.reviews__slider--nav .left').click(function() {
        reviewsSlider.slick('slickPrev');
        checkSliderButtons(reviewsSlider, $('.reviews__slider--nav .right'), $('.reviews__slider--nav .left'));
    })
    $('.reviews__slider--nav .right').click(function() {
        reviewsSlider.slick('slickNext');
        checkSliderButtons(reviewsSlider, $('.reviews__slider--nav .right'), $('.reviews__slider--nav .left'));
    })
 
})