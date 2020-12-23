const fontFamily = "monospace";

export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "deeppink" : "mediumslateblue",
    backgroundColor: state.isFocused ? "#e9e3f4" : "white",
    fontFamily: fontFamily,
  }),
  control: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "deeppink" : "mediumslateblue",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "deeppink",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "black",
  }),
};
