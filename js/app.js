var random_number = Math.floor(Math.random() * 101);
var guess = 0;
console.log(random_number);

function numberInput() {
    var guess = document.querySelector("#input input").value
    console.log(guess)
    
        if (guess > random_number) {
            document.getElementById("console").innerHTML += guess + " er for høyt.<p>"  ;
            document.querySelector("#input input").value = NaN
        } else if (guess < random_number) {  
            document.getElementById("console").innerHTML += guess + " er for lavt.<p>"  ;
            document.querySelector("#input input").value = NaN
        } else {  
            document.getElementById("console").innerHTML += guess + " er riktig! Vil du spille på nytt?<p><button>Spill</button>"   ;
            document.querySelector("#input input").value = NaN

        }
    }

function resetGame () {
    document.getElementById("console").innerHTML = "";

}




