
class Book {
    constructor(title, author, isbn, publicationYear, description) {
        this.title = title;
        this.author = author;
        this.description = description;
    }
}

document.addEventListener('DOMContentLoaded', function() { // The "DOMContentLoaded" event is fired by the browser when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
    // Get the form element
    var bookForm = document.getElementById('bookForm');

    // Add submit event listener to the form
    bookForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the form values
        var title = document.getElementById('title').value;
        var author = document.getElementById('author').value;
        var description = document.getElementById('description').value;

        // Create a new Book instance
        var book = new Book(title, author, isbn, publicationYear, description);


        // Do something with the book data (e.g., store it, display it, etc.)
        console.log(book.title);

        // Clear the form fields
    });
});
