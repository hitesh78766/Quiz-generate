const quizData = [
  {
    question: '<div class="question-one"> <span class="correct-word">Correct the word: </span><br>  <soan class="question-input"> CO  <input class="test" type="text" style=" width: 40px; height: 0px ; border: none; border-bottom: 1px solid black; outline: none;  text-transform: uppercase;" maxlength="1" oninput="handleInput(0)" />T  <input class="test" type="text"  style="width: 40px; outline: none; height: 0px ; border: none; border-bottom: 1px solid black; text-transform: uppercase;" maxlength="1" oninput="handleInput(1)" />  <input class="test" type="text"  style="width: 40px; height: 0px ; outline: none;  text-transform: uppercase;  border: none; border-bottom: 1px solid black;" maxlength="1" oninput="handleInput(2)" />N  <input class="test" type="text" style="width: 40px; height: 0px ; outline: none;  text-transform: uppercase;  border: none; border-bottom: 1px solid black;" maxlength="1" oninput="handleInput(3)" />R</soan> </div>',
    answer: 'CONTAINER' 
  },
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
    answer: 'Jupiter',
  },
  {
    question: 'Which country won the FIFA World Cup in 2018?',
    options: ['Brazil', 'Germany', 'France', 'Argentina'],
    answer: 'France',
  },
  {
    question: 'What is the tallest mountain in the world?',
    options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
    answer: 'Mount Everest',
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Cu', 'Fe'],
    answer: 'Au',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
    answer: 'Mars',
  },
];


const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const showResultButton = document.getElementById('showResult');
const returnBack = document.getElementById('return');

let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let incorrectAnswersCount = 0;
let incorrectAnswers = []; // Define incorrectAnswers array
let questionSubmitted = false;
let backButton = false;

function displayQuestion() {
  if (currentQuestionIndex >= quizData.length) {
    showResult(); // Display quiz result if all questions have been answered
    return;
  }

// this will show the question of the quiz
  const questionData = quizData[currentQuestionIndex];
  quizContainer.style.color = 'black';
  quizContainer.innerHTML = '';// this will hide the previous quistion of the quiz

  const questionElement = document.createElement('div');
  questionElement.innerHTML = questionData.question;
  questionElement.style.fontSize = '20px';
  questionElement.style.marginBottom = '10px';
  questionElement.style.marginLeft = '10px';
  quizContainer.appendChild(questionElement);


  // this will show the options of the quiz...
  if (questionData.options) {
    questionData.options.forEach(option => {
      const optionElement = document.createElement('span');
      optionElement.innerHTML = option;
      optionElement.style.color = 'gray';
      optionElement.style.marginLeft = '10px';
      optionElement.style.fontSize = '20px';
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'option';
      checkbox.value = option;

      optionElement.appendChild(checkbox);
      quizContainer.appendChild(optionElement);
    });
  }

    // Hide the "Show Result" button if no question has been submitted
    if (!questionSubmitted) {
    showResultButton.style.display = 'none';
    } else {
    showResultButton.style.display = 'block';
    }

    if(!backButton) {
    returnBack.style.display = 'none';
    }else
    {
    returnBack.style.display = 'block';
    }
}

const handleInput = (index) => {
  const inputs = document.querySelectorAll(".test");
 
   // it Check  if inputs[index] exists before access its properties
  if (inputs[index] && inputs[index].value) {

    inputs[index].style.fontSize = '20px';

    inputs[index].addEventListener('keydown', (event) => {
      if(event.key == 'Backspace') {
         // If Backspace key is pressed and the input value is empty
        inputs[index].style.borderColor = 'black';

        if(inputs[index].value == '') {
          const prevIndex = index - 1;
          // it Check the previous input field
          if(prevIndex >= 0) {
            inputs[prevIndex].focus();
          }
        }           
      }
    })

    const inputValue = inputs[index].value.toUpperCase();
    const correctValue = "NAIE"[index];

    if (inputValue === correctValue) {
      inputs[index].style.borderColor = 'green';
      inputs[index].style.color = 'green'
      const nextIndex = index + 1;
      if (nextIndex < inputs.length) {
        inputs[nextIndex].focus();
      }
    } else {
      inputs[index].style.borderColor = 'red';
      inputs[index].style.color = 'red'
    } 
  }
}



    //   const inputs = document.querySelectorAll(".test");
   
    //   // it Check the if inputs[index] exists before access its properties
    //   if (inputs[index] && inputs[index].value) {

    //     inputs[index].style.fontSize = '20px';

    //     inputs[index].addEventListener('keydown', (event) => {
    //       if(event.key == 'Backspace') 
    //        // If Backspace key is pressed and the input value is empty
    //       inputs[index].style.borderColor = 'black';

    //       {
    //         if(inputs[index].value == '')
    //         {
    //           const prevIndex = index - 1;
    //            // it Check the previous input field
    //           if(prevIndex >= 0)
    //           {
    //             inputs[prevIndex].focus();
    //           }
    //         }           
    //       }
    //     })

    //     const inputValue = inputs[index].value.toUpperCase();
    //     const correctValue = "NAIE"[index];

    //     if (inputValue === correctValue) {
    //       inputs[index].style.borderColor = 'green';
    //       inputs[index].style.color = 'green'
    //       const nextIndex = index + 1;
    //       if (nextIndex < inputs.length) {
    //         inputs[nextIndex].focus();
    //       }
    //     } else {
    //       inputs[index].style.borderColor = 'red';
    //       inputs[index].style.color = 'red'
    //     } 
    //   }
      
    // }


// Function to handle the submission of a question
function checkAnswer() {
  const inputs = document.querySelectorAll(".test");

  let enteredWord = '';
   inputs.forEach(input => {
  enteredWord += input.value;
  });

  // console.log("enterword" , enteredWord)
  if (enteredWord.toUpperCase() === 'NAIE' && currentQuestionIndex === 0) {

    inputs.forEach(input => {
      input.style.borderColor = 'green';
    });

    correctAnswersCount++;
    currentQuestionIndex++;
    questionSubmitted = true;
    backButton = true; 
    displayQuestion()

  } else if (currentQuestionIndex >= 1) {
    const selectedOption = document.querySelector('input[name=option]:checked');
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }
    const userAnswer = selectedOption.value;
    const correctAnswer = quizData[currentQuestionIndex].answer;

    // console.log("the useranser is :" , userAnswer)
    // console.log("the correct answer is :" , correctAnswer)

    if (userAnswer === correctAnswer) {
      correctAnswersCount++;
    } else {
      incorrectAnswersCount++;
      incorrectAnswers.push(currentQuestionIndex);
    }

    currentQuestionIndex++;
    questionSubmitted = true;
    backButton = true;
    displayQuestion();
  } 
  else {
    alert("your answer is wrong  ! Please try again !");
  }
}

// this functoion will show the result of the quiz in show result button.. 
const showResult = () => {
  quizContainer.innerHTML = '';
  submitButton.style.display = 'none';
  showResultButton.style.display = 'none';

  const totalQuestions = quizData.length;

  resultContainer.innerHTML = `Congratulations! Total Questions: ${totalQuestions}, Correct Answers: ${correctAnswersCount}, Incorrect Answers: ${incorrectAnswersCount}`;

  // Display the questions that were answered incorrectly along with correct answers
  if (incorrectAnswers.length > 0) {
    const incorrectQuestionsList = document.createElement('ul');
    incorrectQuestionsList.innerHTML = 'Incorrect Questions and  their Answers:';
    
    incorrectAnswers.forEach(index => {
      const questionItem = document.createElement('li');
      questionItem.style.color = 'red';
      questionItem.innerHTML = `Question: ${quizData[index].question}`;
      incorrectQuestionsList.appendChild(questionItem);

      const answerItem = document.createElement('li');
      answerItem.style.color = 'green';
      answerItem.innerHTML = `Correct Answer: ${quizData[index].answer}`;
      incorrectQuestionsList.appendChild(answerItem);
    });

    resultContainer.appendChild(incorrectQuestionsList);
  }
  resultContainer.style.color = 'blue';
};


// Function to return to the homepage
const returnHomePage = () => {
  window.location.reload();
}


// Add event listeners
submitButton.addEventListener('click', checkAnswer);
showResultButton.addEventListener('click', showResult);
returnBack.addEventListener('click', returnHomePage);

// Call to display the first question initially 
displayQuestion();











