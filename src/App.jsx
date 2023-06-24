import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import CV from "./pages/CV.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import "./components/style/colors.css";
import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
import Success from "./pages/Success";
import Game from "./pages/Gamepage";

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
      {location.pathname === "/game" ? <></> : <Footer />}
    </div>
  );
};

export default App;
