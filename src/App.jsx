import { useState } from "react";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import ContactList from "./components/ContactList";

function App() {
  const [AddFormDisplay, changeAddFormDisplay] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    job: "",
    email: "",
    phone: 0,
    id: "",
    selected: false,
  });
  const [selectedContactsId, setSelectedContactsId] = useState([]);

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const deleteSelected = () => {
    const newContacts = contacts.filter((contact) => {
      if (!selectedContactsId.includes(contact.id)) return contact;
    });
    console.log(newContacts);
    setContacts(newContacts);
  };

  return (
    <>
      <Header
        changeAddFormDisplay={changeAddFormDisplay}
        deleteSelected={deleteSelected}
        AddFormDisplay={AddFormDisplay}
      />

      {AddFormDisplay ? (
        <AddForm
          changeAddFormDisplay={changeAddFormDisplay}
          contacts={contacts}
          setContacts={setContacts}
          contact={contact}
          setContact={setContact}
        />
      ) : (
        <ContactList
          contacts={contacts}
          deleteHandler={deleteHandler}
          selectedContactsId={selectedContactsId}
          setSelectedContactsId={setSelectedContactsId}
        />
      )}
    </>
  );
}

export default App;
