$(document).ready(function() {
    // preloader
    setTimeout(function() {
      $('.preloader').fadeOut(200);
    }, 100)
    //

    // animated link animation on header
    $('.animated__link')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });

    $('.form__submit')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
    //


    // mobile menu trigger
    $('.hamburger').click(function() {
      $('.hamburger').toggleClass('is-active');
      $('.mobile__menu--overlay').fadeToggle(500);
      $('body').toggleClass('fixed');
    })
    //

    //
    window.addEventListener('resize', sizerQueries);
    sizerQueries();
    function sizerQueries() {
      if (window.matchMedia('(min-width: 970px)').matches) {
        $('.mobile__menu--overlay').css({'display': 'none'});
        $('.hamburger').removeClass('is-active');
        $('body').removeClass('fixed');
        
      }
      if (window.matchMedia('(min-width: 768px)').matches) {
        $('.contacts__inner--social').css({
          'right': '-' + (parseInt($('.main__content--wrapper__contacts').css('marginRight')) + 85 + 'px')
        })
        $('.whoweare__inner--arrow img').attr("src","img/arrow.svg");
      } else {
        $('.contacts__inner--social').css({
          'right': '-' + (parseInt($('.main__content--wrapper__contacts').css('marginRight')) + 200 + 'px')
        })
        $('.whoweare__inner--arrow img').attr("src","img/arrow-min.svg");          
      }
      if (window.matchMedia('(max-width: 425px)').matches) {
        $('.contacts__inner--social').css({
          'right': '-' + (parseInt($('.main__content--wrapper__contacts').css('marginRight')) + 130 + 'px')
        })
      } else if (window.matchMedia('(max-width: 540px)').matches) {
        $('.contacts__inner--social').css({
          'right': '-' + (parseInt($('.main__content--wrapper__contacts').css('marginRight')) + 90 + 'px')
        })
      }

    }
    //


    // navigation active links animation
    let mainNavLinks = document.querySelectorAll(".navigation__block ul li a");
    window.addEventListener("scroll", event => {
      let fromTop = window.scrollY;
    
      mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("navigation__active");
        } else {
          link.classList.remove("navigation__active");
        }
      });
    });

    document.querySelectorAll('a[href^="#section"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          if ($(this).attr('href') == '#section1') {
            document.querySelector('.header').scrollIntoView({
              behavior: 'smooth'
          });
          } else {
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
          }
          
      });
    });
    //
    

    // Particles sphere animation with two layers
    // particlesJS("particles-js1", {
    //     "particles": {
    //       "number": {
    //         "value": 33,
    //         "density": {
    //           "enable": true,
    //           "value_area": 1
    //         }
    //       },
    //       "color": {
    //         "value": "#C64262"
    //       },
    //       "shape": {
    //         "type": "circle",
    //         "stroke": {
    //           "width": 0,
    //           "color": "#C64262"
    //         },
    //         "polygon": {
    //           "nb_sides": 5
    //         },
    //         "image": {
    //           "src": "https://i.ibb.co/H78LBWP/e.png",
    //           "width": 5000,
    //           "height": 5000
    //         }
    //       },
    //       "opacity": {
    //         "value": 0.5,
    //         "random": false,
    //         "anim": {
    //           "enable": false,
    //           "speed": 1,
    //           "opacity_min": 0.1,
    //           "sync": false
    //         }
    //       },
    //       "size": {
    //         "value": 2,
    //         "random": true,
    //         "anim": {
    //           "enable": false,
    //           "speed": 40,
    //           "size_min": 0.1,
    //           "sync": false
    //         }
    //       },
    //       "line_linked": {
    //         "enable": false
    //       },
    //       "move": {
    //         "enable": true,
    //         "speed": 1.5,
    //         "direction": "none",
    //         "random": false,
    //         "straight": false,
    //         "out_mode": "out",
    //         "bounce": false,
    //         "attract": {
    //           "enable": false,
    //           "rotateX": 600,
    //           "rotateY": 1200
    //         }
    //       }
    //     },
    //     "interactivity": {
    //       "detect_on": "canvas",
    //       "events": {
    //         "onhover": {
    //           "enable": true,
    //           "mode": "repulse"
    //         },
    //         "onclick": {
    //           "enable": true,
    //           "mode": "push"
    //         },
    //         "resize": true
    //       },
    //       "modes": {
    //         "grab": {
    //           "distance": 140,
    //           "line_linked": {
    //             "opacity": 1
    //           }
    //         },
    //         "bubble": {
    //           "distance": 400,
    //           "size": 40,
    //           "duration": 2,
    //           "opacity": 8,
    //           "speed": 3
    //         },
    //         "repulse": {
    //           "distance": 50,
    //           "duration": 1
    //         },
    //         "push": {
    //           "particles_nb": 4
    //         },
    //         "remove": {
    //           "particles_nb": 2
    //         }
    //       }
    //     },
    //     "retina_detect": true
    // });
    // particlesJS("particles-js2", {
    // "particles": {
    //     "number": {
    //     "value": 5,
    //     "density": {
    //         "enable": true,
    //         "value_area": 1
    //     }
    //     },
    //     "color": {
    //     "value": "#ffffff"
    //     },
    //     "shape": {
    //     "type": "image",
    //     "stroke": {
    //         "width": 0,
    //         "color": "#000000"
    //     },
    //     "polygon": {
    //         "nb_sides": 5
    //     },
    //     "image": {
    //         "src": "https://i.ibb.co/qWJRdpj/w.png",
    //         "width": 5000,
    //         "height": 5000
    //     }
    //     },
    //     "opacity": {
    //     "value": 0.5,
    //     "random": false,
    //     "anim": {
    //         "enable": false,
    //         "speed": 1,
    //         "opacity_min": 0.1,
    //         "sync": false
    //     }
    //     },
    //     "size": {
    //     "value": 3,
    //     "random": true,
    //     "anim": {
    //         "enable": false,
    //         "speed": 40,
    //         "size_min": 0.1,
    //         "sync": false
    //     }
    //     },
    //     "line_linked": {
    //     "enable": false
    //     },
    //     "move": {
    //     "enable": true,
    //     "speed": 1.5,
    //     "direction": "none",
    //     "random": false,
    //     "straight": false,
    //     "out_mode": "out",
    //     "bounce": false,
    //     "attract": {
    //         "enable": false,
    //         "rotateX": 600,
    //         "rotateY": 1200
    //     }
    //     }
    // },
    // "interactivity": {
    //     "detect_on": "canvas",
    //     "events": {
    //     "onhover": {
    //         "enable": true,
    //         "mode": "repulse"
    //     },
    //     "onclick": {
    //         "enable": true,
    //         "mode": "push"
    //     },
    //     "resize": true
    //     },
    //     "modes": {
    //     "grab": {
    //         "distance": 140,
    //         "line_linked": {
    //         "opacity": 1
    //         }
    //     },
    //     "bubble": {
    //         "distance": 400,
    //         "size": 40,
    //         "duration": 2,
    //         "opacity": 8,
    //         "speed": 3
    //     },
    //     "repulse": {
    //         "distance": 20,
    //         "duration": 0.4
    //     },
    //     "push": {
    //         "particles_nb": 4
    //     },
    //     "remove": {
    //         "particles_nb": 2
    //     }
    //     }
    // },
    // "retina_detect": true
    // });
    //

    // magnetic button
    var hoverMouse = function($el) {
      $el.each(function() {
          var $self           = $(this);
          var hover           = false;
          var offsetHoverMax  = $self.attr("offset-hover-max") || 1;
          var offsetHoverMin  = $self.attr("offset-hover-min") || 0.75;

          var attachEventsListener = function() {
              $(window).on("mousemove", function(e) {
                  var hoverArea = hover ? offsetHoverMax : offsetHoverMin;

                  var cursor    = {
                      x: e.clientX,
                      y: e.clientY + $(window).scrollTop()
                  };

                  var width     = $self.outerWidth();
                  var height    = $self.outerHeight();

                  var offset    = $self.offset();
                  var elPos     = {
                      x: offset.left + width / 2,
                      y: offset.top + height / 2
                  };

                  var x         = cursor.x - elPos.x;
                  var y         = cursor.y - elPos.y;

                  var dist      = Math.sqrt(x * x + y * y);

                  var mutHover  = false;

                  if (dist < width * hoverArea) {
                      mutHover = true;
                      if (!hover) {
                          hover = true;
                      }
                      onHover(x, y);
                  }

                  if (!mutHover && hover) {
                      onLeave();
                      hover = false;
                  }
              });
          };

          var onHover = function(x, y) {
              TweenMax.to($self, 0.4, {
                  x: x * 0.8,
                  y: y * 0.8,
                  rotation: x * 0.05,
                  scale: 1.2,
                  ease: Power1.easeOut
              });
            $self.css({'background-color': '#DE466D'});
              TweenMax.to($('.whoweare__inner--our_projects h3'), 0.4, {
                color: "#fff",
                ease: Power2.easeOut
            });
          };
          var onLeave = function() {
              TweenMax.to($self, 0.7, {
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotation: 0,
                  ease: Power2.easeOut
              });
              $self.css({'background-color': 'transparent'});
              TweenMax.to($('.whoweare__inner--our_projects h3'), 0.4, {
                color: "#DE466D",
                ease: Power2.easeOut
            });
          };
          attachEventsListener();
      });
  };

hoverMouse($(".whoweare__inner--our_projects"));













})