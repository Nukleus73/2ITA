function JSON_CMS(JSON_File, sendToObject) {
    // henter ut .JSON filen og bruker den i funksjonen
    readJSON(JSON_File, (error, data) => {

        // gjør dataen tilgjenelig
        var coursesHTML = ''; 
        var course = data;

        // Generate HTML for course
        coursesHTML += `<h2>${course.tittel}</h2>`;
        coursesHTML += `<p>${course.intro}</p>`;

        // Loop through leksjoner array
        course.leksjoner.forEach(leksjon => {
          // Generate HTML for each leksjon
          coursesHTML += `<div class="lesson" style="display: none;">
                            <h3>${leksjon.tittel}</h3>
                            <p>${leksjon.intro}</p>
                            <video width="320" height "240" controls src=".media/leksjon_1.mp4"></video>
                            `;
                            
          
          leksjon.oppgaver.forEach(oppgave => {
            // Generate HTML for each oppgave
            coursesHTML += `<div class="task">
                              <h4>${oppgave.tittel}</h4>
                              <p>${oppgave.oppgave}</p>
                            </div>`;
          });

          // Close leksjon div
          coursesHTML += `</div>`;
        });

        // Insert formatted HTML into the courses div
        sendToObject.innerHTML = coursesHTML;
      });
}


function JSON_CMS(JSON_File, sendToObject) {
  // henter ut .JSON filen og bruker den i funksjonen
  readJSON(JSON_File, (error, data) => {

      // gjør dataen tilgjenelig
      var coursesHTML = ''; 
      var course = data;

      // Generate HTML for course
      coursesHTML += `<h2>${course.tittel}</h2>`;
      coursesHTML += `<p>${course.intro}</p>`;

      // Loop through leksjoner array
      course.leksjoner.forEach(leksjon => {
          // Generate HTML for each leksjon
          coursesHTML += `<div class="lesson" style="display: none;">
                              <h3>${leksjon.tittel}</h3>
                              <p>${leksjon.intro}</p>`;

          if (leksjon.shortcuts) {
              // Generate HTML for shortcuts
              coursesHTML += `<ul>`;
              leksjon.shortcuts.forEach(shortcut => {
                  coursesHTML += `<li>${shortcut.kommando}: ${shortcut.funksjon}</li>`;
              });
              coursesHTML += `</ul>`;
          }

          if (leksjon.extensions) {
              // Generate HTML for extensions
              coursesHTML += `<ul>`;
              leksjon.extensions.forEach(extension => {
                  coursesHTML += `<li>${extension.navn}: ${extension.beskrivelse}</li>`;
              });
              coursesHTML += `</ul>`;
          }

          // Close leksjon div
          coursesHTML += `</div>`;
      });

      // Insert formatted HTML into the courses div
      sendToObject.innerHTML = coursesHTML;
  });
}


