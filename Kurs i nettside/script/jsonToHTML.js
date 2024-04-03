function jsonToHTML(JSON_File, sendToObject) {
    // henter ut .JSON filen og bruker den i funksjonen
    readJSON(JSON_File, (error, data) => {

        // lager variabelen course
        var course = ''; 

        // Generate HTML for course
        course += `<h2>${data.tittel}</h2>`;
        course += `<p>${data.intro}</p>`;

        // Loop through leksjoner array
        data.leksjoner.forEach(leksjon => {
          // Generate HTML for each leksjon
          course += `<div class="lesson" style="display: none;">
                            <h3>${leksjon.tittel}</h3>
                            <p>${leksjon.intro}</p>
                            <video width="320" height "240" controls src=".media/leksjon_1.mp4"></video>
                            `;
                            
          
          leksjon.oppgaver.forEach(oppgave => {
            // Generate HTML for each oppgave
            course += `<div class="task">
                              <h4>${oppgave.tittel}</h4>
                              <p>${oppgave.oppgave}</p>
                            </div>`;
          });

          // Close leksjon div
          course += `</div>`;
        });

        // Insert formatted HTML into the courses div
        sendToObject.innerHTML = course;
      });
}