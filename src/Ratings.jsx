import PropTypes from "prop-types";

export const FullStar = () => (
  <svg
    className="h-4 w-4 text-yellow-400"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 3a1 1 0 0 1 .904.594l1.757 3.593 3.971.577a1 1 0 0 1 .564 1.706l-2.873 2.801.678 3.953a1 1 0 0 1-1.451 1.054L10 15.347l-3.549 1.865a1 1 0 0 1-1.451-1.054l.678-3.953-2.873-2.801a1 1 0 0 1 .564-1.706l3.971-.577L8.145 3.594A1 1 0 0 1 9.049 3z" />
  </svg>
);

export const FractionalStar = ({ percentage }) => (
  <svg
    className="h-4 w-4 text-gray-400 relative"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset={percentage + "%"}
          style={{ stopColor: "yellow", stopOpacity: 1 }}
        />
        <stop
          offset={percentage + "%"}
          style={{ stopColor: "gray", stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>
    <path
      fill="url(#grad1)"
      d="M9.049 3a1 1 0 0 1 .904.594l1.757 3.593 3.971.577a1 1 0 0 1 .564 1.706l-2.873 2.801.678 3.953a1 1 0 0 1-1.451 1.054L10 15.347l-3.549 1.865a1 1 0 0 1-1.451-1.054l.678-3.953-2.873-2.801a1 1 0 0 1 .564-1.706l3.971-.577L8.145 3.594A1 1 0 0 1 9.049 3z"
    />
  </svg>
);

export const EmptyStar = () => (
  <svg
    className="h-4 w-4 text-gray-400"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 3a1 1 0 0 1 .904.594l1.757 3.593 3.971.577a1 1 0 0 1 .564 1.706l-2.873 2.801.678 3.953a1 1 0 0 1-1.451 1.054L10 15.347l-3.549 1.865a1 1 0 0 1-1.451-1.054l.678-3.953-2.873-2.801a1 1 0 0 1 .564-1.706l3.971-.577L8.145 3.594A1 1 0 0 1 9.049 3z" />
  </svg>
);

FractionalStar.propTypes = {
  percentage: PropTypes.number.isRequired, // Ensure this is number as it should be
};
