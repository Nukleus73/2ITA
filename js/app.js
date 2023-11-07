var random_number = Math.floor(Math.random() * 101);
var guess = 0;
console.log(random_number);

function numberInput() {
    var guess = document.querySelector("#input textarea").value
    console.log(guess)
    document.getElementById("console").innerHTML += "<p>Your guess is: " + guess ;
}






// while (guess != random_number) {
    
//     if (guess > random_number) {
//         console.log("Gjett lavere!");
//     } else if (guess < random_number) {  
//         console.log("Gjett høyere!");
//     } else {  
//         console.log("Riktig!");
//         break;
//     }
// }


