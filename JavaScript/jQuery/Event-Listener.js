/*
For this quiz, use jQuery to set up an event listener. Your event listener must:
    1. listen to the #my-button element in the supplied HTML file.
    2. listen for a `click` event
    3. perform the following actions when the button is clicked:
        a. remove the #my-button element from the DOM
        b. add the `success` class to the body
*/

var $mybutton = $("#my-button");
$mybutton.on("click", function(){
    $mybutton.remove();
    $("body").addClass( "success" );
});
