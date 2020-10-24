// Declared variables
var now = moment();
var tasks = JSON.parse(localStorage.getItem("taskList")) || [];


//  Add Date at top of the page
var dateToday = $("#currentDay").textContent = moment().format("dddd MMMM, Do");
$("#currentDay").append(dateToday);

// render tasks back into the schedular
function renderTasks() {
    for (var i = 0; i < tasks.length; i++) {

        $(".textInput").val(tasks);
    }
};

// Save button function to update text box
$(".saveBtn").on("click", function(event) {
    event.preventDefault();

    var task = $(this).siblings("textarea")
        .val();

    tasks.push(task);

    localStorage.setItem("taskList", JSON.stringify(tasks));
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

renderTasks();