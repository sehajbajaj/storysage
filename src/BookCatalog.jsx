import BookCard from "./BookCard";
// import AlbumArtwork from "./Artwork";
import TailwindSpinner from "./TailwindSpinner";

import { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import PaginationDemo from "./Pagination";

const BookCatalog = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      const apiUrl = `http://localhost:8083/bookcatalog/user-books?pageSize=20&pageNo=${page}`;
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBooks(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, [page]);

  return (
    <div>
      <h1 className="mb-4 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
        Story Sage
      </h1>
      {loading && <TailwindSpinner />}
      {error && (
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-4">
          {books.map((book) => (
            <BookCard key={"book_" + book.bookId} book={book} />
            // <AlbumArtwork key={"book_" + book.bookId} book={book} />
          ))}
        </div>
      </ul>
      <PaginationDemo page={page} setPage={setPage} />
    </div>
  );
};

export default BookCatalog;
