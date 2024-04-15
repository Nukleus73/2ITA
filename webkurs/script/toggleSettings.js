function toggleSettings() {
    let settingsBar = document.getElementById('settingsBar');
    if (settingsBar.style.opacity == 1) {
        document.getElementById('settingsIcon').style.transform = "rotate(0deg)"

        settingsBar.style.opacity = 0;
        setTimeout(() => {
            settingsBar.style.display = "none";
        }, 200);
    } else {
        document.getElementById('settingsIcon').style.transform = "rotate(180deg)"
        settingsBar.style.display = "block";
        setTimeout(() => {
            settingsBar.style.opacity = 1;
        }, 200);
    }
}

let toggle = true;

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
        document.querySelector('#toggleMode ion-icon').style.transform = "rotate(180deg)"
    }
    else {
        toggle = !toggle

        root.style.setProperty('--primaryMain', black);
        root.style.setProperty('--secondaryMain', white);
        root.style.setProperty('--tetriaryMain', whiteBlack);
        document.querySelector('#toggleMode ion-icon').style.transform = "rotate(0deg)"
    }
}

var englishTrue = false;

function toggleLanguage() {
    englishTrue = !englishTrue
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        toggleMode();
    }
});