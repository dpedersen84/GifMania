$(document).ready(function() {
    //Initial Button Array
    var gifArray = ["doug", "rugrats", "angry beavers", "hey arnold", "ren and stimpy"];


    //Function to Display Gifs on Page
    function gifDisplay() {

        var gif = $(this).attr("data-name");

        var queryURL =  "https://api.giphy.com/v1/gifs/search?q="
                        + gif + "&api_key=dc6zaTOxFJmzC&limit=10"; 

        $.ajax({
            url:    queryURL,
            method: "GET"
        })
        .then (function(response) {
            console.log(queryURL);
            console.log(response);

            var results = response.data;

            //For loop for the results of gif search
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                var gifImage = $("<img>");
                gifImage.addClass("still gif-css")
                gifImage.attr("src", results[i].images.fixed_height_still.url);
                gifImage.
                gifImage.addClass("data-animate", results[i].images.fixed_height.url)
                gifDiv.prepend(gifImage);

                $("#gifs").prepend(gifDiv);
            }
            
        })
    }
            
    //Render Default Buttons on Page from the gifArray
    function btnRender () {
        $("#buttons").empty();
        //For loop to generate buttons for searches
        for (var i = 0; i < gifArray.length; i++) {
            var b = $("<button>");
            b.addClass("btn btn-basic btn-gif")
            b.attr("data-name", gifArray[i])
            b.text(gifArray[i]);
            $("#buttons").append(b);
        }
    }
    btnRender ();
    
    //Add Buttons via Search to gifArray
    $("#add-gif").on("click", function() { 
        event.preventDefault();
        var newGif =    $("#gif-input").val();
        gifArray.push(newGif);
        btnRender ();
    });

    //Click Event to display Gifs
    $(document).on("click", ".btn-gif", gifDisplay);

});//END



























