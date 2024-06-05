import React, { useEffect, useRef, useState, useContext } from "react";
import { FaEarthAfrica, FaXTwitter, FaInstagram, FaFacebook, FaBars } from "react-icons/fa6";
import { IoMdClock } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { MdAccountBox } from "react-icons/md";
import { Link, NavLink, useParams } from "react-router-dom";
import "./header.css";
import logopic1 from "../../assets/logo-dontworry-blue-small2.png";
import Popup from "../popuplogsignforg/Popup";
import { AuthContext } from "../../context/AuthContext";
import { IoIosLogOut } from "react-icons/io";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const navLinks = [
  {
    path: "apropos",
    display: "A propos",
  },
  {
    path: "formulaireaccident",
    display: "Declarer votre accident",
  },
  {
    path: "contact",
    display: "Nous Contacter",
  },
];

const Header = () => {
  const { user } = useContext(AuthContext);
  const menuRef = useRef(null);
  const [loginPopup, setLoginPopup] = useState(false);
  const { lang } = useParams();
  const { t } = useTranslation();

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
            <span>{t('Besoin daide ?')}</span>
            <span className="header__top__help">
              <i className="ri-phone-fill"></i> 0-661-116-333
            </span>
          </div>
          {user ? (
            <div className="user-on-con">
              {" "}
              -{user.username}{" "}
              <LanguageSwitcher />
              <Link to={`/${lang}/mesdemandes`}>
                <button className="username-demands-button">
                  {t('demandes')}
                </button>
              </Link>
              <button onClick={() => ClearStorage()} className="logoff-btn">
                <IoIosLogOut />
              </button>
            </div>
          ) : (
            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
              <LanguageSwitcher />
              <Link
                onClick={() => setLoginPopup(true)}
                className=" d-flex align-items-center gap-1"
              >
                <i>
                  <FiLogIn className="marginicon" />
                </i>{" "}
                {t('Se Connecter')}
              </Link>
              <Popup trigger={loginPopup} setTrigger={setLoginPopup} />
              <Link
                onClick={() => setLoginPopup(true)}
                className=" d-flex align-items-center gap-1"
              >
                <i>
                  <MdAccountBox className="marginicon" />
                </i>{" "}
                {t("S'inscrire")}
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
              <Link to={`/${lang}`} className=" d-flex align-items-center gap-2">
                <img
                  src={logopic1}
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
              <h4>{t('Algerie')}</h4>
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
              <h4>{t('Du samedi au Jeudi')}</h4>
              <h6>24/7</h6>
            </div>
          </div>

          <button className="header__btn btn">
            <Link to={`/${lang}/contact`}>{t('Nous Contacter')}</Link>
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
                    to={`/${lang}/${item.path}`}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {t(item.display)}
                  </NavLink>
                ))}
              </div>
            </div>
            {user ? (
              <div className="small-screen-user">
                {" "}
                -{user.username}{" "}
                <Link to={`/${lang}/mesdemandes`}>
                  <button className="username-demands-button-small-screen">
                    {t('Mes demandes')}
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
                  {t('Se Connecter')}
                </Link>
                <Popup trigger={loginPopup} setTrigger={setLoginPopup} />
                <Link
                  onClick={() => setLoginPopup(true)}
                  className=" d-flex align-items-center gap-1"
                >
                  <i>
                    <MdAccountBox className="marginicon" />
                  </i>{" "}
                  {t("S'inscrire")}
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