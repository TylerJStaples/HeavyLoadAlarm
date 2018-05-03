//Initialize Firebase for adding songs to playlist for Music API to pull
$(document).ready(function() {

 var config = {
   apiKey: "AIzaSyBLRc8mQwW2r4n8bc8U6uXl7XotQpmRy-A",
   authDomain: "pomodoro-timer-project.firebaseapp.com",
   databaseURL: "https://pomodoro-timer-project.firebaseio.com",
   projectId: "pomodoro-timer-project",
   storageBucket: "pomodoro-timer-project.appspot.com",
   messagingSenderId: "349004114335"
 };
 firebase.initializeApp(config);



 // Sidebar One
 $(document).ready(function() {
   $('.btn').on('click', function() {
     $('.sidebar').toggleClass('side');

     $.ajax({
       type : 'POST',
       url : 'https://ws.audioscrobbler.com/2.0/',
       data : 'method=artist.getinfo&' +
              'playlist.fetch&' +
              'artist=Nas&' +
              'api_key=4cfb3ad46313f41be3ff0885b455659a&' +
              'format=json',
       method : 'package.method',
       dataType : 'jsonp',
       success : function(data) {
           console.log(data);
       },
       error : function(code, message){
           // Handle error here
       }
   })
   .then(function(response) {
     var results = response.data;
     var p = $("<p>").text(results);
     $("#lastfm").append(p);
     var imglastfm = $("<img>");
     imglastfm.attr("src =" + results.artist.image[0].text);

   });
 });
 // SideBar Two
 // On load, it needs to be hidden
 $(document).ready(function() {
   $('.sidebar2').hide();
 });
 // On click, show the sidebar
 $(document).ready(function() {
   $('.btn2').on('click', function() {
     $('.sidebar2').show();
     $('.sidebar2').toggleClass('side2');

     var database = firebase.database();


   });
   });
 });
 // Clock
 function clock() {
   setInterval(function() {
     $('#time').html(moment().format('hh:mm:ss A'))
   }, 1000)
 }
 clock();
 var timerIsDone = false;
 var start = function() {
   alert("The timer has ended");
   return timerIsDone = true;
 }
 $("#start").on("click", function() {
   setTimeout(start, 3000);
 });
 //25 minutes = 1 500 000 ms
 console.log(timerIsDone);
});
