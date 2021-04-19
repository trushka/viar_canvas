$(document).ready(function() {

  $(".whoweare__inner--our_projects").focusin(function() {
    $(this).css('background', '#DE466D');
    $(this).find('h3').css('color', '#fff');
  })
  $(".whoweare__inner--our_projects").focusout(function() {
    $(this).css('background', '#fff');
    $(this).find('h3').css('color', '#DE466D');
  })
  $(".portfolio--round").focusin(function() {
    $(this).parent().parent().parent().find('.picture--wrapper').find('.project--image').css(
      {
        'transform': 'scale(1.05)', 
        'box-shadow': '0px 10px 25px 5px rgba(255, 255, 255, 0.22)'
      });
  })
  $(".portfolio--round").focusout(function() {
    $(this).parent().parent().parent().find('.picture--wrapper').find('.project--image').css(
      {
        'transform': 'scale(1)', 
        'box-shadow': 'none'
      });
  })
  
  
  
  
  
  
  var section = document.querySelector(".section-wrapper__inner");
  var bg = section.querySelector(".parallax"); 
  bg.style.backgroundPosition = "100% 100%"; 
  
  gsap.to(bg, {
    backgroundPosition: `100% ${innerHeight / 35}%`,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top", 
      end: "bottom top",
      scrub: true
    }
  });
  
  
  
  
  function animateFrom(elem, direction, delay, duration) {
    direction = direction | 1;
    delay = delay | 0.4;
    duration = duration | 1.25;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if(elem.classList.contains("reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: duration, 
      delay: delay,
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  gsap.registerPlugin(ScrollTrigger);
  
  var reveals = gsap.utils.toArray(".reveal");
  gsap.set(reveals, {willChange: "transform, opacity"});
  for(var i = 0; i < reveals.length; i++) {
    (function () {
      var elem = reveals[i];
      hide(elem);
      var delay = reveals[i].getAttribute("data-delay");
      var duration = reveals[i].getAttribute("data-duration");
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem, 1, delay, duration) }, 
        onEnterBack: function() { animateFrom(elem, -1, delay, duration) },
        onLeave: function() { hide(elem) }
      });
    })();
  }
  
  gsap.to('.main__screen--span > i', {
    delay: 0,
    duration: .5,
    stagger: 0.2,
    ease: "circ.out",
    opacity: 1,
    y: 0
  })  
  var team = document.querySelector('.main__content--wrapper__team');
  gsap.set("html", {willChange: "--primary, --secondary"});
  gsap.to("html", {
    scrollTrigger: {
      trigger: team,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    },
  }
    );
  ScrollTrigger.create({
    trigger: team,
    start: 'top top+=150',
    end: () => `+=${team.clientHeight - 550}`,
    toggleActions: 'play reverse none reverse',
    toggleClass: {targets: "html", className: "toggled"},
  })
      
  $('.portfolio--button').hover(function() {
    $(this).parent().next().find('.project--image').css(
      {
        'transform': 'scale(1.05)', 
        'box-shadow': '0px 10px 25px 5px rgba(255, 255, 255, 0.22)'
      });
    $(this).parent().next().find('.project--logo').css(
      {
        'transform': 'scale(1.05)'
      });
  }, function() {
    $(this).parent().next().find('.project--image').css(
      {
        'transform': 'scale(1)', 
        'box-shadow': 'none'
      });
    $(this).parent().next().find('.project--logo').css(
      {
        'transform': 'scale(1)'
      });
  })
  var opac = document.querySelectorAll('.opac');
  for (var i = 0; i < opac.length; i++) {
    var _opac = opac[i];
    var targ = $(_opac).parent();
    gsap.fromTo(_opac, {opacity: 0}, {
      opacity: 1,
      stagger: 0.7,
      duration: 1.5,
      delay: .25,
      scrollTrigger: {
        trigger: targ,
        start: 'top center+=200'
      }
    })        
  }

   

    //
    window.addEventListener('resize', sizerQueries);
    sizerQueries();
    function sizerQueries() {
      if (window.matchMedia('(min-width: 970px)').matches) {
        $('.mobile__menu--overlay').css({'display': 'none'});
        $('.hamburger').removeClass('is-active');
        $('body').removeClass('fixed');
        
      }
      if (window.matchMedia('(min-width: 768px) and (min-height: 600px)').matches) {
        
        // const cursor = document.querySelector('.cursor');

        // document.addEventListener('mousemove', e => {
        //     cursor.setAttribute("style", "top: "+(e.clientY - 9)+"px; left: "+(e.clientX - 9)+"px;")
        // })
        // $('.main__portfolio--project, .whoweare__inner--our_projects').hover(function() {
        //   $(cursor).addClass('white-cursor');
        // }, function() {
        //   $(cursor).removeClass('white-cursor');
        // })
        // $('a, button, input, .main__portfolio--navigation').hover(function() {
        //   $(cursor).addClass('hovered');
        // }, 
        // function() {
        //   $(cursor).removeClass('hovered');
        // })
      
        // document.addEventListener('click', () => {
        //     cursor.classList.add("expand");
      
        //     setTimeout(() => {
        //         cursor.classList.remove("expand");
        //     }, 500)
        // })
      }
        if (window.matchMedia('(min-width: 768px)').matches) {
        // $('a, button, input, textarea, .main__portfolio--navigation, .main__portfolio--project, .whoweare__inner--our_projects').hover(function() {
        //   $('body').css({'cursor': "pointer"});
        // }, 
        // function() {
        //   $('body').css({'cursor': "url('../img/cursor.png'), auto"});
        // })




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
    if (window.matchMedia('(max-width: 768px)').matches) {
      gsap.fromTo('.main__screen--logan', {x: 0, y: 100, autoAlpha: 0}, {
        duration: 2.75, 
        delay: 1.8,
        x: 0,
        y: 0, 
        autoAlpha: 1, 
        ease: "expo", 
        overwrite: "auto"
      });
  } else {
    gsap.fromTo('.main__screen--logan', {x: 0, y: 100, autoAlpha: 0}, {
      duration: 1.25, 
      delay: 0.8,
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }

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
          if ($(this).attr('href') == '#section_home') {
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

    // form validation
      $(".contacts__inner--form").validate({
        errorPlacement: function() {

        },
        rules:{
          name:{
            required: true,
            minlength: 2,
            maxlength: 16,
          },
          surname:{
            required: true,
            minlength: 2,
            maxlength: 16,
          },
          email:{
            required: true,
            minlength: 2,
            email: true
            },
          phone:{
            required: false,
            minlength: 8,
            digits: true
            },
          message: {
            required: true,
            minlength: 2
          }
        }
    });

    $(".contacts__inner--form").submit(function(e) {
      e.preventDefault();
      if ($(".contacts__inner--form").valid()) {
        if (window.matchMedia('(min-width: 1080px)').matches) {
            $('.form__submit').css({'display': 'none'});
            $('.success--form').css("display", "flex").hide().fadeIn();         
        } else {
          $('.popup__overlay').toggleClass('hidden');
          $('.popup__overlay .success--form').css("display", "flex").hide().fadeIn();    
        }

        $.ajax({
          type: $(this).attr('method'),
          url: $(this).attr('action'),
          data: new FormData(this),
          contentType: false,
          cache: false,
          processData: false,
          success: function(result) {
            console.log(result);
          }
        }).done(function(){
          $('.contacts__inner--form').trigger('reset');
        })
      } else {
        if (window.matchMedia('(min-width: 1080px)').matches) {
          $('.form__submit').css({'display': 'none'});
          $('.error--form').css("display", "flex").hide().fadeIn();
        } else {
          $('.popup__overlay').toggleClass('hidden');
          $('.popup__overlay .error--form').css("display", "flex").hide().fadeIn();    
        }
      }
    })
    $('.cross').click(()=> {
      if (window.matchMedia('(min-width: 1080px)').matches) {
        $('.form--windows').css({'display': 'none'});
        $('.form__submit').fadeIn(); 
      } else {
        $('.popup__overlay').addClass('hidden');
        $('.form--windows').css({'display': 'none'});
      }


    })
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
















///////////////////

})


