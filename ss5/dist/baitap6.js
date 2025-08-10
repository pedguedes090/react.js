"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
class Library {
    books = [];
    constructor(books = []) {
        this.books = books;
    }
    addBook(newBook) {
        this.books.push(newBook);
    }
    displayBooks() {
        console.log("Danh sách sách trong thư viện:");
        for (const book of this.books) {
            console.log(`- ${book.getTitle()} (Tác giả: ${book.getAuthor()})`);
        }
    }
}
const book1 = new Book(1, "Đắc Nhân Tâm", "Dale Carnegie");
const book2 = new Book(2, "Không Gia Đình", "Hector Malot");
const book3 = new Book(3, "Nhà Giả Kim", "Paulo Coelho");
const book4 = new Book(4, "Tuổi Trẻ Đáng Giá Bao Nhiêu", "Rosie Nguyễn");
const book5 = new Book(5, "Thép Đã Tôi Thế Đấy", "Nikolai Ostrovsky");
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);
myLibrary.displayBooks();
