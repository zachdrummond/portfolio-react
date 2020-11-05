import { Link } from "react-router-dom";
import GitHub from "../Icon-Components/GitHub";
import LinkedIn from "../Icon-Components/LinkedIn";

const Links = () => {
  return (
    <div className="collapse navbar-collapse text-right" id="navbarMenu">
      <div className="navbar-nav ml-auto">
        {/* About */}
        <Link className="navbar-brand" to="/portfolio-react/about">
          About
        </Link>
        {/* Portfolio */}
        <Link className="navbar-brand" to="/portfolio-react/portfolio">
          Portfolio
        </Link>
        {/* Resume */}
        <a
          className="navbar-brand"
          href="https://docs.google.com/document/d/1Lg_N5xJ_PITKCcIUaj6RQqQ6mVqgH2fbwWRqjNZHfrM/edit?usp=sharing"
        >
          Resume
        </a>
        {/* Contact */}
        <Link className="navbar-brand" to="/portfolio-react/contact">
          Contact
        </Link>
        {/* LinkedIn Icon */}
        <LinkedIn />
        {/* GitHub Icon */}
        <GitHub href="https://github.com/zachdrummond" />
      </div>
    </div>
  );
};

export default Links;
