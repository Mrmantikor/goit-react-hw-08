import { useId } from "react";
import styles from "./SearchBox.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const searchId = useId();
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles["search-box"]}>
      <label className={styles["search-label"]} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={styles["search-field"]}
        id={searchId}
        type="search"
        inputMode="search"
        value={value}
      />
    </div>
  );
};

export default SearchBox;
