"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    stock;
    status;
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    id;
    name;
    contact;
    books;
    status;
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        this.books = [];
    }
}
class LendedBook {
    memberId;
    bookId;
    dueDate;
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    books;
    members;
    lendedBooks;
    constructor() {
        this.books = [];
        this.members = [];
        this.lendedBooks = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        console.log("Danh sach sach trong thu vien:");
        this.books.forEach(b => {
            console.log(`${b.id} - ${b.title} (${b.author}) | So luong: ${b.stock} | Trang thai: ${b.status}`);
        });
    }
}
const library = new Library();
const book1 = new Book(1, "TS", "Nguyen Van A", 5, "Con san");
const book2 = new Book(2, "JAVA", "Tran Van B", 3, "Con san");
library.addBook(book1);
library.addBook(book2);
library.showBooks();
