import PropTypes from "prop-types";
import { useContext, useState } from "react";
import "./styles/WorkshopUpdateForm.css";
import WorkshopFormInput from "./WorkshopFormInput";
import WorkshopFormSection from "./WorkshopFormSection";
import Upload from "../../shared/Upload";
import Button from "../../shared/Button";

// Context
import { AdminWorkshopContext } from "../../../context/AdminWorkshopContext";

function WorkshopUpdateForm({ workshopId }) {
  const { workshopData, workshopIsLoading, handleUpdateWorkshop } =
    useContext(AdminWorkshopContext);

  const selectedWorkshop = workshopData.find(
    (workshop) => workshop.workshop_id === workshopId
  );

  const [updatedWorkshop, setUpdatedWorkshop] = useState({
    title: selectedWorkshop.title,
    description: selectedWorkshop.description,
    price_ht: selectedWorkshop.price_ht,
    image: selectedWorkshop.workshop_image,
    transcript_pdf: selectedWorkshop.transcript_pdf,
    file_zip: selectedWorkshop.file_zip,
  });

  const [sectionsData, setSectionsData] = useState(
    Array.isArray(selectedWorkshop.videos)
      ? selectedWorkshop.videos.map((video) => ({
          title: video.video_title,
          description: video.video_description,
          source: video.video_source,
          duration: video.video_duration,
          section: video.video_section,
          image: video.video_image,
        }))
      : []
  );

  if (!selectedWorkshop) {
    return <div>Workshop not found</div>;
  }
  if (workshopIsLoading) return "loading";

  const handleWorkshopChange = (updatedWorkshopData) => {
    setUpdatedWorkshop((prev) => ({
      ...prev,
      ...updatedWorkshopData,
    }));
  };

  const handleSectionChange = (index, updatedSectionData) => {
    const newSectionsData = [...sectionsData];
    newSectionsData[index] = updatedSectionData;
    setSectionsData(newSectionsData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérification des données de l'atelier
    if (
      !updatedWorkshop.title ||
      !updatedWorkshop.description ||
      !updatedWorkshop.image
    ) {
      alert(
        "Certains champs obligatoires sont manquants. Veuillez recommencer."
      );
      return;
    }
    // Vérification des sections
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

    formData.append("title", updatedWorkshop.title);
    formData.append("description", updatedWorkshop.description);
    formData.append("price_ht", parseFloat(updatedWorkshop.price_ht));
    formData.append("image", updatedWorkshop.image);

    const formDataRessource = new FormData();

    formDataRessource.append("transcript_pdf", updatedWorkshop.transcript_pdf);
    formDataRessource.append("file_zip", updatedWorkshop.file_zip);

    const formDataVideo = new FormData();

    sectionsData.forEach((section, index) => {
      formDataVideo.append(`sections[${index}][title]`, section.title);
      formDataVideo.append(
        `sections[${index}][description]`,
        section.description
      );
      formDataVideo.append(`sections[${index}][source]`, section.source);
      formDataVideo.append(
        `sections[${index}][duration]`,
        parseFloat(section.duration)
      );
      formDataVideo.append(`sections[${index}][section]`, section.section);

      // Si une image vidéo est présente, l'ajouter aussi
      if (section.image) {
        formDataVideo.append(`sections[${index}][video_image]`, section.image);
      }
    });
    handleUpdateWorkshop(
      workshopId,
      formData,
      formDataRessource,
      formDataVideo
    );
    alert("Atelier modifié !");
  };

  return (
    <form
      method="put"
      action="#"
      encType="multipart/form-data"
      className="workshop-form"
      onSubmit={handleSubmit}
    >
      <WorkshopFormInput
        onChange={(updatedWorkshopData) =>
          handleWorkshopChange(updatedWorkshopData)
        }
        data={updatedWorkshop}
        setData={setUpdatedWorkshop}
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

      {sectionsData
        .sort((a, b) => a.section - b.section)
        .map((section, index) => (
          <WorkshopFormSection
            key={section.section}
            sectionNumber={section.section}
            onSectionChange={(updatedSectionData) =>
              handleSectionChange(index, updatedSectionData)
            }
            data={sectionsData}
            setData={setSectionsData}
          />
        ))}

      <div className="workshop-form__button-stack">
        <Button
          text="Modifier"
          style={{ backgroundColor: "var(--clr-intense-green" }}
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}

WorkshopUpdateForm.propTypes = {
  workshopId: PropTypes.number.isRequired,
};

export default WorkshopUpdateForm;
