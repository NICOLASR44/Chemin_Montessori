import PropTypes from "prop-types";
import "./styles/WorkshopFormSection.css";
import Upload from "../../shared/Upload";

function WorkshopFormSection({ sectionNumber, data, setData }) {
  const handleInputChange = (event) => {
    if (event && event.target) {
      const { name, type, value, files } = event.target;

      const updatedSectionData = {
        [name]: type === "file" ? files[0] : value,
      };

      setData((prevSections) => {
        const newSections = [...prevSections]; // Créer une nouvelle copie du tableau
        newSections[sectionNumber - 1] = {
          // Mettre à jour la section à l'index actuel
          ...newSections[sectionNumber - 1],
          ...updatedSectionData,
        };
        return newSections; // Retourner le tableau mis à jour
      });
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
          value={data[sectionNumber - 1].title}
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
          value={data[sectionNumber - 1].source}
          onChange={handleInputChange}
        />
        <label className="workshop-form-input-label" htmlFor="duration">
          Durée en minutes de la vidéo :
        </label>
        <input
          type="number"
          name="duration"
          className="workshop-form-input"
          placeholder="Durée en minutes de la vidéo"
          value={data[sectionNumber - 1].duration}
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
          value={data[sectionNumber - 1].description}
          onChange={handleInputChange}
        />
        <Upload inputName="image" onChange={handleInputChange} />
      </div>
      <div className="workshop-form-section__cues">
        <span>
          {255 - data[sectionNumber - 1].description.length} caractères restants
        </span>
      </div>
    </div>
  );
}

WorkshopFormSection.propTypes = {
  sectionNumber: PropTypes.number.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};

export default WorkshopFormSection;
