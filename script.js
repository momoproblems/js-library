'use strict'
document.addEventListener('DOMContentLoaded', function() {

// navbar toggle button ------------------------------------------
const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navBarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', function() {
    return navBarLinks.classList.toggle('active');
});

// add book button ----------------------------------------------
const addBookButton = document.getElementById('add-book-button');
const bookCardForm = document.getElementById('book-card-wrapper');
const blurBackground = document.getElementById('blur');
let isFormOpen = false;

function openForm() {
    bookCardForm.classList.add('active');
    blurBackground.classList.add('active');
    isFormOpen = true;
}

function closeForm() {
    bookCardForm.classList.remove('active');
    blurBackground.classList.remove('active');
    readStatusNo.classList.remove('active');
    readStatusYes.classList.remove('active');
    isFormOpen = false;
    bookCardForm.reset();
}

addBookButton.addEventListener('click', function () {
  if (isFormOpen) {
    closeForm();
  } else {
    openForm();
  }
});

window.addEventListener("click", function (event) {
  if (event.target !== addBookButton && !bookCardForm.contains(event.target)) {
    closeForm();
  }
});

// book card class -----------------------------------------------
class Book {
    constructor(title=null, author=null, pages=0, read=false) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

// get read status -----------------------------------------------
const readStatusYes = document.getElementById('form-read-yes');
const readStatusNo = document.getElementById('form-read-no');

readStatusYes.addEventListener('click', function() {
    readStatusYes.classList.add('active');
    readStatusNo.classList.remove('active');
});

readStatusNo.addEventListener('click', function() {
    readStatusNo.classList.add('active');
    readStatusYes.classList.remove('active');
});

// submit book card ----------------------------------------------
bookCardForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('form-title').value;
    const author = document.getElementById('form-author').value;
    const pages = document.getElementById('form-pages').value;
    var read;

    if (readStatusYes.classList.contains('active')) {
        read = true;
    }
    else {
        read = false;
    }
    
    const newBook = new Book(title, author, pages, read);
    console.log(newBook);

    bookCardForm.reset();
    closeForm();
    readStatusYes.classList.remove('active');
    readStatusNo.classList.remove('active');
});
});

// Read status toggle for card -----------------------------------
const readStatusToggle = document.getElementById('readStatusToggle');

readStatusToggle.addEventListener('click', function() {
    if (readStatusToggle.innerText === "Read") {
        readStatusToggle.innerText = "Not Read";
        readStatusToggle.style.backgroundColor = "var(--read-color-red)"
    }
    else {
        readStatusToggle.innerText = "Read";
        readStatusToggle.style.backgroundColor = "var(--read-color-green)"
    }
});