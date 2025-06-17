import { useState } from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value.toLowerCase().trim());
  };

  return (
    <section className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Buscar estación..."
        value={inputValue}
        onChange={handleChange}
        className={styles.searchInput}
      />
    </section>
  );
};

export default SearchBar;
