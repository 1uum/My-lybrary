let myLibrary = [];

function Book (title, author, readStatus){
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
}

addBookToLibrary ('The Hobbit', 'J.R.R. Tolkien', 'No');


let checkBox = document.getElementById("input-check");
checkBox.addEventListener('click', function(){});

let addBook = document.getElementById('form').addEventListener('submit', (e) => {
    let newBookTitle = document.getElementById("input-title").value;
    let newBookAuthor = document.getElementById("input-author").value;
    e.preventDefault();
    if (checkBox.checked){
        newBookStatus = 'Yes';
    } else{
        newBookStatus = 'No';
    }
    if(newBookTitle !== '' && newBookAuthor !== ''){
        addBookToLibrary(newBookTitle, newBookAuthor, newBookStatus);
    }   else{
        alert('Please complete all of the fields');
    }
    form.reset();
});

function addBookToLibrary(bookTitle, bookAuthor, bookStatus) {
    let book = new Book (bookTitle, bookAuthor, bookStatus);
    myLibrary.push(book);
    displayBooks();
}


//window.onload = displayBooks();

function displayBooks() {
    let bookTable = document.getElementById("book-table");
    let bookInfo= "";
    
    console.log(myLibrary);
    for (let i = 0; i < myLibrary.length; i++){
        bookInfo += "<tr><td>" + myLibrary[i].title + "</td><td>" + myLibrary[i].author + "</td><td>" + myLibrary[i].readStatus + "</td></tr>";
    };
    bookTable.innerHTML = bookInfo;
}