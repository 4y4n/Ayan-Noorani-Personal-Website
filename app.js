// let flag = false

// document.getElementsByTagName("button")[0].onclick = function(){
//     if (flag) {
//         vanta(0xFFCF9C, 0x3B1C32)
//     } else {
//         vanta(0xEF476F, 0x1C9FB0)
//     }
//     flag = !flag;
// };




const rows = document.querySelectorAll('.project-container');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top - 250 <= (window.innerHeight || document.documentElement.clientHeight)) || 
    (rect.bottom >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
}

function handleScroll() {
    rows.forEach((row) => {
        if (isElementInViewport(row)) {
            row.style.opacity = '1';
            row.style.transform = 'translateY(0%)';
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
