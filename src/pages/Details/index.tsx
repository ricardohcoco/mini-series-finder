import { useNavigate, useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { FaRegStar } from "react-icons/fa";
import { getSeriesDetails } from "../../services/getSeriesDetails";
import { useEffect, useState } from "react";
import type { SerieType } from "../../types/serieType";
import Spinner from "../../components/Spinner";
import { IoMdArrowBack } from "react-icons/io";

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [serie, setSerie] = useState<SerieType | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    async function loadSerie() {
        setLoading(true)

        try {
            const data = await  getSeriesDetails(Number(id));
            setSerie(data)
            setError("")
        } catch {
            setError("Erro ao carregar série!")
        } finally {
            setLoading(false)
        }
    }
    loadSerie();
  }, [id]);
 

  if (loading) {
    return <Spinner/>;
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!serie) {
    return <p>Série não encontrada!</p>
  }

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate("/")}>
       <IoMdArrowBack /> Voltar
      </button>
      <h1>{serie.name}</h1>

      <section className={styles.content}>
        <img
          src={serie.image?.original}
          alt={serie.name}
          className={styles.cover}
        />
        <div className={styles.rating}>
          <strong>Avaliação:</strong>
          <FaRegStar />
          <p>{serie.rating.average ?? "Sem Avaliação"}</p>
        </div>
        <p className={styles.genres}>
          <strong>Gênero: </strong>
          {serie.genres.join(", ")}
        </p>
        
          <div className={styles.summary}>
          <strong>Sinopse: </strong>
          <div
            dangerouslySetInnerHTML={{ __html: serie.summary}} />  
          </div>
        
      </section>
    </div>
  );
}
