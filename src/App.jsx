import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HeroPage from "./HeroPage";
import ProtectedRoute from "./ProtectedComponent";
import BookCatalog from "./BookCatalog";
import BookPage from "./BookPage";
import AuthorPage from "./AuthorPage";
import GenrePage from "./GenrePage";
import CatalogEntryPage from "./CatalogEntryPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HeroPage />}></Route>
          <Route
            path="/books"
            element={
              <ProtectedRoute>
                <BookCatalog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/book/:bookId"
            element={
              <ProtectedRoute>
                <BookPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/authors/:authorId"
            element={
              <ProtectedRoute>
                <AuthorPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/genres/:genreId"
            element={
              <ProtectedRoute>
                <GenrePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/books/post/:bookId"
            element={
              <ProtectedRoute>
                <CatalogEntryPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
