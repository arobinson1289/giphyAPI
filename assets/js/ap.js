$(document).ready(function(){
    console.log("hello world");


    // Create Var To Deploy Once Search Imput Button Is Clicked
    $("#searchButton").on("click", function(){
        var searchedTerm = $("#input").val();

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchedTerm + "&api_key=dc6zaTOxFJmzC&limit=10";

        //Perform AJAX QUERY
        $.ajax({
            url: queryURL,
            method: "GET"
        })

        //After Data Returns From API
        .then(function(response){
            var results = response.data;

            for (var i=0; i < results.length; i++) {

                var img = $("<img>");
                img.addClass("imageBtn");
                img.attr("src", results[i].images.fixed_height_small_still.url);
                img.attr("data-still", results[i].images.fixed_height_small_still.url);
                img.attr("data-animate", results[i].images.fixed_height_small.url);


                $("#images").append(img);
            }

        });
    });

    $(document).on("click", ".imageBtn", function(){
        console.log($(this).attr("data-still"));

        if($(this).attr("data-animate") === $(this).attr("src")){
            console.log("make it still");
            $(this).attr("src", $(this).attr("data-still"));
        } else {
            console.log("make it animate");
            $(this).attr("src", $(this).attr("data-animate"));
        }
    })
});