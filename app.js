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
      var queryURL = "https://api.napster.com/v2.1/tracks/top?apikey=MWEyNTMyOGEtNTZiYS00ZjNmLThkMGMtMzExMTllNjQzMGJh";
 
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        console.log(response);
       var ul = $("<ul>");
       $("#napsteristhefuckingshit").append(ul);
        var results = response.tracks;
        for (var i = 0; i < response.tracks.length; i++) {
          var list = $("<li>");
          ul.append(list);
          list.append(results[i].artistName + ", " + results[i].name + ", " + results[i].previewURL);
        }
      })
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
   timerIsDone = true;
   console.log(timerIsDone);
    //pause playing
    $(".audioDemo").trigger('pause');
    //set play time to 0
    $(".audioDemo").prop("currentTime",0);
 }
 timerIsDone = false;
 $("#start").on("click", function() {
    setTimeout(start, 3000);
    //setTimeout(start, 1500000);
    $(".lofi").trigger('play');
 });
 //25 minutes = 1 500 000 ms
 $("#stop").on("click", function() {
    $(".lofi").trigger('pause');
 });
 $("#reset").on("click", function() {
    //pause playing
    $(".audioDemo").trigger('pause');
    //set play time to 0
    $(".audioDemo").prop("currentTime",0);
 });
});
