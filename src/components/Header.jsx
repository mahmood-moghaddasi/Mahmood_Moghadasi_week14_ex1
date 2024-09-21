import { useContext } from "react";
import styles from "../styles/Header.module.css";
import Search from "./Search";
import { ContactContext } from "../context/contactProvider";

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
    const newContacts = contacts.filter((contact) => {
      if (!selectedContactsId.includes(contact.id)) return contact;
    });
    setContacts(newContacts);
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
