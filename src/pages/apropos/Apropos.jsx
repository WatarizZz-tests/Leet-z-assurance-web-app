import React from 'react';
import "./apropos.css";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Apropos = () => {
  return (
    <div>
        <Header/>
        <div className='apropos-container-content'>
            <div className='apropos-container-box'>
                <div className='apropos-container-part-1'>
                    <h1>À propos</h1>
                    <p>Bienvenue sur Leet'z Assurance !</p>
                    <p>Ce projet constitue notre initiative en tant qu'étudiants dans le cadre de notre programme d'études. Nous sommes [Prénom Nom] et [Prénom Nom], deux étudiants passionnés par le secteur de l'assurance automobile. Notre objectif avec ce site est de simplifier le processus d'assurance automobile et d'apporter une expérience transparente aux utilisateurs. Nous croyons fermement en l'importance de protéger les conducteurs et leurs véhicules.</p>
                </div>
                <div className='apropos-container-part-2'>
                    <h1>Notre équipe</h1>
                    <p>En tant qu'étudiants, nous avons combiné nos compétences en gestion, marketing, developpement web et conception pour créer ce site d'assurance automobile. Nous aspirons à fournir un service de qualité et à répondre aux besoins changeants des conducteurs. Notre motivation découle de notre désir d'innover dans le domaine de l'assurance et de faciliter la vie des automobilistes.</p>
                </div>
                <div className='apropos-container-part-3'>
                    <h1>Notre vision</h1>
                    <p>Notre vision est de devenir une référence en matière d'assurance automobile en offrant des solutions adaptées aux besoins individuels des conducteurs. Nous croyons que chaque conducteur devrait avoir accès à une assurance fiable. Avec ce site, nous cherchons à créer une communauté où les conducteurs se sentent en sécurité et bien accompagnés.</p>
                    <br/>
                    <p>Merci de nous accompagner dans ce projet ambitieux de site d'intermediare d'assurance automobile ! Votre soutien est précieux pour nous aider à réaliser notre vision.</p>
                </div>
            </div>
            
        </div>
        <Footer/>

    </div>
  )
}

export default Apropos
