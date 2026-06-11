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
    const currentTotal =
    document.getElementById("totalAmount");

let totalText =
    currentTotal.textContent;

let currentValue =
    Number(totalText.replace("Total Pengeluaran: Rp",""));

currentValue =
    currentValue + Number(amount);

currentTotal.textContent = "Total Pengeluaran: Rp" + currentValue;
    transactionName.value = "";
    transactionAmount.value = "";

});
