function loadTable(dataToDisplay) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  if (dataToDisplay.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="9">No data found</td></tr>`;
    return;
  }

  for (let i = 0; i < dataToDisplay.length; i++) {
    const item = dataToDisplay[i];
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.phone}</td>
          <td>${item.pickUpLocation}</td>
          <td>${item.pickUpDate}</td>
          <td>${item.dropOffLocation}</td>
          <td>${item.dropOffDate}</td>
          <td>${item.carType}</td>
          <td>${item.passengers}</td>
        `;
    tableBody.appendChild(row);
  }
}

function searchTable() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  const allData = JSON.parse(localStorage.getItem("dataair")) || [];

  const filteredData = allData.filter(function (item) {
    return Object.values(item).some(function (value) {
      return value.toString().toLowerCase().includes(searchInput);
    });
  });

  loadTable(filteredData);
}

document.getElementById("searchInput").addEventListener("input", searchTable);
