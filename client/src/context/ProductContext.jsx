import { createContext, useMemo } from "react";
import useSWR from "swr";
import PropTypes from "prop-types";
import fetcher from "../functions/fetcher";

const ProductContext = createContext();

function ProductContextProvider({ children, id }) {
  const {
    data: videoData,
    isLoading: videoIsLoading,
    error: videoError,
  } = useSWR(`http://localhost:3310/api/workshop/video/${id}`, fetcher);

  const {
    data: commentData,
    isLoading: commentIsLoading,
    error: commentError,
  } = useSWR(`http://localhost:3310/api/comment/workshop/${id}`, fetcher);

  const contextValue = useMemo(
    () => ({
      videoData,
      videoIsLoading,
      videoError,
      commentData,
      commentIsLoading,
      commentError,
    }),
    [
      videoData,
      videoIsLoading,
      videoError,
      commentData,
      commentIsLoading,
      commentError,
    ]
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
};

export { ProductContext, ProductContextProvider };
