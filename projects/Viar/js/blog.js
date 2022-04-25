$(document).ready(function () {


  let blogSlider = $(".newone-slider--inner");

  blogSlider.slick({
    infinite: false,
    slidesToShow: 3,
    prevArrow: ".newone-prev",
    nextArrow: ".newone-next",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 525,
        settings: {
          slidesToShow: 1,
          dots: true
        },
      },
    ],
  });


});
