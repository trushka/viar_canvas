$(document).ready(function() {



    // ///////////////////////////////////

    $(document).on('click', '.mc-js-list a', function(e) {
        e.preventDefault();
        if ($(this).parent().find('.mc-subcat').length != 0) {
            $(this).parent().toggleClass('active');
            $(this).parent().find('.mc-subcat').slideToggle();
        } else {
          $('.mc-js-list a').removeClass('active');
          $(this).addClass('active');
        }
    })
  

    // //////////////////////////////////////

    let bsSlider = $(".bs-slider");

    bsSlider.slick({
      infinite: false,
      slidesToShow: 3,
      prevArrow:`<button type='button' class='slick-prev pull-left'><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 18L2 9.5L11 1" stroke="#1E2533" stroke-width="2"/>
      </svg>
      </button>`,
      nextArrow:`<button type='button' class='slick-next pull-right'><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.999999 0.999999L10 9.5L1 18" stroke="white" stroke-width="2"/>
              </svg>
              </button>`,
      dots: false,
      responsive: [
        {
          breakpoint: 981,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 701,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
     

    // //////////////////////////////////

    mobileOnlyCategorySlider(".cp-block-inner", 981);
  
    function mobileOnlyCategorySlider($slidername, $breakpoint) {
      var slider = $($slidername);
      var settings = {
        infinite: false,
        slidesToShow: 1,
        mobileFirst: true,
        arrows: false,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 981,
            settings: "unslick"
          }
        ]
      };
    
      slider.slick(settings);
    
      $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
          return;
        }
        if (!slider.hasClass("slick-initialized")) {
          return slider.slick(settings);
        }
      });
    }
    
  
  
    // ///////////////////////////////////////////


    document.querySelectorAll(".cp-tab").forEach((element) => {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        let _this = this;
        changeActiveTab(
          _this,
          ".category-pop--block",
          ".cp-block",
          ".cp-tab",
          "active"
        );
  
        if (mediaChecker('max', 981)) {
          $(".cp-block-inner")?.slick('refresh');
        }
  
        return false;
      });
    });
  

    // ///////////////////////////////////////
  
    const mediaChecker = (max_min, resolution, width = "width") => window.matchMedia(`(${max_min}-${width}: ${resolution}px)`).matches;
  
  
    function changeActiveTab(
      _this,
      selectorTabWrap,
      selectorTabContent,
      selectorTabLink,
      classLinkActive
    ) {
      _this
        .closest(selectorTabWrap)
        .querySelectorAll(selectorTabLink)
        .forEach((element) => {
          element.classList.remove(classLinkActive);
        });
  
      _this.classList.add(classLinkActive);
  
      const indexTab = [..._this.parentElement.children].indexOf(_this);
      const newActiveTabContent = _this
        .closest(selectorTabWrap)
        .querySelectorAll(selectorTabContent)[indexTab];
  
      _this
        .closest(selectorTabWrap)
        .querySelectorAll(selectorTabContent)
        .forEach((element) => {
          element.classList.add("hidden-block");
        });
  
      newActiveTabContent.classList.remove("hidden-block");
    }


    /////////////////////////////////////////////////////





var mcardSwiper = new Swiper(".mcard-navSlider-wrapper", {
    spaceBetween: 18,
    slidesPerView: 5,
    freeMode: true,
    direction: 'vertical',
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });
 new Swiper(".mcard-mainSlider-wrapper", {
    spaceBetween: 20,
    thumbs: {
      swiper: mcardSwiper,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      1080: {
        navigation: false
      }
    }
  });


  // ///////////////////////////////////



  $(document).on('click', '.mcard-type-item', function() {
    $('.mcard-type-item').removeClass('active');
    $(this).addClass('active')
  })

  $(document).on('click', '.mcard-date-item', function() {
    $('.mcard-date-item').removeClass('active');
    $(this).addClass('active')
  })




  // 

  $(document).on('click', '.c-sizeCheck input', function() {

    $('.c-sizeCheck li').removeClass('active');
    $('.c-sizeCheck input').prop("checked", false);
    $(this).closest('li').addClass('active')
    $(this).prop("checked", true);
  })

  $(document).on('click', '.js-mcard-size', function(e) {
    $(this).find('.filter-item--wrapper').fadeIn();
  })


  $(document).on('click',  function(e) {
    let container = $('.mcard-size');
    let target = $('.c-sizeCheck input, .c-sizeCheck input + span');

    if (target.is(e.target)) {
      let text = $(e.target).closest('li').find('p').text();
      $(e.target).closest('.js-mcard-size').find('a > span').text(text);
      target.closest('.mcard-size .filter-item--wrapper').fadeOut();
    } else if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.mcard-size .filter-item--wrapper').fadeOut();
    }

  })


  // 





  // 



  $(document).on('click', '.mc-js-filter > a', function(e) {
    e.preventDefault();
    $('.mc-js-filter ').removeClass('active')
    $('.filter-item--wrapper').fadeOut();
    $(this).parent().addClass('active')
    $(this).next().fadeIn();
  })
  $(document).on('click', '.checkbox-settings p', function() {
    $(this).closest('.checkbox-settings').find('p').removeClass('active');
    $(this).addClass('active');
  })
  $(document).on('click',  function(e) {
    let container = $('.filter-item');
    let target = $('.c-sizeCheck input');
    

    if (target.is(e.target)) {
      
    } else if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.mc-js-filter .filter-item--wrapper').fadeOut();
      $('.filter-item').removeClass('active');
    } else {
      if ($(e.target).closest('.filter-item').find('.filter-sort').length != 0) {
        if ($('.sort-it li').has(e.target) || $('.sort-it li').is(e.target)) {
          let text = $(e.target).closest('.sort-it li').find('span').text();
          if (text) {
            $(e.target).closest('.mc-js-filter').find('a span').text(text);
            $(e.target).closest('.sort-it').find('li').removeClass('active');
            $(e.target).closest('.sort-it li').addClass('active');
          }
        }
      } else if ($(e.target).closest('.filter-item').find('.filter-material').length != 0) {

        if ($('.filter-material li').has(e.target) || $('.filter-material li').is(e.target)) {
            $(e.target).closest('.filter-material').find('li').removeClass('active');
            $(e.target).closest('.filter-material li').addClass('active');
        }
      }
    }

  })

  $(document).on('click', '.color-grid li', function(e) {
    $('.color-grid li').removeClass('active');
    $(this).addClass('active');
  })


  $(document).on('click', '.rp-form ul li', function(e) {
    $('.rp-form ul li').removeClass('active');
    $(this).addClass('active');
  })

  // 

  $(document).on('click', '.forms-grid div', function(e) {
    $('.forms-grid div').removeClass('active');
    $(this).addClass('active');
  })


  $(document).on('click', '.rcard-frame__inner > a', function(e) {
    e.preventDefault();
    $(this).next().fadeToggle();
    $(this).parent().toggleClass('active');
  })


  $(document).on('click', '.mc-f-selected > svg', function() {
    $(this).parent().remove();
  })


  $(document).on('click', '.rcard-type-item', function() {
    $('.rcard-type-item').removeClass('active');
    $(this).addClass('active');
    if ($(this).data('frame')) {
      $('.rcard-frame').fadeIn();
    } else {
      $('.rcard-frame').fadeOut();
    }
  })

  document.querySelectorAll(".mcard-tab").forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      let _this = this;
      changeActiveTab(
        _this,
        ".mcard-about__inner",
        ".mcard-about__block",
        ".mcard-tab",
        "active"
      );
      return false;
    });
  });



  new Swiper(".similar-slider", {
    spaceBetween: 15,
    slidesPerView: 2,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      1080: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      }
    }
  });
  
  document.querySelectorAll(".alph-tabs > div").forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      let _this = this;
      changeActiveTab(
        _this,
        ".alphabets",
        ".alph-ru, .alph-en",
        ".alph-tabs > div",
        "active"
      );
      return false;
    });
  });

  new Swiper(".pp-list", {
    spaceBetween: 15,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      1080: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      425: {
        slidesPerView: 1,
      }
    }
  });

  new Swiper(".cats-slider", {
    spaceBetween: 20,
    slidesPerView: 1.1,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      970: {
        slidesPerView: 3,
      },
      700: {
        slidesPerView: 2,
      },
      425: {
        slidesPerView: 1.5,
      }
    }
  });





  document.querySelectorAll(".rp-tab").forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      let _this = this;
      changeActiveTab(
        _this,
        ".reproduction",
        ".rp-block",
        ".rp-tab",
        "active"
      );
      return false;
    });
  });


  let rcarddSwiper = new Swiper(".rcardd-swiper", {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    direction: 'vertical',
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });
  new Swiper(".rcard-mainSlider-wrapper", {
    spaceBetween: 20,
    thumbs: {
      swiper: rcarddSwiper,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      1080: {
        navigation: false
      }
    }
  });


  let rcardvSwiper = new Swiper(".rcardv-swiper", {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    direction: 'vertical',
    navigation: {
      nextEl: ".rcm-block .swiper-next",
      prevEl: ".rcm-block .swiper-prev",
    },
  });

  rcarddSwiper.controller.control = this.rcardvSwiper;

  new Swiper(".photo-slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 1
      }
    }
  });

  let sSwiper1 = new Swiper(".interior-item__slider", {
    spaceBetween: 12,
    slidesPerView: 1.8,
    navigation: {
      nextEl: ".interior-item__slider_block .swiper-next",
      prevEl: ".interior-item__slider_block .swiper-prev",
    },
    breakpoints: {
      525: {
        slidesPerView: 3
      }
    }
  });

  $(document).on('click', '.mc-deliver', function(e) {
    e.preventDefault();
    $('.popup-frame').fadeIn();
    $('.popup-delivery').fadeIn();
  })
  $(document).on('click', '.mc-payment', function(e) {
    e.preventDefault();
    $('.popup-frame').fadeIn();
    $('.popup-payment').fadeIn();
  })
  $(document).on('click', '.frame-js-popup', function(e) {
    e.preventDefault();
    $('.popup-frame').fadeIn();
    $('.popup-rframe').fadeIn();
  })


  function mediaAction() {
    if (mediaChecker('max', 991)) {
      $('.mc-mainSlide').attr('href', '#');
      $('.mc-mainSlide').removeAttr('data-fancybox')
    }
  }
  mediaAction()


})