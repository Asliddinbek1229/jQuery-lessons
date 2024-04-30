$(document).ready(function() {
    console.log("Js is loaded successfully");

    // jQuery text and attribute
    var h1 = $('h1').text();
    var h1Html = $('h1').html();
    console.log(h1, h1Html);

    $('button').click(function() {
        var input = $('#name').val();
        var type = $('input').attr('type');
        var myName = $('input').attr('my_name'); // we can get the value of the attribute we want
        console.log(input, type, myName);
    });


    // jQuery text and update attribute value
    $('#button2').click(function() {
        // $('h1').text('Changes text');
        // $('h2').html("<h6>Changes html</h6>");
        // $('#name2').val('New value');
        $('#name2').attr('my_name', "Salom");
        var new_name = $('#name2').attr('my_name');
        console.log(new_name);
    });
});