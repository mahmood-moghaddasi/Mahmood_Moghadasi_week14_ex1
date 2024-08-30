import { useState } from "react";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import ContactList from "./components/ContactList";

function App() {
  const [AddFormDisplay, changeAddFormDisplay] = useState(false);
  const [contacts, setContacts] = useState([]);

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };
  return (
    <>
      <Header changeAddFormDisplay={changeAddFormDisplay} />

      {AddFormDisplay ? (
        <AddForm
          changeAddFormDisplay={changeAddFormDisplay}
          contacts={contacts}
          setContacts={setContacts}
        />
      ) : (
        <ContactList contacts={contacts} deleteHandler={deleteHandler} />
      )}
    </>
  );
}

export default App;
