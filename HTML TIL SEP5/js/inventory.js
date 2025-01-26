// Dummy Inventory Data
const inventory = [
    { name: "Paracetamol", id: "M001", quantity: 50, barcode: "12345678901234", expiry: "2024-12-01", minStock: 10 },
    { name: "Ibuprofen", id: "M002", quantity: 20, barcode: "23456789012345", expiry: "2024-10-15", minStock: 15 },
    { name: "Amoxicillin", id: "M003", quantity: 30, barcode: "34567890123456", expiry: "2024-09-01", minStock: 10 }
];

// Upcoming Orders
let orders = [];

// Populate Inventory Table
function populateInventoryTable() {
    const table = document.getElementById("inventoryTable");
    table.innerHTML = "";
    inventory.forEach(med => {
        const row = `<tr>
            <td>${med.name}</td>
            <td>${med.id}</td>
            <td>${med.quantity}</td>
            <td>${med.barcode}</td>
            <td>${med.expiry}</td>
            <td>${med.minStock}</td>
        </tr>`;
        table.innerHTML += row;
    });
}

// Populate Medicine Dropdown
function populateMedicineDropdown() {
    const dropdown = document.getElementById("medicineSelect");
    dropdown.innerHTML = "";
    inventory.forEach(med => {
        dropdown.innerHTML += `<option value="${med.id}">${med.name}</option>`;
    });
}

// Dispense Medicine
function dispenseMedicine() {
    const selectedID = document.getElementById("medicineSelect").value;
    const quantity = parseInt(document.getElementById("quantityInput").value);
    const medicine = inventory.find(med => med.id === selectedID);

    if (medicine && quantity > 0) {
        medicine.quantity -= quantity;
        if (medicine.quantity <= medicine.minStock) {
            orders.push({ name: medicine.name, quantity: 20, id: medicine.id }); // Auto order
        }
        populateInventoryTable();
        populateOrdersTable();
    }
}


function populateOrdersTable() {
    const table = document.getElementById("ordersTable");
    table.innerHTML = "";
    orders.forEach((order, index) => {
        table.innerHTML += `<tr>
            <td>${order.name}</td>
            <td>${order.quantity}</td>
            <td>${order.id}</td>
            <td><button onclick="addToInventory(${index})">Add to Inventory</button></td>
        </tr>`;
    });
}

// Add Order to Inventory
function addToInventory(orderIndex) {
    const order = orders[orderIndex];
    const medicine = inventory.find(med => med.id === order.id);

    if (medicine) {
        medicine.quantity += order.quantity; // Add the ordered quantity to inventory
        orders.splice(orderIndex, 1); // Remove the order from orders list
        populateInventoryTable();
        populateOrdersTable();
    }
}

// Initialization
populateInventoryTable();
populateMedicineDropdown();
document.getElementById("dispenseBtn").addEventListener("click", dispenseMedicine);
