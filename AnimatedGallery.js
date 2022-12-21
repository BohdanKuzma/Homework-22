$(document).ready(function () {
    $('.box').each(function (ind, elem) {
        let modal = $('.modal');
        let check;
        $(elem).click(function () {
            if (ind == 0) {
                check = 1;
            } else if (ind == 1) {
                check = 2;
            } else if (ind == 2) {
                check = 3;
            } else if (ind == 3) {
                check = 4;
            } else if (ind == 4) {
                check = 5;
            }
            // console.log(ind, elem);
            console.log(check);

            $('.background').css({
                zIndex: 3,
                background: `rgba(0, 0, 0, 0.678)`
            })
            $(elem).css({
                opacity: 0
            })
            modal.css({
                display: 'block',
                top: $(elem).css('top'),
                left: $(elem).css('left'),
                width: '220',
                height: '220'
            })
            modal.animate({
                top: '50%',
                left: '33%',
                width: '400',
                height: '400',
                backgroundColor: $(elem).css('background-color')
            }, 500)
        })
        modal.click(function () {
            if (check == 1) {
                modal.animate({
                    // display: 'none',
                    top: '10',
                    left: '10',
                    width: '220',
                    height: '220'
                }, function () {
                    $(elem).css({
                        opacity: 1
                    })
                    modal.css({
                        display: 'none'
                    })
                    $('.background').css({
                        zIndex: -1,
                        background: `rgba(255, 255, 255, 0.678)`
                    })
                })
                check = 0;
            } else if (check == 2) {
                modal.animate({
                    // display: 'none',
                    top: '10',
                    left: '240',
                    width: '220',
                    height: '220'
                }, function () {
                    $(elem).css({
                        opacity: 1
                    })
                    modal.css({
                        display: 'none'
                    })
                    $('.background').css({
                        zIndex: -1,
                        background: `rgba(255, 255, 255, 0.678)`
                    })
                })
                check = 0;
            } else if (check == 3) {
                modal.animate({
                    // display: 'none',
                    top: '10',
                    left: '470',
                    width: '220',
                    height: '220'
                }, function () {
                    $(elem).css({
                        opacity: 1
                    })
                    modal.css({
                        display: 'none'
                    })
                    $('.background').css({
                        zIndex: -1,
                        background: `rgba(255, 255, 255, 0.678)`
                    })
                })
                check = 0;
            } else if (check == 4) {
                modal.animate({
                    // display: 'none',
                    top: '10',
                    left: '700',
                    width: '220',
                    height: '220'
                }, function () {
                    $(elem).css({
                        opacity: 1
                    })
                    modal.css({
                        display: 'none'
                    })
                    $('.background').css({
                        zIndex: -1,
                        background: `rgba(255, 255, 255, 0.678)`
                    })
                })
                check = 0;
            } else if (check == 5) {
                modal.animate({
                    // display: 'none',
                    top: '10',
                    left: '930',
                    width: '220',
                    height: '220'
                }, function () {
                    $(elem).css({
                        opacity: 1
                    })
                    modal.css({
                        display: 'none'
                    })
                    $('.background').css({
                        zIndex: -1,
                        background: `rgba(255, 255, 255, 0.678)`
                    })
                })
                check = 0;
            }


            
            console.log(check);
        })


    })
})