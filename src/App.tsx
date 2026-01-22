import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import AddBook from "./components/AddBook";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
