$(function(){
    $('.hamburger').click(function(){
        $('.popup').stop().fadeToggle()
    })

    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
})
