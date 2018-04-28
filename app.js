// Sidebar

var right = "glyphicon glyphicon-chevron-right";
var left = "glyphicon glyphicon-chevron-left";

$(document).ready(function() {
    $('.btn').on('click', function() {
        $('.sidebar').toggleClass('side');
        $(".btn").toggleClass(".btnc");        
    });
 });

 /*$(document).ready(function() {
    $('.btn').on('click', function() {
        $('.sidebar').toggleClass('side');
        $('#arrow').toggleClass("glyphicon glyphicon-chevron-left");
    });
 });*/

 // Clock
 function clock() {
    setInterval (function () {
        $('#clock').html(moment().format('hh:mm:ss A'))
    }, 1000)
}
clock();


 //////////////////////////////////////////////////
 //////////////////////////////////////////////////
 //////////////////////////////////////////////////
 ////////////////End of Virgil's shit//////////////
 //////////////////////////////////////////////////
 //////////////////////////////////////////////////
 //////////////////////////////////////////////////