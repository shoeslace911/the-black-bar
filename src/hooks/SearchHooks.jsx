export const SearchBarStyle = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "none",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderRadius: "0%",
    color: "white",
  }),
  indicatorSeparator: () => null, // Remove the separator
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "white",
  }),
  placeholder: (past) => ({
    ...past,
    color: "white",
  }),
  input: (provided) => ({
    ...provided,
    color: "white",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected && "silver", // Change the background color of selected and non-selected options
    color: state.isSelected && "black",
    "&:hover": {
      backgroundColor: "lightgray", // Change the background color on hover
      color: "black", // Change the text color on hover
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "none",
    color: "white",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  }),
};
