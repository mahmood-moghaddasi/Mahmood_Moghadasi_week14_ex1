import React from "react";
import styles from "../styles/EditForm.module.css";
import inputTags from "../constants/inputs";
function EditForm({
  contactToEdit,
  setContactToEdit,
  setDisplayEditForm,
  submitEditChanges,
  setDisplayDeleteSelectedButton,
  successNotify,
}) {
  const formHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContactToEdit({ ...contactToEdit, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setDisplayEditForm(false);
    setDisplayDeleteSelectedButton(true);
    submitEditChanges();
    successNotify("Changes applied!");
  };
  const cancelButtonHandler = () => {
    setDisplayEditForm(false);
    setDisplayDeleteSelectedButton(true);
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Edit Contact</h1>
        <form className={styles.form}>
          {inputTags.map((input, index) => (
            <input
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              onChange={formHandler}
              value={contactToEdit[input.name]}
            />
          ))}
          <button
            type="submit"
            className={styles.submitButton}
            onClick={submitHandler}
          >
            Submit Changes
          </button>
          <button className={styles.cancelButton} onClick={cancelButtonHandler}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}

export default EditForm;
