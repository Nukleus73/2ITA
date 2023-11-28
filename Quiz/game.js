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
        question: "Who harbors the powerful Nine-Tailed Fox in the hidden village of Konoha?",
        options: ["Sasuke's family", "Hidden Leaf elders", "Naruto Uzumaki", "Kakashi's sensei"],
        correctAnswer: 2
    },
    {
        question: "What ancient artifact fuels Goku's quest for strength in 'Dragon Ball Z'?",
        options: ["The Spirit Crystal", "The Mystic Orb", "Kamehameha", "The Dragon Balls"],
        correctAnswer: 3
    },
    {
        question: "Which brilliant high school detective solves crimes while hiding his true identity?",
        options: ["The Silent Sleuth", "Detective Conundrum", "Shinichi Kudo", "Mysterious Mind"],
        correctAnswer: 2
    },
    {
        question: "In a world where superpowers are the norm, who inherits 'One For All' in 'My Hero Academia'?",
        options: ["Endeavor's son", "Shoto Todoroki", "Deku", "The Stealthy Hero"],
        correctAnswer: 2
    },
    {
        question: "Humanity fights for survival against giant creatures in what anime?",
        options: ["Guardians of the Wall", "Attack on Titan", "Colossal Struggle", "Titanic Assault"],
        correctAnswer: 1
    },
    {
        question: "Students must assassinate their alien teacher in what peculiar classroom setting?",
        options: ["Killer Homeroom", "Assassination Classroom", "Dangerous Lessons", "Classroom X"],
        correctAnswer: 1
    },
    {
        question: "What virtual reality MMORPG traps players in a life-or-death game?",
        options: ["Alfheim Adventures", "Gun Gale Online", "Sword Art Online", "Virtual Reality Wars"],
        correctAnswer: 2
    },
    {
        question: "Which hero can defeat any opponent with a single punch in 'One Punch Man'?",
        options: ["Invincible Fighter", "The Bald Avenger", "Saitama", "Fist of Justice"],
        correctAnswer: 2
    },
    {
        question: "Which supernatural item grants its wielder the power to end lives simply by writing names?",
        options: ["Reaper's Diary", "Soul Notebook", "Lethal Journal", "Name Enigma"],
        correctAnswer: 2
    },
    {
        question: "What family of demon slayers battles against evil creatures in 'Demon Slayer'?",
        options: ["Slayer Clan", "Kamado Clan", "Hashira Alliance", "The Demon Hunters"],
        correctAnswer: 1
    },
    {
        question: "In a world of espionage, which family is hiding a spy in 'Spy x Family'?",
        options: ["Family X", "Infiltrator Clan", "Espionage Union", "Twilight Family"],
        correctAnswer: 3
    },
    {
        question: "Brothers Edward and Alphonse seek the Philosopher's Stone in what anime?",
        options: ["Metal Manipulators", "Alchemy Quest", "Fullmetal Alchemist", "Philosopher's Pursuit"],
        correctAnswer: 2
    },
    {
        question: "In a dystopian future, what technology measures a person's psychological state in 'Psycho-Pass'?",
        options: ["Mind Scanner", "Sibyl System", "Psycho-Detector", "Emotion Gauge"],
        correctAnswer: 1
    },
    {
        question: "In 'Attack on Titan,' what is the name of the elite squad known for their unique vertical maneuvering equipment?",
        options: ["Thunder Spears", "Scout Regiment", "Survey Corps", "Garrison Unit"],
        correctAnswer: 2
    },
    {
        question: "What alchemical ability sets Edward Elric apart from other practitioners in 'Fullmetal Alchemist'?",
        options: ["Metal Control", "Alchemy Mastery", "Magic Hands", "No Transmutation Circle"],
        correctAnswer: 3
    },
    {
        question: "Who is the mysterious and powerful antagonist in 'My Hero Academia' known for his strategic mind and quirk erasing bullets?",
        options: ["All For One", "Shigaraki Tomura", "Overhaul", "Stain the Hero Killer"],
        correctAnswer: 2
    },
    {
        question: "What is the primary goal of the Public Safety Bureau in the dystopian world of 'Psycho-Pass'?",
        options: ["Crime Prevention", "Thought Control", "Criminal Rehabilitation", "Enforcing Martial Law"],
        correctAnswer: 0
    },
    {
        question: "In 'Demon Slayer,' what is the name of the Water Hashira known for his calm demeanor and powerful swordsmanship?",
        options: ["Tengen Uzui", "Sanemi Shinazugawa", "Giyu Tomioka", "Kanao Tsuyuri"],
        correctAnswer: 2
    },
    {
        question: "What is the name of the organization in 'Spy x Family' that hires Twilight, a telepathic spy?",
        options: ["Twilight Agency", "Westalian Intelligence", "Mission Confidential", "Espionage Syndicate"],
        correctAnswer: 1
    },
    {
        question: "Which character in 'Sword Art Online' is known as the 'Black Swordsman' and wields dual swords?",
        options: ["Kirito", "Asuna", "Klein", "Sinon"],
        correctAnswer: 0
    },
    {
        question: "In 'Dragon Ball,' what item must be gathered to summon the eternal dragon, Shenron?",
            options: ["Power Crystals", "Chaos Emeralds", "Dragon Balls", "Eternal Gems"],
            correctAnswer: 2
    },
    {
        question: "Who is the creator of the Death Note in the anime 'Death Note'?",
        options: ["Ryuk", "Shinigami King", "Light Yagami", "Watari"],
        correctAnswer: 0
    },
    {
        question: "In 'Naruto,' what is the name of the ninja village where Naruto Uzumaki was born?",
        options: ["Hidden Leaf Village", "Hidden Mist Village", "Hidden Sand Village", "Hidden Cloud Village"],
        correctAnswer: 0
    },
    {
        question: "What is the name of the protagonist in 'Assassination Classroom' who is a smiley-faced, octopus-creature?",
        options: ["Koro Sensei", "Nagisa Shiota", "Karma Akabane", "Irina Jelavic"],
        correctAnswer: 0
    }
];

updateUI();