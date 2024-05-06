import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import PropTypes from "prop-types";
import { FullStar, EmptyStar, FractionalStar } from "./Ratings.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

const BookCard = ({ book }) => {
  const [showActions, setShowActions] = useState(false);

  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const fractionalStar = rating - fullStars; // This will be between 0 and 1
    const emptyStars = totalStars - Math.ceil(rating);

    return (
      <div className="flex items-center">
        {Array.from({ length: fullStars }).map((_, index) => (
          <FullStar key={`full-${index}`} />
        ))}
        {fractionalStar > 0 && (
          <FractionalStar percentage={fractionalStar * 100} key="fractional" />
        )}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <EmptyStar key={`empty-${index}`} />
        ))}
      </div>
    );
  };

  const toggleActions = () => {
    setShowActions(!showActions);
  };

  const handleUpdateBook = () => {
    // Logic for updating the book
    console.log("Updating book:", book);
  };

  const handleDeleteBook = () => {
    // Logic for deleting the book
    console.log("Deleting book:", book);
  };

  const formatStatus = (status) => {
    return status.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };
  return (
    <Card
      className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
      onMouseEnter={toggleActions}
      onMouseLeave={toggleActions}
    >
      <Link to={`/book/${book.bookId}`} className="flex-shrink-0">
        <img
          className="rounded-t-lg w-full h-100 object-cover transition-all hover:scale-105"
          src={book.coverImg}
          alt={book.title}
        />
      </Link>
      <div className="flex flex-col p-4 gap-2 flex-grow">
        <Link to={`/book/${book.bookId}`} className="text-md font-semibold">
          <h5>{book.title}</h5>
        </Link>
        <p className="text-xs text-gray-500">
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
        </p>
        <div className="flex mt-auto items-center">
          {book.status !== null ? (
            <p className="mr-3">{formatStatus(book.status)}</p>
          ) : (
            <Button size="s" variant="outline" className="mr-3">
              <Link to={`/books/post/${book.bookId}`} className="p-2">
                Add to Catalog
              </Link>
            </Button>
          )}
          {renderStars(book.rating)}
        </div>
      </div>
      {showActions && book.status !== null && (
        <div className="absolute right-2 top-2 z-10 flex flex-col gap-2">
          <Button onClick={handleUpdateBook}>
            <Link to={`/books/update/${book.bookId}`} className="p-2">
              Update Book
            </Link>
          </Button>
          <Button onClick={handleDeleteBook}>Delete Book</Button>
        </div>
      )}
      <Progress value={book.progress} />
    </Card>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bookId: PropTypes.number.isRequired,
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    coverImg: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    status: PropTypes.string, // Make sure this is a number if it's used for calculations
  }).isRequired,
};

export default BookCard;
