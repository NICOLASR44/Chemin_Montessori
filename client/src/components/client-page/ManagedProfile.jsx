// import PropTypes from "prop-types";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import Flower9 from "../svg/Flower9";
import PinkCross from "../svg/PinkCross";
import Blueavatar from "../../../public/avatar-blue.png";

import Title from "../shared/Title";
import Button from "../shared/Button";
import "./styles/ManagedProfile.css";
import Upload from "../shared/Upload";
import ManagedSection from "./ManagedSection";

function ManagedProfile() {
  const { UserIdData, UserIdLoading, UserIdError, handleUpdateUser } =
    useContext(UserContext);

  const [updatedUser, setUpdatedUser] = useState({
    avatar: "",
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    newsletter: false,
  });

  useEffect(() => {
    if (UserIdData) {
      setUpdatedUser({
        avatar: UserIdData.avatar,
        firstname: UserIdData.firstname || "",
        lastname: UserIdData.lastname || "",
        username: UserIdData.username || "",
        email: UserIdData.email || "",
        newsletter: UserIdData.newsletter ? 1 : 0,
      });
    }
  }, [UserIdData]);

  if (UserIdLoading) return "loading";
  if (UserIdError) return `Erreur: ${UserIdError}`;

  const handleUserChange = (updatedUserData) => {
    setUpdatedUser((prev) => ({
      ...prev,
      ...updatedUserData,
    }));
  };

  const handleInputChange = (event) => {
    if (event && event.target) {
      const { name, value, type, files } = event.target;
      let newValue;

      if (type === "radio") {
        // Pour les boutons radio, convertir en entier
        newValue = parseInt(value, 10);
      } else if (type === "file") {
        // Pour les fichiers, prendre le premier fichier sélectionné
        newValue = files && files.length > 0 ? files[0] : null;
      } else {
        newValue = value;
      }

      setUpdatedUser((prevState) => ({
        ...prevState,
        [name]: newValue,
      }));
    } else {
      console.error("L'événement ou event.target est indéfini.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("firstname", updatedUser.firstname);
    formData.append("lastname", updatedUser.lastname);
    formData.append("username", updatedUser.username);
    formData.append("email", updatedUser.email);
    formData.append("avatar", updatedUser.avatar);

    formData.append("newsletter", parseFloat(updatedUser.newsletter));
    try {
      await handleUpdateUser(formData);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la ressource:", error);
    }
  };

  return (
    <div className="profile__container">
      <div className="profile__container-title">
        <Title
          style={{ marginTop: "5vh", marginBottom: "10vh" }}
          boldText="Gérez votre"
          italicText="profil"
          htmlTag="h2"
        />
      </div>
      <form
        className="profile__section"
        method="put"
        action="#"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <Flower9 className="profile__flower" width="80" height="80" />
        <PinkCross
          className="profile__section-svg-bottom-right"
          width={121}
          height={119}
        />
        <div className="profile__avatar-section">
          <img
            src={
              UserIdData.avatar
                ? `http://localhost:3310/${UserIdData.avatar}`
                : Blueavatar
            }
            alt="avatar"
            className="profile__avatar"
          />
          <Upload
            inputName="avatar"
            onChange={(updatedUserData) => handleUserChange(updatedUserData)}
          />
        </div>

        <div className="profile__info">
          <h2 className="profile__modify">Modifier mes coordonnées :</h2>

          <div className="profile__form" onSubmit={handleSubmit}>
            <label className="profile__label-green" htmlFor="nom">
              Nom :
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              className="profile__input-white"
              value={updatedUser.lastname}
              placeholder="Nouveau nom"
              onChange={handleInputChange}
            />

            <label className="profile__label-green" htmlFor="prenom">
              Prénom :
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              className="profile__input-white"
              value={updatedUser.firstname}
              placeholder="Nouveau prénom"
              onChange={handleInputChange}
            />

            <label className="profile__label-green" htmlFor="username">
              Nom d'utilisateur :
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="profile__input-white"
              value={updatedUser.username}
              placeholder="Nouveau nom d'utilisateur"
              onChange={handleInputChange}
            />

            <label className="profile__label-green" htmlFor="email">
              Email :
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="profile__input-white"
              value={updatedUser.email}
              placeholder="Nouvel email"
              onChange={handleInputChange}
            />

            <div className="profile__radio-group">
              Newsletter :
              <label htmlFor="newsletter-oui">
                <input
                  id="newsletter-oui"
                  type="radio"
                  name="newsletter"
                  value="1"
                  checked={updatedUser.newsletter === 1}
                  onChange={handleInputChange}
                />{" "}
                Oui
              </label>
              <label htmlFor="newsletter-non">
                <input
                  id="newsletter-non"
                  type="radio"
                  name="newsletter"
                  value="0"
                  checked={updatedUser.newsletter === 0}
                  onChange={handleInputChange}
                />{" "}
                Non
              </label>
            </div>
          </div>
          <Button
            className="profile__save-btn"
            text="Enregistrer"
            type="submit"
            onClick={handleSubmit}
            style={{
              fontSize: "1rem",
              fontFamily: "var(--font-body)",
              backgroundColor: "var(--clr-intense-green)",
              padding: "0.5rem 1rem",
              alignSelf: "center",
            }}
          />
        </div>
      </form>
      <ManagedSection />
    </div>
  );
}

ManagedProfile.propTypes = {};

export default ManagedProfile;
