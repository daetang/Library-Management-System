class Book {
    #isbn
    constructor(title, author, isbn, available){
        this.title = title;
        this.author = author;
        this.#isbn = isbn;
        this.available = true;
    }
    get isbn() {
        return this.#isbn
    }

    set isbn(value) {
        throw new Error('ISBN cannot be modified.')
    }
    borrowBook() {
        if (this.available){
            this.available = false;
        }else {
            console.log(`the "${this.title}" by "${this.author}" with "${this.isbn}" is not available`);
        }
    }
        returnBook() {
                this.available = true;
                console.log( `the "${this.title}" by "${this.author}" with "${this.isbn}" is now available`);
            }
        }
const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', '978-0061120084');
console.log(book1.returnBook());
console.log(book1.borrowBook());

class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        if (book instanceof Book) {
            this.books.push(book);
            console.log(`"${book.title}" has been addedto the library.`)
        } else {
            console.log("The item added is not a Book instance.")
        }
    }

    removeBook(isbn) {
        const index = this.books.findIndex(book => book.isbn === isbn);
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1)[0];
            console.log(`"${removedBook.title}" has been removed from the liibrary.`);
        
        } else {
            console.log("Book not found.");
        }
    }

    findBookByTitle(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            return book;
        } else {
            console.log("Book not found.");
            return null;
        }
    }
}
class DigitalLibrary extends Library {
    constructor() {
        super();
    }

    downloadBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book) {
            if (book.available) {
            console.log(`Downloading '${book.title}'...`)
        } else {
            console.log(`'${book.title}' is not available for download`)
        }
        } else {
            console.log(`No book with ISBN ${isbn} found in the library.`)
        }
    }
}
