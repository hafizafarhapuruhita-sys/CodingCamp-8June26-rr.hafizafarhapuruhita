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

    for (let i = 0; i < transactions.length; i++) {
        const newItem = document.createElement("li");

newItem.textContent =
transaction.name + " - Rp" +
transaction.amount +
" (" + transaction.category + ") ";

const deleteButton =
document.createElement("button");

deleteButton.textContent =
"Delete";

deleteButton.addEventListener("click", function () {
    transactions.splice(i, 1);
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

    renderTransactions();

});

newItem.appendChild(deleteButton);
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
    transactionName.value = "";
    transactionAmount.value = "";
    
transactions.push(transaction);
    localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
);
    renderTransactions();

});
