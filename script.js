const trashIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<line x1="4" y1="7" x2="20" y2="7" />
<line x1="10" y1="11" x2="10" y2="17" />
<line x1="14" y1="11" x2="14" y2="17" />
<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>`

const squareCheck = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checkbox" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<polyline points="9 11 12 14 20 6" />
<path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
</svg>` 

const squareEmpty = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<rect x="4" y="4" width="16" height="16" rx="2" />
</svg>`

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
        ((myLibrary[i].readStatus == 'Yes') ? btnStatus(i, squareCheck) : btnStatus(i, squareEmpty) ) 
        + `<button class= delete  value=${i}> ${trashIcon} </button></td></tr>`;
    };
    bookTable.innerHTML = bookInfo;
}

//create buttons for status
function btnStatus(i, status){
    return `<button class= status value=${i}> ${status} </button></td><td>`
}

//Listen for click of delete button, and deletes the book from library.
document.querySelectorAll(".delete").forEach(i=>i.addEventListener('click', e => { 
    myLibrary.splice(e.currentTarget.value, 1);
    updateLocalStorage()
})); 

//Listen for click of change status button, and changes the status reading.
document.querySelectorAll(".status").forEach(i=>i.addEventListener('click', e => { 
    (myLibrary[e.currentTarget.value].readStatus == 'Yes') ? myLibrary[e.currentTarget.value].readStatus = 'No' : myLibrary[e.currentTarget.value].readStatus = 'Yes'
    updateLocalStorage()
}));