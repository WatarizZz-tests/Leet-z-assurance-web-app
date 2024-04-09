import React, { useEffect, useRef, useState } from "react";
import { FaEarthAfrica } from "react-icons/fa6";
import { IoMdClock } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { MdAccountBox } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import logopic from "../../assets/logoassurance.jpeg";
import Popup from "../popuplogsignforg/Popup";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { IoIosLogOut } from "react-icons/io";

const navLinks = [
  {
    path: "/",
    display: "Acceuil",
  },
  {
    path: "/apropos",
    display: "A propos",
  },
  {
    path: "/formulaireaccident",
    display: "Declarer votre accident",
  },
  {
    path: "/contact",
    display: "Nous Contacter",
  },
];

const Header = () => {
  const { user } = useContext(AuthContext);
  const menuRef = useRef(null);
  const [loginPopup, setLoginPopup] = useState(false);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  const ClearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <div className="Container-1">
          <div className="header__top__left">
            <span>Besoin d'aide ?</span>
            <span className="header__top__help">
              <i className="ri-phone-fill"></i> +213-661-116-333
            </span>
          </div>
          {user ? (
            <div className="user-on-con">
              {" "}
              -{user.username}{" "}
              <Link to="/mesdemandes">
                <button className="username-demands-button">
                  Mes demandes
                </button>
              </Link>
              <button onClick={() => ClearStorage()} className="logoff-btn">
                <IoIosLogOut />
              </button>
            </div>
          ) : (
            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
              <Link
                onClick={() => setLoginPopup(true)}
                className=" d-flex align-items-center gap-1"
              >
                <i>
                  <FiLogIn className="marginicon" />
                </i>{" "}
                Se Connecter
              </Link>
              <Popup trigger={loginPopup} setTrigger={setLoginPopup} />/
              <Link
                onClick={() => setLoginPopup(true)}
                className=" d-flex align-items-center gap-1"
              >
                <i>
                  <MdAccountBox className="marginicon" />
                </i>{" "}
                S'inscrire
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <div className="Container-2">
          <div className="logo">
            <h1>
              <Link to="/" className=" d-flex align-items-center gap-2">
                <img
                  src={logopic}
                  alt="si leet'z"
                  className="leetassurancepic"
                />
              </Link>
            </h1>
          </div>

          <div className="header__location d-flex align-items-center gap-2">
            <span>
              <i>
                <FaEarthAfrica />
              </i>
            </span>
            <div className="header__location-content">
              <h4>Algerie</h4>
              <h6>58 Wilayas</h6>
            </div>
          </div>

          <div className="header__location d-flex align-items-center gap-2">
            <span>
              <i>
                <IoMdClock />
              </i>
            </span>
            <div className="header__location-content">
              <h4>Du samedi au Jeudi</h4>
              <h6>24/7</h6>
            </div>
          </div>

          <button className="header__btn btn ">
            <Link to="/contact">Nous Contacter</Link>
          </button>
        </div>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <div className="Container-3">
          <div className="full-nav-container">
            <span className="mobile__menu">
              <i onClick={toggleMenu}>
                <FaBars />
              </i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            {user ? (
              <div className="small-screen-user">
                {" "}
                -{user.username}{" "}
                <Link to="/mesdemandes">
                  <button className="username-demands-button-small-screen">
                    Mes demandes
                  </button>
                </Link>
                <button
                  onClick={() => ClearStorage()}
                  className="logoff-btn-small-screen"
                >
                  <IoIosLogOut />
                </button>
              </div>
            ) : (
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3 smallscreenloginsignin">
                <Link
                  onClick={() => setLoginPopup(true)}
                  className=" d-flex align-items-center gap-1"
                >
                  <i>
                    <FiLogIn className="marginicon" />
                  </i>{" "}
                  Se Connecter
                </Link>
                <Popup trigger={loginPopup} setTrigger={setLoginPopup} />/
                <Link
                  onClick={() => setLoginPopup(true)}
                  className=" d-flex align-items-center gap-1"
                >
                  <i>
                    <MdAccountBox className="marginicon" />
                  </i>{" "}
                  S'inscrire
                </Link>
              </div>
            )}

            <div className="nav__right2">
              <div className="socialmedia-right">
                <Link>
                  <FaFacebook />
                </Link>
                <Link>
                  <FaInstagram />
                </Link>
                <Link>
                  <FaXTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
