function changeLesson(lesson) {
  let lessons = document.querySelectorAll(".lesson");
  let lessonTitles = document.querySelectorAll("#lessonList a");

  lessons.forEach((lesson) => {
    lesson.style.display = "none";
  });
  lessons[lesson].style.display = "block";

  lessonTitles.forEach((title) => {
    if (title.classList.contains("active")) {
      title.classList.remove("active");
    }
  });
  document.querySelector(".courses").scrollTop = 0;
  lessonTitles[lesson].classList.add("active");
  document.querySelectorAll("#lessonNumber span")[0].innerHTML = lesson+1

  // Loop through each video element and pause it
  document.querySelectorAll("video").forEach(function (video) {
    video.pause();
  });
}
