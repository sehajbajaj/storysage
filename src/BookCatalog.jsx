import BookCard from "./DummyComponent";

export default function BookCatalog() {
  const books = [
    // Array of book objects
    {
      title: "The Trials of Anne Mercer",
      author: "Nic Stone",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMTCZDpLeL4yYNP3jSRL9VbVj1dRN8q1gvnyqIU99VvEVfIvr8",
      rating: 4.37,
    },
    {
      title: "The Trials of Anne Mercer",
      author: "Nic Stone",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMTCZDpLeL4yYNP3jSRL9VbVj1dRN8q1gvnyqIU99VvEVfIvr8",
    },
    {
      title: "The Trials of Anne Mercer",
      author: "Nic Stone",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMTCZDpLeL4yYNP3jSRL9VbVj1dRN8q1gvnyqIU99VvEVfIvr8",
    },
    {
      title: "The Trials of Anne Mercer",
      author: "Nic Stone",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMTCZDpLeL4yYNP3jSRL9VbVj1dRN8q1gvnyqIU99VvEVfIvr8",
    },
    {
      title: "The Trials of Anne Mercer",
      author: "Nic Stone",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMTCZDpLeL4yYNP3jSRL9VbVj1dRN8q1gvnyqIU99VvEVfIvr8",
    },
    {
      title: "The Trials of Anne Mercer",
      author: "Nic Stone",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMTCZDpLeL4yYNP3jSRL9VbVj1dRN8q1gvnyqIU99VvEVfIvr8",
    },
    {
      title: "The Trials of Anne Mercer",
      author: "Nic Stone",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMTCZDpLeL4yYNP3jSRL9VbVj1dRN8q1gvnyqIU99VvEVfIvr8",
    },
    {
      title: "The Trials of Anne Mercer",
      author: "Nic Stone",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMTCZDpLeL4yYNP3jSRL9VbVj1dRN8q1gvnyqIU99VvEVfIvr8",
    },
    {
      title: "The Trials of Anne Mercer",
      author: "Nic Stone",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMTCZDpLeL4yYNP3jSRL9VbVj1dRN8q1gvnyqIU99VvEVfIvr8",
    },
    // ... other books
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-4">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}
