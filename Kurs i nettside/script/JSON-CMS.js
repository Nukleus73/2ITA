function JSON_CMS(JSON_File, sendToObject) {
    // Read JSON data and insert it into the courses div
    readJSON(JSON_File, (error, data) => {

        // Access data and format it as needed
        var coursesDiv = sendToObject;
        var coursesHTML = ''; 

        // Assuming data is an object with kurs property containing kurs objects
        var kurs = data.kurs;

        // Generate HTML for kurs
        coursesHTML += `<h2>${kurs.tittel}</h2>`;
        coursesHTML += `<p>${kurs.intro}</p>`;

        // Loop through leksjoner array
        kurs.leksjoner.forEach(leksjon => {
          // Generate HTML for each leksjon
          coursesHTML += `<div class="leksjon">
                            <h3>${leksjon.tittel}</h3>
                            <p>${leksjon.intro}</p>
                            <video width="320" height "240" controls src=".media/leksjon_1.mp4"></video>
                            `;
                            
          
          // Loop through oppgaver array
          leksjon.oppgaver.forEach(oppgave => {
            // Generate HTML for each oppgave
            coursesHTML += `<div class="oppgave">
                              <h4>${oppgave.tittel}</h4>
                              <p>${oppgave.oppgave}</p>
                            </div>`;
          });

          // Close leksjon div
          coursesHTML += `</div>`;
        });

        // Insert formatted HTML into the courses div
        coursesDiv.innerHTML = coursesHTML;
      });
}