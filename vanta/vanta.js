
function vanta(colour, backgroundColour) {
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
    points: 15.00,
    maxDistance: 23.00,
    spacing: 14.00,
    showDots: false
  })
}

vanta(0xEF476F, 0x198F9F)