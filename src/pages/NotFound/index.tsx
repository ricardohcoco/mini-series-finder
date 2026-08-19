import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";
import { IoMdArrowBack } from "react-icons/io";

export default function NotFound() {
 const navigate = useNavigate();   

  return (
    <main className={styles.container}>
      <h1>Ops! Página não encontrada.</h1>
      <p>A página que você procura não existe.</p>
      <button className={styles.backButton} onClick={() => navigate("/")}>
        <IoMdArrowBack /> Voltar
      </button>
    </main>
  );
}
