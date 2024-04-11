// Function to fetch and read JSON file
async function fetchJSON(jsonFile) {
  const response = await fetch(jsonFile);
  const jsonData = await response.json();

  return jsonData;
}