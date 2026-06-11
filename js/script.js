const addButton = document.getElementById("addButton");
const transactionName = document.getElementById("transactionName");
const transactionAmount = document.getElementById("transactionAmount");
const transactionList = document.getElementById("transactionList");

addButton.addEventListener("click", function () {

    const name = transactionName.value;
    const amount = transactionAmount.value;

    const newItem = document.createElement("li");

    newItem.textContent = name + " - Rp" + amount;

    transactionList.appendChild(newItem);

});
