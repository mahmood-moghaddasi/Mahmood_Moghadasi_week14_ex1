import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/AddForm.module.css";
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
          <input
            type="text"
            name="name"
            value={contact.name}
            placeholder="First Name"
            onChange={formHandler}
          />
          <input
            type="text"
            name="lastName"
            value={contact.lastName}
            placeholder="Last Name"
            onChange={formHandler}
          />
          <input
            type="text"
            name="job"
            value={contact.job}
            placeholder="Job"
            onChange={formHandler}
          />
          <input
            type="email"
            name="email"
            value={contact.email}
            placeholder="Email"
            onChange={formHandler}
          />
          <input
            type="number"
            name="phone"
            value={contact.phone}
            placeholder="Phone Number"
            onChange={formHandler}
          />
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
