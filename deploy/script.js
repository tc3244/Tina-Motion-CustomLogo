
document.addEventListener("DOMContentLoaded", function (event) {
  window.onload = function () {

    window.requestAnimationFrame(function () {


      var svgAnim = gsap.timeline({ paused: true });
      svgAnim
        .to("#fcircle", {
          duration: .7,
          x: -129, roatation: 360,
          transformOrigin: "50% 50%",
          ease: Power4.easeOut
        })
        .set("#hcircle", { autoAlpha: 1 }, .7)
        .to("#fcircle", {
          duration: .01,
          autoAlpha: 0
        }, "<")
        .set("#cirup,#cirdown", { autoAlpha: 1 })
        .to("#cirup", {
          duration: .8, ease: Power2.easeIn,
          attr: { points: "54.6,45.8 120.7,45.8 127.3,34.4 54.6,34.4 54.6,39.6" }
        }, 1.5)
        .to("#cirdown", {
          duration: .8, ease: Power2.easeIn,
          attr: { points: "54.6,109.6 83.9,109.6 90.6,97.9 54.6,97.9 54.6,99.2" }
        }, 1.5)
        .to("#drop", {
          duration: .3,
          y: 78,
        }, "3")
        .set("#innerLine", { autoAlpha: 1 })
        .to("#innerLine", {
          duration: .8, ease: Power2.easeIn,
          attr: { points: "102.2,77.8 56.1,77.8 56.1,68.7 56.1,66.2 108.9,66.2" }
        }, "+=.2")
        .play()


    });

  };

});
