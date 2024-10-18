import { createContext, useMemo } from "react";
import useSWR from "swr";
import PropTypes from "prop-types";
import fetcher from "../functions/fetcher";

const WorkshopContext = createContext();

function WorkshopContextProvider({ children }) {
  const {
    data: freeVideoData,
    isLoading: freeVideoIsLoading,
    error: freeVideoError,
  } = useSWR(`http://localhost:3310/api/workshop/free`, fetcher);

  const {
    data: paidVideoData,
    isLoading: paidVideoIsLoading,
    error: paidVideoError,
  } = useSWR(`http://localhost:3310/api/workshop/paid`, fetcher);

  const contextValue = useMemo(
    () => ({
      freeVideoData,
      freeVideoIsLoading,
      freeVideoError,
      paidVideoData,
      paidVideoIsLoading,
      paidVideoError,
    }),
    [
      freeVideoData,
      freeVideoIsLoading,
      freeVideoError,
      paidVideoData,
      paidVideoIsLoading,
      paidVideoError,
    ]
  );

  return (
    <WorkshopContext.Provider value={contextValue}>
      {children}
    </WorkshopContext.Provider>
  );
}

WorkshopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { WorkshopContext, WorkshopContextProvider };
