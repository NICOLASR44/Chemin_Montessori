import { useContext, useRef } from "react";
// import PropTypes from "prop-types";
import VignetteVideo from "./VignetteVideo";
import "./styles/VignetteSection.css";
import useHorizontalScroll from "../../hooks/useHorizontalScroll";
import useScreenSize from "../../hooks/useScreenSize";

import { ProductContext } from "../../context/ProductContext";
import { VideoContext } from "../../context/VideoContext";

function VignetteSection() {
  const { videoData, videoIsLoading } = useContext(ProductContext);
  const { setSection } = useContext(VideoContext);
  const screenSize = useScreenSize(700);
  const scrollContainerRef = useRef(null);
  useHorizontalScroll(scrollContainerRef, screenSize);

  const handleClick = (id) => () => {
    if (id === 0) {
      setSection(0);
    }
    setSection(id - 1);
  };

  if (videoIsLoading) return "loading";

  return (
    <section ref={scrollContainerRef} className="vignette-section">
      {videoData.map((vignette) => (
        <VignetteVideo
          key={vignette.video_id}
          imgSrc={`http://localhost:3310/${vignette.video_image}`}
          partName={vignette.video_section}
          duration={vignette.video_duration}
          onClick={handleClick(vignette.video_section)}
        />
      ))}
    </section>
  );
}

// VignetteSection.propTypes = {};
export default VignetteSection;
