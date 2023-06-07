import AsyncSelect from "react-select/async";
import { LoadOptions } from "../../data/CocktailData";

export default function Searchbar({ onChange, className, placeholder, styles }) {
  return (
    <div>
      <AsyncSelect
        loadOptions={LoadOptions}
        styles={styles}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
}
