// Declared variables
var now = moment();
var tasks = [];

//  Add Date at top of the page
var dateToday = $("#currentDay").textContent = moment().format("dddd MMMM, Do");
$("#currentDay").append(dateToday);

// load tasks
// var loadtasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));

//     if (!tasks) {
//         tasks = {
//             "9": [ time: "9", value: ""],
//             "10": [ time: "10", value: ""],
//             "11": [ time: "11", value: ""],
//             "12": [ time: "12", value: ""],
//             "13": [ time: "13", value: ""],
//             "14": [ time: "14", value: ""],
//             "15": [ time: "15", value: ""],
//             "16": [ time: "16", value: ""],
//             "17": [ time: "17", value: ""]
//         };
//     }
// }

// Save button function to update text box
$(".saveBtn").on("click", function(event) {

});


// Change backgroud color based on if time is in past, present, future
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