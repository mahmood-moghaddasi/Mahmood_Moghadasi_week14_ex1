import { createContext, useState, useEffect } from "react";
import axios from "axios";
import api from "../services/config";

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
  useEffect(() => {
    api
      .get("/contacts")
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  }, [contacts]);

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
