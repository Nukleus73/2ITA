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