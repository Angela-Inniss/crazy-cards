// @flow
import React, { useState } from "react";
import bem from "../bem";
import Select from "react-select";
import { employmentSelectOptions } from "./selectOptions";
import { customStyles } from "./customStyles";
import { callValidations } from "./validtions";
import InputBox from "../Components/InputBox/InputBox";

import "./userinputform.scss";

type Props = {
  submitData: (string) => {},
};

const UserInputForm = ({ submitData }: Props) => {
  const [state, setState] = useState({
    firstName: "",
    surName: "",
    age: "",
    postcode: "",
    employmentStatus: "",
    earnings: 0,
  });
  const [error, setError] = useState({
    firstNameError: "",
    surNameError: "",
    ageError: "",
    postcodeError: "",
    employmentStatusError: "",
    earningsError: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onChangeSelect = (selectedOption) => {
    const { value } = selectedOption; // this is an object of key value pairs
    setState({ ...state, employmentStatus: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    callValidations(state, error, setError);
    submitData({ state }); //  submitData is a prop that will be used when this component is passed up to its container component it will be used then and teh logic will be executed there? // it passes up the data we are submitting
    setState({
      firstName: "",
      surName: "",
      age: "",
      postcode: "",
      employmentStatus: "",
      earnings: 0,
    });
  };
  const baseClass = "c-user-input-form";

  return (
    <form className={bem(baseClass)} htmlForm onSubmit={handleOnSubmit}>
      <div className={bem(baseClass, "name-fields")}>
        <InputBox
          label="FirstName"
          onChange={handleChange}
          value={state.firstName}
          placeholder=""
          id={1}
          type="text"
          name="firstName"
          error={error.firstNameError}
          className={bem(baseClass, "firstName")}
        />

        <InputBox
          label="Surname"
          onChange={handleChange}
          value={state.surName}
          placeholder=""
          id={2}
          type="text"
          name="surName"
          error={error.surNameError}
          className={bem(baseClass, "surName")}
        />
      </div>

      <div className={bem(baseClass, "box-two")}>
        <InputBox
          label="Age"
          onChange={handleChange}
          value={state.age}
          placeholder=""
          id={3}
          type="text"
          name="age"
          error={error.ageError}
          className={bem(baseClass, "age")}
        />
        {state.age}
        <InputBox
          label="PostCode"
          onChange={handleChange}
          value={state.postcode}
          placeholder=""
          id={4}
          type="text"
          name="postcode"
          error={error.postcodeError}
          className={bem(baseClass, "postcode")}
        />
      </div>

      <InputBox
        label="earnings"
        onChange={handleChange}
        value={state.earnings}
        placeholder=""
        id={6}
        type="number"
        name="earnings"
        error={error.earningsError}
        className={bem(baseClass, "earnings")}
      />
      <div className={bem(baseClass, "section-three")}>
        <label style={{ fontSize: "18px", fontFamily: "Arial" }}>
          Employment status
        </label>
        <Select
          styles={customStyles}
          label="Employment status"
          placeholder=""
          onChange={(selectedOption) => onChangeSelect(selectedOption)}
          options={employmentSelectOptions}
          error={error.employmentStatusError}
        />
      </div>

      <button className={bem(baseClass, "submit-btn")}>Submit data</button>
    </form>
  );
};

export default UserInputForm;