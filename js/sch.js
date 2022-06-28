// display current time

const dateElement = document.querySelector('.d-day');
const dayElement = document.querySelector('#day');


/**
 * @param {Date} date 
 */

function formatDate(date) {
    const Months = ['January', 'February', ' March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return `${Months[date.getMonth()]}, ${date.getDate()}`;
};

function formatDay(date) {
    const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return `${Days[date.getDay()]}`;
    
    dayElement.textContent = Days[date.getDay()];
};

setInterval(() => {
    const present = new Date();

    dateElement.textContent = formatDate(present);
    dayElement.textContent = formatDay(present)
}, 200);

// display current time ended


// toggle modal screen

const toggleBtn = document.querySelector('#toggle-btn');
const modalScreen = document.querySelector('#modal-screen');
const closeModal = document.querySelector('#close-square');
const closeModal2= document.querySelector('.cancel')

function removeModal() {
    if (modalScreen.style.display = 'flex') {
        modalScreen.style.display = 'none';
    }
};

function displayModal() {
    if (modalScreen.style.display = 'none') {
        modalScreen.style.display = 'flex';
    } else {
        modalScreen.style.display = 'none';
    }
};

toggleBtn.addEventListener('click', displayModal);

closeModal.addEventListener('click', removeModal);

closeModal2.addEventListener('click', removeModal);

// toggle Modal ended


// toggle delete-edit buttons

const singleTask = document.querySelector('.single-task');
const darkBtn = document.querySelector('.dark-btn');

function removeAddDelBtn() {
    singleTask.classList.toggle('dark-btn-active');

    darkBtn.classList.toggle('dark-btn-inactive');
}

singleTask.addEventListener('click', removeAddDelBtn);

// toggle delete-edit buttons ended


// delete tasks

const dailyTasks = document.querySelector('.daily-tasks');
const deleteTask = document.querySelector('.delete');

dailyTasks.addEventListener('click', (e) => {
    if(e.target.className == 'delete') {
        const parEle = e.target.parentElement;
        parEle.parentNode.removeChild(singleTask);
        
        darkBtn.classList.toggle('dark-btn-inactive');
    }
});