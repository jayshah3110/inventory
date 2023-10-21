// Sample inventory data
let inventory = [];

// Function to add an item to the inventory
function addItem() {
    const itemName = document.getElementById("itemName").value;
    const quantity = parseInt(document.getElementById("quantity").value);

    if (itemName && !isNaN(quantity) && quantity > 0) {
        inventory.push({ name: itemName, qty: quantity });
        displayInventory();
        clearForm();
    }
}

// Function to display the inventory list
function displayInventory() {
    const inventoryList = document.getElementById("inventoryList");
    inventoryList.innerHTML = "";

    inventory.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `Item: ${item.name}, Quantity: ${item.qty}`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteItem(index));
        li.appendChild(deleteButton);
        inventoryList.appendChild(li);
    });
}

// Function to delete an item from the inventory
function deleteItem(index) {
    inventory.splice(index, 1);
    displayInventory();
}

// Function to clear the form
function clearForm() {
    document.getElementById("itemName").value = "";
    document.getElementById("quantity").value = "";
}

// Initial display
displayInventory();
