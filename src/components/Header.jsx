import styles from "../styles/Header.module.css";

function Header({
  changeAddFormDisplay,
  deleteSelected,
  AddFormDisplay,
  diplayDeleteSelectedButton,
  setDisplayDeleteSelectedButton,
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
        <div className={styles.search}>
          <input placeholder="Search Here" type="text" />
        </div>
      </div>
    </>
  );
}

export default Header;
