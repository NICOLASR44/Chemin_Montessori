import { createContext, useMemo, useState } from "react";
import useSWR from "swr";
import PropTypes from "prop-types";
import fetcher from "../functions/fetcher";

const AdminCommentContext = createContext();

function AdminCommentContextProvider({ children }) {
  const {
    data: commentData,
    isLoading: commentIsLoading,
    error: commentError,
  } = useSWR(`http://localhost:3310/api/comment`, fetcher);

  const {
    data: commentNotActiveData,
    isLoading: commentNotActiveIsLoading,
    error: commentNotActiveError,
  } = useSWR(`http://localhost:3310/api/comment/not-active`, fetcher);

  const [currentId, setCurrentId] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [currentAction, setCurrentAction] = useState("");

  const contextValue = useMemo(
    () => ({
      commentData,
      commentIsLoading,
      commentError,
      commentNotActiveData,
      commentNotActiveIsLoading,
      commentNotActiveError,
      showModal,
      setShowModal,
      currentAction,
      setCurrentAction,
      currentId,
      setCurrentId,
    }),
    [
      commentData,
      commentIsLoading,
      commentError,
      commentNotActiveData,
      commentNotActiveIsLoading,
      commentNotActiveError,
      showModal,
      setShowModal,
      currentAction,
      setCurrentAction,
      currentId,
      setCurrentId,
    ]
  );

  return (
    <AdminCommentContext.Provider value={contextValue}>
      {children}
    </AdminCommentContext.Provider>
  );
}

AdminCommentContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AdminCommentContext, AdminCommentContextProvider };
