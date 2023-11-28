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
        question: "In '1984,' who leads the oppressive regime known as 'The Party'?",
        options: ["Big Brother", "Emmanuel Goldstein", "O'Brien", "Winston Smith"],
        correctAnswer: 0
    },
    {
        question: "Which physicist formulated the theory of general relativity?",
        options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Max Planck"],
        correctAnswer: 2
    },
    {
        question: "What element does 'O' represent on the periodic table?",
        options: ["Oxygen", "Osmium", "Oganesson", "Olivine"],
        correctAnswer: 0
    },
    {
        question: "Who painted 'Starry Night,' a masterpiece of post-impressionist art?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"],
        correctAnswer: 0
    },
    {
        question: "What literary work begins with the line 'Call me Ishmael'?",
        options: ["Moby-Dick", "The Great Gatsby", "To Kill a Mockingbird", "War and Peace"],
        correctAnswer: 0
    },
    {
        question: "Which composer is known for the 'Moonlight Sonata' and 'Fur Elise'?",
        options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Frederic Chopin"],
        correctAnswer: 0
    },
    {
        question: "What molecule is responsible for carrying genetic information in living organisms?",
        options: ["RNA", "DNA", "Protein", "Carbohydrate"],
        correctAnswer: 1
    },
    {
        question: "Which ancient civilization built the pyramids at Giza?",
        options: ["Greek", "Roman", "Egyptian", "Mayan"],
        correctAnswer: 2
    },
    {
        question: "In psychology, what term is used for the process of encoding, storing, and retrieving information?",
        options: ["Cognition", "Hypnosis", "Psychoanalysis", "Memory"],
        correctAnswer: 3
    },
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: 2
    },
    {
        question: "Who wrote 'The Catcher in the Rye,' a classic novel of teenage angst?",
        options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
        correctAnswer: 0
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: 0
    },
    {
        question: "In which war did the Battle of Gettysburg take place?",
        options: ["World War I", "Civil War", "World War II", "Vietnam War"],
        correctAnswer: 1
    },
    {
        question: "What is the largest mammal on Earth?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: 1
    },
    {
        question: "Who is the author of 'One Hundred Years of Solitude'?",
        options: ["Gabriel Garcia Marquez", "Isabel Allende", "Julio Cortazar", "Pablo Neruda"],
        correctAnswer: 0
    },
    {
        question: "Which scientist proposed the theory of continental drift?",
        options: ["Charles Darwin", "Alfred Wegener", "Isaac Newton", "Galileo Galilei"],
        correctAnswer: 1
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Cu", "Fe"],
        correctAnswer: 0
    },
    {
        question: "Which language is most widely spoken in the world?",
        options: ["Spanish", "English", "Mandarin", "Hindi"],
        correctAnswer: 2
    },
    {
        question: "Who is the protagonist of the play 'Hamlet' by William Shakespeare?",
        options: ["Macbeth", "Romeo", "Hamlet", "Othello"],
        correctAnswer: 2
    },
    {
        question: "Which phobia is the fear of spiders?",
        options: ["Agoraphobia", "Arachnophobia", "Acrophobia", "Claustrophobia"],
        correctAnswer: 1
    },
    {
        question: "What is the currency of Japan?",
        options: ["Won", "Yuan", "Yen", "Ringgit"],
        correctAnswer: 2
    },
    {
        question: "Who developed the theory of psychoanalysis in psychology?",
        options: ["B.F. Skinner", "Carl Jung", "Sigmund Freud", "Ivan Pavlov"],
        correctAnswer: 2
    },
    {
        question: "What is the capital of Canada?",
        options: ["Vancouver", "Toronto", "Ottawa", "Montreal"],
        correctAnswer: 2
    },
    {
        question: "Which artist painted 'The Persistence of Memory' featuring melting clocks?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Salvador Dali", "Leonardo da Vinci"],
        correctAnswer: 2
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Cilantro"],
        correctAnswer: 1
    },
    {
        question: "Who is the Norse god of thunder in mythology?",
        options: ["Loki", "Odin", "Thor", "Freya"],
        correctAnswer: 2
    },
    {
        question: "Which chemical element has the symbol 'Fe' on the periodic table?",
        options: ["Iron", "Gold", "Silver", "Copper"],
        correctAnswer: 0
    },
    {
        question: "In which year did the first manned moon landing occur?",
        options: ["1965", "1969", "1975", "1981"],
        correctAnswer: 1
    },
    {
        question: "Who wrote 'The Canterbury Tales' in the late 14th century?",
        options: ["Geoffrey Chaucer", "William Shakespeare", "John Milton", "Jane Austen"],
        correctAnswer: 0
    }
];



updateUI();