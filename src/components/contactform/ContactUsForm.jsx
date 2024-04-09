import React from 'react';
import './contactusform.css';

const ContactUsForm = () => {
  return (
    <div className='contactusform__body'>
      <h2>Nous Contacter</h2>
     
      <form className='formcss'>
        <div className='nometprenomcontactform'>
          <div className='np-flex'>
            <label>Nom</label>
            <input placeholder='nom'/>
          </div>
          <div className='np-flex'>
            <label>Prenom</label>
            <input placeholder='Prenom'/>
          </div>
        </div>
        <div className='mail-container-contactform'>
          <label placeholder="emailcontactform">Adresse Email</label>
          <input placeholder='Entrez votre adresse email'/>
        </div>
        <div className='textarea-container-contactform'>
          <label>Votre message</label>
          <textarea cols={80} rows={30} placeholder='Votre message' className='textareasmallscreens'/>
        </div>
        <div className='button-container-contactform'>
        <button className='contact-form-button'>Envoyer</button>
        </div>
        
      </form>
    </div>
  )
}

export default ContactUsForm
