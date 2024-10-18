import { createContext, useMemo, useCallback } from "react";
import useSWR from "swr";
import PropTypes from "prop-types";
import axios from "axios";
import fetcher from "../functions/fetcher";

const AdminWorkshopContext = createContext();

function AdminWorkshopContextProvider({ children }) {
  // GET workshop/details
  const {
    data: workshopData,
    isLoading: workshopIsLoading,
    error: workshopError,
    mutate: refetchWorkshop,
  } = useSWR(`${import.meta.env.VITE_API_URL}/api/workshop/details`, fetcher);

  // ///////////////////////////////////////////////////////////////////////////

  // POST workshop
  const postWorkshop = useCallback(async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/workshop`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création de l'atelier:", error);
      return null;
    }
  }, []);

  // POST resource/workshop/:id
  const postResource = useCallback(async (id, formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/resource/workshop/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création de la ressource:", error);
      return null;
    }
  }, []);

  // POST workshop/video/:id
  const postVideo = useCallback(async (id, formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/workshop/video/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erreur lors de l'envoi du formData:", error);
      return null;
    }
  }, []);

  const handlePostWorkshop = useCallback(
    async (formData, formDataRessource, formDataVideo) => {
      const createdWorkshop = await postWorkshop(formData);

      if (createdWorkshop && createdWorkshop.insertId) {
        await postResource(createdWorkshop.insertId, formDataRessource);
        await postVideo(createdWorkshop.insertId, formDataVideo);
      } else {
        console.error("L'atelier n'a pas été créé correctement.");
      }
    },
    [postWorkshop, postResource, postVideo]
  );

  // ///////////////////////////////////////////////////////////////////////////

  // PUT workshop/:id
  const updateWorkshop = useCallback(
    async (workshopId, formData) => {
      try {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/api/workshop/${workshopId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        refetchWorkshop();
      } catch (error) {
        console.error("Erreur lors de la mise à jour de l'atelier:", error);
      }
    },
    [refetchWorkshop]
  );

  // PUT resource/workshop/:id
  const updateResource = useCallback(async (workshopId, formDataRessource) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/resource/workshop/${workshopId}`,
        formDataRessource,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la ressource:", error);
    }
  }, []);

  // PUT workshop/video/:id
  const updateVideo = useCallback(async (workshopId, formDataVideo) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/workshop/video/${workshopId}`,
        formDataVideo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la vidéo:", error);
    }
  }, []);

  const handleUpdateWorkshop = useCallback(
    async (workshopId, formData, formDataRessource, formDataVideo) => {
      try {
        await updateWorkshop(workshopId, formData);
        await updateResource(workshopId, formDataRessource);
        await updateVideo(workshopId, formDataVideo);
      } catch (error) {
        console.error("Erreur lors de la mise à jour:", error);
      }
    },
    [updateWorkshop, updateResource, updateVideo]
  );

  // ///////////////////////////////////////////////////////////////////////////

  // DELETE workshop/:id
  const deleteWorkshop = useCallback(
    async (workshopId) => {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/api/workshop/${workshopId}`
        );
        refetchWorkshop();
      } catch (error) {
        console.error("Erreur lors de la suppression de l'atelier:", error);
      }
    },
    [refetchWorkshop]
  );

  // DELETE resource/workshop/:id
  const deleteResource = useCallback(async (workshopId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/resource/workshop/${workshopId}`
      );
    } catch (error) {
      console.error("Erreur lors de la suppression de la ressource:", error);
    }
  }, []);

  // DELETE workshop/video/:id
  const deleteVideo = useCallback(async (workshopId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/workshop/video/${workshopId}`
      );
    } catch (error) {
      console.error("Erreur lors de la suppression de la vidéo:", error);
    }
  }, []);

  const handleDeleteWorkshop = useCallback(
    async (workshopId) => {
      await deleteResource(workshopId);
      await deleteVideo(workshopId);
      await deleteWorkshop(workshopId);
    },
    [deleteWorkshop, deleteResource, deleteVideo]
  );

  const contextValue = useMemo(
    () => ({
      workshopData,
      workshopIsLoading,
      workshopError,
      handlePostWorkshop,
      handleUpdateWorkshop,
      handleDeleteWorkshop,
    }),
    [
      workshopData,
      workshopIsLoading,
      workshopError,
      handlePostWorkshop,
      handleUpdateWorkshop,
      handleDeleteWorkshop,
    ]
  );

  return (
    <AdminWorkshopContext.Provider value={contextValue}>
      {children}
    </AdminWorkshopContext.Provider>
  );
}

AdminWorkshopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AdminWorkshopContextProvider, AdminWorkshopContext };
