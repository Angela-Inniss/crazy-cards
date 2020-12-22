export const callValidations = (state, error, setError) => {
  console.log("check validating");
  if (!state.firstName.trim().length) {
    setError({ ...error, firstNameError: "please enter first name" }); // spreading the error object so we dont mutate original state and then update the firstNameError key with the error msg
  }
  if (!state.surName.trim().length) {
    setError({ ...error, surNameError: "please enter surname" });
  }
  if (!state.age.trim().length) {
    setError({ ...error, ageError: "please enter age" });
  }
  if (!state.postcode.trim().length) {
    setError({ ...error, postcodeError: "please enter age" });
  }
  if (!state.employmentStatus.trim().length) {
    setError({
      ...error,
      employmentStatusError: "please select employment status",
    });
  }
  if (!state.earnings) {
    setError({ ...error, earningsError: "please enter earnings" });
    return;
  }
};
