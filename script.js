$(document).ready(function(){
    $('.hidden-text').hide()
    $('.hidden-description').hide()
    $('.hidden-details').hide()
    $('.menu-icon').on('click', function() {
        $(this).toggleClass("active")
        $('ul').toggleClass("active")
        $('.hovers').css('transform', 'scale(0.8) translateY(100%)')
        
    })
    $('.hovers').on('click', function(){
        $(this).hide()
        $('.hidden-text').show()
    })
    $('.btn2').on('click', function(){
        $(this).hide()
        $('.hidden-details').show()
    })
    $('.fd').on('click', function(){
        window.open('https://www.fedsonthego.com/', '_blank')
    })
    $('.gd').on('click', function(){
        window.open('https://www.goldysicecream.com/', '_blank')
    })

    $(window).scroll(function() {
        // Get the current scroll position
        var scrollPosition = $(window).scrollTop();
        // Get the position of the target element
        var targetPosition = $('.button2').offset().top;
        
        // Check if the user has scrolled past the target position
        if (scrollPosition >= targetPosition - $(window).height()) {
            // Call your function
            triggerFunction();
        }
    });

    function triggerFunction() {
        $('.hovers').hide()
        $('.hidden-text').show()
    }

    // ^chatGPT code


    // trunks code
    $('.trunks').on('mouseenter', function() {
        $(this).css('cursor', 'pointer')
        $(this).find('.hidden-description').fadeIn(500)
    }).on('mouseleave', function() {
        $(this).find('.hidden-description').fadeOut(500)
    })
    $('.hidden-flyer').hide()
    $('.btnImg').on('click', function() {
        $('.hidden-flyer').slideToggle()
    })
    $('.hidden-schedule').hide()
    $('.btnText').on('click', function() {
        $('.hidden-schedule').slideToggle()
    })
})