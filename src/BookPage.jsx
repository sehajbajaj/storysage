import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FullStar, EmptyStar, FractionalStar } from "./Ratings.jsx";
import { Link } from "react-router-dom";
import TailwindSpinner from "./TailwindSpinner";
import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
// import { useAuth } from "./useAuth";
// import { useNavigate } from "react-router-dom";

const BookPage = () => {
  const [book, setBook] = useState(null);
  let { bookId } = useParams(); // State to store the book data
  // const isLoggedIn = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/");
  //   }
  // }, [isLoggedIn, navigate]);

  useEffect(() => {
    const fetchBook = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `http://localhost:8083/bookcatalog/user-books/book/${bookId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch book data");
        }
        const data = await response.json();
        setBook(data); // Set the fetched book data to state
      } catch (error) {
        // console.error(response);
      }
    };

    fetchBook();
  }, [bookId]); // Re-fetch book data when the bookId parameter changes

  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const fractionalStar = rating - fullStars; // This will be between 0 and 1
    const emptyStars = totalStars - Math.ceil(rating);

    return (
      <>
        {Array.from({ length: fullStars }).map((_, index) => (
          <FullStar key={`full-${index}`} />
        ))}
        {fractionalStar > 0 && (
          <FractionalStar percentage={fractionalStar * 100} key="fractional" />
        )}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <EmptyStar key={`empty-${index}`} />
        ))}
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-5 h-full">
        <div className="w-full md:w-full p-8 bg-white rounded-md shadow-md relative">
          {book ? (
            <div className="flex flex-col md:flex-row gap-8">
              <img
                className="h-auto w-full object-cover rounded-lg md:w-1/3"
                src={book.coverImg}
                alt={book.title}
              />
              <div className="md:w-2/3 flex flex-col justify-center items-start space-y-6">
                <h1 className="text-4xl font-bold text-gray-800">
                  {book.title}
                </h1>
                <div>
                  <strong className="text-gray-700">By</strong>{" "}
                  {book.authors.map((author, index) => (
                    <span key={author.id}>
                      <Link
                        to={`/authors/${author.id}`}
                        className="text-blue-500 hover:text-blue-600 font-semibold"
                      >
                        {author.name}
                      </Link>
                      {index < book.authors.length - 1 && ", "}
                    </span>
                  ))}
                </div>
                <div>
                  <strong className="text-gray-700">Description:</strong> <br />
                  <p className="text-base text-gray-700 leading-relaxed text-justify mt-4">
                    {book.description}
                  </p>
                </div>
                <div>
                  <strong className="text-gray-700">Genres:</strong> <br />
                  <div className="flex flex-wrap mt-4">
                    {book.genres.map((genre) => (
                      <Badge
                        variant="secondary"
                        key={genre.id}
                        className="mr-2 mb-2"
                      >
                        <Link
                          to={`/genres/${genre.id}`}
                          className="text-blue-500 hover:text-blue-600 font-semibold"
                        >
                          {genre.name}
                        </Link>
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <strong className="mr-2 text-gray-700">Rating:</strong>{" "}
                  <div className="flex items-center">
                    {renderStars(book.rating)}
                  </div>
                </div>
                <div>
                  <strong className="text-gray-700">Series:</strong>{" "}
                  <span className="text-gray-700">{book.series}</span>
                </div>
                <div className="flex justify-between">
                  {book.status !== null && (
                    <div className="flex items-center">
                      <strong className="text-gray-700">Total Pages: </strong>{" "}
                      <span className="text-gray-700">{book.totalPages}</span>
                    </div>
                  )}
                  {book.status !== null && (
                    <div className="flex items-center ml-5">
                      <strong className="text-gray-700">Pages Read: </strong>{" "}
                      <span className="text-gray-700">{book.pagesRead}</span>
                    </div>
                  )}
                </div>
                {book.status !== null && (
                  <div>
                    <strong className="text-gray-700">Progress:</strong>{" "}
                    <span className="text-gray-700">{book.progress}%</span>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 right-0 mb-4 mr-4">
                {book.status === null && (
                  <Link to={`/books/post/${book.bookId}`}>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                      Add to Catalog
                    </button>
                  </Link>
                )}
              </div>
              <Progress
                value={book.progress}
                className="absolute bottom-0 left-0 right-0"
              />
            </div>
          ) : (
            <TailwindSpinner />
          )}
        </div>
      </div>
    </>
  );
};

export default BookPage;
