//  definerer hvilket spørsmål du er på
let currentQuestion = 0;
let score = 0;

//  når et svar er valgt, hent ut det riktige svaret, og sjekk om det stemmer
function checkAnswer(selectedOption) {
    const correctAnswerIndex = questions[currentQuestion].correctAnswer;

    if (selectedOption.lastElementChild.textContent === questions[currentQuestion].options[correctAnswerIndex]) {
        selectedOption.style.backgroundColor = "rgb(120, 255, 120)";
        document.querySelector("#win").play()
        score++
    } else {
        selectedOption.style.backgroundColor = "rgb(255, 100, 100)";
        document.querySelector("#lose").play()
    }

    currentQuestion++;
    //  dersom quizen er ferdig, si ifra. Dersom ikke, fortsett
    setTimeout(() => {
        selectedOption.style.backgroundColor = "var(--varBackground)";

        if (currentQuestion < questions.length) {
            updateUI();
            updateProgressBar();
        } else {
            const scoreCounter = document.querySelector("#questionsRight");
            const quiz = document.querySelector("#quiz-container");
            const questionElement = document.getElementById("question");

            scoreCounter.innerHTML = `${score}/${questions.length}`;
            scoreCounter.style.display = "flex";
            quiz.style.display = "none"
            questionElement.innerHTML = "Your points is:"

        }
    }, 1000);
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

//  resetter progressbaren basert på hvilket spørsmål vi er på
function updateProgressBar() {
    const progressBar = document.getElementById("bar");
    const progress = (currentQuestion / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

const questions = [
    {
        question: "In Greek mythology, who is the god of the sea?",
        options: ["Zeus", "Hades", "Poseidon", "Apollo"],
        correctAnswer: 3
    },
    {
        question: "Which scientist formulated the laws of motion and universal gravitation?",
        options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
        correctAnswer: 1
    },
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: 3
    },
    {
        question: "Which novel begins with the line 'Call me Ishmael'?",
        options: ["Moby-Dick", "Pride and Prejudice", "1984", "The Great Gatsby"],
        correctAnswer: 1
    },
    {
        question: "Who painted the famous 'Starry Night'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: 1
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Gd", "Au", "Ag", "Fe"],
        correctAnswer: 2
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        correctAnswer: 1
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: 2
    },
    {
        question: "In which year did World War II end?",
        options: ["1945", "1939", "1941", "1950"],
        correctAnswer: 1
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
        correctAnswer: 3
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"],
        correctAnswer: 2
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "South Korea", "Vietnam"],
        correctAnswer: 2
    },
    {
        question: "Who painted the 'Mona Lisa'?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctAnswer: 2
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Osmium", "Oxygen", "Oganesson", "Osirium"],
        correctAnswer: 2
    },
    {
        question: "What is the currency of Japan?",
        options: ["Won", "Ringgit", "Yuan", "Yen"],
        correctAnswer: 4
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Jane Austen", "George Orwell"],
        correctAnswer: 1
    },
    {
        question: "What is the capital city of Brazil?",
        options: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Buenos Aires"],
        correctAnswer: 3
    },
    {
        question: "Which planet is known as the 'Blue Planet'?",
        options: ["Mars", "Earth", "Jupiter", "Saturn"],
        correctAnswer: 2
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "George Orwell", "Ernest Hemingway"],
        correctAnswer: 1
    },
    {
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        correctAnswer: 2
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        correctAnswer: 2
    },
    {
        question: "Who is the Norse god of thunder?",
        options: ["Odin", "Loki", "Thor", "Freya"],
        correctAnswer: 3
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["299,792 kilometers per second", "300,000 kilometers per second", "299,792 miles per second", "300,000 miles per second"],
        correctAnswer: 1
    },
    {
        question: "Which planet is known as the 'Giant of the Solar System'?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correctAnswer: 1
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "George Orwell"],
        correctAnswer: 1
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        correctAnswer: 1
    },
    {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Joseph Lister"],
        correctAnswer: 2
    },
    {
        question: "In which year did Christopher Columbus reach the Americas?",
        options: ["1492", "1500", "1607", "1776"],
        correctAnswer: 1
    },
    {
        question: "What is the capital city of France?",
        options: ["Berlin", "Rome", "Madrid", "Paris"],
        correctAnswer: 4
    }
];


updateUI();