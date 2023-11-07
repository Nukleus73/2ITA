var random_number = Math.floor(Math.random() * 101);
var guess = 0
console.log(random_number);

while (guess != random_number) {
    var guess = promt("Gjett et tall mellom 0 og 100: ");
    if (guess > random_number) {
          console.log("Gjett lavere!");
    ifelse (guess < random_number); {
        console.log("Gjett høyere!");
    ifelse (guess == random_number); {
        console.log("Riktig!");
        break;
    }
    }
    }
  }



