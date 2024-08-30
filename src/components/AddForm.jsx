import { useState } from "react";
import styles from "../styles/AddForm.module.css";
function AddForm({ changeAddFormDisplay, contacts, setContacts }) {
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    job: "",
    email: "",
    phone: 0,
  });
  const formHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact({ ...contact, [name]: value });
  };
  const addHandler = (event) => {
    event.preventDefault();
    setContacts([...contacts, contact]);
    console.log(contacts);
    setContact({
      name: "",
      lastName: "",
      job: "",
      email: "",
      phone: 0,
    });
    changeAddFormDisplay(false);
  };

  return (
    <>
      <div className={styles.container}>
        <form action="">
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
          <button onClick={addHandler}>Add</button>
        </form>
      </div>
    </>
  );
}

export default AddForm;
