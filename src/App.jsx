import { useState } from "react";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
// toast

import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// toast

function App() {
  const successNotify = (message) => {
    toast.success(message);
  };
  const errorNotify = (message) => {
    toast.error(message);
  };
  const [diplayDeleteSelectedButton, setDisplayDeleteSelectedButton] =
    useState(true);
  const [AddFormDisplay, setAddFormDisplay] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    job: "",
    email: "",
    phone: 0,
    id: "",
  });
  const [selectedContactsId, setSelectedContactsId] = useState([]);
  const [searchedContacts, setSearchedContacts] = useState([]);

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    successNotify("Contact Successfuly Deleted!");
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
      <Header
        setAddFormDisplay={setAddFormDisplay}
        deleteSelected={deleteSelected}
        AddFormDisplay={AddFormDisplay}
        diplayDeleteSelectedButton={diplayDeleteSelectedButton}
        setDisplayDeleteSelectedButton={setDisplayDeleteSelectedButton}
        contacts={contacts}
        setSearchedContacts={setSearchedContacts}
      />

      {AddFormDisplay ? (
        <AddForm
          setAddFormDisplay={setAddFormDisplay}
          contacts={contacts}
          setContacts={setContacts}
          contact={contact}
          setContact={setContact}
          setDisplayDeleteSelectedButton={setDisplayDeleteSelectedButton}
          successNotify={successNotify}
          errorNotify={errorNotify}
        />
      ) : (
        <ContactList
          contacts={contacts}
          deleteHandler={deleteHandler}
          selectedContactsId={selectedContactsId}
          setSelectedContactsId={setSelectedContactsId}
          setContacts={setContacts}
          setDisplayDeleteSelectedButton={setDisplayDeleteSelectedButton}
          searchedContacts={searchedContacts}
          successNotify={successNotify}
        />
      )}
      <ToastContainer autoClose={2000} position="bottom-right" />
    </>
  );
}

export default App;
