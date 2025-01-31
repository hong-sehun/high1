$(function () {
    $('header .hamburger').click(function () {
        $('.popup').stop().fadeToggle()
    })

    $('#fullpage').fullpage({
        keyboardScrolling: true,
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['HIGH1 RESORT', 'WINTER OF HIGH1', 'HIGH1 GALLERY', 'AWARDS', 'INFORMATION', 'MORE'],
        responsiveWidth: 360,
    })

    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
})