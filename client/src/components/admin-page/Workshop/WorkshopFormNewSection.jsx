import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./styles/WorkshopFormSection.css";
import Upload from "../../shared/Upload";

function WorkshopFormNewSection({
  sectionNumber,
  onSectionChange, // nouvelle prop pour remonter les données
}) {
  const [newVideoData, setNewVideoData] = useState({
    title: "",
    description: "",
    source: "",
    duration: 1,
    section: sectionNumber,
    video_image: null,
  });

  useEffect(() => {
    onSectionChange(newVideoData); // Remonte les données à chaque changement
  }, [newVideoData]); // Si on met onChange, créer une boucle infinie

  const handleInputChange = (event) => {
    if (event && event.target) {
      const { name, type, files } = event.target;

      setNewVideoData((prevState) => ({
        ...prevState,
        [name]: type === "file" ? files[0] : event.target.value,
      }));
    } else {
      console.error("L'événement ou event.target est indéfini.");
    }
  };

  return (
    <div className="workshop-form-section">
      <h2 className="workshop-form-section__title">Section {sectionNumber}</h2>
      <div className="workshop-form-section__flex-container">
        <label className="workshop-form-input-label" htmlFor="title">
          Titre de la video :
        </label>
        <input
          type="text"
          name="title"
          className="workshop-form-input"
          placeholder="Titre de la section"
          value={newVideoData.title}
          onChange={handleInputChange}
        />
        <label className="workshop-form-input-label" htmlFor="source">
          URL de la video :
        </label>
        <input
          type="text"
          name="source"
          className="workshop-form-input"
          placeholder="URL de la vidéo"
          value={newVideoData.source}
          onChange={handleInputChange}
        />
        <label className="workshop-form-input-label" htmlFor="duration">
          Durée en minutes de la vidéo :
        </label>
        <input
          type="number"
          name="duration"
          min="1"
          className="workshop-form-input"
          placeholder="Durée en minutes de la vidéo"
          value={newVideoData.duration}
          onChange={handleInputChange}
        />
      </div>
      <p className="workshop-form-input-text">Description de la vidéo :</p>
      <div className="workshop-form-input__flex-row-container">
        <textarea
          className="workshop-form-input"
          name="description"
          id="descritionWorkshopSection"
          placeholder="Description de la section - Maximum 255 caractères"
          value={newVideoData.description || ""}
          onChange={handleInputChange}
        />
        <Upload inputName="video_image" onChange={handleInputChange} />
      </div>
      <div className="workshop-form-section__cues">
        <span>{255 - newVideoData.description.length} caractères restants</span>
      </div>
    </div>
  );
}

WorkshopFormNewSection.propTypes = {
  sectionNumber: PropTypes.number.isRequired,
  onSectionChange: PropTypes.func.isRequired,
};

export default WorkshopFormNewSection;
