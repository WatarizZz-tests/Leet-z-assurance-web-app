import React from 'react';
import "./footer.css";
import logofooter from "../../assets/leetz-logo-red.png";

const Footer = () => {
  return (
    <div className='footer-container'>
        <p>Leet'z assurance est un service créé pour un projet de fin d'etude.</p>
        <p>Le service a pour but de faire office d'intermediaire entre les clients et les professionnels du domaine de l'assurance automobile.</p>
        <img src={logofooter} alt="logoenbas"/>

        <h6>Copyright 2024 Leet'z assurance | Tous droits réservés.</h6>

    
    </div>
  )
}

export default Footer
