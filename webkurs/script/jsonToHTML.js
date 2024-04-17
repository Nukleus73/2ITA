function jsonToHTML(jsonPath, parentElement) {
  return new Promise((resolve, reject) => {
    // async function to fetch JSON and generate HTML
    (async () => {
      try {
        const course = await fetchJSON(jsonPath);
        console.log(`[jsonToHTML.js]: Successfully fetched (${jsonPath})`);

        course.lessons.forEach((lesson, index) => {
          let lessonTitle = document.createElement("a");
          lessonTitle.innerHTML = `${lesson.title}`;
          lessonTitle.href = "#";
          lessonTitle.onclick = function (lessonIndex) {
            return function() { 
              changeLesson(lessonIndex);
            };
          }(index); // Immediately invoked function to create a closure
          document.querySelector("#lessonList").appendChild(lessonTitle);
        });    

        course.lessons.forEach((lesson) => {
          let lessonContainer = document.createElement("div");
          lessonContainer.classList.add("lesson");
          let title = document.createElement("h3");
          title.innerHTML = `${lesson.title}`;
          lessonContainer.appendChild(title);

          lesson.content.forEach((content) => {
            let section = document.createElement("section")
            content.section.forEach((element) => {
              
              if (element.image) {
                let figure = document.createElement("figure");
                let img = document.createElement("img");
                img.src = `./media/bilder/${element.image}`;
                img.alt = element.caption;
                figure.appendChild(img);
                if (element.caption) {
                  let caption = document.createElement("figcaption");
                  caption.innerHTML = element.caption;
                  figure.appendChild(caption);
                }
                if (element.landscape) {
                  figure.classList.add("landscape");
                }
                section.appendChild(figure);
              }

              if (element.paragraph) {
                let paragraph = document.createElement("p");
                paragraph.innerHTML = element.paragraph;
                section.appendChild(paragraph);
              }

              if (element.link) {
                let link = document.createElement("a");
                link.href = element.link;
                link.target = "_blank"
                link.innerHTML = element.tag;
                section.appendChild(link);
              }

              if (element.video) {
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
                let codeLetters = element.code.split('');
                let finishedLetters = '';
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
                }
                if (element.landscape) {
                  code.classList.add("landscape");
                }
                section.appendChild(code);
              }
              lessonContainer.appendChild(section);
            });
          });
          if (lesson.tasks) {
            let title = document.createElement("h3");
            title.innerHTML = "Oppgaver";
            lessonContainer.appendChild(title);
            let taskCounter = 0;
            lesson.tasks.forEach((task) => {
              taskCounter++;
              let tas = document.createElement("p");
              tas.innerHTML = `<span>Oppgave ${taskCounter}</span>: ${task.task}`;
              lessonContainer.appendChild(tas);
            });
          }
          parentElement.appendChild(lessonContainer);
        });
        resolve(); // Resolve the promise when finished
      } catch (error) {
        reject(error); // Reject the promise if there's an error
      }
    })();
  });
}