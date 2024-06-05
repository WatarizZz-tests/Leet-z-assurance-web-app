import Header from "../../components/header/Header";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import "./demande.css";
import Footer from "../../components/footer/Footer";
import { IoMdClose } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { MdDone } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const Demande = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const UP = "https://firebasestorage.googleapis.com/v0/b/assurance-storage-6514b.appspot.com/o/images%2F";
  const END = "?alt=media";
  const { t } = useTranslation();

  const { user } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);

  const GetPosts = async () => {
    await axios
      .get(`${BASE_URL}/api/posts`)
      .then((x) => {
        if (x.status == 200) {
          const result = x.data.filter((y) => y.userId == user?._id);
          setPosts(result);
        }
      })
      .catch("ERROR you have to leet it");
  };

  useEffect(() => {
    GetPosts();
  }, []);

  return (
    <div className="mesdemandes__bigcontainer">
      <Header />

      <div className="userdemands__box">
        <h1>{t('demandes')}</h1>
        <div className="table-responsive text-nowrap">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">{t('Nom')}</th>
                <th scope="col">{t('Prenom')}</th>
                <th scope="col">{t('Police d\'assurance')}</th>
                <th scope="col">{t('Etat')}</th>
                <th scope="col">{t('Assurance')}</th>
                <th scope="col">{t('eff/exp')}</th>
                <th scope="col">{t('Garanties')}</th>
                <th scope="col">{t('Date et lieu de l\'accident')}</th>
                <th scope="col">{t('Nature de l\'accident')}</th>
                <th scope="col">{t('Etat du vehicule')}</th>
                <th scope="col">{t('Photos associées a l\'accident')}</th>
              </tr>
            </thead>

            {posts.map((item, index) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td key={index}>{item.nom}</td>
                      <td key={index}>{item.prenom}</td>
                      <td key={index}> {item.police}</td>
                      <td className="li-demands-popup" key={index}>
                        {item.request == "notyet" && (
                          <p className="statereq-inside">
                            {" "}
                            {t('en cours')} <ImCross className="notdone" />{" "}
                          </p>
                        )}
                        {item.request == "done" && (
                          <p className="statereq-inside">
                            {t('Terminée')} <MdDone className="done" />{" "}
                          </p>
                        )}
                      </td>
                      <td key={index}> {item.assurance}</td>
                      <td key={index}>
                        {item.effexp[0]} - {item.effexp[1]}
                      </td>
                      <td key={index}>
                        {" "}
                        {item.garanties
                          .filter((garant) => garant !== "")
                          .map((garant, ind) => (
                            <li key={ind}>{garant}</li>
                          ))}{" "}
                      </td>
                      <td key={index}>
                        {item.datelieu[0]} a {item.datelieu[1]}{" "}
                      </td>
                      <td key={index}>{item.nature}</td>
                      <td key={index}>{item.etat}</td>

                      <td key={index}>
                        <div className="flex-images">
                          {item.img.map((it) => (
                            
                            <li className="li-demands-popup">
                              <a href={UP + it + END} target="_blank">
                                <img
                                  className="imgdemandes"
                                  src={UP + it + END}
                                  alt="fichier non telechargé !" 
                                  target="_blank"
                                />
                              </a>
                            </li>
                          ))}
                        </div>

                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Demande;