$(document).ready(function() {
    console.log("Js is loaded successfully");

    $('button').click(function() {
        var imgUrl = $('input').val();
        // $('img').attr({
        //     src: imgUrl,
        //     alt: "Image loaded",
        //     width: '50%'
        // });
        $('input').val('');

        // $('#ul').append('<img src='+imgUrl+' width="50%" alt="Gallery">');
        $('#ul').prepend('<img src='+imgUrl+' width="50%" alt="Gallery">');
    });

    // Add a jQuery element:
    // append() - add HTML content to the end of the element;
    // prepend() - add HTML content before the element;
    // after() - add HTML content inside the element;
    // before() - add HTML content to the end of the element;
    // remove() - delete an element;
    // empty() - delete the HTML content inside the element;
});