const audio = document.querySelector("#audioImitation");
const volumeButton = document.querySelector("#volumeButton");
let sound = true;

function muteSound() {
    
    if(sound == true) {
        sound = false;

        volumeButton.setAttribute("name", "volume-mute-outline");
        audio.volume = 0;
    }
    else if(sound == false) {
        sound = true;

        volumeButton.setAttribute("name", "volume-high-outline");
        audio.volume = .4; 
    }
}

setTimeout(() => {
    audio.volume = .4; 
    audio.play() 
}, 3000);