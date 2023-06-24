import "../App.css";
import "./style/Homepage.css";
import "../components/style/buttons.css";
import { Link } from "react-router-dom";
import Reveal from "../components/reveal";
import useNavbar from "../hooks/useNavbar";

const Homepage = () => {
  const { navbarState } = useNavbar();

  return (
    <Reveal>
      <div
        className={"homepage " + (navbarState ? "opened-nav-margin" : "w-full")}
      >
        <div className="title">
          <h1>Louise-Amélie Maréchal</h1>
        </div>
        <div className="menu">
          <Link to="/cv" className="see-through-button">
            Curriculum Vitae
          </Link>
          <Link to="/game" className="see-through-button m-5">
            Play Game
          </Link>
          {/* <Link to="/projets" className='see-through-button m-5'>Projets</Link> */}
          <Link to="/contact" className="see-through-button">
            Contact
          </Link>
        </div>
      </div>
    </Reveal>
  );
  // }
};

export default Homepage;
