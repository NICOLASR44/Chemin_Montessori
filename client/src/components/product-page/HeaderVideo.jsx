// Hooks
import { useContext } from "react";

// Context
import { ProductContext } from "../../context/ProductContext";
import { VideoContext } from "../../context/VideoContext";

// CSS
import "./styles/HeaderVideo.css";
import PlaySVG from "../svg/PlayButton";

export default function HeaderVideo() {
  const { videoData, videoIsLoading } = useContext(ProductContext);
  const { section } = useContext(VideoContext);

  if (videoIsLoading) return "Loading...";

  return (
    <div className="header-video">
      <h1 className="header-video__title">
        {videoIsLoading ? "Loading" : videoData[0].workshop_title}
      </h1>
      <div className="header-video__video-container">
        <img
          src={`http://localhost:3310/${videoData[section].video_image}`}
          alt="imgSrc"
          className="header-video__video"
        />
        <div className="header-video__overlay" />
        <PlaySVG className="header-video__svg" />
      </div>
    </div>
  );
}
