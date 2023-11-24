var random_number = Math.floor(Math.random() * 101);
var guess = 0;


function startGame() {
    random_number = Math.floor(Math.random() * 101);

    document.getElementById("console").innerHTML = "";
}

startGame();

function numberInput() {
    var guess = document.querySelector("#input input").value
    
    console.log(random_number);

    
        if ((guess == NaN ) || (guess > 100) || (guess < 1))  {  
            document.getElementById("console").innerHTML += "<p>Ikke gyldig. Prøv på nytt!</p>"  ;
            document.querySelector("#input input").value = ""
        } else if (guess < random_number) {  
            document.getElementById("console").innerHTML += "<p>"  + guess + " er for lavt.</p>";
            document.querySelector("#input input").value = ""
        } else if (guess > random_number) {
            document.getElementById("console").innerHTML += "<p>" + guess + " er for høyt.</p>"  ;
            document.querySelector("#input input").value = ""
        } else {  
            document.getElementById("console").innerHTML += "<p>" + guess + " er riktig! Vil du spille på nytt?</p><button onclick='startGame()''>Spill</button>"   ;
            document.querySelector("#input input").value = ""
        }
    }




