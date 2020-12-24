import React from "react";
import Error from "../Components/Error/Error";

export const callValidations = (state, error, setError) => {
  let formIsValid = true;
  console.log("check validating");
  if (!state.firstName.trim().length) {
    formIsValid = false;
    setError({
      ...error,
      firstNameError: <Error>please enter first name</Error>,
    });
  }
  if (!state.surName.trim().length) {
    formIsValid = false;
    setError({ ...error, surNameError: <Error>please enter surname</Error> });
  }
  if (!state.age.trim().length) {
    formIsValid = false;
    setError({ ...error, ageError: <Error>please enter age </Error> });
  }
  if (!state.postcode.trim().length) {
    formIsValid = false;
    setError({ ...error, postcodeError: <Error>please enter age</Error> });
  }
  if (!state.employmentStatus.trim().length) {
    formIsValid = false;
    setError({
      ...error,
      employmentStatusError: <Error>please select employment status</Error>,
    });
  }
  if (!state.earnings) {
    formIsValid = false;
    setError({ ...error, earningsError: <Error>please enter earnings</Error> });
  }
  return formIsValid;
};
