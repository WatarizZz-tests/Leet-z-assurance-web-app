import React from 'react';
import './acceuil.css';
import Header from '../../components/header/Header';
import HeroSlider from '../../components/slider/HeroSlider';
import { MdCarCrash } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';


const Acceuil = () => {
  return (
    <div>
        
        <Header/>
        <HeroSlider/>
        <div className='red-container-acceuil'>
          <h1>Un service de qualité</h1>
          <h3>Un staff professionnel</h3>
          <h3>Des partenaires attentifs et responsables</h3>
        </div>
        <div className='grey-container-acceuil'>
          <h1>Notre service est gratuit, et le restera toujours !</h1>
          <p>Dans un monde ou les prix ne font que flamber</p>
          <p>Ou les salaires ont du mal a suivre l'inflation</p>
          <p>Nous tenons a vous procurer un service au niveau de vos attentes et besoins.</p>
        </div>
        <div className='white-container-acceuil'>
          <h1>Une procedure simple et rapide</h1>
          <div className='vignette'><MdCarCrash/></div>
          <p>vous avez un accident.</p>
          <div className='vignette'><MdOutlineSmartphone/></div>
          <p>vous prenez l'etat de la voiture en photos.</p>
          <div className='vignette'><FaLaptop/></div>
          <p>vous remplissez notre formulaire.</p>
          <div className='vignette'><IoDocumentText/></div>
          <p>Nous traitons vos documents.</p>
        </div>
        <div className='red-container-acceuil2'>
          <h1>N'attendez Plus </h1>
          <Link to="/formulaireaccident"  ><button className='red-container-button'>faites votre declaration </button></Link>
          
          
        </div>
        <Footer/>

    </div>
  )
}

export default Acceuil
