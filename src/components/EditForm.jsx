import React from "react";
import styles from "../styles/EditForm.module.css";
import inputTags from "../constants/inputs";
import { useState, useEffect } from "react";
function EditForm({
  contactToEdit,
  setContactToEdit,
  setDisplayEditForm,
  submitEditChanges,
  setDisplayDeleteSelectedButton,
  successNotify,
  errorNotify,
}) {
  const [formErrors, setFormErrors] = useState({});
  const formHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContactToEdit({ ...contactToEdit, [name]: value });
  };

  const validation = () => {
    const errors = {};
    if (!contactToEdit.name || contactToEdit.name.length < 3) {
      errors.name = "First name is Required and Must be more than 3 charectre";
    }
    if (!contactToEdit.lastName || contactToEdit.lastName.length < 3) {
      errors.lastName =
        "Last Name is Required and Must be more than 3 charectre";
    }
    if (!contactToEdit.email) {
      errors.email = "Email is Required ";
    }
    if (contactToEdit.phone.length !== 11) {
      errors.phone = "Phone Number is invalid ";
    }
    setFormErrors(errors);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.keys(formErrors).length === 0) {
      setDisplayEditForm(false);
      setDisplayDeleteSelectedButton(true);
      submitEditChanges();
      successNotify("Changes applied!");
    } else {
      errorNotify("form not valid");
    }
  };
  const cancelButtonHandler = () => {
    setDisplayEditForm(false);
    setDisplayDeleteSelectedButton(true);
  };
  useEffect(validation, [contactToEdit]);
  return (
    <>
      <div className={styles.container}>
        <h1>Edit Contact</h1>
        <form className={styles.form}>
          {inputTags.map((input, index) => (
            <>
              <input
                key={index}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                onChange={formHandler}
                value={contactToEdit[input.name]}
              />
              {formErrors[input.name] && (
                <span className={styles.error}>{formErrors[input.name]}</span>
              )}
            </>
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
