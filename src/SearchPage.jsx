import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { Input } from "@/components/ui/input"; // Import the Input component

// Define the SearchBar component
function SearchBar({ heading, placeholder, onSelect, searchValue, setSearchValue }) {

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
  };

  const handleItemSelect = (id) => {
    setSearchValue('');
    onSelect(id);
  };

  return (
    <div>
      <h2>{heading}</h2>
      <Input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
}

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchValueAuthor, setSearchValueAuthor] = useState('');
  const [searchValueGenre, setSearchValueGenre] = useState('');
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [suggestionsAuthor, setSuggestionsAuthor] = useState([]);
  const [suggestionsGenre, setSuggestionsGenre] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8083/bookcatalog/authors', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setAuthors(data);
    };

    const fetchGenres = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8083/bookcatalog/genres', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setGenres(data);
    };

    fetchAuthors();
    fetchGenres();
  }, []);

  useEffect(() => {
    // Filter suggestions based on search value for author
    let filteredSuggestionsAuthor = [];
  if (searchValueAuthor.trim() !== '') {
    filteredSuggestionsAuthor = authors.filter(author =>
      author.name.toLowerCase().includes(searchValueAuthor.toLowerCase())
    );
  }
  setSuggestionsAuthor(filteredSuggestionsAuthor.slice(0, 5));

  // Filter suggestions based on search value for genre
  let filteredSuggestionsGenre = [];
  if (searchValueGenre.trim() !== '') {
    filteredSuggestionsGenre = genres.filter(genre =>
      genre.name.toLowerCase().includes(searchValueGenre.toLowerCase())
    );
  }
  setSuggestionsGenre(filteredSuggestionsGenre.slice(0, 5));
  }, [searchValueAuthor, searchValueGenre, authors, genres]);

  const navigateToAuthorPage = (id) => {
    navigate(`/authors/${id}`);
  };

  const navigateToGenrePage = (id) => {
    navigate(`/genres/${id}`);
  };

  return (
    <div>
    <Navbar />
      <SearchBar
        heading="Search by Author"
        placeholder="Search Author"
        onSelect={navigateToAuthorPage}
        searchValue={searchValueAuthor}
        setSearchValue={setSearchValueAuthor}
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {suggestionsAuthor.map((item) => (
          <li key={item.id} style={{ marginBottom: '5px', cursor: 'pointer' }} onClick={() => navigateToAuthorPage(item.id)}>
            <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}>
              {item.name}
            </div>
          </li>
        ))}
      </ul>
      <SearchBar
        heading="Search by Genre"
        placeholder="Search Genre"
        onSelect={navigateToGenrePage}
        searchValue={searchValueGenre}
        setSearchValue={setSearchValueGenre}
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {suggestionsGenre.map((item) => (
          <li key={item.id} style={{ marginBottom: '5px', cursor: 'pointer' }} onClick={() => navigateToGenrePage(item.id)}>
            <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}>
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
