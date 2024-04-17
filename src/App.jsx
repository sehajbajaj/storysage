import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HeroPage from "./HeroPage";
import Register from "./Register";
import LoginForm from "./Login";
import ProtectedRoute from "./ProtectedComponent";
import DummyComponent from "./DummyComponent";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HeroPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <DummyComponent />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
