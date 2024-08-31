import styles from "../styles/Header.module.css";
import Search from "./Search";

function Header({
  changeAddFormDisplay,
  deleteSelected,
  AddFormDisplay,
  diplayDeleteSelectedButton,
  setDisplayDeleteSelectedButton,
  contacts,
  setSearchedContacts,
}) {
  const AddContactDisplayHandler = () => {
    changeAddFormDisplay(true);
    setDisplayDeleteSelectedButton(false);
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
