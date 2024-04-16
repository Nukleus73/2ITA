function changeCourse(course) {
  currentLesson = 0;

  const root = document.documentElement;
  const style = getComputedStyle(root);
  let variableValue;

  const navLinks = document.querySelectorAll(".courseButton");
  navLinks.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    }
  });

  document.querySelector(".courses").innerHTML = "";

  switch (course) {
    case "VSC":
      variableValue = style.getPropertyValue(`--accentVSC`).trim();
      navLinks[0].classList.add("active");
      jsonToHTML("./courses/VSC.json", document.querySelector(".courses"));
      break;

    case "CSS":
      variableValue = style.getPropertyValue(`--accentCSS`).trim();
      navLinks[1].classList.add("active");
      jsonToHTML("./courses/CSS.json", document.querySelector(".courses"));
      break;

    case "JS":
      variableValue = style.getPropertyValue(`--accentJS`).trim();
      navLinks[2].classList.add("active");
      jsonToHTML("./courses/JS.json", document.querySelector(".courses"));
      break;

    case "PHP":
      variableValue = style.getPropertyValue(`--accentPHP`).trim();
      navLinks[3].classList.add("active");
      jsonToHTML("./courses/PHP.json", document.querySelector(".courses"));
      break;
  }

  // Move setTimeout inside the switch case
  setTimeout(() => {
    if (document.querySelectorAll(".lesson").length) {
      document.querySelectorAll(".lesson")[0].style.display = "block";
      document.querySelectorAll("#lessonNumber span")[1].innerHTML =
        document.querySelectorAll(".lesson").length;
      document.querySelectorAll("#lessonNumber span")[0].innerHTML = 1;
    } else {
      document.querySelectorAll("#lessonNumber span")[1].innerHTML = "-";
      document.querySelectorAll("#lessonNumber span")[0].innerHTML = "-";
    }

    document.querySelectorAll("#lessonList a")[0].classList.add("active");
  }, 20);

  document.querySelector("#lessonList").innerHTML = "";

  root.style.setProperty("--accentMain", variableValue);
}