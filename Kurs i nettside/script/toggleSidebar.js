function toggleSidebar() {
    let lessonsElement = document.getElementById('lessons');
    let courseElement = document.getElementById('courseWrapper');
    if (lessonsElement.style.width === '100%' || lessonsElement.style.width === '20%' || lessonsElement.style.width === '') {
        document.getElementById('menuIcon').style.transform = "rotate(180deg)"
        lessonsElement.style.width = '0'; // Adjust the original width as needed
        courseElement.style.width = '100%';
    } else {
        document.getElementById('menuIcon').style.transform = "rotate(0deg)"

        if (window.innerWidth <= 768) {
            lessonsElement.style.width = '100%';
            courseElement.style.width = '0%';
        }
        else {
            lessonsElement.style.width = '20%';
        }
    }
}

if (window.innerWidth <= 768) {
    toggleSidebar();
}