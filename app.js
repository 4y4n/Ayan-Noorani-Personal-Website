vanta()
let flag = true;

document.getElementById("change").addEventListener("click", function(){
    const r = document.querySelector(':root');
    const c = document.getElementById('change');
    if (flag) {
        
        vanta(0xB7990D, 0x3b1c32, 22, 17)
        r.style.setProperty('--color-secondary', 'rgb(183, 153, 13)');
        r.style.setProperty('--color-secondary-fade', '215, 184, 18');
        c.style.setProperty('background-color', 'rgb(28, 159, 176)')
    } else {
        vanta();
        r.style.setProperty('--color-secondary', 'rgb(239, 71, 111)');
        r.style.setProperty('--color-secondary-fade', '255, 16, 69');
        c.style.setProperty('background-color', 'rgb(59, 28, 50)')
    }
    flag = !flag;
});


// lerp = function(a,b,u) {
//     return (1-u) * a + u * b;
// };
  
// fade = function(element, property, start, end, duration, rgb=true) {
//   var interval = 10;
//   var steps = duration/interval;
//   var step_u = 1.0/steps;
//   var u = 0.0;
//   var theInterval = setInterval(function(){
//     if (u >= 1.0){ clearInterval(theInterval) }
//     var r = parseInt(lerp(start.r, end.r, u));
//     var g = parseInt(lerp(start.g, end.g, u));
//     var b = parseInt(lerp(start.b, end.b, u));
//     if (rgb){
//         var colorname = 'rgb('+r+','+g+','+b+')';
//     } else {
//         var colorname = r+','+g+','+b
//     }
//     element.style.setProperty(property, colorname);
//     u += step_u;
//   }, interval);
// };

// let flag = true;
// body = document.getElementsByTagName('body')[0]; 
// change = document.getElementById('change');
// root = document.querySelector(':root')

// property0 = 'background-color';       
// startbg = {r: 28, g:159, b:176};  
// endbg   = {r: 59, g: 28, b: 50}; 

// property1 = '--color-secondary';
// startcs = {r:239, g: 71, b:111}
// endcs = {r:183, g:153, b: 13};

// property2 = '--color-secondary-fade';
// startcsf = {r:255, g: 16, b: 69};
// endcsf = {r:215, g:184, b: 18};

// document.getElementById("change").onclick = function(){
//   if (flag){
//     fade(body, property0, startbg, endbg, 1000);
//     fade(change, property0, endbg, startbg, 1000);
//     fade(root, property1, startcs, endcs, 1000);
//     fade(root, property2, startcsf, endcsf, 1000, false);
//   }
//   else {
//     fade(body, property0, endbg, startbg, 1000);
//     fade(change, property0, startbg, endbg, 1000);
//     fade(root, property1, endcs, startcs, 1000);
//     fade(root, property2, endcsf, startcsf, 1000, false);
//   }
//   flag = !flag;
// }









const rows = document.querySelectorAll('.project-container');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top - 250 <= (window.innerHeight || document.documentElement.clientHeight) || 
    rect.bottom + 250 <= (window.innerHeight || document.documentElement.clientHeight);
}

function handleScroll() {
    rows.forEach((row) => {
        if (isElementInViewport(row)) {
            setTimeout(function() {
                 row.style.opacity = '1';
                row.style.transform = 'translateY(0%)';
            }, 150)
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
