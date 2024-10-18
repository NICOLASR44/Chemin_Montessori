import { createContext, useContext, useMemo } from "react";
import useSWR from "swr";
import PropTypes from "prop-types";
import fetcher from "../functions/fetcher";

const PurchaseContext = createContext();

export function PurchaseContextProvider({ productId, userId, children }) {
  // Requête pour vérifier si l'utilisateur a acheté l'atelier
  const {
    data: purchaseData,
    isLoading: purchaseIsLoading,
    error: purchaseError,
  } = useSWR(userId ? `/api/workshop/purchase/user/${userId}` : null, fetcher);

  // Requête pour vérifier si l'atelier est gratuit
  const {
    data: workshopData,
    isLoading: workshopIsLoading,
    error: workshopError,
  } = useSWR(`/api/workshop/details/${productId}`, fetcher);

  const contextValue = useMemo(
    () => ({
      hasPurchased: purchaseData
        ? purchaseData.some((workshop) => workshop.workshop_id === productId)
        : false,
      isFree: workshopData ? workshopData.price_ht === 0 : false,
      purchaseIsLoading,
      workshopIsLoading,
      purchaseError,
      workshopError,
    }),
    [
      purchaseData,
      workshopData,
      purchaseIsLoading,
      workshopIsLoading,
      purchaseError,
      workshopError,
      productId,
    ]
  );

  return (
    <PurchaseContext.Provider value={contextValue}>
      {children}
    </PurchaseContext.Provider>
  );
}

export const usePurchaseContext = () => useContext(PurchaseContext);

PurchaseContextProvider.propTypes = {
  productId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired, // Le userId sera maintenant passé en prop
  children: PropTypes.node.isRequired,
};
