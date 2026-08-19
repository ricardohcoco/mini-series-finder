import { Link } from "react-router-dom";
import styles from "./SeriesCard.module.css";
import type { SerieType } from "../../types/serieType";
import { FaRegStar } from "react-icons/fa";

type ShowType = {
  show: SerieType;
};

export default function SeriesCard({ show }: ShowType) {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/shows/${show.id}`}>
        {show.image ? (
          <img
            className={styles.image}
            src={show.image.medium}
            alt={show.name}
          />
        ) : (
          <img
            className={styles.image}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqhExZmRbHUZFSfEU0JR96NAsO3Cf0xDKei99r4Feh8g&s=10"
            alt="imagem de lupa"
          />
        )}
        <h2>{show.name}</h2>
        <div className={styles.rating}>
          <strong>Avaliação: </strong>
          <FaRegStar />
          <p>{show.rating.average ?? "Sem Avaliação"}</p>
        </div>
      </Link>
    </div>
  );
}
