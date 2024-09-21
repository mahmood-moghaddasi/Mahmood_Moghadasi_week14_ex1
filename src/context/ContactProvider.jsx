import { createContext, useState } from "react";

export const ContactContext = createContext();

function ContactProvider({ children }) {
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    job: "",
    email: "",
    phone: 0,
    id: "",
  });

  const [contacts, setContacts] = useState([]);
  const [selectedContactsId, setSelectedContactsId] = useState([]);
  return (
    <ContactContext.Provider
      value={{
        contact,
        setContact,
        contacts,
        setContacts,
        selectedContactsId,
        setSelectedContactsId,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export default ContactProvider;
