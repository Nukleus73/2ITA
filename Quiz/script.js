let sound = true;

function muteSound() {
    
    if(sound == true) {
        sound = false;

        document.querySelector("#volumeButton").setAttribute("name", "volume-mute-outline");
    }
    else if(sound == false) {
        sound = true;

        document.querySelector("#volumeButton").setAttribute("name", "volume-high-outline");
    }
}