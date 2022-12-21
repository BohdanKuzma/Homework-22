let r, g, b;

$(document).ready(function () {
    $('.ball').click(function () {
        r = Math.round(Math.random() * 255)
        g = Math.round(Math.random() * 255)
        b = Math.round(Math.random() * 255)
        $('.ball').animate({
            width: Math.round(Math.random() * 200),
            height: Math.round(Math.random() * 200),
            top: Math.round(Math.random() * (window.innerHeight - $('.ball').innerHeight())),
            left: Math.round(Math.random() * (window.innerWidth - $('.ball').innerWidth())),
        }, 2000, 'easeOutBounce')

        $('.ball').css({
            backgroundColor: `rgb(${r},${g},${b})`,

        })
    })



})