$(document).ready(function() {

    // STICKY HEADER

    window.onscroll = function() { stickyAction() };
    window.onresize = function() { stickyAction();reziseActions() };
    reziseActions();
    function reziseActions() {
        $('.project__title--block, .main__team--image').css('margin-left', `${parseInt($('.container').css('marginLeft')) + 18}px`);
        $('.main__team--blocks, .main__team--text').css('padding-right', `${parseInt($('.container').css('marginLeft')) + 18}px`);
        if (mediaChecker('max', 550)) {
            $('.project__content--button').css('top', `${document.querySelector('.project__item').getBoundingClientRect.height}px`);
            $('.project__title--block, .main__team--image').css('margin-right', `${parseInt($('.container').css('marginLeft')) + 18}px`);
        } else {
            $('.main__team--blocks, .main__team--text').css('padding-right', `${parseInt($('.container').css('marginLeft')) + 18}px`);
            $('.project__title--block, .main__team--image').css('margin-right', `0px`);
        }
    }   
    function mediaChecker(max_min, resolution, width = 'width') {
        return window.matchMedia(`(${max_min}-${width}: ${resolution}px)`).matches;
    }

    const header = document.querySelector(".main__page--header");
    const sticky = header.offsetTop;

    function stickyAction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            if (mediaChecker('min', 768)) {
                $('.header--wrapper, .header__inner, .main__page--header').height(70)                
            }
            if (mediaChecker('min', 500)) {
                $('.header__logo').css({'transform': 'scale(0.735)'}) 
            }

        } else {
            header.classList.remove("sticky");
            $('.header__logo').css({'transform': 'scale(1)'})
            if (mediaChecker('min', 768) && mediaChecker('min', 420, 'height')) {
                $('.header--wrapper, .header__inner, .main__page--header').height(89)                
            } else {
                $('.header--wrapper, .header__inner, .main__page--header').height(50)  
            }
        }
    }


    // MOBILE MENU

    $('.hamburger').click(function() {
        $(this).toggleClass('is-active')
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
        infinite: false,
        autoplay: true
    })
    aboutSlider.on('swipe', function(){  
        checkSliderNav();
        checkSliderButtons(aboutSlider, $('.about__arrow--right'), $('.about__arrow--left'));
      });
    aboutSlider.on('afterChange', function(){  
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
        const height = (experience_hid.css({'visibility': 'hidden','max-height': 'initial'})).height();
        $('.experience__hidden--block').css('width',`${width}px`);
        experience_hid.css({'visibility': 'visible','max-height': '0'});
        experience_hid.toggleClass('visible');
        if (experience_hid.hasClass('visible')) {
            $(this).closest('.experience__inner--block').css({'margin-bottom': `${height}px`});
            $(experience.find('.experience-mobile')[0]).css({opacity: 0, visibility: "hidden"})
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
                $(experience.find('.experience-mobile')[0]).css({opacity: 1, visibility: "visible"});
                $(this).closest('.experience__inner--block').css({'margin-bottom': `20px`});
            }
    })


    function changeActiveTab(_this,selectorTabWrap,selectorTabContent,selectorTabLink,classLinkActive) {
        
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
    element.addEventListener( "click" , function(e) {
        e.preventDefault();
        let _this = this;
        changeActiveTab(_this,'.main__experience--inner','.experience__inner--block','.experience__tabs--row li','active-tab');
        return false;
    });
    });

})