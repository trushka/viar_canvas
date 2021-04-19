$(document).ready(function() {


    gsap.fromTo('.reveal__leftMain', {x: -100, y: 0, autoAlpha: 0}, {
        duration: 1.75, 
        delay: 0.5,
        x: 0,
        y: 0, 
        autoAlpha: 1, 
        stagger: .1,
        ease: "expo", 
        overwrite: "auto"
      });
      if (window.matchMedia('(max-width: 768px)').matches) {
        gsap.fromTo('.reveal__bottom', {x: 0, y: 100, autoAlpha: 0}, {
            duration: 1.75, 
            delay: 0.5,
            x: 0,
            y: 0, 
            autoAlpha: 1, 
            stagger: .1,
            ease: "expo", 
            overwrite: "auto"
          });
      } else {
        gsap.fromTo('.reveal__bottom', {x: 0, y: 100, autoAlpha: 0}, {
            duration: 1.75, 
            delay: 0.5,
            x: 0,
            y: 0, 
            autoAlpha: 1, 
            stagger: .1,
            ease: "expo", 
            overwrite: "auto",
            scrollTrigger: {
                target: '.main__project--description',
                start: 'top top'
            }
        });          
      }

        
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
        onEnter: function() { animateFrom(elem, 1, delay, duration) }
      });
    })();
  }
})