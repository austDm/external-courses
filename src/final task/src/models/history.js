class History {
    constructor(book) {
        this.book = {};
        this.date = Date.now();
        Object.assign(this.book, book);
    }
}