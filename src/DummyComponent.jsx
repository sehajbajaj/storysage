import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  return (
    <Card className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-md w-[380px]overflow-hidden  hover:shadow-lg transition-shadow duration-300">
      <div className="flex-shrink-0">
        <img
          className="rounded-t-lg w-full h-85 object-cover"
          src={book.imageUrl}
          alt={book.title}
        />
      </div>
      <div className="flex flex-col p-4 gap-2 flex-grow">
        <h5 className="text-md font-semibold">{book.title}</h5>
        <p className="text-xs text-gray-500">{book.author}</p>
        <div className="flex mt-auto">
          <Button size="xs" variant="light" className="mr-2">
            Want to Read
          </Button>
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 3a1 1 0 0 1 .904.594l1.757 3.593 3.971.577a1 1 0 0 1 .564 1.706l-2.873 2.801.678 3.953a1 1 0 0 1-1.451 1.054L10 15.347l-3.549 1.865a1 1 0 0 1-1.451-1.054l.678-3.953-2.873-2.801a1 1 0 0 1 .564-1.706l3.971-.577L8.145 3.594A1 1 0 0 1 9.049 3z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
