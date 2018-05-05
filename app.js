/*// Sidebar One

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
 
 
 //////////////////////////////////////////////////
 //////////////////////////////////////////////////
 //////////////////////////////////////////////////
 ////////////////End of Virgil's shit//////////////
 //////////////////////////////////////////////////
 //////////////////////////////////////////////////
 //////////////////////////////////////////////////

*/


/* Matt's App */





//Initialize Firebase for adding songs to playlist for Music API to pull
$(document).ready(function() {
  $(".lofi").trigger('load');
var config = {
 apiKey: "AIzaSyBLRc8mQwW2r4n8bc8U6uXl7XotQpmRy-A",
 authDomain: "pomodoro-timer-project.firebaseapp.com",
 databaseURL: "https://pomodoro-timer-project.firebaseio.com",
 projectId: "pomodoro-timer-project",
 storageBucket: "pomodoro-timer-project.appspot.com",
 messagingSenderId: "349004114335"
};
firebase.initializeApp(config);

var database = firebase.database();

// Sidebar One
$(document).ready(function() {
  //<<<<<<< HEAD
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
     $("#napsterisawesome").append(ul);
     var results = response.tracks;
     for (var i = 0; i < response.tracks.length; i++) {
       var list = $("<li>");
       ul.append(list);
       var musicDiv = results[i].previewURL;
       list.append(results[i].artistName + ", " + results[i].name);
      //list.append(results[i].artistName + ", " + results[i].name + ", " + 
      //    "<a href='results[i].previewURL'>click to play</a>");
       var wav = new Audio (results[i].previewURL);
       console.log(wav);
      }
   });
  }); //end of function
//
//
//
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

   // var database = firebase.database();


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
function wavload() {
   console.log("Loaded audio");
}
$("#start").on("click", function() {
  $(".lofi").trigger('play');
  //setTimeout(stop, 1500000); 
});
$("#stop").on("click", function(){
  $(".lofi").trigger('stop')
});
//25 minutes = 1 500 000 ms
});

///////////////////////////