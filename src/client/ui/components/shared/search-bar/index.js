import { useState } from "react"
import styles from "./SearchBar.module.css"

export const Searchbar = ({
  onSearch,
  buttonLabel = "Search",
  placeholder = "Search..."
}) => {
  const [searchText, setSearchText] = useState("")

  return (
    <div className={styles.SearchBarContainer}>
      <input
        onChange={e => setSearchText(e.target.value ?? "")}
        placeholder={placeholder}
        className={styles.SearchBar} />
      <button
        onClick={() => onSearch(searchText)}
        className={styles.SearchBar__Button}>
        {buttonLabel}
      </button>
    </div>
  )
}
