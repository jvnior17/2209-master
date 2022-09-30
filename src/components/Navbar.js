import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const menuIcon = <MenuIcon />;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
  });

  return (
    <NavbarStyled>
      <div className="nav-container">
        <button className="nav-btn" onClick={toggleNav}>
          {menuIcon}
        </button>
        <nav className="navbar">
          {(toggleMenu || screenWidth > 561) && (
            <ul>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="landing"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <span>Projects</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <span>Skills</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="resume"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <span>Resume</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <span>About</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </NavbarStyled>
  );
};
const NavbarStyled = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  display: flex;
  width: 100%;
  color: rgba(255, 255, 255, 0.3);
  justify-content: center;

  span {
    font-size: 2.1vw;
  }

  .navbar ul {
    border-radius: 25px;
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    gap: var(--gap, 1rem);
    justify-content: center;
    transition: all 0.4s ease-in-out;
    padding: 1rem;
    &:hover {
      color: var(--white-color);
      background-color: var(--background-dark-color);
    }
  }
  .navbar ul li {
    font-weight: 700;
    cursor: pointer;
    a {
      transition: 0.4s ease-in-out;
    }
  }
  .nav-btn {
    display: none;
    border: none;
    background: none;
    cursor: pointer;
    color: var(--white-color);
  }

  @media (max-width: 35em) {
    .nav-btn {
      display: block;
      z-index: 1000;
      position: absolute;
      top: 7px;
      right: 10px;
      padding: 3px;
    }
    transition: 500ms ease-in-out;
    .navbar ul:before {
      inset: 0 0 0 -100%;
      opacity: 0;
    }
    .navbar ul {
      position: fixed;
      inset: 0 0 0 40%;
      background: var(--background-dark-grey);
      color: var(--white-color);
      flex-direction: column;
      list-style: none;
      padding: min(20rem, 15vh) 2rem;
      transform: (100%);
      gap: 0;
      opacity: 1;
      /* background: hsl(0 0% 100% / 0.5); */
      backdrop-filter: blur(1rem);
      :hover {
        background: var(--background-dark-grey);
      }
    }
    .nav-item:before {
      content: "";
      opacity: 1;
    }
    .navbar ul li {
      text-transform: uppercase;
      font-weight: 400;
    }
    span {
      font-size: 1.4rem;
    }
  }

  .nav-item {
    position: relative;
  }

  .nav-item:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 20px;
    height: 5px;
    background: var(--background-dark-color);
    opacity: 0;
    bottom: 9px;
    transition: all 0.2s ease-out;
  }
  .nav-item:hover:before {
    transform: translateY(10px);
    opacity: 1;
    background: var(--primary-color);
  }
`;

export default Navbar;
