// functionality for the sidebar

var sidebarTab = document.querySelectorAll(".sidebar .tabs-container ul li.tab");
var tabEl = document.querySelectorAll(".item");

for(var i = 0; i < sidebarTab.length; i++) {
    sidebarTab[i].addEventListener("click", function() {
        sidebarTab.forEach(function(li){
            li.classList.remove("active");
        })
        this.classList.add("active");

        var tabValue = this.getAttribute("data-li");

        tabEl.forEach(function(item){
            item.style.display = "none";
        })

        if(tabValue === "dashboard") {
            // document.querySelector("." + tabValue).style.display = "block";
            document.querySelector(".tab1").style.display = "block";
            document.querySelector(".tab2").style.display = "none";
            document.querySelector(".tab3").style.display = "none";
            document.querySelector(".no-display-at-profile").style.display = "flex";
            document.querySelector(".mobile-top-bar .greet-add").style.display = "flex";
            document.querySelector(".mobile-top-bar .add-to-do-btn").style.display = "flex";
            document.querySelector(".mobile-top-bar .search").style.display = "flex";
            document.querySelector(".no").style.display = "block";
           
            
        } 
        else if (tabValue === "schedule") {
            // document.querySelector("." + tabValue).style.display = "block";
            document.querySelector(".tab1").style.display = "none";
            document.querySelector(".tab2").style.display = "block";
            document.querySelector(".tab3").style.display = "none";
            document.querySelector(".no-display-at-profile").style.display = "flex";
            document.querySelector(".mobile-top-bar .greet-add").style.display = "none";
            document.querySelector(".mobile-top-bar .add-to-do-btn").style.display = "none";
            document.querySelector(".mobile-top-bar .search").style.display = "none";
            document.querySelector(".no").style.display = "none";
        } 
        else if (tabValue === "profile") {
            // document.querySelector("." + tabValue).style.display = "block";
            document.querySelector(".tab1").style.display = "none";
            document.querySelector(".tab2").style.display = "none";
            document.querySelector(".tab3").style.display = "block";  
            document.querySelector(".mobile-top-bar .greet-add").style.display = "none";
            document.querySelector(".mobile-top-bar .add-to-do-btn").style.display = "none";
            document.querySelector(".mobile-top-bar .search").style.display = "none";  
            document.querySelector(".no").style.display = "none";  
            document.querySelector(".no-display-at-profile").style.display = "none"; 
        } 
        else {
            console.log("");
        }
    });
}

var tasktabs = document.querySelectorAll(".task-number-tabs li.task-tab");
var tasktabEl = document.querySelectorAll(".tasktabitem");

for(var i = 0; i < tasktabs.length; i++ ) {
    tasktabs[i].addEventListener("click", function() {
        tasktabs.forEach(function(li){
            li.classList.remove("activate");
        })
        this.classList.add("activate");

        var taskTabValue = this.getAttribute("data-li");

        tasktabEl.forEach(function(tasktabitem){
            tasktabitem.style.display = "none";
        })

        if(taskTabValue === "todotask"){
            document.getElementById("task1").style.display = "none";
            document.getElementById("task2").style.display = "flex";
            document.getElementById("task3").style.display = "none";
            document.getElementById("recent").style.display = "none";
            document.getElementById("today").style.display = "none";
           
        } 
        else if(taskTabValue === "completetask") {
            document.getElementById("task1").style.display = "none";
            document.getElementById("task2").style.display = "none";
            document.getElementById("task3").style.display = "flex";
            document.getElementById("recent").style.display = "none";
            document.getElementById("today").style.display = "none";
            
            
        }
    });          
}

 


var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'evening';
} else if (hourNow > 12) {
    greeting = 'afternoon';
} else if (hourNow > 0) {
    greeting = 'morning';
} else {
    greeting = 'Welcome';
}

document.getElementById('greet').textContent = greeting;
// // functionality for the tasktabs
// var todo = document.querySelector(".task-number-tabs .to-do-task");
// var completed = document.querySelector(".task-number-tabs .completed-task");
// var number1 = document.querySelector(".task-number-tabs .num1");
// var number2 = document.querySelector(".task-number-tabs .num2");


// function changeStyle() {
//     todo.style.backgroundColor ="#F28F8F";
//     todo.style.color = "#fff";
//     number1.style.backgroundColor = "#fff";
//     number1.style.color = "#F28F8F"
// }

// function changeStyle2() {
//     completed.style.backgroundColor = "#34A853";
//     completed.style.color = "#fff";
//     number2.style.backgroundColor = "#fff";
//     number2.style.color = "#34A853"
// }

// todo.addEventListener("click", changeStyle, false);
// completed.addEventListener("click", changeStyle2, false);

// toggle Menu start

const menuBtn = document.querySelector('.menu-button');
const sideBarScreen = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close-button');


function removeSidebar() {
    if (sideBarScreen.style.display = 'block') {
        sideBarScreen.style.display = 'none';
        
          
    }else {
        sideBarScreen.style.display = 'block';
    }
};

function displaySideBar() {
    if (sideBarScreen.style.left = 'none') {
        sideBarScreen.style.display = 'block';
        
    } else {
        sideBarScreen.style.display = 'block';
    }
};

menuBtn.addEventListener('click', displaySideBar);

closeSidebar.addEventListener('click', removeSidebar);



// toggle Menu ended