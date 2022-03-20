let myLibrary = [];

class Book {
    constructor (title, author, readStatus){
        this.title = title;
        this.author = author;
        this.readStatus = readStatus;
    }
}
checkLocalStorage();

function checkLocalStorage(){
    if(localStorage.getItem('bookLibrary')!== null){
        storageLibrary = JSON.parse(localStorage.getItem("bookLibrary"));
        myLibrary = storageLibrary;
        window.onload = displayBooks();
    } else{
        myLibrary=[
            {title: "The Hobbit", author: "J.R.R. Tolkien", readStatus: "No"},
            {title: "Don Quixote", author: "Miguel de Cervantes", readStatus: "Yes"},
            {title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", readStatus: "Yes"},
        ];
        updateLocalStorage()
    }
}

function updateLocalStorage(){
    localStorage.setItem("bookLibrary", JSON.stringify(myLibrary));
    location.reload();
}

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
    updateLocalStorage();
    displayBooks();
}

function displayBooks() {
    let bookTable = document.getElementById("book-table");
    let bookInfo= "";
    
    for (let i = 0; i < myLibrary.length; i++){
        bookInfo += "<tr><td>" + 
        myLibrary[i].title + "</td><td>" + 
        myLibrary[i].author + "</td><td>" + 
        ((myLibrary[i].readStatus == 'Yes') ? "✅" : "❎" ) + "</td><td>" + 
        '<button class= "bttnStatus" '+" value="+ i + '>Change Status</button>' + "</td><td>" +
        '<button class= "bttnDelete" '+" value="+ i + '>🗑️</button>'+ "</td></tr>";
    };
    bookTable.innerHTML = bookInfo;
}

//Listen for click of delete button, and deletes the book from library.
document.querySelectorAll(".bttnDelete").forEach(i=>i.addEventListener('click', e => { 
    myLibrary.splice(e.currentTarget.value,1);
    updateLocalStorage();
})); 
//Listen for click of change status button, and changes the status reading.
document.querySelectorAll(".bttnStatus").forEach(i=>i.addEventListener('click', e => { 
    if (myLibrary[e.currentTarget.value].readStatus == 'Yes') {
        myLibrary[e.currentTarget.value].readStatus = 'No' ; 
    } else{
        myLibrary[e.currentTarget.value].readStatus = 'Yes'
    }
    updateLocalStorage();
})); 