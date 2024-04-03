//  funksjon for å konvertere en json fil til html kode i et bestemt format.
function jsonToHTML(jsonPath, parentElement) {

  //  async = vent på alt med "await", så gjør resten av koden
  (async () => {
    //  hent ut .JSON filen
    const course = await fetchJSON(jsonPath);

    //  logg hentingen
    console.log(`[jsonToHTML.js]: Successfully fetched ${course.title}`);

    course.lessons.forEach(lesson => {
      let lessonTitle = document.createElement("h5");
      lessonTitle.innerHTML = `${lesson.title}`;
      document.querySelector("#lessonList").appendChild(lessonTitle)
    });

    //  hent objektet som alle elmentene skal ligge i
    let courseContainer = parentElement;

    // lag en "h1" tag med tittelen, fyll den og send den til siden
    let title = document.createElement("h1");
    title.innerHTML = `<span>${course.title}</span>`;
    courseContainer.appendChild(title);

    // lag en "h5" tag med intro, fyll den og send den til siden
    let intro = document.createElement("h5");
    intro.innerHTML = `${course.intro}`;
    courseContainer.appendChild(intro);

    //  for hver leksjon
    course.lessons.forEach((lesson) => {

      // lag en "h3" tag med tittel, fyll den og send den til siden
      let title = document.createElement("h3");
      title.innerHTML = `${lesson.title}`;
      courseContainer.appendChild(title);

      //  om det eksisterer bilder i json filen
      if (lesson.texts) {
        //  for hvert bilde
        lesson.texts.forEach(text => {
        // lag en "img" tag med bildet, fyll den og send den til siden
          let tex = document.createElement("p");
          tex.innerHTML = text.text;
          courseContainer.appendChild(tex);
        });
      }

      // om det eksisterer en video i json filen
      if (lesson.video) {
        // lag en "video" tag med video, fyll den og send den til siden
        let video = document.createElement("video");
        video.src = lesson.video;
        video.controls = true;
        courseContainer.appendChild(video);
      }

      //  om det eksisterer bilder i json filen
      if (lesson.images) {
        //  for hvert bilde
        lesson.images.forEach(image => {
        // lag en "img" tag med bildet, fyll den og send den til siden
          let img = document.createElement("img");
          img.src = image.image;
          courseContainer.appendChild(img);
        });
      }

      //  om det eksisterer oppgaver i json filen
      if (lesson.tasks) {
        let taskCounter = 0;
        //  for hvert oppgave
        lesson.tasks.forEach(task => {
          taskCounter++

        // lag en "p" tag med oppgaven, fyll den og send den til siden
          let tas = document.createElement("p");
          tas.innerHTML = `<span>Oppgave ${taskCounter}</span>: ${task.task}`;
          courseContainer.appendChild(tas);
        });
      }

    });
    
  })();
};