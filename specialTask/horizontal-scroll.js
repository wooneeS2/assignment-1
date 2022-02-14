//가로 스크롤
function horizontalScroll() {
  let controller = new ScrollMagic.Controller();
  let wipeAnimation = new TimelineMax()
    .to("#slideContainer", 1, { x: "-25%" })
    .to("#slideContainer", 1, { x: "-50%" })
    .to("#slideContainer", 1, { x: "-75%" });

  let scene = new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "600%",
  })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addTo(controller);
}

horizontalScroll();
