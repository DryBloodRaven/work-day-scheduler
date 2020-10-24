// Declared variables
var now = moment();
var tasks = [];

//  Add Date at top of the page
var dateToday = $("#currentDay").textContent = moment().format("dddd MMMM, Do");
$("#currentDay").append(dateToday);

// Save button function to update text box
$(".saveBtn").on("click", function(event) {

});

$(".time-block").each(function() {
    $(this).find(".input").val(tasks[$(this).attr("data-time")].value);
});

$.each($(".time-block"), function (index, value) {
    var hour = $(value).attr("data-time");
    if (Number(hour) === now.hour()) {
        $(this).find("textarea").addClass("present");
    } else if (Number(hour) < now.hour()) {
        $(this).find("textarea").addClass("past");
    }
    else {
        $(this).find("textarea").addClass("future");
    }
});