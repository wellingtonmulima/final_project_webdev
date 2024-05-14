document.getElementById('quizForm').addEventListener('submit',function(event){
event.preventDefault(); //prevent submission

//Get selected answers
let answer1 = document.querySelector('input[name="q1"]:checked').value;
let answer2 = document.querySelector('input[name="q2"]:checked').value;
let answer3 = document.querySelector('input[name="q3"]:checked').value;

//check answers

let score = 0;

if (answer1 === 'b'){
    score++;
}

if (answer2 === 'b'){
    score++;
}

if (answer3 === 'c'){
    score++;
}

//Display result
let resultElement = document.getElementById('result');
resultElement.textContent = 'You scored' + score + 'out of 3';
});

// Function to reset radio buttons
function resetRadioButtons() {
    var form = document.getElementById('quizForm');
    var radioButtons = form.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
        radioButton.checked = false;
    });
}

// Reset radio buttons after page reload
window.onload = resetRadioButtons;