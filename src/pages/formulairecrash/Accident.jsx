import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DeclarationSlider from "../../components/declarationslider/DeclarationSlider";
import "./accident.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useContext } from "react";
import { IoWarningOutline } from "react-icons/io5";
import moment from 'moment';
import { format } from 'date-fns';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import fr from 'date-fns/locale/fr';
import { Tooltip } from 'react-tippy'; 
import 'react-tippy/dist/tippy.css';
import { useTranslation } from 'react-i18next';

const Accident = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [startDatee, setStartDatee] = useState(new Date());
  const [startDateee, setStartDateee] = useState(new Date());
  const [assurance, setAssurance] = useState("");
  const [successPostSent, setSuccessPostSent] = useState("");
  const [imagePreviews, setImagePreviews] = useState([]);
  const [filelist, setFileList] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const date = new Date();
  const BASE_URL = 'https://insurance-api-bic3.onrender.com';
  const { t } = useTranslation();


  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "assurance-storage-6514b.firebaseapp.com",
    projectId: "assurance-storage-6514b",
    storageBucket: "assurance-storage-6514b.appspot.com",
    messagingSenderId: "464629593424",
    appId: "1:464629593424:web:5443bd3e48868aa2a06855"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);
  const storage = getStorage(firebaseApp);


   const handleDateChange = (date) => {
    setStartDate(date || new Date()); // Set startDate to null if date is falsy( actually not really null but this way you can type a new one)
  };

  const handleDateeChange = (date) => {
    setStartDatee(date || new Date()); // Set startDatee to null if date is falsy( actually not really null but this way you can type a new one)
  };
  const handleDateeeChange = (date) => {
    setStartDateee(date || new Date()); // Set startDateee to null if date is falsy( actually not really null but this way you can type a new one)
  };







  const submitHandler = async (filelist) => {
    setIsSubmitting(true);

    const newPost = {
      userId: user._id,
      nom: nom,
      prenom: prenom,
      assurance: assurance,
      police: police,
      effexp: effexp,
      garanties: garanties,
      datelieu: datelieu,
      nature: nature,
      etat: etat,
      request: "notyet",
    };
    const formdata = new FormData();
    for (let index = 0; index < filelist.length; index++) {
      const file = filelist[index];
      const fileName = moment().format('YYYY_MM_DD_HH_mm') + "_" + file.name;

      // Upload image to Firebase Storage
      const storageRef = ref(storage, "images/" + fileName);
      await uploadBytes(storageRef, file);

      // Append file names to the newPost object
      if (!newPost.img) {
        newPost.img = [];
      }
      newPost.img.push(fileName);
    }

    try {
      // Post data to your API
      await axios.post(`${BASE_URL}/api/posts`, newPost);
      setIsSubmitting(false);
      setSuccessPostSent("Votre demande a bien été envoyée, Merci !");
    } catch (err) {
      console.log(err);
    }
  };

  const postFiles = async (formdata) => {
    try {
      const result = await axios.post(`${BASE_URL}/api/multifiles`, formdata);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const [lieu, setLieu] = useState("");
  const [nature, setNature] = useState("");
  const [etat, setEtat] = useState("");
  const [nom, setNom] = useState("");

  const [prenom, setPrenom] = useState("");

  const [police, setPolice] = useState("");

  const [checked1, setChecked1] = useState(false);
  const [value1, setValue1] = useState("");

  const functionOption1 = (e) => {
    setChecked1(!checked1);
    !checked1 ? setValue1(e.target.value) : setValue1("");
    if (!checked1) {
      setChecked2(false);
      setChecked3(false);
      setChecked4(false);
      setChecked5(false);
      setChecked6(false);
      setChecked7(false);
      setValue2("");
      setValue3("");
      setValue4("");
      setValue5("");
      setValue6("");
      setValue7("");
    }
    else {
      setValue1("");
    }
  };
  const [checked2, setChecked2] = useState(false);
  const [value2, setValue2] = useState("");

  const functionOption2 = (e) => {
    setChecked2(e.target.checked);
    !checked2 ? setValue2(e.target.value) : setValue2("");
    if (!checked2) {
      setChecked1(false);
      setChecked7(false);
      setValue1("");
      setValue7("");
    }
  };

  const [checked3, setChecked3] = useState(false);
  const [value3, setValue3] = useState("");

  const functionOption3 = (e) => {
    setChecked3(e.target.checked);
    !checked3 ? setValue3(e.target.value) : setValue3("");
    if (!checked3) {
      setChecked1(false);
      setValue1("");
      setValue7("");
      setChecked7(false);
    }
  };
  const [checked4, setChecked4] = useState(false);
  const [value4, setValue4] = useState("");

  const functionOption4 = (e) => {
    setChecked4(e.target.checked);
    !checked4 ? setValue4(e.target.value) : setValue4("");
    if (!checked4) {
      setChecked1(false);
      setValue1("");
      setValue7("");
      setChecked7(false);
    }
  };

  const [checked5, setChecked5] = useState(false);
  const [value5, setValue5] = useState("");

  const functionOption5 = (e) => {
    setChecked5(e.target.checked);
    !checked5 ? setValue5(e.target.value) : setValue5("");
    if (!checked5) {
      setChecked1(false);
      setValue1("");
      setValue7("");
      setChecked7(false);
    }
  };
  const [checked6, setChecked6] = useState(false);
  const [value6, setValue6] = useState("");

  const functionOption6 = (e) => {
    setChecked6(e.target.checked);
    !checked6 ? setValue6(e.target.value) : setValue6("");
    if (!checked6) {
      setChecked1(false);
      setValue1("");
      setValue7("");
      setChecked7(false);
    }
  };

  const [checked7, setChecked7] = useState(false);
  const [value7, setValue7] = useState("");


  const functionOption7 = (e) => {
    setChecked7(e.target.checked);
    !checked7 ? setValue7(e.target.value) : setValue7("");
    if (!checked7) {
      setChecked1(false);
      setChecked2(false);
      setChecked3(false);
      setChecked4(false);
      setChecked5(false);
      setChecked6(false);
      setValue1("");
      setValue2("");
      setValue3("");
      setValue4("");
      setValue5("");
      setValue6("");
    }
  };

  const garanties = [value1, value2, value3, value4, value5, value6, value7];


  const [disabled2, setDisabled2] = useState(false);
  const [disabled1, setDisabled1] = useState(false);
  const [disabled3, setDisabled3] = useState(false);
  const [disabled4, setDisabled4] = useState(false);

  const DateNotLieu = (e) => {
    setDisabled1(e.target.checked);
    if (disabled1 === false) {
      setNature(e.target.value);
      setDisabled2(false);
    }
  };
  const LieuNotDate = (e) => {
    setDisabled2(e.target.checked);
    if (disabled2 === false) {
      setNature(e.target.value);
      setDisabled1(false);
    }
  };

  const EnMarche = (e) => {
    setDisabled3(e.target.checked);
    if (disabled3 === false) {
      setEtat(e.target.value);
      setDisabled4(false);
    }
  };
  const Immobile = (e) => {
    setDisabled4(e.target.checked);
    if (disabled4 === false) {
      setEtat(e.target.value);
      setDisabled3(false);
    }
  };
  const effexp = [format(startDate, "dd-MM-yyyy"), format(startDatee, "dd-MM-yyyy")];
  const datelieu = [format(startDateee, "dd-MM-yyyy"), lieu];



  return (
    <div className="declaration-big-box-accident">
      <Header />
      <DeclarationSlider />
      <div className="separationavectexte">
        <h1>{t('Veuillez remplir le formulaire ci-dessous')}</h1>
      </div>

      <div
        className={
          user
            ? "declaration-accident-box-content"
            : "declaration-accident-box-content-connected"
        }
      >
        <div>
          {" "}
          {user ? (
            <div className="formaccident-box">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  submitHandler(filelist);
                }}
              >
                <div className="choice-insurance">
                  <p>{t('quel est votre assureur automobile ?')}</p>
                  <Tooltip title={t('assureurs')} position="right">
                    <select
                      required
                      className="select"
                      name="assurances"
                      id="assurances"
                      onChange={(e) => setAssurance(e.target.value)}
                    >
                      <option value="SAA">{t('Voir les choix')}</option>
                      <option value="SAA">SAA</option>
                      <option value="CAAR">CAAR</option>
                      <option value="GAM">GAM</option>
                      <option value="TRUST">TRUST</option>
                      <option value="CAAT">CAAT</option>
                      <option value="ALLIANCE">ALLIANCE</option>

                    </select>
                  </Tooltip>
                </div>
                <div className="nometprenom-declarationaccident">
                  <div className="labelandinput-nometprenom-declarationaccident">
                    <label><Tooltip title={t('prenom-form')} position="left">
                      {t('Nom')}
                    </Tooltip></label>
                    <input
                      placeholder={t('Nom')}
                      onChange={(e) => setNom(e.target.value)}
                      required
                    />
                  </div>
                  <div className="labelandinput-nometprenom-declarationaccident">
                    <label><Tooltip title={t('nom-form')} position="right">{t('Prenom')}</Tooltip></label>
                    <input
                      placeholder={t('Prenom')}
                      onChange={(e) => setPrenom(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="numeropolice-declarationaccident">
                  <label><Tooltip title={t('tip1')} position="left">{t('n° police d\'assurance')}</Tooltip></label>
                  <input onChange={(e) => setPolice(e.target.value)} required />
                </div>
                <div className="effetexp-declarationaccident ">
                  <div className="dateeffet-dateexpiration-declarationaccidente">
                    <label><Tooltip title={t('tip2')} position="left">{t('Date d\'effet')}</Tooltip></label>
                    <DatePicker
                      required
                      selected={startDate}
                      onChange={handleDateChange}
                      dateFormat="dd MMMM yyyy"
                      locale={fr}
                    />
                  </div>
                  <div className="dateeffet-dateexpiration-declarationaccidente">
                    <label><Tooltip title={t('tip3')} position="right">{t('date d\'expiration')}</Tooltip></label>
                    <DatePicker
                      required
                      selected={startDatee}
                      onChange={handleDateeChange}
                      dateFormat="dd MMMM yyyy"
                      locale={fr}
                      minDate={startDate || undefined} // Set minDate to the start date
                    />
                  </div>
                </div>
                <div className="garanties-checkboxes">
                  <label className="text-not-moving-right"><Tooltip title={t('tip4')} position="left">{t('Garanties incluses dans votre police d\'assurance')}</Tooltip></label>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={checked1}
                      value='Tous risques'
                      onClick={functionOption1}
                    />
                    <label>{t('Tous risques')}</label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="top"
                      checked={checked2}
                      value='Dommages et Collisions'
                      onClick={functionOption2}
                    />
                    <label>{t('Dommages et Collisions')}</label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="top"
                      checked={checked3}
                      value='Avance sur recours'
                      onClick={functionOption3}
                    />
                    <label>{t('Avance sur recours')}</label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="top"
                      value='Bris de Glaces'
                      checked={checked4}
                      onClick={functionOption4}
                    />
                    <label>{t('Bris de Glaces')}</label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="top"
                      value='Vol'
                      checked={checked5}
                      onClick={functionOption5}
                    />
                    <label>{t('Vol')}</label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="top"
                      value='Incendie'
                      checked={checked6}
                      onClick={functionOption6}
                    />
                    <label>{t('Incendie')}</label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="top"
                      value='Autre'
                      checked={checked7}
                      onClick={functionOption7}
                    />
                     <label>{t('Autre')}</label>
                  </div>
                </div>
                <div className="nometprenom-declarationaccident">
                  <div className="dateeffet-dateexpiration-declarationaccidente">
                    <label><Tooltip title={t('tip5')} position="left">{t('Date de l\'accident')}</Tooltip></label>
                    <DatePicker
                      required
                      selected={startDateee}
                      onChange={handleDateeeChange}
                      dateFormat="dd MMMM yyyy"
                      locale={fr} 
                    />
                  </div>
                  <div className="dateeffet-dateexpiration-declarationaccidente">
                    <label><Tooltip title={t('tip6')} position="right">{t('Lieu de l\'accident')}</Tooltip></label>
                    <input onChange={(e) => setLieu(e.target.value)} required />
                  </div>
                </div>
                <div className="garanties-checkboxes">
                  <label className="text-not-moving-right"><Tooltip title={t('tip7')} position="left">{t('Nature des dommages')}</Tooltip></label>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="middle"
                      value='Accident sans adversaire'
                      checked={disabled1}
                      onClick={DateNotLieu}
                    />
                    <label>{t('Accident sans adversaire')}</label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="middle"
                      value='Accident avec adversaire'
                      checked={disabled2}
                      onClick={LieuNotDate}
                    />
                    <label>{t('Accident avec adversaire')}</label>
                  </div>
                </div>
                <div className="garanties-checkboxes">
                  <label className="text-not-moving-right"><Tooltip title={t('tip8')} position="left">{t('Etat du véhicule')}</Tooltip></label>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="bottom"
                      value='En marche'
                      onChange={EnMarche}
                      checked={disabled3}
                    />
                    <label>{t('En marche')}</label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="bottom"
                      value='immobilisé'
                      checked={disabled4}
                      onChange={Immobile}
                    />
                    <label>{t('immobilisé')}</label>
                  </div>
                </div>
                <div>
                  <h1 className="h1nearend">
                    <Tooltip title={t('tip9')} position="left">{t('photo-prop')}</Tooltip>
                  </h1>
                </div>
                <div className="uploaddropform">
                  <label htmlFor="files" className="label-file">
                    {t('Choisir vos fichiers')}
                  </label>
                  <input
                    required
                    className="inputfileclass"
                    id="files"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(event) => {
                      setFileList(event.target.files);

                      let images = [];
                      for (let i = 0; i < event.target.files.length; i++) {
                        images.push(URL.createObjectURL(event.target.files[i]));
                      }
                      setImagePreviews(images);
                    }}
                  />
                  {imagePreviews && (
                    <div className="shareImgContainer">
                      {imagePreviews.map((img, i) => {
                        return (
                          <img
                            className="shareImg"
                            src={img}
                            alt={"image-" + i}
                            key={i}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="button-container-contactform">
                  <button className="accident-form-button" disabled={isSubmitting}>{isSubmitting ? t('Envoi en cours...') : t('Envoyer')}</button>
                </div>
                <div className="margin-succ-msg">
                  <p className="succespostsentmsg">{successPostSent}</p>
                </div>
              </form>
            </div>
          ) : (
            <div className="disconnecte-use-form-crash">
              {" "}
              <span>
                <IoWarningOutline className="disconnected-icons" />
                <IoWarningOutline className="disconnected-icons" />
                <IoWarningOutline className="disconnected-icons" />
              </span>
              <h1>{t('veuillez vous connecter pour acceder a ce service.')}</h1>{" "}
            </div>
          )}{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accident;