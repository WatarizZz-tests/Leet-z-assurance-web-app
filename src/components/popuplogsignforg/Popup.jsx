import React, { useContext, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import "./popup.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const Popup = (props) => {
  const [endInscription, setEndInscription] = useState(false);
  const [popChecked, setPopChecked] = useState(false);
  const [error, setError] = useState("");
  const [capsLockActivated, setCapsLockActivated] = useState(false);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  
  const { t } = useTranslation();

  const navigate = useNavigate();


  const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/login`, userCredential);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate('/');
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
      if (err.response) {
        const { data } = err.response;
        if (data === "user not found") {
          setError(t('Email incorrect'));
        } else if (data === "wrong password") {
          setError(t('Mot de passe incorrect'));
        }
      }
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (!validatePassword(password)) {

      passwordregister.current.setCustomValidity(t('Le mot de passe doit contenir au moins une majuscule et un chiffre.'));
    } else {

      passwordregister.current.setCustomValidity('');
    }
  };

  const handleKeyDown = (e) => {
    setCapsLockActivated(e.getModifierState && e.getModifierState('CapsLock'));
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };



  const username = useRef();
  const email = useRef();
  const password = useRef();
  const emailregister = useRef();
  const passwordregister = useRef(null);
  const passwordAgain = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email: email.current.value, password: password.current.value }, dispatch);

  };

  const handleClicke = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== passwordregister.current.value) {
      passwordAgain.current.setCustomValidity(t('Le mot de passe ne correspond pas !'));
    } else {
      const user = {
        username: username.current.value,
        email: emailregister.current.value,
        password: passwordregister.current.value,
      };
      try {
        await axios.post(`${BASE_URL}/api/auth/register`, user);
        setEndInscription(true);

      } catch (err) {
        console.log(err);
      }
    }
  };

  console.log(user);


  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn button-popup-window"
          onClick={() => props.setTrigger(false)}
        >
          <IoMdClose />
        </button>
        <input type="checkbox" id="chk" checked={popChecked} aria-hidden="true" />
        <div className="signup">
          <form onSubmit={handleClicke}>
            <label htmlFor="chk" onClick={() => setPopChecked(!popChecked)} aria-hidden="true">
              {t('login-Sinscrire')}
            </label>
            <input
              className="input-loginsignup"
              type="text"
              name="username"
              placeholder={t('Nom dutilisateur')}
              required
              ref={username}
            />
            <input
              className="input-loginsignup"
              type="email"
              name="email"
              placeholder={t('Email')}
              ref={emailregister}
              required
            />
            <div className="div-passwordregister">
            <input
              className="input-loginsignup"
              type="password"
              placeholder={t('Mot de passe')}
              required
              ref={passwordregister}
              onChange={handlePasswordChange}
              onKeyDown={handleKeyDown}
              minLength="8"
            />
            {capsLockActivated && (
              <div className="caps-lock-notification">
                <p>{t('Votre bouton MAJ est activé')}</p>
              </div>
            )}

            </div>
            
            <input
              className="input-loginsignup"
              type="password"
              placeholder={t('Confirmer le mot de passe')}
              required
              ref={passwordAgain}
            />
            <div>
              {endInscription && <h6 className="h6-inscription">{t('Inscription Réussie')}</h6>}
            </div>


            <button className={endInscription ? "disappear" : "button-popup-window"} >{t('login-Sinscrire')}</button>
          </form>
        </div>

        <div className="login" onSubmit={handleClick}>
          <form>
            <label className="laboon" onClick={() => setPopChecked(!popChecked)} htmlFor="chk" aria-hidden="true">
            {t('Se connecter')}
            </label>
            <input
              className="input-loginsignup"
              type="email"
              name="email"
              placeholder={t('Email')}
              required
              ref={email}
            />
            <input
              className="input-loginsignup"
              type="password"
              name="pswd"
              placeholder={t('Mot de passe')}
              required
              ref={password}
              minLength={8}
            />
            <Link to="/forgot-password"> <p className="forgotpwmsg" >{t('Mot de passe oublié ?')}</p></Link>
            <div className="loginerrormsg-box">
            <p className="loginerrormsg">{error} </p>
            </div>

            
            <button className="button-popup-window margin-top-errormsg" disabled={isFetching}>{isFetching ? t('Connexion') : t('Se connecter')}</button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;

