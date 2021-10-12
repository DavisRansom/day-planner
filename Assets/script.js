$(document).ready(function () {

    //color coding the hours list
    const date = new Date();
    $(".jumbotron p + p").text(date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
    const currentHour = date.getHours();
    const row = $("#hour" + currentHour);
    if (row) $(row).addClass("current");

    //save input area content to local storage
    $(".save-button").on("click", function () {
        const time = $(this).attr("id")
        const todo = $(this).siblings("textarea").val()
        console.log (todo)
    })
    
    //section to read from local storage 


});