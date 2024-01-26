import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar__close" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>          </div>
          <ul className="mobile-navbar__links">
            <li>
              <a onClick={openNav} to="/">
                Home
              </a>
            </li>
            <li>
              <a onClick={openNav} to="/">
                About
              </a>
            </li>
            <li>
              <a onClick={openNav} to="/">
                Models
              </a>
            </li>
            <li>
              <a onClick={openNav} to="/">
                Testimonials
              </a>
            </li>
            <li>
              <a onClick={openNav} to="/">
                Our Team
              </a>
            </li>
            <li>
              <a onClick={openNav} to="/">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <a to="/" onClick={() => window.scrollTo(0, 0)}>
              <img alt="logo-img" />
            </a>
          </div>
          <ul className="navbar__links">
            <li>
              <a className="home-link" to="/">
                Home
              </a>
            </li>
            <li>
              {" "}
              <a className="about-link" to="/">
                About
              </a>
            </li>
            <li>
              {" "}
              <a className="models-link" to="/">
                Vehicle Models
              </a>
            </li>
            <li>
              {" "}
              <a className="testi-link" to="/">
                Testimonials
              </a>
            </li>
            <li>
              {" "}
              <a className="team-link" to="/">
                Our Team
              </a>
            </li>
            <li>
              {" "}
              <a className="contact-link" to="/">
                Contact
              </a>
            </li>
          </ul>
          <div className="navbar__buttons">
            <a className="navbar__buttons__sign-in" to="/">
              Sign In
            </a>
            <a className="navbar__buttons__register" to="/">
              Register
            </a>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
