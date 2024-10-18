import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./styles/WorkshopFormInput.css";

function WorkshopNewFormInput({ onChange }) {
  const [newWorkshopData, setNewWorkshopData] = useState({
    title: "",
    description: "",
    price_ht: 0,
  });

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;

    setNewWorkshopData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  useEffect(() => {
    onChange({ ...newWorkshopData });
  }, [newWorkshopData]); // Si on met onChange, créer une boucle infinie

  return (
    <>
      <label className="workshop-form-input-label" htmlFor="title">
        Titre de l'atelier :
      </label>
      <input
        className="workshop-form-input"
        type="text"
        placeholder="Titre de l'atelier"
        name="title"
        value={newWorkshopData.title}
        onChange={handleInputChange}
      />
      <label className="workshop-form-input-label" htmlFor="description">
        Description de l'atelier :
      </label>
      <input
        className="workshop-form-input"
        type="text"
        placeholder="Description de l’atelier en une phrase"
        name="description"
        value={newWorkshopData.description}
        onChange={handleInputChange}
      />
      <label className="workshop-form-input-label" htmlFor="price_ht">
        Prix de l'atelier H.T. :
      </label>
      <input
        className="workshop-form-input"
        type="number"
        placeholder="Prix de l'atelier H.T."
        name="price_ht"
        min="0"
        value={newWorkshopData.price_ht}
        onChange={handleInputChange}
      />
    </>
  );
}

WorkshopNewFormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default WorkshopNewFormInput;
