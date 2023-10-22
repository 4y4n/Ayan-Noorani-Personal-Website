const slides_css = ["aHRtbCB7CglvdmVyZmxvdzogaGlkZGVuOwp9CgppbWcgewoJaGVpZ2h0OiAxMDAlOwoJcG9zaXRpb246IGFic29sdXRlOwoJdHJhbnNpdGlvbjogNTAwbXMgdHJhbnNmb3JtOwp9CgojaW1nMSwgI2ltZzIsICNpbWczIHsKCW9wYWNpdHk6IDA7Cgl0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwJSk7Cn0=", "I2ltZzAgewoJdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTsKfQoKI2ltZzEgewoJb3BhY2l0eTogMTsKCXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsKfQ==", "I2ltZzEgewoJdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTsKfQoKI2ltZzIgewoJb3BhY2l0eTogMTsKCXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsKfQ==", "I2ltZzAgewoJb3BhY2l0eTogMDsKCXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTAlKTsKfQoKI2ltZzIgewoJdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTsKfQoKI2ltZzMgewoJb3BhY2l0eTogMTsKCXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsKfQ==", "I2ltZzAgewoJb3BhY2l0eTogMTsKCXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7Cn0KCiNpbWcxLCAjaW1nMiwgI2ltZzMgewoJb3BhY2l0eTogMDsKCXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7Cn0KCiNpbWczIHsKCW9wYWNpdHk6IDE7Cn0="];
    const styles = document.getElementById("styles");

    var slide_num = 0;
    styles.innerHTML = atob(slides_css[slide_num]);

    setInterval(() => {
        advanceSlide();
    }, 3000);

    function advanceSlide() {
        slide_num++;

        if (slide_num >= slides_css.length) {
            styles.innerHTML = "";
            slide_num = 0
        }

        styles.innerHTML += atob(slides_css[slide_num]);
    }