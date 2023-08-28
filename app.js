
// function out() {
//     let something = document.getElementsByClassName("slides");
//     something[slidesIndex-1].className = "slides fade fade-out";
// }

// function inin() {
//     let something = document.getElementsByClassName("slides");
//     // something[slidesIndex-1].className = "slides fade";
// }



// btn.addEventListener("click", function() {
//     console.log("iuew")
//     if (change) {
//         r.style.animation = 'opac';
//         r.style.setProperty('--color-primary', '#D4DDED');
//         change = false;
//     } else {
//         r.style.animation = 'opac';
//         r.style.setProperty('--color-primary', 'red');
//         change = true;
//     }
// })

// const newspaperSpinning = [
//     { opacity: "0" },
//     { opacity: "1" },
// ];

// const newspaperTiming = {
//     duration: 2000,
//     iterations: 1,
// };

// var r = document.querySelector(':root')

// var change = false;
// document.getElementById("switch").addEventListener("click", () => {
//     console.log("ioefw")
//     document.getElementsByClassName("bod")[0].animate(newspaperSpinning, newspaperTiming);
//     if (change) {
//         console.log("change")
//         r.style.setProperty('--color--background', '#D4DDED');
//         change = false;
//     } else {
//         r.style.setProperty('--color-background', 'red');
//         change = true;
//     }
    
// })



// let width = document.getElementById('images-container').offsetWidth;
// let margin;

// function checkWidth () {
//     width = document.getElementById('images-container').offsetWidth;
//     margin = (width - 500)/2;
//     document.getElementsByClassName("slides")[0].style.marginLeft = margin
// }
    
// setInterval(checkWidth, 200);

// function before() {
//     var parent = document.getElementsByClassName("image")[0];
//     var img0 = document.getElementsByClassName("slides")[0];
//     parent.insertBefore(img0, undefined);
//     document.getElementsByClassName("image")[0].style.transform += `translateX(${500+margin}px)`;
// }

// function slide() {
//     let slides = document.getElementsByClassName("slides")
//     for(let i=0; i<4; i++) {
//         slides[i].style.transform += `translateX(-${500+margin}px)`;
//     }
//     setTimeout(before, 500);
// }

// setInterval(slide, 3000);

