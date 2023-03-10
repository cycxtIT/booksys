// Load the XML file
const xmlFile = "books.xml";
const xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", xmlFile, false);
xmlHttp.send();
const xmlDoc = xmlHttp.responseXML;

// Get the book data from the XML file
const books = xmlDoc.getElementsByTagName("book");

// Get the search input and search button elements
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");

// Get the table element and its body element
const table = document.getElementById("book-table");
const tableBody = table.getElementsByTagName("tbody")[0];

// Search function to filter the book data and display the results in the table
function search() {
  // Get the search query
  const query = searchBox.value.trim().toLowerCase();

  // Clear the table body
  tableBody.innerHTML = "";

  // Loop through the book data
  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    // Get the book data
    const title = book.getElementsByTagName("title")[0].textContent.trim().toLowerCase();
    const author = book.getElementsByTagName("author")[0].textContent.trim().toLowerCase();
    const genre = book.getElementsByTagName("genre")[0].textContent.trim().toLowerCase();

    // Check if the book matches the search query
    if (title.indexOf(query) > -1 || author.indexOf(query) > -1 || genre.indexOf(query) > -1) {
      // Create a new row in the table
      const row = tableBody.insertRow(-1);

      // Add the book data to the row
      const titleCell = row.insertCell(0);
      const authorCell = row.insertCell(1);
      const genreCell = row.insertCell(2);

      titleCell.textContent = book.getElementsByTagName("title")[0].textContent.trim();
      authorCell.textContent = book.getElementsByTagName("author")[0].textContent.trim();
      genreCell.textContent = book.getElementsByTagName("genre")[0].textContent.trim();
    }
  }
}

// Add event listeners to the search input and search button elements
searchBox.addEventListener("input", search);
searchBtn.addEventListener("click", search);
