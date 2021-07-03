$(document).ready(function() {

    // STICKY HEADER

    window.onscroll = function() {
        stickyAction();
        scrollFunction()
    };
    window.onresize = function() {
        stickyAction();
        reziseActions()
    };
    reziseActions();

    function reziseActions() {
        $('.team__title--block, .main__team--image').css('margin-left', `${parseInt($('.container').css('marginLeft')) + 18}px`);
        $('.main__team--blocks, .main__team--text').css('padding-right', `${parseInt($('.container').css('marginLeft')) + 18}px`);

        if (mediaChecker('max', 768)) {
            $('.map__wrapper').css('margin-top', `${parseInt($('.main__contacts--content').outerHeight() + 20)}px`);
            $('.main__team--image').css('margin-left', `0px`);
        } else {
            $('.map__wrapper').css('margin-top', `0px`);
        }
        if (mediaChecker('max', 550)) {
            $('.project__content--button').css('top', `${parseInt($('.project__item').css('height')) + 10}px`);
        } else {
            $('.main__team--blocks, .main__team--text').css('padding-right', `${parseInt($('.container').css('marginLeft')) + 18}px`);
            $('.team__title--block, .main__team--image').css('margin-right', `0px`);
        }


        if (mediaChecker('max', 425)) {
            $('.project__content--button').css('top', `${parseInt($('.project__item').css('height')) - 45}px`)
        } else {
            $('.project__content--button').css('top', `255px`)
        }




    }

    // MAIN MEDIA JS CHECKER

    function mediaChecker(max_min, resolution, width = 'width') {
        return window.matchMedia(`(${max_min}-${width}: ${resolution}px)`).matches;
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    // MIXER FILTER ACTIVATION

    var mixer;
    if ($('.filter-container').length) {
        if (mediaChecker('min', 550)) {
            mixer = mixitup('.filter-container');
        } else {
            mixer = mixitup('.filter-container', {
                animation: {
                    enable: false
                }
            });
        }
    }




    // STICKY HEADER FUNCTION

    const header = document.querySelector(".main__page--header");
    const sticky = header.offsetTop;

    function stickyAction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            if (mediaChecker('min', 768)) {
                $('.header--wrapper, .header__inner, .main__page--header').height(70)
            }
            if (mediaChecker('min', 500)) {
                $('.header__logo').css({
                    'transform': 'scale(0.735)'
                })
            }

        } else {
            header.classList.remove("sticky");
            $('.header__logo').css({
                'transform': 'scale(1)'
            })
            if (mediaChecker('min', 768) && mediaChecker('min', 420, 'height')) {
                $('.header--wrapper, .header__inner, .main__page--header').height(89)
            } else {
                $('.header--wrapper, .header__inner, .main__page--header').height(50)
            }
        }
    }


    // MOBILE MENU

    $('.hamburger, .mobile__nav ul li').click(function() {
        $('.hamburger').toggleClass('is-active')
        $('body').toggleClass('overflowed');
        $('.main__layout').toggleClass('active-menu');
        $('.main__page--header').toggleClass('mobile-header');
        $('.main__page--inner').fadeToggle();
        if (mediaChecker('min', 768) && mediaChecker('max', 420, 'height')) {
            $('.header--wrapper, .header__inner, .main__page--header').height(50)
        }
    })


    // SLICK SLIDER

    const aboutSlider = $('.about__image__slider').slick({
        slideToShow: 1,
        arrows: false,
        infinite: true,
        autoplay: true
    })
    aboutSlider.on('swipe', function() {
        checkSliderNav();
        checkSliderButtons(aboutSlider, $('.about__arrow--right'), $('.about__arrow--left'));
    });
    aboutSlider.on('afterChange', function() {
        checkSliderNav();
        checkSliderButtons(aboutSlider, $('.about__arrow--right'), $('.about__arrow--left'));
    });
    $('.about__arrow--left').click(function() {
        checkSliderNav();
        aboutSlider.slick('slickPrev');
        checkSliderButtons(aboutSlider, $('.about__arrow--right'), this);
    })
    $('.about__arrow--right').click(function() {
        checkSliderNav();
        aboutSlider.slick('slickNext');
        checkSliderButtons(aboutSlider, this, $('.about__arrow--left'));
    })

    $('li[data-slide]').click(function(e) {
        e.preventDefault();
        $('li[data-slide]').removeClass('active-slide');
        $(this).addClass('active-slide');
        var slideNo = $(this).data('slide');
        aboutSlider.slick('slickGoTo', slideNo - 1);
    });


    function checkSliderButtons(slider, sliderRight, sliderLeft) {
        if (slider.find('.slick-track').children().first().hasClass('slick-active')) {
            $(sliderLeft).removeClass('active-arrow');
            $(sliderRight).addClass('active-arrow');
        } else if (slider.find('.slick-track').children().last().hasClass('slick-active')) {
            $(sliderLeft).addClass('active-arrow');
            $(sliderRight).removeClass('active-arrow');
        } else {
            $(sliderLeft).addClass('active-arrow');
            $(sliderRight).addClass('active-arrow');
        }
    }

    function checkSliderNav() {
        setTimeout(() => {
            $('li[data-slide]').removeClass('active-slide');
            const index = ($('.slick-active').data('slick-index') + 1);
            $(`[data-slide='${index}']`).addClass('active-slide');
        }, 100);
    }

    $('.experience__block--button').click(function() {
        $(this).toggleClass('toggled-btn');
        const width = $('.experience__inner--block').innerWidth();
        const experience = $(this).closest('.experience__block--text');
        const experience_hid = $(this).closest('.experience__block--text').find('.experience__hidden--block');
        const height = (experience_hid.css({
            'visibility': 'hidden',
            'max-height': 'initial'
        })).height();
        $('.experience__hidden--block').css('width', `${width}px`);
        experience_hid.css({
            'visibility': 'visible',
            'max-height': '0'
        });
        experience_hid.toggleClass('visible');
        if (experience_hid.hasClass('visible')) {
            $(this).closest('.experience__inner--block').css({
                'margin-bottom': `${height}px`
            });
            $(experience.find('.experience-mobile')[0]).css({
                opacity: 0,
                visibility: "hidden"
            })
            experience_hid.animate({
                'max-height': `${height}`
            }, {
                duration: 50,
                speciaalEasing: {
                    'max-height': `ease`
                }
            });
        } else {

            experience_hid.animate({
                'max-height': `0`
            }, {
                duration: 50,
                speciaalEasing: {
                    'max-height': `ease`
                }
            });
            $(experience.find('.experience-mobile')[0]).css({
                opacity: 1,
                visibility: "visible"
            });
            $(this).closest('.experience__inner--block').css({
                'margin-bottom': `20px`
            });
        }
    })

    // TABS FUNCTIONS

    function changeActiveTab(_this, selectorTabWrap, selectorTabContent, selectorTabLink, classLinkActive) {

        _this.closest(selectorTabWrap).querySelectorAll(selectorTabLink).forEach((element) => {
            element.classList.remove(classLinkActive);
        });

        _this.classList.add(classLinkActive);

        const indexTab = [..._this.parentElement.children].indexOf(_this);
        const newActiveTabContent = _this.closest(selectorTabWrap).querySelectorAll(selectorTabContent)[indexTab];

        _this.closest(selectorTabWrap).querySelectorAll(selectorTabContent).forEach((element) => {
            element.classList.add('hidden-block');
        });

        newActiveTabContent.classList.remove('hidden-block');
    }
    // trigger for comments
    document.querySelectorAll('.experience__tabs--row li').forEach((element) => {
        element.addEventListener("click", function(e) {
            e.preventDefault();
            let _this = this;
            changeActiveTab(_this, '.main__experience--inner', '.experience__inner--block', '.experience__tabs--row li', 'active-tab');
            return false;
        });
    });


    // A TAGS PREVENT DEFAULT ACTIONS

    $('.project__tabs--row li').click(function() {
        if ($(this).hasClass('active-tab')) {
            return false;
        }
        $('.project__tabs--row li').removeClass('active-tab');
        $(this).addClass('active-tab');

        return false;
    })




    // NAVITGATION ACTIVE LINK ACTIONS

    let mainNavLinks = document.querySelectorAll(".header__nav ul li a");
    window.addEventListener("scroll", event => {
        let fromTop = window.scrollY;

        mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);
            if (!section) return;
            if (
                section.offsetTop <= (fromTop + 220) &&
                section.offsetTop + section.offsetHeight > (fromTop + 220)
            ) {
                link.closest('li').classList.add("active-nav");
            } else {
                link.closest('li').classList.remove("active-nav");
            }
        });
    });


    // SCROLL UP BUTTON ACTIONS

    var scrollToUp = document.querySelector(".button__scroll--up");


    function scrollFunction() {
        if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && mediaChecker('min', 600)) {
            scrollToUp.style.right = mediaChecker('min', 1440) ? "50px" : "18px";
        } else {
            scrollToUp.style.right = "-150px";
        }
    }





    // GSAP LIBRARY USING AND PREVENT OF ERRORS


    try {
        gsap.fromTo('.page__content--title', {
            x: 0,
            y: -100,
            autoAlpha: 0
        }, {
            duration: 1.25,
            delay: 0.5,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto"
        });
        gsap.fromTo('.page__content--description', {
            x: 0,
            y: -100,
            autoAlpha: 0
        }, {
            duration: 1.25,
            delay: 0.7,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto"
        });
        gsap.fromTo('.main__screen--button', {
            x: 0,
            y: 100,
            autoAlpha: 0
        }, {
            duration: 1.25,
            delay: 0.9,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto"
        });

        if (mediaChecker('min', 768)) {
            gsap.to('.about__overall--block:nth-child(2)', { // this will animate ALL boxes
                scrollTrigger: {
                    trigger: ".about__overall--block:nth-child(2)",
                    scrub: true
                },
                y: -160,
            })
            gsap.to('.about__overall--block:nth-child(1)', { // this will animate ALL boxes
                scrollTrigger: {
                    trigger: ".about__overall--block:nth-child(2)",
                    scrub: true
                },
                y: -120,
            })
            gsap.to('.about__overall--block:nth-child(3)', { // this will animate ALL boxes
                scrollTrigger: {
                    trigger: ".about__overall--block:nth-child(2)",
                    scrub: true
                },
                y: -120,
            })
        }

    } catch {
        console.log('Without gsap')
    }



    // SMOOTH SCROLL BY NICESCROLL JS

    $("html").niceScroll({
        scrollspeed: 120,
        cursorcolor: "#F90101",
        cursorwidth: "7px",
        cursorborder: "none",
        cursorborderradius: '10px',
        mousescrollstep: 10
    });

})