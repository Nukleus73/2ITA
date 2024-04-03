function toggleSettings() {
    let settingsBar = document.getElementById('settingsBar');
    if (settingsBar.style.opacity == 1) {
        document.getElementById('settingsIcon').style.transform = "rotate(0deg)"

        settingsBar.style.opacity = 0;
    } else {
        document.getElementById('settingsIcon').style.transform = "rotate(180deg)"

        settingsBar.style.opacity = 1;
    }
}

let toggle = true;

// function for toggling between dark/light mode
function toggleMode() {
    const root = document.documentElement;
    const style = getComputedStyle(root);
    let black = style.getPropertyValue(`--black`).trim();
    let white = style.getPropertyValue(`--white`).trim();
    let blackWhite = style.getPropertyValue(`--blackWhite`).trim();
    let whiteBlack = style.getPropertyValue(`--whiteBlack`).trim();
    if (toggle) {
        toggle = !toggle

        root.style.setProperty('--primaryMain', white);
        root.style.setProperty('--secondaryMain', black);
        root.style.setProperty('--tetriaryMain', blackWhite);
    }
    else {
        toggle = !toggle

        root.style.setProperty('--primaryMain', black);
        root.style.setProperty('--secondaryMain', white);
        root.style.setProperty('--tetriaryMain', whiteBlack);
    }
}

// if the user has light mode, run toggleMode() once
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    toggleMode();
  }

var englishTrue = false;

function toggleLanguage() {
    englishTrue = !englishTrue
}