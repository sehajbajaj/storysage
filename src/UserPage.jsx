import { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import PaginationDemo from "./Pagination";
import Navbar from "./Navbar";
import BookCard from "./BookCard";
import TailwindSpinner from "./TailwindSpinner";

const UserPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      const apiUrl = `http://localhost:8083/bookcatalog/my-books?pageSize=20&pageNo=${page}`;
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

  const renderBooksByStatus = (status) => {
    return books
      .filter((book) => book.status === status)
      .map((book) => <BookCard key={"book_" + book.bookId} book={book} />);
  };

  return (
    <>
      <Navbar />
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
        <div>
          <h2 className="text-xl font-bold mb-2">Completed Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 p-4">
            {renderBooksByStatus("COMPLETED")}
          </div>
          <h2 className="text-xl font-bold mb-2">Currently Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 p-4">
            {renderBooksByStatus("Currently Reading")}
          </div>
          <h2 className="text-xl font-bold mb-2">Want to Read</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 p-4">
            {renderBooksByStatus("Want to read")}
          </div>
        </div>
        <PaginationDemo page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default UserPage;
