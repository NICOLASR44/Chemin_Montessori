import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./styles/Upload.css";
import UploadImage from "../svg/UploadImage";

function Upload({ text = "une image", onChange, inputName, style = {} }) {
  const [fileData, setFileData] = useState({});
  const [fileName, setFileName] = useState("Aucun fichier");

  // Remonte le fichier au parent lorsque fileData change
  useEffect(() => {
    onChange(fileData); // Envoie l'objet fileData au parent
  }, [fileData]); // Si on met onChange, créer une boucle infinie

  const handleInputChange = (event) => {
    if (event && event.target) {
      const { name, type, files } = event.target;

      if (type === "file") {
        const file = files.length > 0 ? files[0] : null;
        setFileData((prevState) => ({
          ...prevState,
          [name]: file,
        }));
        setFileName(file ? file.name : "Aucun fichier");
        onChange({ target: { name, type, files: [file] } });
      }
    }
  };

  return (
    <div className="upload">
      <label className="upload__container" aria-hidden="true" style={style}>
        <h3>
          Télécharger <br /> {text}
        </h3>
        <UploadImage />
        <input
          type="file"
          name={inputName}
          onChange={handleInputChange}
          style={{ display: "none" }}
        />
      </label>
      <span className="upload__span"> {fileName} téléchargé</span>
    </div>
  );
}

Upload.propTypes = {
  text: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};

export default Upload;
