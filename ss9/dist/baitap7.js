"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateUser(user, updates) {
    const allowedUpdates = ['name', 'email', 'age'];
    const newUser = { ...user };
    for (const key of allowedUpdates) {
        if (key in updates) {
            newUser[key] = updates[key];
        }
    }
    return newUser;
}
const user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
const updates = {
    name: "Alice Johnson",
};
console.log(updateUser(user, updates));
