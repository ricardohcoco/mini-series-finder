import { useState } from "react";
import styles from "./HomePage.module.css";
import type { SearchResultType } from "../../types/SearchResultType";
import { searchSeries } from "../../services/searchSeries";
import SearchBar from "../../components/SearchBar";
import SeriesList from "../../components/SeriesList";
import Spinner from "../../components/Spinner";

export default function HomePage() {
  const [shows, setShows] = useState<SearchResultType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (shows: string) => {
    setLoading(true);
    setError("");

    try {
      const data = await searchSeries(shows.toUpperCase());

      setShows(data);

      setError("");
    } catch {
      setError("Erro ao conectar com a API!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      
      <SearchBar onSearch={handleSearch} loading={loading}/>

      {loading && <Spinner />}

      {error && <p>{error}</p>}

      <SeriesList shows={shows} />
    </div>
  );
}
