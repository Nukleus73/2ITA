//  funksjon for å konvertere en json fil til html kode i et bestemt format.
function jsonToHTML(jsonPath, parentElement) {
  //  async = vent på alt med "await", så gjør resten av koden
  (async () => {
    //  hent ut .JSON filen
    const course = await fetchJSON(jsonPath);

    //  logg hentingen
    console.log(`[jsonToHTML.js]: Successfully fetched (${jsonPath})`);

    course.lessons.forEach((lesson) => {
      let lessonTitle = document.createElement("h5");
      lessonTitle.innerHTML = `${lesson.title}`;
      document.querySelector("#lessonList").appendChild(lessonTitle);
    });

    //  for hver leksjon
    course.lessons.forEach((lesson) => {
      //  lag en kontainer for leksjonen
      let lessonContainer = document.createElement("div");
      lessonContainer.classList.add("lesson");

      // lag en "h3" tag med tittel, fyll den og send den til siden
      let title = document.createElement("h3");
      title.innerHTML = `${lesson.title}`;
      lessonContainer.appendChild(title);

      //  for hvert element i leksjonen
      lesson.content.forEach((content) => {
        let section = document.createElement("section")
        content.section.forEach((element) => {

          //  om elementet er et bilde
          if (element.image) {
            // lag en "figure" tag som en figur
            let figure = document.createElement("figure");

            // lag en "img" tag med bildet, fyll den og send den til siden
            let img = document.createElement("img");
            img.src = `./media/bilder/${element.image}`;
            img.alt = element.caption;
            figure.appendChild(img);

            if (element.caption) {
              // lag en "figcaption" tag med tekst, fyll den og send den til siden
              let caption = document.createElement("figcaption");
              caption.innerHTML = element.caption;
              figure.appendChild(caption);
            }

            //  om bildet er et landskapsbilde, har det storre bredde
            if (element.landscape) {
              figure.classList.add("landscape");
            }

            section.appendChild(figure);
          }

          //  om innholdet er en tekst
          if (element.paragraph) {
            // lag en "p" tag med teksten, fyll den og send den til siden
            let paragraph = document.createElement("p");
            paragraph.innerHTML = element.paragraph;
            section.appendChild(paragraph);
          }

          //  om innholdet er en link
          if (element.link) {
            // lag en "img" tag med bildet, fyll den og send den til siden
            let link = document.createElement("a");
            link.href = element.link;
            link.target = "_blank"
            link.innerHTML = element.tag;
            section.appendChild(link);
          }

          // om det eksisterer en video i json filen
          if (element.video) {
            // lag en "video" tag med video, fyll den og send den til siden
            let video = document.createElement("video");
            video.src = element.video;
            video.controls = true;
            section.appendChild(video);
          }

          if (element.code) {
            let code = document.createElement("code");

            if (element.space) {
                code.style.width = "100%";
            }

            let codeLetters = element.code.split(''); // Split code into lines
            let finishedLetters = '';
            
            // Loop through each letter of the code
            codeLetters.forEach(letter => {
              if (letter == ';' || letter == '{') {
                if (element.textCompile) {
                  letter += '\n';
                }
                else {
                  letter += '<br>';

                }
              }
              if (letter == '|') {
                if (element.textCompile) {
                  letter = '\n';
                }
                else {
                  letter = '<br>';

                }
              }

              finishedLetters += letter
            });
            
            if (element.textCompile) {
              code.innerText = finishedLetters
            }
            else {
              code.innerHTML = finishedLetters
              console.log("elementCOmpiled!")
            }

            section.appendChild(code);
          }

          lessonContainer.appendChild(section);
        });
      });

      //  om det eksisterer oppgaver i json filen
      if (lesson.tasks) {
        //  lag tittel "oppgaver"
        let title = document.createElement("h3");
        title.innerHTML = "Oppgaver";
        lessonContainer.appendChild(title);

        //  teller antall oppgaver
        let taskCounter = 0;
        //  for hvert oppgave
        lesson.tasks.forEach((task) => {
          taskCounter++;

          // lag en "p" tag med oppgaven, fyll den og send den til siden
          let tas = document.createElement("p");
          tas.innerHTML = `<span>Oppgave ${taskCounter}</span>: ${task.task}`;
          lessonContainer.appendChild(tas);
        });
      }
      parentElement.appendChild(lessonContainer);
    });
  })();
}
