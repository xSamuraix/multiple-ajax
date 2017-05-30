//Performing GET requests to the OMDB API and logging the responses to the console
$.ajax({
	url: "http://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=40e9cece",
	method: "GET"
}).done(function(response){
	console.log(response);
});

$.ajax({
	url: "http://www.omdbapi.com/?t=the+revenant&y=&plot=short&apikey=40e9cece",
	method: "GET"
}).done(function(response){
	console.log(response);
});

$.ajax({
	url: "http://www.omdbapi.com/?t=god+father&y=&plot=short&apikey=40e9cece",
	method: "GET"
}).done(function(response){
	console.log(response);
});

$.ajax({
      url: "http://www.omdbapi.com/?t=space+jam&y=&plot=short&apikey=40e9cece",
      method: "GET"
    }).done(function(response) {
      console.log(response);
    });
    $.ajax({
      url: "http://www.omdbapi.com/?t=boiler+room&y=&plot=short&apikey=40e9cece",
      method: "GET"
    }).done(function(response) {
      console.log(response);
    });
    $.ajax({
      url: "http://www.omdbapi.com/?t=inception&y=&plot=short&apikey=40e9cece",
      method: "GET"
    }).done(function(response) {
      console.log(response);
    });
    $.ajax({
      url: "http://www.omdbapi.com/?t=the+dark+night&y=&plot=short&apikey=40e9cece",
      method: "GET"
    }).done(function(response) {
      console.log(response);
    });

  //--------------this code will probably run first because AJAX requests are asynchronous
  console.log("Because our AJAX requests are asynchronous, this line of code will most likely log first");