import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Credits from "./pages/Credits";
import Story from "./pages/History"
import Galeria from "./pages/Gallery";
import Reservation from "./pages/Reservations";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/credits" element= {<Credits />} />
          <Route path="/story" element= {<Story />} />
          <Route path="/reservation" element= {<Reservation />} />
          <Route path="/galeria" element={< Galeria/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
