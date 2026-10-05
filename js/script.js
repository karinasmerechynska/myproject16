// завдання 1
const products = [
    { id: 1, name: "Mouse",price: 25, inStock:true},
    { id: 2, name: "Keyboard", price: 70, inStock: false},
    { id: 3, name: "Monitor", price: 210, inStock: true},
];

const result = products.map(product => {
    if (product.inStock === false) {
        return `${product.name}: $${product.price} (out of stock) `;
    }

    return `${product.name}: $${product.price}`;
});

console.log(result);

// завдання 2
const users = [
    { id: 1, age: 17, active: true, email: "a@mail.com" },
    { id: 2, age: 22, active: true, email: "b@spam.com" },
    { id: 3, age: 30, active: false, email: "c@mail.com"},
    { id: 4, age: 35, active: true, email: "d@mail.com"},
    { id: 5, age: 40, active: true, email: "e@mail.com"},
];

const filteredUsers = users.filter(user => {
    return user.active === true &&
        user.age >= 18 &&
        user.age <= 35 &&
        !user.email.endsWith("@spam.com")
});

console.log(filteredUsers);

// завдання 3
const tx = [
    { id: 1, category: "food", amount: 12 },
    { id: 2, category: "food", amount: 8 },
    { id: 3, category: "taxi", amount: 15 },
    { id: 4, category: "books", amount: 20 },
    { id: 5, category: "taxi", amount: 7 },
];

const groupedTransactions = tx.reduce((acc, transaction) => {
    const category = transaction.category;

    if (!acc[category]) {
        acc[category] = 0;
    }

    acc[category] += transaction.amount;

    return acc;
}, {});

console.log(groupedTransactions);

// завдання 4
const orders = [
    { id: 101, items: [{ sku: "A1", qty: 1 }, { sku: "C3", qty: 2 }] },
    { id: 102, items: [{ sku: "B2", qty: 1 }] },
    { id: 103, items: [{ sku: "B2", qty: 3 }, { sku: "A1", qty: 1 }] },
];

const foundOrder = orders.find(order => {
    return order.items.some(item => item.sku === "B2");
});

console.log(foundOrder);
