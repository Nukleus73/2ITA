let currentLesson = 0;

function lesson(direction) {
    let lessons = document.querySelectorAll('.lesson')
    switch (direction) {
        case 1:
            currentLesson++
            break;
    
        case -1:
            currentLesson--
            break;
    }

    if (currentLesson >= lessons.length) {
        currentLesson = lessons.length-1;
    }
    if (currentLesson < 0) {
        currentLesson = 0;
    }

    lessons.forEach(lesson => {
        lesson.style.display = "none"
    });
    lessons[currentLesson].style.display = "block"

    //  oppdater kapittellisten
    document.querySelectorAll("#courseNav h4 span")[0].innerHTML = currentLesson + 1;
}