import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { VideoContext } from "../../context/VideoContext";
import "./styles/infoVideo.css";

function InfoVideo() {
  const { videoData, videoIsLoading } = useContext(ProductContext);
  const { section } = useContext(VideoContext);
  console.info(videoData);

  return (
    <article className="info-video">
      <h2 className="info-video__title">
        {videoIsLoading ? "Loading" : videoData[section].video_title}
      </h2>
      <div className="info-video__description">
        <p className="info-video__p">
          {videoIsLoading ? "Loading" : videoData[section].video_description}
        </p>
        <span className="info-video__time">
          Durée :{" "}
          {videoIsLoading ? "Loading" : videoData[section].video_duration} mins
        </span>
      </div>
    </article>
  );
}

export default InfoVideo;
