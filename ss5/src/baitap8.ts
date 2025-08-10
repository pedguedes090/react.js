class BookV3 {
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
}

class LibraryV3 {
    private books: BookV3[] = [];

    constructor(books: BookV3[] = []) {
        this.books = books;
    }

    addBook(newBook: BookV3): void {
        this.books.push(newBook);
    }

    displayBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        for (const book of this.books) {
            console.log(`- ${book.getTitle()} (Tác giả: ${book.getAuthor()})`);
        }
    }

    searchBookByTitle(keyword: string): void {
        const foundBooks = this.books.filter(b =>
            b.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );
        if (foundBooks.length > 0) {
            console.log(`Kết quả tìm kiếm với từ khóa "${keyword}":`);
            for (const book of foundBooks) {
                console.log(`- ${book.getTitle()} (Tác giả: ${book.getAuthor()})`);
            }
        } else {
            console.log(`Không tìm thấy sách nào với từ khóa "${keyword}"`);
        }
    }
}

const bookV3_1 = new BookV3(1, "Đắc Nhân Tâm", "Dale Carnegie");
const bookV3_2 = new BookV3(2, "Không Gia Đình", "Hector Malot");
const bookV3_3 = new BookV3(3, "Nhà Giả Kim", "Paulo Coelho");
const bookV3_4 = new BookV3(4, "Tuổi Trẻ Đáng Giá Bao Nhiêu", "Rosie Nguyễn");
const bookV3_5 = new BookV3(5, "Thép Đã Tôi Thế Đấy", "Nikolai Ostrovsky");

const myLibraryV3 = new LibraryV3();
myLibraryV3.addBook(bookV3_1);
myLibraryV3.addBook(bookV3_2);
myLibraryV3.addBook(bookV3_3);
myLibraryV3.addBook(bookV3_4);
myLibraryV3.addBook(bookV3_5);

myLibraryV3.searchBookByTitle("nhà");
