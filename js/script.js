let transactions = [];
const savedTransactions =
    localStorage.getItem("transactions");
if (savedTransactions) {transactions = JSON.parse(savedTransactions);
}
const addButton = document.getElementById("addButton");
const transactionName = document.getElementById("transactionName");
const transactionAmount = document.getElementById("transactionAmount");
const transactionCategory = document.getElementById("transactionCategory");
const transactionList = document.getElementById("transactionList");

function renderTransactions() {

    transactionList.innerHTML = "";

    let total = 0;

    for (let transaction of transactions) {
        const newItem = document.createElement("li");
        newItem.textContent =
        transaction.name + " - Rp" + transaction.amount + " (" + transaction.category + ")";
        transactionList.appendChild(newItem);
        total += Number(transaction.amount);
    }

    document.getElementById("totalAmount").textContent = "Rp" + total;
}
renderTransactions();
addButton.addEventListener("click", function () {

    const name = transactionName.value;
    const amount = transactionAmount.value;
    const category = transactionCategory.value;
    const transaction = {
    name: name,
    amount: amount,
    category: category
};
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
    Number(totalText.replace("Rp" + total));

currentValue =
    currentValue + Number(amount);

currentTotal.textContent = "Rp" + currentValue;
    transactionName.value = "";
    transactionAmount.value = "";
    
transactions.push(transaction);
    localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
);
    renderTransactions();

});
