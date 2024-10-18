import DownloadCard from "./Download-card";
import DownloadData from "../../lib/DownloadData";
import "./styles/DownloadCardList.css";

function DownloadCardList() {
  const titleStyle = {
    fontSize: "1.375rem",
    fontWeight: "bold",
    marginTop: "1rem",
  };

  const subtitleStyle = {
    fontSize: "1rem",
    fontWeight: "normal",
    marginTop: "0.5rem",
  };

  // lors de liaison avec BDD pour récuperer fichiers mettre dans le map fichier{`http://localhost:3310/${data.transcript_pdfOUfile_zip}`}

  return (
    <section className="download__card-list">
      {DownloadData.map((card) => (
        <div className={card.classname} key={card.index}>
          <DownloadCard
            title={card.title}
            subtitle={card.subtitle}
            fill={card.fill}
            downloadLink={card.downloadLink}
            titleStyle={titleStyle}
            subtitleStyle={subtitleStyle}
          />
        </div>
      ))}
    </section>
  );
}

export default DownloadCardList;
