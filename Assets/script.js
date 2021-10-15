$(document).ready(function () {

    //color coding the hours list
    const date = new Date();
    $(".jumbotron p + p").text(date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
    const currentHour = date.getHours();
    const row = $("#hour" + currentHour);
    if (row) $(row).addClass("current");

    //save input area content to local storage
    $(".save-button").on("click", function () {
        const time = $(this).parent().attr("id");
        const todo = $(this).siblings("textarea").val();
        localStorage.setItem(time, todo);
    });

    //section to read from local storage
    //I will grab from local storage the time and todo const for each row
    //for every element of this array do a check in local storage for that key
    //if there is a value for that key then print into that row's text area
    for (let row of document.querySelectorAll(".row")) {
        let time = row.id;
        let todo = localStorage.getItem(time);
        if (todo) {
            row.querySelector("textarea").value = todo;
        }
    }

    //create a click event on the that when clicked removes any items in local storage for that row only
   
});
