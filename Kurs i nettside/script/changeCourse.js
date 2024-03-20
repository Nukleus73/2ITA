function changeCourse(course) {
    const root = document.documentElement;
    const style = getComputedStyle(root);
    let variableValue;

    const navLinks = document.querySelectorAll(".courseButton");
    navLinks.forEach(link => {
        if (link.classList.contains("active")) {
            link.classList.remove("active");
        }
    });

    document.querySelector(".courses").innerHTML = "";

    switch (course) {
        case "VSC":
            // Retrieve the value of the specified CSS variable
            variableValue = style.getPropertyValue(`--accentVSC`).trim();

            navLinks[0].classList.add("active")

            //  henter .json filen og genererer et kurs i #course
            JSON_CMS('./courses/VSC.json', document.querySelector('.courses'))
            break;

        case "CSS":
            // Retrieve the value of the specified CSS variable
            variableValue = style.getPropertyValue(`--accentCSS`).trim();

            navLinks[1].classList.add("active")

            //  henter .json filen og genererer et kurs i #course
            JSON_CMS('./courses/CSS.json', document.querySelector('.courses'))
            break;

        case "JS":
            // Retrieve the value of the specified CSS variable
            variableValue = style.getPropertyValue(`--accentJS`).trim();

            navLinks[2].classList.add("active")

            JSON_CMS('./courses/JS.json', document.querySelector('.courses'))
            break;

        case "PHP":
            // Retrieve the value of the specified PHP variable
            variableValue = style.getPropertyValue(`--accentPHP`).trim();

            navLinks[3].classList.add("active")

            JSON_CMS('./courses/PHP.json', document.querySelector('.courses'))
            break;
    };

    setTimeout(() => {
        //  start med den første leksjonen
        document.querySelectorAll(".lesson")[0].style.display = "block";

        //  oppdater kapittellisten
        document.querySelectorAll("#courseNav h4 span")[1].innerHTML = document.querySelectorAll(".lesson").length
        document.querySelectorAll("#courseNav h4 span")[0].innerHTML = 1;
    }, 20);

    // Set the value of variable --blue to another value (in this case "lightblue")
    root.style.setProperty('--accentMain', variableValue);
}