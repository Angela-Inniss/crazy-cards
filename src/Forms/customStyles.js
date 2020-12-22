const fontFamily = "monospace";
const fontSize = 18;

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
    // none of react-select's styles are passed to <Control />
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
