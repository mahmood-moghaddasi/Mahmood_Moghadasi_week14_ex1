import { useState } from "react";
import styles from "../styles/ContactList.module.css";

function ContactList({
  contacts,
  deleteHandler,
  selectedContactsId,
  setSelectedContactsId,
}) {
  const selectHandler = (id) => {
    let flag = false;
    selectedContactsId.forEach((contactId) => {
      if (contactId === id) {
        let newIdList = [];
        selectedContactsId.forEach((newId) => {
          if (newId !== id) newIdList.push(newId);
          setSelectedContactsId([...newIdList]);
          flag = true;
          return;
        });
      }
      if (flag === true) return;
    });

    console.log(selectedContactsId);
    if (flag === true) return;
    setSelectedContactsId([...selectedContactsId, id]);
    console.log("after");
  };
  return (
    <>
      <div className={styles.contaiener}>
        <h1>Contacts List</h1>
        {contacts.length ? (
          <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Job</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Operations</th>
            </tr>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.lastName}</td>
                <td>{contact.job}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <button
                    onClick={() => deleteHandler(contact.id)}
                    className={styles.delete}
                  >
                    Delete
                  </button>
                  <button className={styles.edit}>Edit</button>
                  <input
                    onClick={() => selectHandler(contact.id)}
                    type="checkBox"
                  />
                </td>
              </tr>
            ))}
          </table>
        ) : (
          <h3>There is No Contacts</h3>
        )}
      </div>
    </>
  );
}

export default ContactList;
