import { useLocation } from "react-router-dom";
import useNavbar from "../hooks/useNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "./style/footer.css";

const Footer = () => {
  const { navbarState } = useNavbar();
  const location = useLocation();

  if (location.pathname === "/playgame") {
    return;
  }

  return (
    <div className={"footer " + (navbarState ? "opened-nav-margin" : "w-full")}>
      <a href="https://www.linkedin.com/in/louise-amelie-mar%C3%A9chal-ba978298">
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ color: "var(--pink)" }}
          size="xl"
        />
      </a>
      <a href="https://github.com/louiseamarechal">
      <FontAwesomeIcon icon={faSquareGithub}
          size='xl'
          style={{ color: "var(--pink)" }}
        />
      </a>
    </div>
  );
};
export default Footer;
