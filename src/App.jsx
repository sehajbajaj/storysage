import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HeroPage from "./HeroPage";
// import Register from "./Register";
// import LoginForm from "./Login";
import ProtectedRoute from "./ProtectedComponent";
import BookCatalog from "./BookCatalog";
import BookPage from "./BookPage";
import { Sidebar } from "./Try";

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
            path="/dummy"
            element={
              <ProtectedRoute>
                <Sidebar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/books/:id"
            element={
              <ProtectedRoute>
                <BookPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
