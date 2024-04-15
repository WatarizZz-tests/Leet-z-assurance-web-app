import React from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "./newpasswordstyle.css";


function NewPassword() {
    const [password, setPassword] = useState()
    const [confirmationPassword,setConfirmationPassword] = useState("");
    const {id, token} = useParams()
    const BASE_URL = 'https://insurance-api-bic3.onrender.com';

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post( `${BASE_URL}/api/auth/reset-password/${id}/${token}`, {password})
        .then(res => {
            if(res.status === 200) {
                setConfirmationPassword("Mot de passe changé avec succés")
            } else {
                console.log("Unexpected response status:", res.status);
            }
        })
        .catch(err => console.log(err))
    }

    return(
        <>
        <Header/>
        <div className='box-recovery'>
        <div className=" d-flex justify-content-center align-items-center bg-secondary vh-100 w-100"  >
        <div className="bg-white p-3 rounded width-forgot-container w-sm-50 w-md-40 ">
        <h4 className='h4-forgot-password'>Nouveau mot de passe</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Entrer le nouveau mot de passe"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              minLength={8}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Changer
          </button>
          <p className='confmsgreset'> {confirmationPassword} </p>
          </form>
        
      </div>
    </div>
    </div>
    <Footer/>
    </>
    )
}

export default NewPassword;