import { createContext, useMemo } from "react";
import useSWR from "swr";
import PropTypes from "prop-types";
import fetcher from "../functions/fetcher";

const AdminUserContext = createContext();

function AdminUserContextProvider({ children }) {
  const {
    data: userData,
    isLoading: userIsLoading,
    error: userError,
  } = useSWR(`http://localhost:3310/api/user`, fetcher);

  const contextValue = useMemo(
    () => ({
      userData,
      userIsLoading,
      userError,
    }),
    [userData, userIsLoading, userError]
  );

  return (
    <AdminUserContext.Provider value={contextValue}>
      {children}
    </AdminUserContext.Provider>
  );
}

AdminUserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AdminUserContext, AdminUserContextProvider };
