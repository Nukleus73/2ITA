function changeLesson(lesson) {
    let lessons = document.querySelectorAll('.lesson')
    let lessonTitles = document.querySelectorAll("#lessonList a")

    lessons.forEach(lesson => {
        lesson.style.display = "none"
    });
    lessons[lesson].style.display = "block"


    lessonTitles.forEach(title => {
        if (title.classList.contains("active")) {   
            title.classList.remove("active");
        }
    });
    lessonTitles[lesson].classList.add("active")
}