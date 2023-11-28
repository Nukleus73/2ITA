//  definerer hvilket spørsmål du er på
let currentQuestion = 0;

//  når et svar er valgt, hent ut det riktige svaret, og sjekk om det stemmer
function checkAnswer(selectedOption) {
    const correctAnswerIndex = questions[currentQuestion].correctAnswer;

    if (selectedOption.lastElementChild.textContent === questions[currentQuestion].options[correctAnswerIndex]) {
        selectedOption.style.backgroundColor = "rgb(120, 255, 120)";
    } else {
        selectedOption.style.backgroundColor = "rgb(255, 100, 100)";
    }
    // dersom svaret er riktig, oppdater spørsmålslisten
    currentQuestion++;
    //  dersom quizen er ferdig, si ifra. Dersom ikke, fortsett
    setTimeout(() => {
        selectedOption.style.backgroundColor = "var(--background)";

        if (currentQuestion < questions.length) {
            updateUI();
            updateProgressBar();
        } else {
            alert("Quiz ferdig!");
            resetQuiz();
        }
    }, 2000);
}

//  oppdater elementene på siden
function updateUI() {
    const questionElement = document.getElementById("question");
    const options = document.querySelectorAll(".option");
    const current = document.querySelector("#current");
    const total = document.querySelector("#total");

    questionElement.textContent = questions[currentQuestion].question;
    options.forEach((option, index) => {
        option.lastElementChild.textContent = questions[currentQuestion].options[index];
    });

    current.innerHTML = currentQuestion + 1
    total.innerHTML = questions.length
}

//  resetter hele quizen
function resetQuiz() {
    currentQuestion = 0;
    updateUI();
    updateProgressBar(); // Reset progress bar
}

//  resetter progressbaren basert på hvilket spørsmål vi er på
function updateProgressBar() {
    const progressBar = document.getElementById("bar");
    const progress = (currentQuestion / questions.length) * 100;
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
        correctAnswer: 2
    },
];

updateUI();