$(document).ready(function() {

    // STICKY HEADER

    window.onscroll = function() { stickyAction() };
    window.onresize = function() { stickyAction();reziseActions() };
    reziseActions();
    function reziseActions() {
        
    }   
    function mediaChecker(max_min, resolution, width = 'width') {
        return window.matchMedia(`(${max_min}-${width}: ${resolution}px)`).matches;
    }

    const header = document.querySelector(".main__page--header");
    const sticky = header.offsetTop;

    function stickyAction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            $('.header__logo').css({'transform': 'scale(0.735)'})
            if (mediaChecker('min', 768)) {
                $('.header--wrapper, .header__inner, .main__page--header').height(70)                
            }

        } else {
            header.classList.remove("sticky");
            $('.header__logo').css({'transform': 'scale(1)'})
            if (mediaChecker('min', 768)) {
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
})