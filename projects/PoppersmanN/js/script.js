$(document).ready(function() {
    // mobile menu
    $('.header-hamburger').click(function() {
        $(".mobile-menu").width("100%");
        $('body').addClass('fixed');
        $('.mobile-menu__closer').fadeIn(1000)
    })
    $('.mobile-menu__closer').click(function() {
        $(".mobile-menu").width("0%");
        setTimeout(()=> {
            $('body').removeClass('fixed modal')
        }, 200)
        $('.mobile-menu__closer').fadeOut(100)
        return false;
    })
    // contacts popup
    $('.header__main-contacts--button').click(function() {
        $('.contact-popup').fadeIn(200);
        $('body').addClass('fixed modal');
    })
    $('.contact-popup__closer, .overlay').click(function() {
        $('.contact-popup').fadeOut(200);
        setTimeout(()=> {
            $('body').removeClass('fixed modal')
        }, 200)
        return false;
    });
    // mobile contacts
    $('.mobile-menu__contact--button').click(function() {
        $('.contact-popup').width("100%");
    })
    $('.contact-back__button').click(function() {
        $('.contact-popup').width("0");
    })
    // another popups
    $('.main__cards-item__image > .svg:last-child, .main__cards-product-icons > .svg:nth-child(2)').click(function() {
        $('.like-popup').fadeIn(200);
        $('body').addClass('fixed modal');
        return false;
    })
    $('.popup__inner-button--outline, .overlay').click(function() {
        $('.like-popup').fadeOut(200);
        setTimeout(()=> {
            $('body').removeClass('fixed modal')
        }, 200)
        return false;
    });
    $('.main__cards-item__image > .svg:nth-child(2),  .main__cards-product-icons > .svg:nth-child(3)').click(function() {
        $('.libra-popup').fadeIn(200);
        $('body').addClass('fixed modal');
    })
    $('.popup__inner-button--outline, .overlay').click(function() {
        $('.libra-popup').fadeOut(200);
        setTimeout(()=> {
            $('body').removeClass('fixed modal');
        }, 200)
        return false;
    });
    $('.main__cards-item--button').click(function() {
        $('.basket-popup').fadeIn(200);
        $('body').addClass('fixed modal');
    })
    $('.popup__inner-button--outline, .overlay').click(function() {
        $('.basket-popup').fadeOut(200);
        setTimeout(()=> {
            $('body').removeClass('fixed modal')
        }, 200)
        return false;
    });
    $('.form__inner-submit').click(function() {
        $('.commit-popup').fadeIn(200);
        $('body').addClass('fixed modal');
        return false;
    })
    $('.popup__inner-button--inline, .overlay').click(function() {
        $('.commit-popup').fadeOut(200);
        setTimeout(()=> {
            $('body').removeClass('fixed modal')
        }, 200)
        return false;
    });
    // banner slider
    $('.main__inner-body--slider').slick({
        dots: false,
        accessibility: true,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next--custom"><img src="img/arrow-right.svg" alt=""></button>',
        prevArrow: '<button type="button" class="slick-prev--custom"><img src="img/arrow-left.svg" alt=""></button>'
    })
    // kit slider for mobile
    if (window.matchMedia('(max-width: 425px)').matches) {
        $('.main__inner-kit--items').slick({
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        })
    }
    // pop items slider for mobile
    if (window.matchMedia('(max-width: 768px)').matches) {
        $('.main__inner-cards--items').slick({
            dots: false,
            slidesToShow: 2,
            accessibility: true,
            arrows: true,
            nextArrow: '<button type="button" class="slick-next--custom__item"><img src="img/arrow-right.svg" alt=""></button>',
            prevArrow: '<button type="button" class="slick-prev--custom__item"><img src="img/arrow-left.svg" alt=""></button>'
        })
    }
    // order form validation
    const form  = document.querySelector('.main__inner-body--form.main-form');
    const log   = document.querySelector('.main__inner-body--form.login-form');
    const reg   = document.querySelector('.main__inner-body--form.registration-form');
    const rec   = document.querySelector('.main__inner-body--form.recover-form');
    if (form) {
        form.addEventListener("change", () => {
            document.querySelector('.form__inner-submit').disabled = !form.checkValidity()
        });
    } else if (log) {
        log.addEventListener("change", () => {
            document.querySelector('.form__inner-login--button').disabled = !log.checkValidity()
        });
    } else if (reg) {
        reg.addEventListener("change", () => {
            document.querySelector('.form__inner-login--button').disabled = !reg.checkValidity()
        });   
    } else if (rec) {
        rec.addEventListener("change", () => {
            document.querySelector('.form__inner-login--button').disabled = !rec.checkValidity()
        });    
    }
    // trigger function
    function changeActiveTab(_this,selectorTabWrap,selectorTabContent,selectorTabLink,classLinkActive) {
        
        _this.closest(selectorTabWrap).querySelectorAll(selectorTabLink).forEach((element) => {
          element.classList.remove(classLinkActive);
        });
      
        _this.classList.add(classLinkActive);
      
        const indexTab = [..._this.parentElement.children].indexOf(_this);
        const newActiveTabConent = _this.closest(selectorTabWrap).querySelectorAll(selectorTabContent)[indexTab];
        
        _this.closest(selectorTabWrap).querySelectorAll(selectorTabContent).forEach((element) => {
          element.classList.add('hidden');
        });
      
        newActiveTabConent.classList.remove('hidden');
      }
      // trigger for comments
      document.querySelectorAll('.main__inner-trigger--item').forEach((element) => {
        element.addEventListener( "click" , function() {
            let _this = this;
            changeActiveTab(_this,'.main__inner-body--comments','.main__comments-content','.main__inner-trigger--item','is--active');
            return false;
        });
      });
      // trigger for kits
      document.querySelectorAll('.kit--images__tab').forEach((element) => {
        element.addEventListener( "click" , function() {
            let _this = this;
            changeActiveTab(_this,'.cards-kit--image__trigger','.cards-kit--image','.kit--images__tab','active');
        });
      });
})