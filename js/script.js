let transactions = [];
const savedTransactions = localStorage.getItem("transactions");
if (savedTransactions) {transactions = JSON.parse(savedTransactions);
}
const addButton = document.getElementById("addButton");
const transactionName = document.getElementById("transactionName");
const transactionAmount = document.getElementById("transactionAmount");
transactionAmount.addEventListener("input", function () {
    let value = transactionAmount.value;
    value = value.replace(/\D/g, "");
    transactionAmount.value =
        Number(value).toLocaleString("id-ID");
});
const transactionCategory = document.getElementById("transactionCategory");
const newCategory = document.getElementById("newCategory");
const addCategoryButton = document.getElementById("addCategoryButton");
let categories =
    ["Food", "Transport", "Fun"];
const savedCategories =
    localStorage.getItem("categories");
if (savedCategories) {
    categories = JSON.parse(savedCategories);
}
function renderCategories() {
    transactionCategory.innerHTML = "";
    for (let category of categories) {
        const option = document.createElement("option");
        option.textContent = category;
        transactionCategory.appendChild(option);
    }
}
const transactionList = document.getElementById("transactionList");
const themeButton = document.getElementById("themeButton");
const spendingLimit = document.getElementById("spendingLimit");
const savedLimit = localStorage.getItem("spendingLimit");
if (savedLimit) {
    spendingLimit.value = savedLimit;
}
spendingLimit.addEventListener("input", function () {
    let value = spendingLimit.value;
    value = value.replace(/\D/g, "");
    spendingLimit.value = Number(value).toLocaleString("id-ID");
    localStorage.setItem("spendingLimit",spendingLimit.value
    );
    renderTransactions();
});
    let chart;
    function renderChart() {
    const categoryTotals = {};
    for (let transaction of transactions) {
        const category = transaction.category;
        if (!categoryTotals[category]) {
            categoryTotals[category] = 0;
        }
        categoryTotals[category] +=
            Number(transaction.amount);
    }
    const labels =
        Object.keys(categoryTotals);
    const values =
        Object.values(categoryTotals);
    const ctx =
        document
        .getElementById("expenseChart")
        .getContext("2d");
    if (chart) {
        chart.destroy();
    }
    chart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
            data: values
            }]
        }
    });
}
function renderTransactions() {
    transactionList.innerHTML = "";
    let total = 0;
    for (let i = 0; i < transactions.length; i++) {
        const transaction = transactions[i];
        const newItem = document.createElement("li");
const limit = Number(document.getElementById("spendingLimit").value.replace(/\./g, "")
    );
if (limit > 0 && Number(transaction.amount) > limit
) {
    newItem.classList.add("over-limit");
}
newItem.classList.add("transaction-item");
        const deleteButton =
    document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
    transactions.splice(i, 1);
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
    renderCategories();
    renderTransactions();
    renderChart();
});
        const textSpan = document.createElement("span");
textSpan.textContent =
    transaction.name + " - Rp" + Number(transaction.amount).toLocaleString("id-ID") + " (" + transaction.category + ")";
        newItem.appendChild(textSpan);
        newItem.appendChild(deleteButton);
        transactionList.appendChild(newItem);
        total += Number(transaction.amount);
    }

    document.getElementById("totalAmount").textContent = "Rp" + total.toLocaleString("id-ID");
}
renderTransactions();
renderChart();
const savedTheme =
    localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent =
        "Light Mode";
}
addButton.addEventListener("click", function () {
    const name = transactionName.value;
    const amount = transactionAmount.value.replace(/\./g, "");
    const category = transactionCategory.value;
    const transaction = {
    name: name,
    amount: amount,
    category: category
};
    if (name === "" || amount === "") {
    alert("Please fill in the item name and amount.");
    return;
}
    transactionName.value = "";
    transactionAmount.value = "";
    
transactions.push(transaction);
    localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
);
    renderTransactions();
    renderChart();
});
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {
        themeButton.textContent =
            "Light Mode";
        localStorage.setItem(
            "theme",
            "dark"
        );
    } else {
        themeButton.textContent =
            "Dark Mode";
        localStorage.setItem(
            "theme",
            "light"
        );
    }
});
addCategoryButton.addEventListener(
    "click",
    function () {
        const categoryName = newCategory.value.trim();
        if (categoryName === "") {
            alert(
                "Please enter a category."
            );
            return;
        }
        categories.push(categoryName);
        localStorage.setItem(
            "categories",
            JSON.stringify(categories)
        );
        renderCategories();
        newCategory.value = "";
    }
);
