// main.html

// Recipe of the week
document.addEventListener('DOMContentLoaded', function () {
    const recipeOfWeek = document.querySelector('#recipe_of_the_week');
    recipeOfWeek.addEventListener('mouseenter', function () { 
        recipeOfWeek.style.backgroundColor = '#1A7F53';
        recipeOfWeek.style.color = 'white';
    });
    recipeOfWeek.addEventListener('mouseleave', function () {
        recipeOfWeek.style.backgroundColor = 'transparent';
        recipeOfWeek.style.color = 'black'; 
    });

});

// Accordion
document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.nextElementSibling;
            this.parentElement.classList.toggle('active');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

});

// Form
document.addEventListener('DOMContentLoaded', function () {
    const submitRecipeBtn = document.getElementById('submitRecipeBtn');
    const submitSuccessAlert = document.getElementById('submitSuccessAlert');
    const submitOneMoreLink = document.getElementById('submitOneMoreLink');
    const recipeForm = document.querySelector('form');

    submitRecipeBtn.addEventListener('click', function (event) {
        if (recipeForm.checkValidity()) {
            event.preventDefault(); 
            recipeForm.style.display = 'none';
            submitSuccessAlert.style.display = 'block';
            submitOneMoreLink.style.display = 'block';
            recipeForm.reset();
        } else {
        }
    });

    submitOneMoreLink.addEventListener('click', function (event) {
        event.preventDefault(); 
        recipeForm.style.display = 'block';
        submitSuccessAlert.style.display = 'none';
        submitOneMoreLink.style.display = 'none';
    });
});

// breakfast.html lunch.html. dinner.html

// To-do list
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim(); 
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    const taskList = document.getElementById('task-list');
    const newTaskItem = document.createElement('li');
    newTaskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
        <button class="complete" onclick="completeTask(this)">Complete</button>
    `;
    taskList.appendChild(newTaskItem);
    taskInput.value = '';
}
function deleteTask(button) {
    const taskList = document.getElementById('task-list');
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}
function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
}

// Timer

let countdownInterval; 
function startCountdown(duration, display) {
    let timer = duration;
    let minutes, seconds;
    countdownInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            clearInterval(countdownInterval);
            display.textContent = "00:00"; 
        }
    }, 1000);
    displayFeedback('Timer started.');
}
function startTimer() {
    const inputMinutes = parseInt(document.getElementById("input-minutes").value, 10);
    const display = document.getElementById("timer-display");
    if (!isNaN(inputMinutes)) {
        const duration = inputMinutes * 60;
        startCountdown(duration, display);
    }
}
function stopTimer() {
    clearInterval(countdownInterval);
    const display = document.getElementById("timer-display");
    display.textContent = "00:00"; 
    displayFeedback('Timer stopped.');
}
function displayFeedback(message) {
    const feedbackDiv = document.getElementById('timer-feedback');
    feedbackDiv.textContent = message;
    feedbackDiv.style.display = 'block';
    setTimeout(() => {
        feedbackDiv.style.display = 'none';
    }, 3000); 
}


// breakfast.html

// Animation
document.addEventListener('DOMContentLoaded', function () {
    const clickableGif = document.querySelector('.clickable-gif');

    clickableGif.addEventListener('click', function () {
        if (!clickableGif.classList.contains('show-promo-code')) {
            clickableGif.classList.add('show-promo-code');
        } else {
            clickableGif.classList.remove('show-promo-code');
        }
    });
});

// Audio

document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play(); 
            playButton.innerText = 'Pause Sound';
        } else {
            audio.pause(); 
            playButton.innerText = 'Play Sound';
        }
    });
});



// Game
const rightIngredients = ["bread-flour", "instant-yeast", "sugar", "salt", "water"];
const wrongIngredients = ["juice", "eggs", "chicken", "cheese", "baking-powder"];
let droppedIngredients = [];

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    document.getElementById("drop-here").style.display = "none";
}

function drop(event) {
    event.preventDefault();
    const ingredientId = event.dataTransfer.getData("text");
    const ingredientElement = document.getElementById(ingredientId);

    if (rightIngredients.includes(ingredientId) && !droppedIngredients.includes(ingredientId)) {
        const ingredientDiv = document.createElement("div");
        ingredientDiv.classList.add("dropped-ingredient");
        ingredientDiv.textContent = ingredientElement.textContent;
        event.target.appendChild(ingredientDiv);

        droppedIngredients.push(ingredientId);

        if (droppedIngredients.length === rightIngredients.length) {
            document.getElementById("success-message").style.display = "block";
        }
    } else if (wrongIngredients.includes(ingredientId)) {
        document.getElementById("error-message").style.display = "block";
        setTimeout(() => {
            document.getElementById("error-message").style.display = "none";
        }, 2000);
    }
}

document.querySelectorAll(".ingredient").forEach((ingredient) => {
    ingredient.setAttribute("draggable", true);
    ingredient.addEventListener("dragstart", drag);
});

document.getElementById("box").addEventListener("dragover", allowDrop);
document.getElementById("box").addEventListener("drop", drop);



const tooltipImage = document.getElementById('tooltip-image');
const tooltip = document.getElementById('tooltip');

tooltipImage.addEventListener('mouseover', () => {
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = 1;
});

tooltipImage.addEventListener('mouseout', () => {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = 0;
});





