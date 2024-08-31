import React from "react";
import styles from "../styles/EditForm.module.css";

function EditForm({
  contactToEdit,
  setContactToEdit,
  setDisplayEditForm,
  submitEditChanges,
  setDisplayDeleteSelectedButton,
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
          <input
            type="text"
            value={contactToEdit.name}
            name="name"
            placeholder="First Name"
            onChange={formHandler}
          />
          <input
            type="text"
            value={contactToEdit.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={formHandler}
          />
          <input
            type="text"
            value={contactToEdit.job}
            name="job"
            placeholder="Job"
            onChange={formHandler}
          />
          <input
            type="email"
            value={contactToEdit.email}
            name="email"
            placeholder="Email"
            onChange={formHandler}
          />
          <input
            type="number"
            value={contactToEdit.phone}
            name="phone"
            placeholder="Phone Number"
            onChange={formHandler}
          />
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
