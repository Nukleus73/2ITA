let currentQuestion = 0;

function checkAnswer(selectedOption) {
    const correctAnswerIndex = questions[currentQuestion].correctAnswer;

    if (selectedOption.textContent === questions[currentQuestion].options[correctAnswerIndex]) {
        alert("Riktig svar!");
    } else {
        alert("Feil svar. Prøv igjen!");
        return; // Ikke gå videre til neste spørsmål ved feil svar
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        updateUI();
        updateProgressBar();
    } else {
        alert("Quiz ferdig!");
        resetQuiz();
    }
}

function updateUI() {
    const questionElement = document.getElementById("question");
    const options = document.querySelectorAll(".option");

    questionElement.textContent = questions[currentQuestion].question;
    options.forEach((option, index) => {
        option.lastElementChild.textContent = questions[currentQuestion].options[index];
    });
}

function resetQuiz() {
    currentQuestion = 0;
    updateUI();
    updateProgressBar(); // Reset progress bar
}

function updateProgressBar() {
    const progressBar = document.getElementById("bar");
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

const questions = [
    {
        question: "Hva er hovedstaden i Danmark?",
        options: ["Oslo", "Stockholm", "København", "Berlin"],
        correctAnswer: 2
    },
    {
        question: "Hva er hovedstaden i Sverige?",
        options: ["Oslo", "Stockholm", "København", "Helsinki"],
        correctAnswer: 1
    },
    {
        question: "Hva er hovedstaden i Danmark?",
        options: ["Oslo", "Stockholm", "København", "Helsinki"],
        correctAnswer: 2
    },
    {
        question: "Hva er hovedstaden i Finland?",
        options: ["Oslo", "Stockholm", "København", "Helsinki"],
        correctAnswer: 3
    },
    {
        question: "Hva er hovedstaden i Sverige?",
        options: ["Oslo", "Stockholm", "København", "Helsinki"],
        correctAnswer: 1
    },
    {
        question: "Hva heter jeg?",
        options: ["Lucas", "Nichlas", "Daniel", "Edvin"],
        correctAnswer: 0
    },
    {
        question: "Bing chilling?",
        options: ["Chillern", "Mango", "Bing Chlling", "Eple"],
        correctAnswer: 3
    },
    // Legg til flere spørsmål etter behov
];

updateUI();
