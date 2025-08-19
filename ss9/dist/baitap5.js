"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStore {
    data = [];
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
        }
        else {
            console.warn(`Index ${index} is out of bounds.`);
        }
    }
}
const numberStore = new DataStore();
numberStore.add(10);
numberStore.add(20);
numberStore.add(30);
console.log(numberStore.getAll());
numberStore.remove(1);
console.log(numberStore.getAll());
