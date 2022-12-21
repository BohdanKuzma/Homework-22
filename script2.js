$(document).ready(function () {
    setInterval(() => {
        let r = Math.round(Math.random() * 255)
        let g = Math.round(Math.random() * 255)
        let b = Math.round(Math.random() * 255)

        let br = Math.round(Math.random() * 255)
        let bg = Math.round(Math.random() * 255)
        let bb = Math.round(Math.random() * 255)

        let istop = Math.round(Math.random() * (window.innerHeight - $('.disco_ball').innerHeight()))
        let isleft = Math.round(Math.random() * (window.innerWidth - $('.disco_ball').innerWidth()))

        $('.disco_ball').animate({
            top: istop,
            left: isleft,
            backgroundColor: `rgb(${r},${g},${b})`,
            borderColor: `rgb(${br},${bg},${bb})`

        }, 800, 'easeInOutQuart')

        $('.disco_ball').css('box-shadow', `4px 4px 50px 5px rgb(${r},${g},${b})`)
    })


})