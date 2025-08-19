class DataStore<T> {
  private data: T[] = [];
  add(item: T): void {
    this.data.push(item);
  }
  getAll(): T[] {
    return this.data;
  }
  remove(index: number): void {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
    } else {
      console.warn(`Index ${index} is out of bounds.`);
    }
  }
}
const numberStore = new DataStore<number>();

numberStore.add(10);
numberStore.add(20);
numberStore.add(30);

console.log(numberStore.getAll());

numberStore.remove(1);

console.log(numberStore.getAll());