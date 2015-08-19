$(document).ready(function(){
  console.log("here's your mock data to start with:")
  // console.log(GLOBAL_MOCK_DATA_OBJECT)

  // can you render the mock data to the page?


	$( "#button" ).click(function() {
		  var pick = $("input").val();
		   $.get("http://api.giphy.com/v1/gifs/search", {"q": pick, "api_key": "dc6zaTOxFJmzC"}, function(response_data) {
		 	response_data.data.forEach (function (element) {
		 			$(".container").append("<img src=" + element.images.fixed_height.url + ">");

		 		});
		 	
		});
	});


})

	

/**

Working Code

	GLOBAL_MOCK_DATA_OBJECT.data.forEach (function (element){
			$(".container").append("<img src=" + element.images.fixed_height.url + ">");
	});


console.log(response_data.data[1].images.fixed_height.url);

$.get("http://api.giphy.com/v1/gifs/search", {"q": pick, "api_key": "dc6zaTOxFJmzC"}, function(data) {
		data.forEach (function (element){
		$(".container").append("<img src=" + element.images.fixed_height.url + ">");
});

		data.forEach (function (element){
		$(".container").append("<img src=" + element.images.fixed_height.url + ">");

$(".container").append("<img src = http://media3.giphy.com/media/Ro2MgOxH9iaVG/200.gif />")


input = .val





	$.get("http://omdbapi.com?t=avatar", function(response_data) {
		$("h1").text(response_data.Title + " " + response_data.Year + " " + response_data.imdbRating);
	});

*/
