export const callValidations = (state, error, setError) => {
  let formIsValid = true;
  console.log("check validating");
  if (!state.firstName.trim().length) {
    formIsValid = false;
    setError({ ...error, firstNameError: "please enter first name" });
  }
  if (!state.surName.trim().length) {
    formIsValid = false;
    setError({ ...error, surNameError: "please enter surname" });
  }
  if (!state.age.trim().length) {
    formIsValid = false;
    setError({ ...error, ageError: "please enter age" });
  }
  if (!state.postcode.trim().length) {
    formIsValid = false;
    setError({ ...error, postcodeError: "please enter age" });
  }
  if (!state.employmentStatus.trim().length) {
    formIsValid = false;
    setError({
      ...error,
      employmentStatusError: "please select employment status",
    });
  }
  if (!state.earnings) {
    formIsValid = false;
    setError({ ...error, earningsError: "please enter earnings" });
  }
  return formIsValid;
};
