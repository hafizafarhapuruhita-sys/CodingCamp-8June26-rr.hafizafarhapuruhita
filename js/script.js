const addButton = document.getElementById("addButton");
const transactionName = document.getElementById("transactionName");
const transactionAmount = document.getElementById("transactionAmount");
const transactionCategory = document.getElementById("transactionCategory");
const transactionList = document.getElementById("transactionList");

addButton.addEventListener("click", function () {

    const name = transactionName.value;
    const amount = transactionAmount.value;
    const category = transactionCategory.value;
    if (name === "" || amount === "") {
    alert("Mohon isi nama transaksi dan jumlah.");
    return;
}

    const newItem = document.createElement("li");

    newItem.textContent =
    name + " - Rp" + amount + " (" + category + ")";

    transactionList.appendChild(newItem);
    transactionName.value = "";
    transactionAmount.value = "";

});
