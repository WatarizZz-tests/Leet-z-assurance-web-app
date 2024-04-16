import React from 'react'
import { useState } from "react";
import axios from 'axios'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "./forgotpasswordstyle.css";


function ForgotPassword() {
    const [email, setEmail] = useState();
    const [confirmationMessage,setConfirmationMessage] = useState("");
    const BASE_URL = 'https://insurance-api-bic3.onrender.com';


    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}/api/auth/forgot-password`, { email })
        .then(res => {
            if (res.status === 200) {
                setConfirmationMessage("Votre email de réinitialisation a été envoyé ! Votre lien sera valide pour une durée de 24 heures.");
            } else {
               
                if (res.status === 500) {
                    setConfirmationMessage("L'utilisateur n'a pas été trouvé. Veuillez vérifier l'adresse e-mail.");
                } else {
                    console.log("Unexpected response status:", res.status);
                }
            }
        })
        .catch(err => {
            console.error("Error:", err);
        });
};

    return(
        <>
        <Header/>
        <div className='box-recovery'>
        <div className=" d-flex justify-content-center align-items-center bg-secondary vh-100 w-100"  >
        <div className="bg-white p-3 rounded width-forgot-container w-sm-50 w-md-40 ">
        <h4 className='h4-forgot-password'>Mot de passe oublié</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className='recovery-mail-input' htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Entrer votre adresse mail"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Envoyer
          </button>
          <p className='confmsgforgot'> {confirmationMessage} </p>
          </form>
        
      </div>
    </div>
    </div>
    <Footer/>
    </>
    )
}

export default ForgotPassword;
