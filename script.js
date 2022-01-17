let myLibrary = [];
let book = [
    {title: "some book", author: "some author", readStatus: "no"},
    {title: "some book2", author: "some author2", readStatus: "yes"}
];
/*function Book (title, author, readStatus){
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
}*/

/*var theHobbit = new Book ('The Hobbit', 'J.R.R. Tolkien', 'not read');*/

let bookTitle = document.getElementById('input-title');
let bookAuthor = document.getElementById('input-author');
let bookCheck = document.getElementById('input-check');


function addBookToLibrary() {
    //do stuff here
}


window.onload = displayBooks;

function displayBooks() {
    let bookTable = document.getElementById("book-table");
    let bookInfo= "";
    
    book.forEach((book)=>{
        bookInfo = "<tr><td>" + book.title + "</td><td>" + book.author + "</td><td>" + book.readStatus + "</td></tr>";
    });

    bookTable.innerHTML = bookInfo;
}