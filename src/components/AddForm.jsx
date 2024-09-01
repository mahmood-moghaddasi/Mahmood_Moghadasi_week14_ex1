import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/AddForm.module.css";
import inputTags from "../constants/inputs";
function AddForm({
  setAddFormDisplay,
  contacts,
  setContacts,
  contact,
  setContact,
  setDisplayDeleteSelectedButton,
  successNotify,
}) {
  const cancelButtonHandler = () => {
    setAddFormDisplay(false);
    setDisplayDeleteSelectedButton(true);
    setContact({
      name: "",
      lastName: "",
      job: "",
      email: "",
      phone: 0,
      id: "",
    });
  };
  const formHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact({ ...contact, [name]: value, id: uuidv4() });
  };
  const addHandler = (event) => {
    event.preventDefault();
    setContacts([...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      job: "",
      email: "",
      phone: 0,
      id: "",
    });
    setAddFormDisplay(false);
    setDisplayDeleteSelectedButton(true);
    successNotify("Contact Successfuly added!");
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Add Contact</h1>
        <form className={styles.form}>
          {inputTags.map((input, index) => (
            <input
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              onChange={formHandler}
              value={contact[input.name]}
            />
          ))}
          <button type="submit" onClick={addHandler}>
            Add Contact
          </button>
          <button className={styles.cancelButton} onClick={cancelButtonHandler}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}

export default AddForm;
