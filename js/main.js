$(document).ready(function() {
    console.log("Js is loaded successfully");

    $('.add').click(function () {
        $('li').addClass('remove-dot');
    });

    $('.remove').click(function () {
        $('li').removeClass('remove-dot');
    });
    
    $('.toggle').click(function () {
        // $('li').toggleClass('remove-dot');
        var isActive = $('li').attr('class');
        console.log(isActive);
        if (isActive.includes('remove-dot')) {
            $('li').removeClass('remove-dot');
            $('li').css('font-size', '15px');
        } else {
            $('li').addClass('remove-dot')
                   .css({
                    'font-size': '20px',
                    'color': 'blue'
                   });
        }
    });
});