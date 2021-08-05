//TODO: Move the image.png (id = img) when scrolling.

window.addEventListener('scroll', throttle(parallax, 14));

function throttle(fn, wait) {
    var time = Date.now();
    return function() {
    if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
        }
    }
};

function parallax() {
    var scrolled = window.pageYOffset;
    // You can adjust the 0.4 to change the speed
    /*
    var parallax1 = document.getElementById("img1");
    var coords = (scrolled) + 'px'
    if (parallax1.style.transform.y > 20 == false);
        parallax1.style.transform = 'translateY(' + coords + ')';
    */

    //TODO: Use css as solution to keep top most parallax image on the top of the page until hitting next img

    var parallax2 = document.getElementById("img2");
    var coords = (scrolled * 0.5) + 'px'
    parallax2.style.transform = 'translateY(' + coords + ')';

    var parallax3 = document.getElementById("img3");
    var coords = (scrolled * 0.25) + 'px'
    parallax3.style.transform = 'translateY(' + coords + ')';
/*
    var parallax4 = document.getElementById("img4");
    var coords = (scrolled * 0.15) + 'px'
    parallax4.style.transform = 'translateY(' + coords + ')';
    */
};