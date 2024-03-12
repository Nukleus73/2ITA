function changeCourse(course) {
    const root = document.documentElement;
    const style = getComputedStyle(root);
    let variableValue;

    const navLinks = document.querySelectorAll(".courseButton");

    document.querySelector(".courses").innerHTML = "";

    switch (course) {
        case "VSC":
            // Retrieve the value of the specified CSS variable
            variableValue = style.getPropertyValue(`--accentVSC`).trim();

            navLinks[0].focus();

            //  henter .json filen og genererer et kurs i #course
            JSON_CMS('./courses/VSC.json', document.querySelector('.courses'))
            break;

        case "CSS":
            // Retrieve the value of the specified CSS variable
            variableValue = style.getPropertyValue(`--accentCSS`).trim();

            //  henter .json filen og genererer et kurs i #course
            JSON_CMS('./courses/CSS.json', document.querySelector('.courses'))
            break;

        case "JS":
            // Retrieve the value of the specified CSS variable
            variableValue = style.getPropertyValue(`--accentJS`).trim();

            navLinks[2].focus();

            JSON_CMS('./courses/JS.json', document.querySelector('.courses'))
            break;

        case "PHP":
            // Retrieve the value of the specified PHP variable
            variableValue = style.getPropertyValue(`--accentPHP`).trim();

            JSON_CMS('./courses/PHP.json', document.querySelector('.courses'))
            break;
    };

    // Set the value of variable --blue to another value (in this case "lightblue")
    root.style.setProperty('--accentMain', variableValue);
}