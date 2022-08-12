var myModalEl, kanbanboard, scroll, addNewBoard, addMember, profileField, reader, tasks_list = [document.getElementById("kanbanboard"), document.getElementById("unassigned-task"), document.getElementById("todo-task"), document.getElementById("inprogress-task"), document.getElementById("reviews-task"), document.getElementById("completed-task"), document.getElementById("new-task")];
function noTaskImage() {
    Array.from(document.querySelectorAll("#kanbanboard .tasks-list")).forEach(function(e) {
        0 < e.querySelectorAll(".tasks-box").length ? e.querySelector(".tasks").classList.remove("noTask") : e.querySelector(".tasks").classList.add("noTask")
    })
}
function taskCounter() {
    task_lists = document.querySelectorAll("#kanbanboard .tasks-list"), task_lists && Array.from(task_lists).forEach(function(e) {
        tasks = e.getElementsByClassName("tasks"), Array.from(tasks).forEach(function(e) {
            task_box = e.getElementsByClassName("tasks-box"), task_counted = task_box.length
        }), badge = e.querySelector(".totaltask-badge").innerText = "", badge = e.querySelector(".totaltask-badge").innerText = task_counted
    })
}
tasks_list && ((myModalEl = document.getElementById("deleteRecordModal")) && myModalEl.addEventListener("show.bs.modal", function(e) {
    document.getElementById("delete-record").addEventListener("click", function() {
        e.relatedTarget.closest(".tasks-box").remove(), document.getElementById("delete-btn-close").click(), taskCounter()
    })
}),
drake = dragula(tasks_list).on("drag", function(e) {
    e.className = e.className.replace("ex-moved", "")
}).on("drop", function(e) {
    e.className += " ex-moved"
}).on("over", function(e, a) {
    a.className += " ex-over"
}).on("out", function(e, a) {
    a.className = a.className.replace("ex-over", ""), noTaskImage(), taskCounter()
}), 
(kanbanboard = document.querySelectorAll("#kanbanboard")) && (scroll = autoScroll([document.querySelector("#kanbanboard")], {
    margin: 20,
    maxSpeed: 100,
    scrollWhenOutside: !0,
    autoScroll: function() {
        return this.down && drake.dragging
    }
})))