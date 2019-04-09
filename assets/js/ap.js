$(document).ready(function(){
    console.log("hello world");


    //Create Var To Deploy Once Search Imput Button Is Clicked
$("#searchButton").on("click".function(){
    var searchedTerm = ("#input");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchedTerm + "&api_key=dc6zaTOxFJmzC&limit=10";

    //Perform AJAX QUERY
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    //After Data Returns From API
    .then(function(response)){
        var results = response.data;
        console.log(results);

        for (var i=0; i < results.length; i++) {
            
    }

});
});