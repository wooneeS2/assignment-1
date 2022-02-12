(function () {
  var controller = new ScrollMagic.Controller();
  var wipeAnimation = new TimelineMax()
    // animate to second
    // .to("#slideContainer", 1, { z: -180 })
    .to("#slideContainer", 1, { x: "-25%" })
    .to("#slideContainer", 1, { z: 0 })
    // animate to third
    // .to("#slideContainer", 1, { z: -180, delay: 0.6 })
    .to("#slideContainer", 1, { x: "-50%" })
    .to("#slideContainer", 1, { z: 0 })
    // animate to forth
    // .to("#slideContainer", 1, { z: -180, delay: 0.6 })
    .to("#slideContainer", 1, { x: "-75%" })
    .to("#slideContainer", 1, { z: 0 });

  var scene = new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "600%", //이 값이 클 수록 천천히 덮어씀
  })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addIndicators()
    .addTo(controller);
})();
