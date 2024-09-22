import { useContext } from "react";
import styles from "../styles/Header.module.css";
import Search from "./Search";
import { ContactContext } from "../context/contactProvider";
import axios from "axios";

function Header({
  setAddFormDisplay,
  diplayDeleteSelectedButton,
  setDisplayDeleteSelectedButton,
  setSearchedContacts,
  successNotify,
}) {
  const { contacts, setContacts, selectedContactsId } =
    useContext(ContactContext);
  const AddContactDisplayHandler = () => {
    setAddFormDisplay(true);
    setDisplayDeleteSelectedButton(false);
  };

  const deleteSelected = () => {
    contacts.map((contact) => {
      if (selectedContactsId.includes(contact.id))
        axios.delete(`http://localhost:8000/contacts/${contact.id}`);
    });

    successNotify("Contacts Successfuly Deleted!");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttons}>
          <button
            className={styles.addButton}
            onClick={AddContactDisplayHandler}
          >
            Add Contact
          </button>
          {diplayDeleteSelectedButton && (
            <button className={styles.deleteSelected} onClick={deleteSelected}>
              Delete Selected
            </button>
          )}
        </div>
        <Search contacts={contacts} setSearchedContacts={setSearchedContacts} />
      </div>
    </>
  );
}

export default Header;
