$(document).ready(function(){
    $('.hidden-text').hide()
    $('.menu-icon').on('click', function() {
        $(this).toggleClass("active")
        $('ul').toggleClass("active")
        $('.hovers').css('transform', 'scale(0.8) translateY(100%)')
        
    })
    $('.hovers').on('click', function(){
        $(this).hide()
        $('.hidden-text').show()
    })
})