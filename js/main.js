// For our browser to work after it is fully downloaded
$(document).ready(function () {
    console.log("Js is loaded successfully")

    // $("*") - selects all elements;
    // $(this) - selects the current html element;
    // $("p.intro") - Selects all <p> elements with class="intro".;
    // $("#element") - Selects an element whose id is equal to element;

    // When the li element is clicked, we hide the clicked element
    $('li').click(function () {
        $(this).hide(); //the pressed li element will be hidden
        console.log($(this).text().toUpperCase() + ' is clicked');
    });
});

//Selection of selectors is briefly like this. Almost like JavaScript.