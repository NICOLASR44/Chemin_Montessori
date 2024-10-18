// import PropTypes from "prop-types";
import { useState, useContext } from "react";

// Components
import FormButtonStack from "./FormButtonStack";
import WorkshopNewFormInput from "./WorkshopNewFormInput";
import WorkshopFormNewSection from "./WorkshopFormNewSection";
import Upload from "../../shared/Upload";

// CSS
import "./styles/WorkshopForm.css";

// Context
import { AdminWorkshopContext } from "../../../context/AdminWorkshopContext";

function WorkshopForm() {
  const [sections, setSections] = useState([{}]);

  const { handlePostWorkshop } = useContext(AdminWorkshopContext);

  const addSection = () => {
    if (sections.length < 5) {
      setSections([...sections, {}]);
    } else {
      console.info("Nombre maximal de sections atteint !");
    }
  };

  const [newWorkshop, setNewWorkshop] = useState({
    title: "",
    description: "",
    price_ht: 0,
    image: null,
    transcript_pdf: null,
    file_zip: null,
  });

  const handleWorkshopChange = (updatedWorkshopData) => {
    setNewWorkshop((prev) => ({
      ...prev,
      ...updatedWorkshopData,
    }));
  };

  // console.log("newWorkshop", newWorkshop)

  const [sectionsData, setSectionsData] = useState([]);

  const handleSectionChange = (index, updatedSectionData) => {
    const newSectionsData = [...sectionsData];
    newSectionsData[index] = updatedSectionData;
    setSectionsData(newSectionsData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérification des données de l'atelier
    if (!newWorkshop.title || !newWorkshop.description || !newWorkshop.image) {
      alert(
        "Certains champs obligatoires sont manquants. Veuillez recommencer."
      );
      return; // Stoppe l'exécution si une condition échoue
    }

    // Vérification des sections (optionnelle, si applicable)
    if (
      sectionsData.length === 0 ||
      sectionsData.some((section) => !section.title || !section.description)
    ) {
      alert(
        "Une ou plusieurs sections sont incomplètes. Veuillez recommencer."
      );
      return; // Stoppe l'exécution si une condition échoue
    }
    const formData = new FormData();

    //   // Ajouter les données textuelles de l'atelier
    formData.append("title", newWorkshop.title);
    formData.append("description", newWorkshop.description);
    formData.append("price_ht", newWorkshop.price_ht);
    formData.append("image", newWorkshop.image);

    const formDataRessource = new FormData();

    formDataRessource.append("transcript_pdf", newWorkshop.transcript_pdf);
    formDataRessource.append("file_zip", newWorkshop.file_zip);

    const formDataVideo = new FormData();

    sectionsData.forEach((section, index) => {
      formDataVideo.append(`sections[${index}][title]`, section.title);
      formDataVideo.append(
        `sections[${index}][description]`,
        section.description
      );
      formDataVideo.append(`sections[${index}][source]`, section.source);
      formDataVideo.append(`sections[${index}][duration]`, section.duration);
      formDataVideo.append(`sections[${index}][section]`, section.section);

      // Si une image vidéo est présente, l'ajouter aussi
      if (section.video_image) {
        formDataVideo.append(
          `sections[${index}][video_image]`,
          section.video_image
        );
      }
    });

    // Appel de la fonction pour poster l'atelier
    handlePostWorkshop(formData, formDataRessource, formDataVideo);
    alert("Atelier créé !");
  };

  return (
    <form
      method="post"
      action="#"
      encType="multipart/form-data"
      className="workshop-form"
      onSubmit={handleSubmit}
    >
      <WorkshopNewFormInput
        onChange={(updatedWorkshopData) =>
          handleWorkshopChange(updatedWorkshopData)
        }
      />
      <div className="workshop-form-upload">
        <Upload
          text="un PDF"
          inputName="transcript_pdf"
          onChange={(updatedWorkshopData) =>
            handleWorkshopChange(updatedWorkshopData)
          }
        />
        <Upload
          text="un fichier ZIP"
          inputName="file_zip"
          onChange={(updatedWorkshopData) =>
            handleWorkshopChange(updatedWorkshopData)
          }
        />
        <Upload
          inputName="image"
          onChange={(updatedWorkshopData) =>
            handleWorkshopChange(updatedWorkshopData)
          }
        />
      </div>

      {sections.map((section, index) => (
        <WorkshopFormNewSection
          key={section.section}
          sectionNumber={index + 1}
          onSectionChange={(updatedSectionData) =>
            handleSectionChange(index, updatedSectionData)
          }
        />
      ))}

      <div className="workshop-form__button-stack">
        <FormButtonStack addSection={addSection} handleSubmit={handleSubmit} />
      </div>
    </form>
  );
}

WorkshopForm.propTypes = {};

export default WorkshopForm;
