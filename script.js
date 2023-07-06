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
    makeCard(newBook);

    bookCardForm.reset();
    closeForm();
    readStatusYes.classList.remove('active');
    readStatusNo.classList.remove('active');
});
});

// Read status toggle for card -----------------------------------
const readStatusToggleButtons = document.querySelectorAll('.book-button-read');

readStatusToggleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.innerText === 'Read') {
            button.innerText = 'Not Read';
            button.style.backgroundColor = 'var(--read-color-red)';
        } else {
            button.innerText = 'Read';
            button.style.backgroundColor = 'var(--read-color-green)';
        }
    });
});


// make card when form is submitted -------------------------------
const bookGrid = document.getElementById('bookGrid');

function makeCard(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
  
    const bookImage = document.createElement('div');
    bookImage.classList.add('book-image');
    const image = document.createElement('img');
    image.src = 'assets/imgs/book-card-image.jpg';
    bookImage.appendChild(image);
  
    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');
    const titleElement = document.createElement('h1');
    titleElement.textContent = book.title;
    const authorElement = document.createElement('h2');
    authorElement.textContent = book.author;
    const pagesElement = document.createElement('p');
    pagesElement.textContent = book.pages + ' pages';
    bookInfo.appendChild(titleElement);
    bookInfo.appendChild(authorElement);
    bookInfo.appendChild(pagesElement);
  
    const bookButtons = document.createElement('div');
    bookButtons.classList.add('book-buttons');
    const editButton = document.createElement('div');
    editButton.classList.add('book-button-edit');
    editButton.textContent = 'Edit';
    const readButton = document.createElement('div');
    readButton.classList.add('book-button-read');
    if (book.read) {
        readButton.textContent = 'Read';
        readButton.classList.add('book-form-button-read');
    }
    else {
        readButton.textContent = 'Not Read';
        readButton.classList.add('book-form-button-not-read');
    }
    const removeButton = document.createElement('div');
    removeButton.classList.add('book-button-remove');
    removeButton.textContent = 'Remove';
    bookButtons.appendChild(editButton);
    bookButtons.appendChild(readButton);
    bookButtons.appendChild(removeButton);
  
    bookCard.appendChild(bookImage);
    bookCard.appendChild(bookInfo);
    bookCard.appendChild(bookButtons);
  
    bookGrid.appendChild(bookCard);
}  