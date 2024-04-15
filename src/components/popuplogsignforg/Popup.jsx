import React, { useContext, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import "./popup.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";


const Popup = (props) => {
	const [endInscription,setEndInscription] = useState(false);
  const [popChecked,setPopChecked] = useState(false);
  const [error, setError] = useState("");
  const BASE_URL = 'https://insurance-api-bic3.onrender.com';

  const navigate = useNavigate();


  const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post( `${BASE_URL}/api/auth/login`, userCredential);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate('/');
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
      if (err.response) {
        const { data } = err.response;
        if (data === "user not found") {
          setError("Email incorrect");
        } else if (data === "wrong password") {
          setError("Mot de passe incorrect");
        }
      }
    }
  };
 
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const emailregister = useRef();
  const passwordregister= useRef();
  const passwordAgain = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email: email.current.value, password: password.current.value }, dispatch);
   
  };

  const handleClicke = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== passwordregister.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: emailregister.current.value,
        password: passwordregister.current.value,
      };
      try {
        await axios.post(  `${BASE_URL}/api/auth/register`, user);
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
              S'inscrire
            </label>
			<input
              className="input-loginsignup"
              type="text"
              name="username"
              placeholder="Nom d'utilisateur"
              required
			  ref={username}
            />
            <input
              className="input-loginsignup"
              type="email"
              name="email"
              placeholder="Email"
			  ref={emailregister}
              required
            />
            <input
              className="input-loginsignup"
              type="password"
              placeholder="Mot de passe"
              required
              ref={passwordregister}
              minLength="8"
            />
            <input
              className="input-loginsignup"
              type="password"
              placeholder="Confirmer le mot de passe"
              required
			  ref={passwordAgain}
            />
			<div>
			{endInscription && <h6 className="h6-inscription">Inscription Réussie</h6> }
			</div>
			
			
            <button className={endInscription ? "disappear" : "button-popup-window" } >S'inscrire</button>
          </form>
        </div>

        <div className="login" onSubmit={handleClick}>
          <form>
            <label className="laboon" onClick={() => setPopChecked(!popChecked)} htmlFor="chk" aria-hidden="true">
              Se connecter
            </label>
            <input
              className="input-loginsignup"
              type="email"
              name="email"
              placeholder="Email"
              required
              ref={email}
            />
            <input
              className="input-loginsignup"
              type="password"
              name="pswd"
              placeholder="mot de passe"
              required
              ref={password}
              minLength={8}
            />
            <Link to="/forgot-password"> <p className="forgotpwmsg" >Mot de passe oublié ?</p></Link>
            
            <p className="loginerrormsg">{error} </p>
            <button className="button-popup-window" disabled={isFetching}>{isFetching ? "Connexion" : "Se connecter"}</button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;

