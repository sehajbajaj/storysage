import BookCard from "./BookCard";
// import AlbumArtwork from "./Artwork";
import TailwindSpinner from "./TailwindSpinner";

import { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const AuthorPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let { authorId } = useParams();
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const apiUrl = `http://localhost:8083/bookcatalog/authors/${authorId}?pageSize=100`;
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

    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `http://localhost:8083/bookcatalog/authors/details/${authorId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAuthorName(data.name);
      } catch (error) {
        console.error("Error fetching author details:", error);
      }
    };

    fetchData();
    fetchBooks();
  }, [authorId]);

  return (
    <>
      <Navbar />
      <div>
        <h4 className="mt-8 mb-4 scroll-m-20 text-4xl font-bold tracking-tight">
          Books By {authorName && <>{authorName}</>}
        </h4>
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
            ))}
          </div>
        </ul>
        {/* <PaginationDemo page={page} setPage={setPage} /> */}
      </div>
    </>
  );
};

export default AuthorPage;
