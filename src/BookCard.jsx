import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"
import PropTypes from "prop-types";
import { FullStar, EmptyStar, FractionalStar } from "./Ratings.jsx";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
  
  const getProgressColorClass = (value) => {
    if (value < 25) {
      return "bg-red-500"; // Red color for progress less than 25%
    } else if (value < 50) {
      return "bg-yellow-500"; // Yellow color for progress between 25% and 50%
    } else if (value < 75) {
      return "bg-green-500"; // Green color for progress between 50% and 75%
    } else {
      return "bg-blue-500"; // Blue color for progress above 75%
    }
  };
  
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
    <Card className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-md w-[400]overflow-hidden  hover:shadow-lg transition-shadow duration-300 relative">
      <div className="flex-shrink-0">
        <Link to={`/book/${book.bookId}`}>
          <div className="flex-shrink-0">
            <img
              className="rounded-t-lg w-full h-100 object-cover transition-all hover:scale-105"
              src={book.coverImg}
              alt={book.title}
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-col p-4 gap-2 flex-grow">
        <Link to={`/book/${book.bookId}`}>
          <h5 className="text-md font-semibold">{book.title}</h5>
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
        <div className="flex mt-auto">
        {book.status !== null ? (
            <p className="mr-3">{book.status}</p>
          ) : (
            <Button size="s" variant="outline" className="mr-3">
              <Link to={`/books/post/${book.bookId}`} className="p-2">
                Add to Catalog
              </Link>
            </Button>
          )}
          <div className="flex items-center">{renderStars(book.rating)}</div>
        </div>
      </div>
      <Progress value={book.progress}/>
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
