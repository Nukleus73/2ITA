let currentQuestion = 0;

function checkAnswer(selectedOption) {
    const correctAnswerIndex = questions[currentQuestion].correctAnswer;

    if (selectedOption.textContent === questions[currentQuestion].options[correctAnswerIndex]) {
        alert("Riktig svar!");
    } else {
        alert("Feil svar. Prøv igjen!");
        return // Ikke gå videre til neste spørsmål ved feil svar
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        updateUI();
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
        option.textContent = questions[currentQuestion].options[index];
    });
}

function resetQuiz() {
    currentQuestion = 0;
    updateUI();
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
    // Legg til flere spørsmål etter behov
];

updateUI();
