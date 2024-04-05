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
        const style = document.createElement('style');

        
        style.textContent = `
          #lessonList h5::after {
            transform: scaleX(0);
          }
        `;
        document.head.appendChild(style);
    });
    lessons[currentLesson].style.display = "block"
    document.querySelectorAll("#lessonList h5")[currentLesson].style.transform = "scaleX(1)"

    //  oppdater kapittellisten
    document.querySelectorAll("#courseNav h4 span")[0].innerHTML = currentLesson + 1;
}