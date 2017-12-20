/*
For this quiz, use jQuery's each() method to iterate through the <p>s provided,
calculate the length of each one, and add each length to the end of each <p>.

*/

$('p').each(function(i){
var totWord =$(this).text().length;
$(this).append('<b>' + totWord + ' words</b>');

});
