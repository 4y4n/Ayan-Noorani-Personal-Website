function vanta(colour=0xEF476F, backgroundColour=0x1C9FB0,maxDistance=24, points=16) {
  VANTA.NET({
    el: "body",
    mouseControls: false,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: colour,
    backgroundColor: backgroundColour,
    points: points,
    maxDistance: maxDistance,
    spacing: 13.00,
    showDots: false
  })
}
