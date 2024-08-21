export class User {
  constructor() {
    this.books = [];
  }

  borrow(book, library) {
    if (library.getBooks().includes(book)) {
      this.books.push(book);

      library.removeBook(book);
    } else {
      console.log(
        `The book called: "${book.name}" is not available in the library.`
      );
    }
  }

  hasBook(book) {
    return this.books.includes(book);
  }

  return(book, library) {
    if (this.books.includes(book)) {
      this.books = this.books.filter((b) => b !== book);

      library.addBook(book);

      return true;
    } else {
      console.log(
        `The book called: "${book.name}" is not available at the user's books list.`
      );

      return false;
    }
  }

  getBookNames() {
    return this.books.map((book) => book.name);
  }
}
