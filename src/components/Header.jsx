import styles from "../styles/Header.module.css";

function Header({ changeAddFormDisplay, deleteSelected, AddFormDisplay }) {
  const AddContactDisplayHandler = () => {
    changeAddFormDisplay(true);
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
          {!AddFormDisplay && (
            <button className={styles.deleteSelected} onClick={deleteSelected}>
              Delete Selected
            </button>
          )}
        </div>
        <div className={styles.search}>
          <input placeholder="Search Here" type="text" />
        </div>
      </div>
    </>
  );
}

export default Header;
