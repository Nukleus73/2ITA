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
        selectedOption.style.backgroundColor = "var(--background)";

        if (currentQuestion < questions.length) {
            updateUI();
            updateProgressBar();
        } else {
            alert("Din poengsum ble:" + score);
            resetQuiz();
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

//  resetter hele quizen
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    updateUI();
    updateProgressBar(); // Reset progress bar
}

//  resetter progressbaren basert på hvilket spørsmål vi er på
function updateProgressBar() {
    const progressBar = document.getElementById("bar");
    const progress = (currentQuestion / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

const animeQuiz = [
    {
        question: "What is the name of the protagonist in 'Naruto'?",
        options: ["Sasuke Uchiha", "Sakura Haruno", "Naruto Uzumaki", "Kakashi Hatake"],
        correctAnswer: 2
    },
    {
        question: "In 'Attack on Titan,' what are the giant humanoid creatures that threaten humanity called?",
        options: ["Titans", "Giants", "Colossals", "Behemoths"],
        correctAnswer: 0
    },
    {
        question: "Which anime features a high school club named the SOS Brigade, led by the eccentric Haruhi Suzumiya?",
        options: ["Lucky Star", "Haruhi Suzumiya", "Clannad", "Toradora!"],
        correctAnswer: 1
    },
    {
        question: "What is the signature move of Goku in 'Dragon Ball Z'?",
        options: ["Kamehameha", "Spirit Bomb", "Solar Flare", "Final Flash"],
        correctAnswer: 0
    },
    {
        question: "In 'One Piece,' what is the name of Monkey D. Luffy's straw hat?",
        options: ["Sunny", "Shanks", "Going Merry", "Thousand Sunny"],
        correctAnswer: 2
    },
    {
        question: "Which anime features a Death Note that allows the user to kill anyone whose name is written in it?",
        options: ["Code Geass", "Paranoia Agent", "Death Note", "Mirai Nikki"],
        correctAnswer: 2
    },
    {
        question: "In 'My Hero Academia,' what is the protagonist Izuku Midoriya's superhero name?",
        options: ["Endeavor", "All Might", "Deku", "Shoto"],
        correctAnswer: 2
    },
    {
        question: "What is the setting of 'Fullmetal Alchemist: Brotherhood'?",
        options: ["Amestris", "Fiore", "Drakon", "Ishval"],
        correctAnswer: 0
    },
    {
        question: "In 'Sword Art Online,' what is the name of the virtual reality MMORPG where players get trapped?",
        options: ["Alfheim Online", "Gun Gale Online", "Aincrad", "Accel World"],
        correctAnswer: 2
    },
    {
        question: "Which anime follows the story of two brothers, Edward and Alphonse Elric, on a quest to find the Philosopher's Stone?",
        options: ["Blue Exorcist", "Soul Eater", "Fullmetal Alchemist", "D.Gray-man"],
        correctAnswer: 2
    },
    {
        question: "What is the name of the demon fox sealed within Naruto in 'Naruto'?",
        options: ["Kurama", "Shukaku", "Kyuubi", "Matatabi"],
        correctAnswer: 0
    },
    {
        question: "In 'Cowboy Bebop,' what is the name of the bounty hunter who travels with a genetically engineered corgi?",
        options: ["Spike Spiegel", "Jet Black", "Faye Valentine", "Edward Wong Hau Pepelu Tivrusky IV"],
        correctAnswer: 3
    },
    {
        question: "Which anime features a young alchemist named Aladdin and his magical companion, Ugo?",
        options: ["Magi: The Labyrinth of Magic", "The Seven Deadly Sins", "Black Clover", "Fairy Tail"],
        correctAnswer: 0
    },
    {
        question: "What is the name of the iconic attack used by Sailor Moon in 'Sailor Moon'?",
        options: ["Moonlight Kick", "Crescent Beam", "Moon Tiara Action", "Moon Healing Escalation"],
        correctAnswer: 2
    },
    {
        question: "In 'Demon Slayer,' what is the name of Tanjiro Kamado's sister, who becomes a demon?",
        options: ["Nezuko", "Mitsuri", "Shinobu", "Kanao"],
        correctAnswer: 0
    },
    {
        question: "Which anime features a high school student named Light Yagami who discovers a mysterious notebook with deadly powers?",
        options: ["Psycho-Pass", "Steins;Gate", "Death Note", "Parasyte"],
        correctAnswer: 2
    },
    {
        question: "In 'Hunter x Hunter,' what is the name of the main character who aspires to become a Hunter?",
        options: ["Killua Zoldyck", "Hisoka", "Gon Freecss", "Kurapika"],
        correctAnswer: 2
    },
    {
        question: "What is the central theme of 'Neon Genesis Evangelion'?",
        options: ["Mecha battles", "Time travel", "Psychological and existential exploration", "Magical girls"],
        correctAnswer: 2
    },
    {
        question: "In 'One Punch Man,' what is the hero name of the protagonist, Saitama?",
        options: ["Speed-o'-Sound Sonic", "Genos", "Mumen Rider", "Caped Baldy"],
        correctAnswer: 3
    },
    {
        question: "What is the primary power system in 'Hunter x Hunter'?",
        options: ["Nen", "Chakra", "Devil Fruits", "Quirks"],
        correctAnswer: 0
    },
    {
        question: "In 'Dragon Ball,' who is Goku's best friend and constant companion?",
        options: ["Piccolo", "Krillin", "Vegeta", "Bulma"],
        correctAnswer: 1
    },
    {
        question: "Which anime features a group of students trying to survive in a post-apocalyptic world filled with giant humanoid creatures known as Klaxosaurs?",
        options: ["Darling in the Franxx", "Guilty Crown", "Seraph of the End", "Aldnoah.Zero"],
        correctAnswer: 0
    },
    {
        question: "What is the name of the magical school in 'Little Witch Academia'?",
        options: ["Luna Nova Academy", "Mahoutokoro School of Magic", "Hogwarts School of Witchcraft and Wizardry", "WizTech Academy"],
        correctAnswer: 0
    },
    {
        question: "In 'Black Clover,' what is Asta's unique trait that sets him apart from other magic users?",
        options: ["Super speed", "Immortality", "Lack of magic", "Mind control"],
        correctAnswer: 2
    },
    {
        question: "Which anime is known for its distinctive art style featuring characters with big, expressive eyes and colorful hair?",
        options: ["Cowboy Bebop", "One Punch Man", "Naruto", "My Neighbor Totoro"],
        correctAnswer: 2
    }
];

updateUI();