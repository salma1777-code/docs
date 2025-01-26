document.getElementById("patient-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const table = document.querySelector("#patient-table tbody");

    // Auto-generate Patient ID
    const patientId = "P" + Math.floor(Math.random() * 1000);

    const name = document.getElementById("patient-name").value;
    const age = document.getElementById("patient-age").value;
    const diagnosis = document.getElementById("diagnosis").value;
    const medicine1 = document.getElementById("medicine1").value;

    // Validation
    if (!name || !age || !diagnosis || medicine1 === "-- Select Medicine --") {
        alert("Please fill in all required fields!");
        return;
    }

    // Add row to the table
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${patientId}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>${diagnosis}</td>
        <td>${medicine1}</td>
        <td><button class="delete-btn">Remove</button></td>
    `;

    // Append row to table
    table.appendChild(row);

    // Add delete functionality
    row.querySelector(".delete-btn").addEventListener("click", function () {
        row.remove();
    });

    // Clear form
    document.getElementById("patient-form").reset();
});
