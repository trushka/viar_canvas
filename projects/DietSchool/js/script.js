$(document).ready(function() {
    media();
    window.onresize = media;
    $('.hamburger, .menu-close').click(function() {
        $('.overlay__menu').fadeToggle(500);
        $('body').toggleClass('overlayed');
    })


    function media() {
        if (window.matchMedia('(min-width: 1440px)').matches) {
            $('.school-abs').css({'right': `${parseInt($(".container").css("marginRight"))}px`})
            $('.course-abs').css({'right': `${parseInt($(".container").css("marginRight"))}px`})
        }
        
        
        if (window.matchMedia('(max-width: 425px)').matches) {
            if (false)
            $(".upper__container .abs-item:nth-child(4").attr("src","abs-item-main-mobile.svg");
        }
    }


    let sertificateSlider = $('.sertificate__slider').slick({
        slidesToShow: 6,
        arrows: false,
        centerPadding: 0,
        centerMode: true,
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
    })
    $('.sertificate__slider--nav .right').click(function() {
        sertificateSlider.slick('slickNext');
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
    console.log(coursesSlider)
    $('.courses__slider--nav .left').click(function() {
        coursesSlider.slick('slickPrev');
    })
    $('.courses__slider--nav .right').click(function() {
        coursesSlider.slick('slickNext');
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
    })
    $('.blog__slider--nav .right').click(function() {
        blogSlider.slick('slickNext');
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
    })
    $('.reviews__slider--nav .right').click(function() {
        reviewsSlider.slick('slickNext');
    })
 
})