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
    //


    // mobile menu trigger
    $('.hamburger').click(function() {
      $(this).toggleClass('is-active');
      $('.mobile__menu--overlay').fadeToggle(500);
      $('body').toggleClass('fixed');
    })
    //

    $(document).mousemove(function(e) {
      console.log(e.clientX, e.clientY)
    })

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
        $('.whoweare__inner--arrow img').attr("src","img/arrow.svg");
      } else {
        $('.whoweare__inner--arrow img').attr("src","img/arrow-min.svg");          
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
          console.log($(this).attr('href'))
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
    particlesJS("particles-js1", {
        "particles": {
          "number": {
            "value": 8000,
            "density": {
              "enable": true,
              "value_area": 200
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "image",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "https://i.ibb.co/H78LBWP/e.png",
              "width": 5000,
              "height": 5000
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 70,
              "duration": 1
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
    });
    particlesJS("particles-js2", {
    "particles": {
        "number": {
        "value": 1000,
        "density": {
            "enable": true,
            "value_area": 200
        }
        },
        "color": {
        "value": "#ffffff"
        },
        "shape": {
        "type": "image",
        "stroke": {
            "width": 0,
            "color": "#000000"
        },
        "polygon": {
            "nb_sides": 5
        },
        "image": {
            "src": "https://i.ibb.co/qWJRdpj/w.png",
            "width": 5000,
            "height": 5000
        }
        },
        "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
        }
        },
        "size": {
        "value": 3,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
        }
        },
        "line_linked": {
        "enable": false
        },
        "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
        }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        },
        "onclick": {
            "enable": true,
            "mode": "push"
        },
        "resize": true
        },
        "modes": {
        "grab": {
            "distance": 140,
            "line_linked": {
            "opacity": 1
            }
        },
        "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
        },
        "repulse": {
            "distance": 20,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
        }
    },
    "retina_detect": true
    });
    //
      
})