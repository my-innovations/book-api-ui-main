import { useEffect, useState } from "react";
import { getAllBooks, updateBook } from "../services/book.service";
import { BookDto } from "../types/BookDto";
import EditBook from "./EditBook";
import DeleteBook from "./DeleteBook";

function Home() {
  const [books, setBooks] = useState<BookDto[]>([]);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [bookToEdit, setBookToEdit] = useState<BookDto | null>(null);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState<BookDto | null>(null);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    getAllBooks()
      .then((response) => {
        console.log("response = ", response.data);
        setBooks(response.data);
      })
      .catch((error) => {
        console.log("error = ", error);
      });
  };

  const handleEdit = (book: BookDto) => {
    setBookToEdit(book);
    setIsEditDialogOpen(true);
  };

  const handleOnClose = () => {
    setBookToEdit(null);
    setIsEditDialogOpen(false);
  };

  const handleUpdateBook = (updatedBook: BookDto, bookCoverFile?: File) => {
    const submitData = new FormData();

    submitData.append("bookDtoJson", JSON.stringify(updatedBook));

    if (bookCoverFile) {
      submitData.append("file", bookCoverFile);
    }

    updateBook(submitData, updatedBook.isbn)
      .then((response) => {
        console.log("Update book response = ", response);
        getBooks();
        handleOnClose();
      })
      .catch((error) => {
        console.log("Error updating book : ", error);
      });
  };

  const handleDelete = (book: BookDto) => {};

  return (
    <>
      <h1 className="text-center mt-10 text-3xl font-bold">List of Books</h1>
      <div className="container mt-10 space-y-4">
        <div className="flex flex-row space-x-4 flex-wrap justify-center items-center gap-y-4">
          {books.map((book) => (
            <div
              key={book.isbn}
              className="bg-gray-100 p-4 rounded-md flex flex-col justify-self-start"
            >
              <h2 className="text-lg font-bold">{book.title}</h2>
              <p className="text-sm">
                <strong>Author</strong>: {book.author}
              </p>
              <p className="text-sm">
                <strong>Price</strong>: $ {book.price}
              </p>
              <div className="flex my-2">
                <button
                  className="flex-1 bg-yellow-600 text-white py-1 px-1 mr-2 rounded-md"
                  onClick={() => handleEdit(book)}
                >
                  Edit
                </button>
                <button
                  className="flex-1 bg-red-600 text-white py-1 px-1 rounded-md"
                  onClick={() => handleDelete(book)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {bookToEdit && (
        <EditBook
          book={bookToEdit}
          isOpen={isEditDialogOpen}
          onClose={handleOnClose}
          onSubmit={handleUpdateBook}
        />
      )}

      {bookToDelete && <DeleteBook />}
    </>
  );
}

export default Home;
