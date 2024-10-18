import PropTypes from "prop-types";
// import { useState } from "react";
import "./styles/WorkshopFormInput.css";

function WorkshopFormInput({ data, setData }) {
  const handleInputChange = (event) => {
    if (event && event.target) {
      const { name, type, files } = event.target;

      setData((prevState) => ({
        ...prevState,
        [name]: type === "file" ? files[0] : event.target.value,
      }));
    } else {
      console.error("L'événement ou event.target est indéfini.");
    }
  };

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
        value={data.title}
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
        value={data.description}
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
        value={data.price_ht}
        onChange={handleInputChange}
      />
    </>
  );
}

WorkshopFormInput.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price_ht: PropTypes.number.isRequired,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};

export default WorkshopFormInput;
