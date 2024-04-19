import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PropTypes from "prop-types";
import { FullStar, EmptyStar, FractionalStar } from "./Ratings.jsx";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
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
    <Card className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-md w-[400]overflow-hidden  hover:shadow-lg transition-shadow duration-300">
      <div className="flex-shrink-0">
        <img
          className="rounded-t-lg w-full h-100 object-cover"
          src={book.coverImg}
          alt={book.title}
        />
      </div>
      <div className="flex flex-col p-4 gap-2 flex-grow">
        <h5 className="text-md font-semibold">{book.title}</h5>
        <p className="text-xs text-gray-500">
          {book.authors.map((author, index, array) => (
            <span key={author.id}>
              <Link
                to={`/authors/${author.id}`}
                className="text-blue-500 hover:text-blue-600"
              >
                {author.name}
              </Link>
              {index < array.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <div className="flex mt-auto">
          <Button size="xs" variant="light" className="mr-2">
            Want to Read
          </Button>
          <div className="flex items-center">{renderStars(book.rating)}</div>
        </div>
      </div>
    </Card>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    coverImg: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired, // Make sure this is a number if it's used for calculations
  }).isRequired,
};

export default BookCard;
