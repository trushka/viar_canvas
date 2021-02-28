$(document).ready(function() {
    // animated link animation on header
    $('.animated__link')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
            console.log(relX, relY);
            if (relY >= 90) {
                $('.animated__link span').css({'background':'linear-gradient(180deg, rgba(222,70,109,1) 33%, rgba(36,74,252,1) 56%)'})
            } else if (relY < 90 && relY > 10 && relX > 0) {
                $('.animated__link span').css({'background':'linear-gradient(rgb(222, 70, 109) 47%, rgb(36, 74, 252) 66%)'})
            } else {
                $('.animated__link span').css({'background':'linear-gradient(rgb(222, 70, 109) 57%, rgb(36, 74, 252) 76%)'})
            }
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
    $('.animated__link').hover(function() {
        $(this).delay(100).css({'border': '2px solid transparent', 'border-top': 'none'})
    },
    function() {
        $(this).delay(500).css({'border': '2px solid #DE466D', 'border-top': 'none'})
    })

    // $('.chevron').hover(
    //     function() {
    //         $(".chevron img").attr("src","img/chevron-hover.svg");
    // },
    //     function() {
    //         $(".chevron img").attr("src","img/chevron.svg");
    // })

    
    




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
      
})