class BookV2 {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    getId(): number {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    setTitle(newTitle: string): void {
        this.title = newTitle;
    }
    setAuthor(newAuthor: string): void {
        this.author = newAuthor;
    }
}

class LibraryV2 {
    private books: BookV2[] = [];

    constructor(books: BookV2[] = []) {
        this.books = books;
    }

    addBook(newBook: BookV2): void {
        this.books.push(newBook);
    }
    displayBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        for (const book of this.books) {
            console.log(`- ${book.getTitle()} (Tác giả: ${book.getAuthor()})`);
        }
    }
    updateBook(id: number, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            console.log(`Đã cập nhật sách có ID ${id}`);
        } else {
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
