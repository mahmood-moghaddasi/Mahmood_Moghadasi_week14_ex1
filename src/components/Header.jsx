import { useContext } from "react";
import styles from "../styles/Header.module.css";
import Search from "./Search";
import { ContactContext } from "../context/ContactProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Header({
  diplayDeleteSelectedButton,
  setDisplayDeleteSelectedButton,
  setSearchedContacts,
  successNotify,
  errorNotify,
}) {
  const navigate = useNavigate();
  const { contacts, selectedContactsId, setSelectedContactsId } =
    useContext(ContactContext);
  const AddContactDisplayHandler = () => {
    navigate("add");
    setDisplayDeleteSelectedButton(false);
  };

  const deleteSelected = () => {
    if (selectedContactsId.length == 0) {
      errorNotify("There is no Contact selected");
      return;
    }
    contacts.map((contact) => {
      if (selectedContactsId.includes(contact.id))
        axios.delete(`http://localhost:8000/contacts/${contact.id}`);
    });
    setSelectedContactsId([]);

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
