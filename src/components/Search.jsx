import { useState } from "react";
import styles from "../styles/Search.module.css";

function Search({ contacts, setSearchedContacts }) {
  const [searchInputValue, setSearchInputValue] = useState("");

  const searchInContacts = async () => {
    if (searchInputValue === "") {
      setSearchedContacts([]);
      return;
    }
    const searchedContacts = await contacts.filter((contact) => {
      if (
        contact.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchInputValue.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchInputValue.toLowerCase())
      ) {
        return contact;
      }
    });
    if (!searchedContacts) setSearchedContacts(undefined);
    setSearchedContacts(searchedContacts);
  };
  const searchInputHandler = async (event) => {
    const value = await event.target.value;
    setSearchInputValue(value);
  };
  return (
    <>
      <div className={styles.search}>
        <input
          placeholder="Search Here"
          type="text"
          onChange={searchInputHandler}
          onKeyUp={searchInContacts}
          value={searchInputValue}
        />
      </div>
    </>
  );
}

export default Search;
