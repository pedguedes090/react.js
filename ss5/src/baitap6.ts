class Book {
    public id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    setTitle(newTitle: string): void {
        this.title = newTitle;
    }

    setAuthor(newAuthor: string): void {
        this.author = newAuthor;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }
}

class Library {
    private books: Book[] = [];

    constructor(books: Book[] = []) {
        this.books = books;
    }

    addBook(newBook: Book): void {
        this.books.push(newBook);
    }

    displayBooks(): void {
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
