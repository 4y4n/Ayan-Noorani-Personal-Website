
// let carousel = document.getElementsByClassName("slides");
// carousel[0].style.display = "block"
// for (let i=1; i<carousel.length; i++) {
//     carousel[i].style.display = "none";
// }

let slidesIndex = 0;
// slide();

function slide() {
    let current = document.getElementsByClassName("slides");
    for (let j=0; j<current.length; j++) {
        current[j].style.display = "none";
    }
    slidesIndex++;
    if (slidesIndex > current.length) {
        slidesIndex = 1;
    }
    current[slidesIndex-1].style.display = "block";
    setTimeout(out, 2000)
    setTimeout(inin, 3090)
    setTimeout(slide, 4000)

}

function out() {
    let something = document.getElementsByClassName("slides");
    something[slidesIndex-1].className = "slides fade fade-out";
}

function inin() {
    let something = document.getElementsByClassName("slides");
    // something[slidesIndex-1].className = "slides fade";
}

function trans() {
    console.log("wefopn")
    document.getElementsByClassName("image")[0].style.transform += "translateX(-800px)";
}

setInterval(trans, 3000);


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
    