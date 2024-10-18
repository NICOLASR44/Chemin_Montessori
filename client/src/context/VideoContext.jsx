import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const VideoContext = createContext();

export function VideoContextProvider({ children }) {
  const [section, setSection] = useState(0);

  const value = useMemo(() => ({ section, setSection }), [section]);

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
}

VideoContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
