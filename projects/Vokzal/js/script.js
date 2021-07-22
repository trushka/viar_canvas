$(document).ready(function () {
    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('.mobile__menu').toggleClass('closed');
    })


    let mobileMenu = $('.menu__inner--slider').slick({
        arrows: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.hairs_section .chevron-right').click(() => {
        mobileMenu.slick('slickNext');
    })
    $('.hairs_section .chevron-left').click(() => {
        mobileMenu.slick('slickPrev');
    })
})