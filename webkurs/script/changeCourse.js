function changeCourse(course) {
  //  nar du bytter kurs, skal leksjoner ga til null
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
      // Retrieve the value of the specified CSS variable
      variableValue = style.getPropertyValue(`--accentVSC`).trim();

      navLinks[0].classList.add("active");

      //  henter .json filen og genererer et kurs i #course
      jsonToHTML("./courses/VSC.json", document.querySelector(".courses"));
      break;

    case "CSS":
      // Retrieve the value of the specified CSS variable
      variableValue = style.getPropertyValue(`--accentCSS`).trim();

      navLinks[1].classList.add("active");

      //  henter .json filen og genererer et kurs i #course
      jsonToHTML("./courses/CSS.json", document.querySelector(".courses"));
      break;

    case "JS":
      // Retrieve the value of the specified CSS variable
      variableValue = style.getPropertyValue(`--accentJS`).trim();

      navLinks[2].classList.add("active");

      jsonToHTML("./courses/JS.json", document.querySelector(".courses"));
      break;

    case "PHP":
      // Retrieve the value of the specified PHP variable
      variableValue = style.getPropertyValue(`--accentPHP`).trim();

      navLinks[3].classList.add("active");

      jsonToHTML("./courses/PHP.json", document.querySelector(".courses"));
      break;
  }

  setTimeout(() => {
    //  start med den første leksjonen
    if (document.querySelectorAll(".lesson").length) {
      document.querySelectorAll(".lesson")[0].style.display = "block";

      //  oppdater kapittellisten
      document.querySelectorAll("#courseNav h4 span")[1].innerHTML =
        document.querySelectorAll(".lesson").length;
      document.querySelectorAll("#courseNav h4 span")[0].innerHTML = 1;
    } else {
      //  om det ikke er noe kapittel, er den blank
      document.querySelectorAll("#courseNav h4 span")[1].innerHTML = "-";
      document.querySelectorAll("#courseNav h4 span")[0].innerHTML = "-";
    }

    document.querySelectorAll("#lessonList h5")[0].classList.add("active");
  }, 50);
  document.querySelector("#lessonList").innerHTML = "";

  // Set the value of variable --blue to another value (in this case "lightblue")
  root.style.setProperty("--accentMain", variableValue);
}
