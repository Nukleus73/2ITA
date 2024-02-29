 // Function to fetch and read JSON file
 function readJSON(filePath, callback) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`[fetchJSON]: HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            callback(null, data);
            console.log(`[fetchJSON]: "${filePath}" successfully fetched!`)
        })
        .catch(error => {
            callback(error, null);
        });
}

// Example usage
// readJSON('path/to/your/file.json', (error, data) => {
//     console.log('JSON data:', data);
// });