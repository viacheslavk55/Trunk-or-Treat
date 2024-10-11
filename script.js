$(document).ready(function(){
    $('.hidden-text').hide()
    $('.menu-icon').on('click', function() {
        $(this).toggleClass("active")
        $('ul').toggleClass("active")
    })
    $('.hovers').on('click', function(){
        $('.outer').hide()
        $('.hidden-text').show()
    })
})