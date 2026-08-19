import { useState } from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  onSearch: (shows: string) => void;
  loading: boolean;
};

export default function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [showInput, setShowInput] = useState("");

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        type="text"
        value={showInput}
        onChange={(event) => setShowInput(event.target.value)}
        placeholder="Busque uma série"
      />

      <button onClick={() => onSearch(showInput)} disabled={loading}>
        {loading ? "Buscando" : "Buscar"}
      </button>
    </div>
  );
}
