// Design the data structures for an online book reader system.

let BookReader = function(){
    this.currentBook = null;
    this.books = {};
};

BookReader.prototype.add = function(book){
    this.books[book.name] = book;
};

BookReader.prototype.find = function(bookname){
    return this.books[bookname];
};

BookReader.prototype.open = function(bookname){
    this.currentBook = this.books[bookname];
    return this.currentBook.file;
};

let Book = function(name, file){
    this.name = name;
    this.file = file;
};
