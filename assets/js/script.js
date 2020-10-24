// Make HTML have columns and rows correspond to certain times

// Only 1 Function needs to register what time it is

// Loop over all boxes and conditionally decide what color they need to boxes

// Set up localStorage

var tasks = {};

var dateToday = $("#currentDay").textContent = moment().format("dddd MMMM, Do");
$("#currentDay").append(dateToday);

// var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));

//     if (!tasks) {
//         tasks = {
//             toDo: []
//         };
//     }

//     $.each(tasks, function(list, arr) {
//         arr.forEach(function(task))
//     })
// };

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};