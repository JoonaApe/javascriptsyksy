'use strict';
// Implement the promptForBook function
function promptForBook() {
   // Prompt user for book details (title, author, publication year)
   var bookTitle = prompt('Enter the book title: ');
   if (bookTitle === null) {
      throw new Error('User canceled or entered invalid input.');
   }
   var bookAuthor = prompt("Enter the author's name: ");
   if (bookAuthor === null) {
      throw new Error('User canceled or entered invalid input.');
   }
   var publicationYearInput = prompt('Enter the publication year: ');
   if (publicationYearInput === null) {
      throw new Error('User canceled or entered invalid input.');
   }
   var bookPublicationYear = parseInt(publicationYearInput);
   // Create an object of type 'Book' with the entered values
   var book = {
      title: bookTitle,
      author: bookAuthor,
      publicationYear: bookPublicationYear,
   };
   return book;
}
// Call the promptForBook function to get the book details
var bookDetails = promptForBook();
// Display the details of the book object to the user
console.log('Book Details:');
console.log('Title: '.concat(bookDetails.title));
console.log('Author: '.concat(bookDetails.author));
console.log('Publication Year: '.concat(bookDetails.publicationYear));
