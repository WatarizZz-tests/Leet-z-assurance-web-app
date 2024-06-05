import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./newpasswordstyle.css";

function NewPassword() {
  const { t } = useTranslation();
  const [password, setPassword] = useState();
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const { id, token } = useParams();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}/api/auth/reset-password/${id}/${token}`, { password })
      .then(res => {
        if (res.status === 200) {
          setConfirmationPassword(t("new-pwMot de passe changé avec succés"));
        } else {
          console.log("Unexpected response status:", res.status);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="box-recovery">
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 w-100">
          <div className="bg-white p-3 rounded width-forgot-container w-sm-50 w-md-40">
            <h4 className="h4-forgot-password">{t("new-pwNouveau mot de passe")}</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder={t("new-pwEntrer le nouveau mot de passe")}
                  autoComplete="off"
                  name="password"
                  className="form-control rounded-0"
                  minLength={8}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success w-100 rounded-0">
                {t("new-pwChanger")}
              </button>
              <p className="confmsgreset">{confirmationPassword}</p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewPassword;