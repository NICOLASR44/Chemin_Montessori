import { createContext, useMemo, useCallback, useContext } from "react";
import useSWR from "swr";
import PropTypes from "prop-types";
import axios from "axios";
import fetcher from "../functions/fetcher";
import { AuthContext } from "./AuthContext";

const UserContext = createContext();

function UserContextProvider({ children }) {
  // GET user/id
  const { user } = useContext(AuthContext); // Récupérer l'utilisateur depuis AuthContext

  // ajout onError pour voir si données disponibles avant rendu sur le composant
  const userId = user?.id; // Utiliser l'ID utilisateur depuis AuthContext

  const {
    data: UserIdData,
    isLoading: UserIdLoading,
    error: UserIdfoError,
    mutate: refetchUser,
  } = useSWR(
    userId ? `http://localhost:3310/api/user/${userId}` : null,
    fetcher,
    {
      onError: (error) => {
        if (error.response?.status === 404) {
          console.error("utilisateur non trouvé");
        }
      },
    }
  );

  // GET workshop/purchase/user/:id
  const {
    data: purchasedWorkshopData,
    isLoading: purchasedWorkshopLoading,
    error: purchasedWorkshopError,
  } = useSWR(
    userId
      ? `http://localhost:3310/api/workshop/purchase/user/${userId}`
      : null,
    fetcher
  );

  if (purchasedWorkshopError) {
    console.error(
      "Erreur lors du chargement des ateliers achetés:",
      purchasedWorkshopError
    );
  }

  // GET workshop/suggested/user/:id
  const {
    data: suggestedWorkshopData,
    isLoading: suggestedWorkshopLoading,
    error: suggestedWorkshopError,
  } = useSWR(
    userId
      ? `http://localhost:3310/api/workshop/suggested/user/${userId}`
      : null,
    fetcher
  );

  // GET comment/user/:id
  const {
    data: commentUserData,
    isLoading: commentUserLoading,
    error: commentUserError,
  } = useSWR(
    userId ? `http://localhost:3310/api/comment/user/${userId}` : null,
    fetcher
  );

  if (commentUserError) {
    console.error(
      "Erreur lors du chargement des ateliers achetés:",
      commentUserError
    );
  }

  // PUT user/:id
  const updateUser = useCallback(
    async (formData) => {
      if (!userId) return;
      try {
        await axios.put(`http://localhost:3310/api/user/${userId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        refetchUser();
      } catch (error) {
        console.error("Erreur lors de la mise à jour de la ressource:", error);
      }
    },
    [userId, refetchUser]
  );

  const handleUpdateUser = useCallback(
    async (formData) => {
      try {
        console.info("formData:", formData);
        await updateUser(formData);
      } catch (error) {
        console.error("Erreur lors de la mise à jour user:", error);
      }
    },
    [updateUser]
  );

  const contextValue = useMemo(
    () => ({
      UserIdData,
      UserIdLoading,
      UserIdfoError,
      purchasedWorkshopData,
      purchasedWorkshopLoading,
      purchasedWorkshopError,
      suggestedWorkshopData,
      suggestedWorkshopLoading,
      suggestedWorkshopError,
      commentUserData,
      commentUserLoading,
      commentUserError,
      userId,
      handleUpdateUser,
      // méthode pour vérifier si un atelier est acheté
      hasPurchasedWorkshop: (workshopId) => {
        if (!purchasedWorkshopData) return false;
        return purchasedWorkshopData.some(
          (workshop) => workshop.id === workshopId
        );
      },
    }),
    [
      UserIdData,
      UserIdLoading,
      UserIdfoError,
      purchasedWorkshopData,
      purchasedWorkshopLoading,
      purchasedWorkshopError,
      suggestedWorkshopData,
      suggestedWorkshopLoading,
      suggestedWorkshopError,
      commentUserData,
      commentUserLoading,
      commentUserError,
      handleUpdateUser,
      userId,
    ]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContext, UserContextProvider };
