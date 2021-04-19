$(document).ready(function() {
    onScroll();
    onSize();
    window.onresize = function() {
        onScroll();
    }
    window.onscroll = function() {
        onScroll(); 
    }
    function onScroll() {
        var header = document.querySelector(".header");
        var target = document.querySelector(".header__center--side");
        var sticky;
        if (window.matchMedia('(min-width: 768px)').matches) {
            sticky = target.offsetTop; 
        } else {
            sticky = header.offsetTop; 
        }
        if (window.pageYOffset > sticky) {
            if (window.matchMedia('(min-width: 768px)').matches) {
                if (header.classList.contains('sticky-mobile')) {
                    header.classList.remove('sticky-mobile');
                    header.classList.add('sticky');
                } else {
                    header.classList.add('sticky');
                }          
            } else {
                if (header.classList.contains('sticky')) {
                    header.classList.remove('sticky');
                    header.classList.add('sticky-mobile');
                } else {
                    header.classList.add('sticky-mobile');
                }
            }        
        } else {
            header.classList.remove('sticky');
            header.classList.remove('sticky-mobile');
        }
    }
    function onSize() {

    }

    $('.hamburger').click(function() {
        $('.overlay').removeClass('hidden');
        $('.mobile-menu').animate({'left':'0px'}, 200)
    })
    $('.cross-mob-menu, .overlay-wrapper').click(function() {
        $('.mobile-menu').animate({'left':'-208px'}, 200)
        setTimeout(() => {
            $('.overlay').addClass('hidden');
        }, 200)
  
    })
    $('.contacts__logo').click(function() {
        $('.overlay').removeClass('hidden');
        $('.mobile-contact').animate({'right':'0px'}, 200)
    })
    $('.cross-mob-contacts, .overlay-wrapper').click(function() {
        $('.mobile-contact').animate({'right':'-136px'}, 200)
        setTimeout(() => {
            $('.overlay').addClass('hidden');
        }, 200)
  
    })

    $('.main__slider--section').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });

    let hairsSlider = $('.hairs_section .main__person--slider').slick({
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 900,
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
                breakpoint: 555,
                settings: {
                    slidesToShow: 1, 
                    centerMode: true,
                    focusOnSelect: true,
                    centerPadding: '60px',
                    lazyLoad: 'ondemand'
                }
            }
        ]
    });
    $('.hairs_section .chevron-right').click(() => {
        hairsSlider.slick('slickNext');
    })
    $('.hairs_section .chevron-left').click(() => {
        hairsSlider.slick('slickPrev');
    })

    let nailsSlider = $('.nails_section .main__person--slider').slick({
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 900,
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
                breakpoint: 555,
                settings: {
                    slidesToShow: 1, 
                    centerMode: true,
                    focusOnSelect: true,
                    centerPadding: '60px',
                    lazyLoad: 'ondemand'
                }
            }
        ]
    });
    $('.nails_section .chevron-right').click(() => {
        nailsSlider.slick('slickNext');
    })
    $('.nails_section .chevron-left').click(() => {
        nailsSlider.slick('slickPrev');
    })

    let faceSlider = $('.face_section .main__person--slider').slick({
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 900,
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
                breakpoint: 555,
                settings: {
                    slidesToShow: 1, 
                    centerMode: true,
                    focusOnSelect: true,
                    centerPadding: '60px',
                    lazyLoad: 'ondemand'
                }
            }
        ]
    });
    $('.face_section .chevron-right').click(() => {
        faceSlider.slick('slickNext');
    })
    $('.face_section .chevron-left').click(() => {
        faceSlider.slick('slickPrev');
    })

    let brandSlider = $('.brand--main .main__person--slider').slick({
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3 
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1, 
                    centerMode: true,
                    focusOnSelect: true,
                    centerPadding: '60px',
                    lazyLoad: 'ondemand'
                }
            },
            {
                breakpoint: 555,
                settings: {
                    slidesToShow: 1, 
                    centerMode: true,
                    focusOnSelect: true,
                    centerPadding: '60px',
                    lazyLoad: 'ondemand'
                }
            }
        ]
    });
    $('.brand--main .chevron-right').click(() => {
        brandSlider.slick('slickNext');
    })
    $('.brand--main .chevron-left').click(() => {
        brandSlider.slick('slickPrev');
    })

    let brandColSlider = $('.brand--coloring .main__person--slider').slick({
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3 
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1, 
                    centerMode: true,
                    focusOnSelect: true,
                    centerPadding: '60px',
                    lazyLoad: 'ondemand'
                }
            },
            {
                breakpoint: 555,
                settings: {
                    slidesToShow: 1, 
                    centerMode: true,
                    focusOnSelect: true,
                    centerPadding: '60px',
                    lazyLoad: 'ondemand'
                }
            }
        ]
    });
    $('.brand--coloring .chevron-right').click(() => {
        brandColSlider.slick('slickNext');
    })
    $('.brand--coloring .chevron-left').click(() => {
        brandColSlider.slick('slickPrev');
    })


    let serviceImageSlider = $('.coloring-images--wrapper').slick({
        slidesToShow: 1,
        arrows: false, 
        centerMode: true,
        centerPadding: '100px',
        speed: 700,
        responsive: [
            {
                breakpoint: 325,
                settings: {
                    centerPadding: '80px',
                }
            }
        ]
    });
    let serviceContentSlider = $('.coloring-content').slick({
        slidesToShow: 1,
        arrows: false, 
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        fade: true,
        centerPadding: '0px',
        lazyLoad: 'ondemand'
    });
    $('.person__coloring--block .chevron-left').click(() => {
        serviceImageSlider.slick('slickNext');
        serviceContentSlider.slick('slickNext');
    })
    $('.person__coloring--block .chevron-right').click(() => {
        serviceImageSlider.slick('slickPrev');
        serviceContentSlider.slick('slickPrev');
    })
    
    let masterSlider1 = $('.main__masters--section:nth-child(2) .master-slider--inner').slick({
        slidesToShow: 3,
        arrows: false, 
        vertical: true,
        verticalSwiping: true
    });
    $('.main__masters--section:nth-child(2) .chevron-top').click(() => {
        masterSlider1.slick('slickNext');
    })
    $('.main__masters--section:nth-child(2) .chevron-bottom').click(() => {
        masterSlider1.slick('slickPrev');
    })

    let masterSlider2 = $('.main__masters--section:nth-child(3) .master-slider--inner').slick({
        slidesToShow: 3,
        arrows: false, 
        vertical: true,
        verticalSwiping: true
    });
    $('.main__masters--section:nth-child(3) .chevron-top').click(() => {
        masterSlider2.slick('slickNext');
    })
    $('.main__masters--section:nth-child(3) .chevron-bottom').click(() => {
        masterSlider2.slick('slickPrev');
    })

    let masterSlider3 = $('.main__masters--section:last-child .master-slider--inner').slick({
        slidesToShow: 3,
        arrows: false, 
        vertical: true,
        verticalSwiping: true
    });
    $('.main__masters--section:last-child .chevron-top').click(() => {
        masterSlider3.slick('slickNext');
    })
    $('.main__masters--section:last-child .chevron-bottom').click(() => {
        masterSlider3.slick('slickPrev');
    })

    let worksSlider = $('.works_section .main__person--slider').slick({
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 900,
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
                breakpoint: 555,
                settings: {
                    slidesToShow: 1, 
                    centerMode: true,
                    focusOnSelect: true,
                    centerPadding: '60px',
                    lazyLoad: 'ondemand'
                }
            }
        ]
    });
    $('.works_section .chevron-right').click(() => {
        worksSlider.slick('slickNext');
    })
    $('.works_section .chevron-left').click(() => {
        worksSlider.slick('slickPrev');
    })


    if (window.matchMedia('(max-width: 700px)').matches) {
        let procedureSlider = $('.procedure_section .main__person--slider').slick({
            slidesToShow: 2,
            arrows: false,
            slidesToShow: 1, 
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '60px',
            lazyLoad: 'ondemand'
        });
        $('.procedure_section .chevron-right').click(() => {
            procedureSlider.slick('slickNext');
        })
        $('.procedure_section .chevron-left').click(() => {
            procedureSlider.slick('slickPrev');
        })
    }



    $('.button').click(function() {
        $('body').addClass('over');
        $('.overlay').removeClass('hidden');
        $('.overlay-wrapper').addClass('overlayed');
        $('.popup-main').fadeIn();
    })
    $('.popup-cross, .overlay-wrapper').click(function() {
        $('body').removeClass('over');
        $('.overlay').addClass('hidden');
        $('.overlay-wrapper').removeClass('overlayed');
        $('.popup-main').fadeOut();
    })


        $('.main_select').click(function() {
            $(this).parent().find('.selector-block').css("display", "flex").hide().fadeIn();
        })

        var selects = document.querySelectorAll('.selector-block');
        for (let i = 0; i < selects.length; i++) {
            var select = selects[i];        
            select.addEventListener('click', function(e) {
                var target = e.target;
                if (target.classList.contains('general')) {
                    $('.general').removeClass('non-active');
                    $(target).addClass('non-active');
                    $(this).fadeOut();
                    $(this).find('.first-sel span:first-child').text($(target).text());
                    $(this).parent().find('.main_select span:first-child').text($(target).text())
                } else {
                    $(this).fadeOut();
                }
            })
        }


})