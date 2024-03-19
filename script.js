// Get the input element and table
const searchInput = document.getElementById('searchInput');
const dataTable = document.getElementById('dataTable');
const tableRows = dataTable.getElementsByTagName('tr');

// Add event listener for input changes
searchInput.addEventListener('input', function() {
  const searchText = this.value.toLowerCase();
  
  // Loop through all table rows
  for (let i = 1; i < tableRows.length; i++) {
    const rowData = tableRows[i].getElementsByTagName('td');
    let found = false;
    
    // Loop through the table data of each row
    for (let j = 0; j < rowData.length; j++) {
      const cellData = rowData[j].textContent.toLowerCase();
      
      // Check if the search text is found in any cell
      if (cellData.includes(searchText)) {
        found = true;
        break;
      }
    }
    
    // it will show or hide the row based on search result
    if (found) {
      tableRows[i].style.display = '';
    } else {
      tableRows[i].style.display = 'none';
    }
  }
});

  