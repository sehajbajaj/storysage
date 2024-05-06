/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateEntryPage = () => {
  const [status, setStatus] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [pagesRead, setPagesRead] = useState(0);
  const [stars, setStars] = useState(0);
  const [error, setError] = useState(null);
  const { bookId } = useParams();
  const navigate = useNavigate();

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
        console.log(data);
        setStatus(data.status);
        console.log(data.status);
        setTotalPages(data.totalPages);
        setPagesRead(data.pagesRead);
        setStars(data.stars);
        console.log(data.stars);
        // Set the fetched book data to state
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };

    fetchBook();
  }, [bookId]);

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    console.log("Selected status:", selectedStatus);
    setStatus(selectedStatus);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!status) {
      setError("Please select a status");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8083/bookcatalog/my-books/${bookId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Replace localStorage.getItem("token") with your token value
          },
          body: JSON.stringify({
            bookId,
            totalPages: totalPages,
            pagesRead: pagesRead,
            status: status,
            stars: stars,
          }),
        }
      );

      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to update book progress");
      }

      console.log("Book Updated");
      setError("Book Updated Successfully");
      navigate(`/book/${bookId}`);
      // Handle success, e.g., display a success message or redirect
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
  };

  const formatStatus = (status) => {
    return status.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="border-2 border-gray-300 dark:border-gray-700 p-6 rounded-md shadow-md space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Update Book's Progress</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Please fill in the following details to update the book's progress in
          your catalog.
        </p>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <br />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label
            className="text-gray-600 dark:text-gray-400 required"
            htmlFor="status"
          >
            Status
          </Label>
          <select
            className="border-gray-300 outline-slate-200 outline outline-1 text-gray-600 dark:border-gray-700 bg-white dark:bg-gray-800 w-full px-4 py-2 rounded-md focus:outline focus:border-blue-500"
            id="status"
            required
            value={status}
            onChange={handleStatusChange}
          >
            <option value={formatStatus(status)}>{formatStatus(status)}</option>
            <option value="Want to read">Want to read</option>
            <option value="Completed">Completed</option>
            <option value="Currently Reading">Currently Reading</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label
            className="text-gray-600 dark:text-gray-400 required"
            htmlFor="totalPages"
          >
            Total Pages
          </Label>
          <Input
            id="totalPages"
            placeholder="Enter total pages"
            required
            value={totalPages}
            type="number"
            min="0"
            // disabled={status === "Want to read"}
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            onChange={(e) => setTotalPages(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label
            className="text-gray-600 dark:text-gray-400 required"
            htmlFor="pagesRead"
          >
            Pages Read
          </Label>
          <Input
            id="pagesRead"
            placeholder="Enter pages read"
            required
            value={pagesRead}
            type="number"
            min="0"
            // disabled={status === "Want to read"}
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            onChange={(e) => setPagesRead(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label
            className="text-gray-600 dark:text-gray-400 required"
            htmlFor="stars"
          >
            Stars
          </Label>
          <Input
            id="stars"
            placeholder="Enter stars (0-5)"
            required
            type="number"
            min="0"
            max="5"
            value={stars}
            step="0.01"
            // disabled={status === "Want to read"}
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            onChange={(e) => setStars(e.target.value)}
          />
        </div>
        <br />
        <Button
          className="w-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UpdateEntryPage;
