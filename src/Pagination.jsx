import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PropTypes from "prop-types";

const PaginationDemo = ({ page, setPage }) => {
  const handleNext = (event) => {
    event.preventDefault();
    setPage(page + 1);
  };
  const handlePrevious = (event) => {
    event.preventDefault();
    setPage(page - 1);
  };
  return (
    <Pagination>
      <PaginationContent>
        {page == 0 ? null : (
          <>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={handlePrevious} />
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink href="#">{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

PaginationDemo.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default PaginationDemo;
