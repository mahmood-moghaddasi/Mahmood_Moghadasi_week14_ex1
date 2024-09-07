import { useEffect, useState } from "react";
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
  errorNotify,
}) {
  const [formErrors, setFormErrors] = useState({});

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

  const validation = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!contact.name || contact.name.length <= 3) {
      errors.name = "First name is Required and Must be more than 3 character!";
    }
    if (!contact.lastName || contact.lastName.length <= 3) {
      errors.lastName =
        "Last Name is Required and Must be more than 3 character!";
    }
    if (!contact.email || !regex.test(contact.email)) {
      errors.email = "Email is Required And must be Valid form!";
    }
    if (contact.phone.length !== 11) {
      errors.phone = "Phone Number is invalid! ";
    }
    setFormErrors(errors);
  };
  const formHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact({ ...contact, [name]: value, id: uuidv4() });
  };
  const addHandler = (event) => {
    event.preventDefault();

    if (Object.keys(formErrors).length === 0) {
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
    } else {
      errorNotify("form not valid");
    }
  };

  useEffect(validation, [contact]);

  return (
    <>
      <div className={styles.container}>
        <h1>Add Contact</h1>
        <form className={styles.form}>
          {inputTags.map((input, index) => (
            <>
              <input
                key={index}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                onChange={formHandler}
                value={contact[input.name]}
              />
              {formErrors[input.name] && (
                <span className={styles.error}>{formErrors[input.name]}</span>
              )}
            </>
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
