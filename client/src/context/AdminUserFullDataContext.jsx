import { createContext, useMemo } from "react";
import useSWR from "swr";
import PropTypes from "prop-types";
import fetcher from "../functions/fetcher";

const AdminUserFullData = createContext();

function AdminUserFullDataProvider({ children, id }) {
  const {
    data: userOrderData,
    isLoading: userOrderIsLoading,
    error: userOrderError,
  } = useSWR(`http://localhost:3310/api/user/order/${id}`, fetcher);

  const {
    data: userCommentData,
    isLoading: userCommentIsLoading,
    error: userCommentError,
  } = useSWR(`http://localhost:3310/api/comment/user/${id}`, fetcher);

  // il reste le PUT à mettre + s'assurer que la reqûete GET de Sandrine soit passée

  const contextValue = useMemo(
    () => ({
      userOrderData,
      userOrderIsLoading,
      userOrderError,
      userCommentData,
      userCommentIsLoading,
      userCommentError,
    }),
    [
      userOrderData,
      userOrderIsLoading,
      userOrderError,
      userCommentData,
      userCommentIsLoading,
      userCommentError,
    ]
  );

  return (
    <AdminUserFullData.Provider value={contextValue}>
      {children}
    </AdminUserFullData.Provider>
  );
}

AdminUserFullDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
};

export { AdminUserFullData, AdminUserFullDataProvider };
