import { BookDto } from "../types/BookDto";

interface DeleteBookProps {
  book: BookDto;
  isOpen: boolean;
  onClose: () => void;
  onDelete: (isbn: number) => void;
}

function DeleteBook() {
  return <div>DeleteBook</div>;
}

export default DeleteBook;
