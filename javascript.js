$(document).ready(function() {
    //Initial Button Array
    var searches = ["dogs", "cats", "pigeons", "gremlins"];

    //Link to API with AJAX
    var apikey =    "B03LsUdpGenllnZhlpbjE0jahShFSbKn";
    var search =    $(this).attr("data-name");
    var queryURL =  "https://api.giphy.com/v1/gifs/search?api_key="
                     + apikey + "&q=" + search; 

    $.ajax({
        url:    queryURL,
        method: "GET"
    }).then (function(response) {
        console.log(queryURL);
        console.log(response);

        var searchDiv = $("<div class='search'>");

        var gifUrl = response.data.image_original_url[i];

        var gifs = $("<img>");

        gifs.attr("src", gifUrl);
        gifs.attr("alt", "gif");

        })


    function btnRender () {

        $("#buttons").empty();

        //For loop to generate buttons for searches
        for (var i = 0; i < searches.length; i++) {
            var btn = $("<button>");
            btn.addClass("btn btn-primary")
            btn.attr("data-name", searches[i])
            btn.text(searches[i]);
            $("#buttons").append(btn);
        }
    }

    btnRender ();
    
});//END


//variables
//functions
//main process        



























