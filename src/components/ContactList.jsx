import { useContext, useState } from "react";
import styles from "../styles/ContactList.module.css";
import EditForm from "./EditForm";
import { ContactContext } from "../context/contactProvider";
import axios from "axios";

function ContactList({
  setDisplayDeleteSelectedButton,
  searchedContacts,
  successNotify,
  errorNotify,
}) {
  const { contacts, selectedContactsId, setSelectedContactsId } =
    useContext(ContactContext);
  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [contactToEdit, setContactToEdit] = useState({
    name: "",
    lastName: "",
    job: "",
    email: "",
    phone: 0,
    id: "",
  });
  const submitEditChanges = () => {
    axios.put(
      `http://localhost:8000/contacts/${contactToEdit.id}`,
      contactToEdit
    );
  };
  const editContactHandler = (id) => {
    setDisplayEditForm(true);
    setDisplayDeleteSelectedButton(false);
    contacts.forEach((contact) => {
      if (contact.id === id) setContactToEdit({ ...contact });
    });
  };
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
    if (flag === true) return;
    setSelectedContactsId([...selectedContactsId, id]);
  };
  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/contacts/${id}`);
    successNotify("Contact Successfuly Deleted!");
  };

  return (
    <>
      {displayEditForm ? (
        <EditForm
          contactToEdit={contactToEdit}
          setContactToEdit={setContactToEdit}
          setDisplayEditForm={setDisplayEditForm}
          submitEditChanges={submitEditChanges}
          setDisplayDeleteSelectedButton={setDisplayDeleteSelectedButton}
          successNotify={successNotify}
          errorNotify={errorNotify}
        />
      ) : (
        <div className={styles.contaiener}>
          <h1>Contacts List</h1>
          {contacts.length ? (
            searchedContacts.length ? (
              <table>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Job</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Operations</th>
                </tr>
                {searchedContacts.map((contact) => (
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
                      <button
                        className={styles.edit}
                        onClick={() => editContactHandler(contact.id)}
                      >
                        Edit
                      </button>
                      <input
                        onClick={() => selectHandler(contact.id)}
                        type="checkBox"
                      />
                    </td>
                  </tr>
                ))}
              </table>
            ) : (
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
                      <button
                        className={styles.edit}
                        onClick={() => editContactHandler(contact.id)}
                      >
                        Edit
                      </button>
                      <input
                        onClick={() => selectHandler(contact.id)}
                        type="checkBox"
                      />
                    </td>
                  </tr>
                ))}
              </table>
            )
          ) : (
            <h3>There is No Contacts</h3>
          )}
        </div>
      )}
    </>
  );
}

export default ContactList;
