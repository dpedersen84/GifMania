$(document).ready(function() {
    //Initial Button Array
    var gifArray = ["dogs", "cats", "pigeons", "gremlins"];



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
                gifImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(gifImage);

                $("#gifs").prepend(gifDiv);
            }
            
        })
    }
            
    //Render Default Buttons on Page
    function btnRender () {
        $("#buttons").empty();
        //For loop to generate buttons for searches
        for (var i = 0; i < gifArray.length; i++) {
            var b = $("<button>");
            b.addClass("btn btn-danger btn-gif")
            b.attr("data-name", gifArray[i])
            b.text(gifArray[i]);
            $("#buttons").append(b);
        }
    }
    btnRender ();
    
    //Add Gif Buttons via Search Button
    $("#add-gif").on("click", function() { 
        event.preventDefault();
        var newGif =    $("#gif-input").val();
        gifArray.push(newGif);
        btnRender ();
    });

    $(document).on("click", ".btn-gif", gifDisplay);

});//END


//variables
//functions
//main process        



























