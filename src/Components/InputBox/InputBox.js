// @flow
import React from "react";
import bem from "../../bem";
import "./inputbox.scss";

type Props = {
  id: string,
  placeholder: string | null,
  disabled: boolean,
  value: string,
  onChange: (string) => void,
  type: "text" | "number" | "password" | "date" | "time",
  error: string,
  label: string,
  className: string,
};

const InputBox = ({
  id,
  placeholder,
  disabled,
  value,
  onChange,
  type,
  name,
  error,
  label,
  className,
}: Props) => {
  const baseClass = "c-input";

  return (
    <div className={bem(`${baseClass} ${className}`)}>
      <label className={bem(baseClass, "label")}>{label}</label>
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        type={type}
        name={name}
        className={bem(baseClass, "input-field")}
      />
      <div>{error}</div>
    </div>
  );
};

InputBox.defaultProps = {
  placeholder: null,
  error: "",
  disabled: false,
  value: "",
  type: "text",
  name: "",
};

export default InputBox;
