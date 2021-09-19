$(document).ready(function () {
  $(".hamburger").click(function () {
    $("body").toggleClass("overflowed");
    $(".header-menu__layout").fadeToggle(500);
    $(this).toggleClass("is-active");
    $(".header-main__menu").toggleClass("active");
  });

  $(".menu__nav ul > li").click(function () {
    $(".menu__nav ul > li").removeClass("active");
    $(this).addClass("active");
    if ($(this).hasClass("menu__nav--collapser")) {
      if (mediaChecker("min", 526)) {
        $(".menu-column_sublist ul").addClass("collapsed__list");
      } else {
        $(".collapse-block").slideToggle();
      }
    } else {
      $(".menu-column_sublist ul").removeClass("collapsed__list");
    }
  });
  mediaActions();
  window.onresize = function () {
    mediaActions();
  };



  var header = document.querySelector(".header-main");    
  var sticky = header.offsetTop;
  
  window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
  }
  function mediaActions() {
    if (mediaChecker("min", 526)) {
      $(".collapse-block").slideUp();
    }




  }

  function mediaChecker(max_min, resolution, width = "width") {
    return window.matchMedia(`(${max_min}-${width}: ${resolution}px)`).matches;
  }
});
