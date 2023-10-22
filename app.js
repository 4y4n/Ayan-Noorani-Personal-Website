let flag = false

document.getElementsByTagName("button")[0].onclick = function(){
    if (flag) {
        vanta(0xFFCF9C, 0x3B1C32)
    } else {
        vanta(0xEF476F, 0x198F9F)
    }
    flag = !flag;
};
