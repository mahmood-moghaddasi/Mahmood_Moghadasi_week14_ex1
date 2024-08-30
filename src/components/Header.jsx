import styles from "../styles/Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className="buttons">
          <button className={styles.addButton}>Add Contact</button>
        </div>
        <div className={styles.search}>
          <input placeholder="Search Here" type="text" />
        </div>
      </div>
    </>
  );
}

export default Header;
