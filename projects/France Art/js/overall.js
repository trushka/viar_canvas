$(document).ready(function() {
     // preloader
     setTimeout(function() {
        $('.preloader').fadeOut(200);
      }, 100)
      //
      $('.animation__target--logo').css({'display': 'none'});
      setTimeout(function() {
        $('.animation__target--logo').css({'display': 'block'});
      }, 100)
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
      $('.form__submit')
      .on('focusein', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('focusout', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
      $('.portfolio--round')
      .on('focusein', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('focusout', function(e) {
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
      $('.mobile__menu ul li, .mobile--contact').click(function() {
        $('.hamburger').toggleClass('is-active');      
        $('.mobile__menu--overlay').fadeToggle(500);
        $('body').toggleClass('fixed');
      })
      //

      var hoverMouse1 = function($el) {
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
                        onHover1(x, y);
                    }
    
                    if (!mutHover && hover) {
                        onLeave1();
                        hover = false;
                    }
                });
                
            };
    
            var onHover1 = function(x, y) {
                TweenMax.to($self, 0.4, {
                    x: x * 0.8,
                    y: y * 0.8,
                    rotation: x * 0.05,
                    scale: 1.2,
                    ease: Power1.easeOut
                });
              $self.css({'background-color': '#fff'});
                TweenMax.to($('.main__nopage--round h3'), 0.4, {
                  color: "#DE466D",
                  ease: Power2.easeOut
              });
            };
            var onLeave1 = function() {
                TweenMax.to($self, 0.7, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotation: 0,
                    ease: Power2.easeOut
                });
                $self.css({'background-color': 'transparent'});
                $self.css({'transform': 'translate(-50%)'});
                TweenMax.to($('.main__nopage--round h3'), 0.4, {
                  color: "#fff",
                  ease: Power2.easeOut
              });
            };
            attachEventsListener();
        });
    };
    
    hoverMouse1($(".main__nopage--round"));


    if (window.matchMedia('(min-width: 768px) and (min-height: 600px)').matches) {
      window.addEventListener('touchstart', e => e.preventDefault(), { passive: false });
      $("html").niceScroll({
        scrollspeed: 120,
        cursorcolor:"#DE466D",
        cursorwidth:"7px",
        cursorborder:"none",
        cursorborderradius: '10px',
        mousescrollstep: 10
      });
    }


    //
    // if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    //   $('.footer__logo a, .logo a').html(`
    //     <img src="img/logo.svg" alt="The Art of Web Logo">
    //   `)
    // }
})