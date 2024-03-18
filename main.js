document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("loadAPI").addEventListener("click", function() {
        // fetch data from API
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(data => {
            // get JSON object keys
            var keys = ['userId', 'id', 'title', 'completed'];

            //create table
            var table = document.createElement("table");

            // create header rows
            var tableHeaderRow = document.createElement("tr");
            keys.forEach(function(key) {
                var th = document.createElement("th");
                if (key === 'userId') th.textContent = "User ID";
                else if (key === 'id') th.textContent = "Task ID";
                else if (key === 'title') th.textContent = "Title";
                else if (key === 'completed') th.textContent = "Status";
                tableHeaderRow.appendChild(th);
            });
            table.appendChild(tableHeaderRow);

            // create table body rows
            data.forEach(function(item) {
                var row = document.createElement("tr");
                keys.forEach(function(key) {
                    var cell = document.createElement("td");
                    // set status name
                    if (key === 'completed') {
                        cell.textContent = item[key] ? 'Completed' : 'Not yet Completed';
                    } else {
                        cell.textContent = item[key];
                    }
                    // font color base on status
                    if (key === 'completed') {
                        cell.style.color = item[key] ? 'green' : 'red';
                    }
                    row.appendChild(cell);
                });
                table.appendChild(row);
            });

            // adds my table to the container
            var tableContainer = document.getElementById("tableContainer");
            tableContainer.appendChild(table);
        })
        .catch(error => console.error('Error fetching data:', error));
    });
    document.getElementById("clearTable").addEventListener("click", function() {
        var tableContainer = document.getElementById("tableContainer");
        tableContainer.innerHTML = ""; //clears my table content
    });
});