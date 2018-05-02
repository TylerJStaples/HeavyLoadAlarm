// Sidebar One
$(document).ready(function() {
    $('.btn').on('click', function() {
        $('.sidebar').toggleClass('side');
    });
 });
 // SideBar Two
 // On load, it needs to be hidden
$(document).ready( function () {
    $('.sidebar2').hide();
});
// On click, show the sidebar
 $(document).ready(function() {
    $('.btn2').on('click', function() {
        $('.sidebar2').show();
        $('.sidebar2').toggleClass('side2');  
    });
 });
 // Clock
 function clock() {
    setInterval (function () {
        $('#time').html(moment().format('hh:mm:ss A'))
    }, 1000)
}
clock();
var timerIsDone = false;
var start = function(){
    alert("The timer has ended");
    return timerIsDone = true;
}
$("#start").on("click", function(){
    setTimeout(start, 3000);
});
//25 minutes = 1 500 000 ms
console.log(timerIsDone);