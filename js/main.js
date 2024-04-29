// For our browser to work after it is fully downloaded
$(document).ready(function () {
    console.log("Js is loaded successfully");


    // When the button with hide-me id is clicked, the h2 with hide-show-toggle class disappears.
    $('#hide-me').click(function () {
        $('.hide-show-toggle').hide(1000);
    });
    
    // When a button with show-me id is clicked, an h2 with hide-show-toggle class is visible.
    $('#show-me').click(function () {
        $('.hide-show-toggle').show('slow');
    });
    
    // When the button with show-me id is clicked, the h2 with hide-show-toggle class will disappear and show.
    $('#toggle-me').click(function () {
        $('.hide-show-toggle').toggle('fast');
    });

    //We can also attribute the fade time or speed to hide(), show(), toggle() below.
    // For example: 'slow', 'fast' or 1000, 2000, 3000, ... .



    // jQuery fade
    // fadeIn - slow emergence of elements;
    // fadeOut - slow loss of elements;
    // fadeToggle - the slow appearance and disappearance of elements;
    // fadeTo - is scaled by the given view and is used with the opacity parameter.

    // Practice

    $('#fade-hide-me').click(function () {
        $('.fade-hide-show-toggle').fadeOut();
    });
    
    $('#fade-show-me').click(function () {
        $('.fade-hide-show-toggle').fadeIn();
    });
    
    $('#fade-toggle-me').click(function () {
        $('.fade-hide-show-toggle').fadeToggle();
    });

    $('#fade-to-me').click(function () {
        $('.fade-hide-show-toggle').fadeTo(1000, 0.4);
    });


    // jQuery Slide
    // slideDown - push the elements downs;
    // slideUp - push the elements up;
    // slideToggle - push elements down or up;

    // Practice

    $('#slide-down-me').click(function () {
        $('.slide-down-up-toggle').slideDown();
    });

    $('#slide-up-me').click(function () {
        $('.slide-down-up-toggle').slideUp();
    });

    $('#slide-toggle-me').click(function () {
        $('.slide-down-up-toggle').slideToggle();
    });



    // jQuery Animate
    // animate() - used for special animation effects. css methods must be written in camelCase. For example "fontSize" can be specified as "show", "hide" or "toggle".

    // Practice

    $('#animate').click(function () {
        $('.anim').animate({
            fontSize: '30px',
            opacity: 0.5,
            left: '250px',
            height: '150px',
            width: '100%',
        }, 5000);
    });
    $('.anim').click(function () {
        $(this).stop(); // stop animation
    });
});