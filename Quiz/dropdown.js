//  MENU BUTTON
const menu = document.querySelector("#dropdown")
let menuOpen = false;

function dropMenu() {
    
    if(menuOpen == true) {
        menuOpen = false;

        menu.style.opacity = 0;
    }
    else if(menuOpen == false) {
        menuOpen = true;

        menu.style.opacity = 1;
    }
}

// AUDIO BUTTON
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

//  DARK MODE BUTTON
let darkThemeButton = document.querySelector("#darkTheme");
let dark = false;
let colors = [
    {
        text: "#061318",
        background: "#d6ecf5",
        accent: "#c45b31"
    },
    {
        text: "#e7f4f9",
        background: "#0a2029",
        accent: "#ce653b"
    }
]

function darkTheme() {
    
    if(dark == true) {
        dark = false;

        darkThemeButton.style.transform = "rotate(0deg)";

        document.documentElement.style.setProperty('--varText', colors[0].text);
        document.documentElement.style.setProperty('--varBackground', colors[0].background);
        document.documentElement.style.setProperty('--varAccent', colors[0].accent);
    }
    else if(dark == false) {
        dark = true;

        darkThemeButton.style.transform = "rotate(180deg)";

        document.documentElement.style.setProperty('--varText', colors[1].text);
        document.documentElement.style.setProperty('--varBackground', colors[1].background);
        document.documentElement.style.setProperty('--varAccent', colors[1].accent);

    }
}