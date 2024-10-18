import YellowSun from "../svg/YellowSun";
import DownloadCardList from "./DownloadCardList";
import "./styles/Download-resources.css";

function DownloadResources() {
  return (
    <section className="download__resources">
      <div className="download__resources-titleAndSun">
        <div className="download__resource-title">
          Télécharger les ressources pour cet atelier
          <YellowSun className="download__resource-yellowSun-svg" />
        </div>
      </div>
      <div className="download__resource-downloadCardList">
        <DownloadCardList />
      </div>
    </section>
  );
}

export default DownloadResources;
