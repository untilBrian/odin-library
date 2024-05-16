// display books (with title, author, page count, read status)
// add book functionality
// remove book functionality
// change read status

//user adds a book
//book is added to myLibrary
//book is appended to book-shelf

const myLibrary = [];

function displayBooks(){
    const bookshelf = document.querySelector("#book-shelf");
    bookshelf.innerHTML = "";
    for (i = 0; i < myLibrary.length; i++){
        bookshelf.appendChild(myLibrary[i]);
        myLibrary[i].id = i;
    }

}

function Book(title, author, pageCount){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = false;
}

function addBookToLibrary(title, author, pageCount){
    const bookObject = new Book(title, author, pageCount);
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.id = myLibrary.indexOf(bookObject);

    const bookTitle = document.createElement("div");
    bookElement.appendChild(bookTitle);
    bookTitle.textContent = bookObject.title;
    bookTitle.classList.add("book-title");

    const bookAuthor = document.createElement("div");
    bookElement.appendChild(bookAuthor);
    bookAuthor.textContent = bookObject.author;
    bookAuthor.classList.add("book-author");

    const bookPageCount = document.createElement("div");
    bookElement.appendChild(bookPageCount);
    bookPageCount.textContent = bookObject.pageCount;
    bookPageCount.classList.add("book-page-count");

    const bookReadStatus = document.createElement("div");
    bookElement.appendChild(bookReadStatus);
    bookReadStatus.textContent = "Read Status: " + bookObject.readStatus;
    bookReadStatus.classList.add("book-read-status");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    bookElement.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        const index = myLibrary.indexOf(bookElement);
        myLibrary.splice(index, 1);
        displayBooks();
    });

    const readStatusButton = document.createElement("button");
    readStatusButton.textContent = "Change Read Status";
    readStatusButton.classList.add("read-status-button");
    bookElement.appendChild(readStatusButton);
    readStatusButton.addEventListener("click", () => {
        bookObject.readStatus = true;
        bookReadStatus.textContent = "Read Status: " + bookObject.readStatus;
        displayBooks();
    });

    myLibrary.push(bookElement);
    displayBooks();
}

function getBookFromUser(){
    const title = prompt("Enter the title of the book:");
    const author = prompt("Enter the author of the book:");
    const pageCount = prompt("Enter the page count of the book:");
    addBookToLibrary(title, author, pageCount);
    console.log("Book with title " + bookObject.title + " and author " + bookObject.author + " and page count " + bookObject.pageCount + " has been added to the library.");
}

const addBookButton = document.querySelector("#add-book-button");
addBookButton.addEventListener("click", getBookFromUser);

