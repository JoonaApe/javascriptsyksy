export {}; // hack to ignore Book from task 4
// Define a type alias named 'Book' with appropriate properties
type Book = {
    title: string;
    author: string;
    publicationYear: number;
  };

  // Implement the promptForBook function
  function promptForBook(): Book {
    // Prompt user for book details (title, author, publication year)
    const bookTitle = prompt("Enter the book title: ");
    if (bookTitle === null) {
        throw new Error("User canceled or entered invalid input.");
      }
    const bookAuthor = prompt("Enter the author's name: ");
    if (bookAuthor === null) {
        throw new Error("User canceled or entered invalid input.");
      }
    const publicationYearInput = prompt("Enter the publication year: ");
    if (publicationYearInput === null) {
        throw new Error("User canceled or entered invalid input.");
      }
    const bookPublicationYear = parseInt(publicationYearInput);


    // Create an object of type 'Book' with the entered values
    const book: Book = {
      title: bookTitle,
      author: bookAuthor,
      publicationYear: bookPublicationYear,
    };

    return book;
  }

  // Call the promptForBook function to get the book details
  const bookDetails = promptForBook();

  // Display the details of the book object to the user
  console.log("Book Details:");
  console.log(`Title: ${bookDetails.title}`);
  console.log(`Author: ${bookDetails.author}`);
  console.log(`Publication Year: ${bookDetails.publicationYear}`);
