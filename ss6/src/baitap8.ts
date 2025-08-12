class Book {
    id: number | string;
    title: string;
    author: string;
    stock: number;
    status: string;

    constructor(id: number | string, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}

class Member {
    id: number | string;
    name: string;
    contact: string;
    books: Book[];
    status: string;

    constructor(id: number | string, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        this.books = [];
    }
}

class LendedBook {
    memberId: number | string;
    bookId: number | string;
    dueDate: Date;

    constructor(memberId: number | string, bookId: number | string, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}

class Library {
    books: Book[];
    members: Member[];
    lendedBooks: LendedBook[];

    constructor() {
        this.books = [];
        this.members = [];
        this.lendedBooks = [];
    }

    addBook(book: Book) {
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