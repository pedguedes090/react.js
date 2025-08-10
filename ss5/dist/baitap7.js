"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BookV2 {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
}
class LibraryV2 {
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
    updateBook(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            console.log(`Đã cập nhật sách có ID ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }
}
const bookV2_1 = new BookV2(1, "Đắc Nhân Tâm", "Dale Carnegie");
const bookV2_2 = new BookV2(2, "Không Gia Đình", "Hector Malot");
const bookV2_3 = new BookV2(3, "Nhà Giả Kim", "Paulo Coelho");
const bookV2_4 = new BookV2(4, "Tuổi Trẻ Đáng Giá Bao Nhiêu", "Rosie Nguyễn");
const bookV2_5 = new BookV2(5, "Thép Đã Tôi Thế Đấy", "Nikolai Ostrovsky");
const myLibraryV2 = new LibraryV2();
myLibraryV2.addBook(bookV2_1);
myLibraryV2.addBook(bookV2_2);
myLibraryV2.addBook(bookV2_3);
myLibraryV2.addBook(bookV2_4);
myLibraryV2.addBook(bookV2_5);
myLibraryV2.updateBook(3, "Nhà Giả Kim - Bản Mới", "Paulo Coelho (Bản Sửa)");
console.log("Danh sách sau khi thay đổi:");
myLibraryV2.displayBooks();
