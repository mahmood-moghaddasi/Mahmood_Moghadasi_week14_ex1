import { createContext, useState } from "react";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
// toast

import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// toast

import ContactProvider from "./context/contactProvider";

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

  const [searchedContacts, setSearchedContacts] = useState([]);

  return (
    <>
      <ContactProvider>
        <Header
          setAddFormDisplay={setAddFormDisplay}
          diplayDeleteSelectedButton={diplayDeleteSelectedButton}
          setDisplayDeleteSelectedButton={setDisplayDeleteSelectedButton}
          setSearchedContacts={setSearchedContacts}
          successNotify={successNotify}
        />

        {AddFormDisplay ? (
          <AddForm
            setAddFormDisplay={setAddFormDisplay}
            setDisplayDeleteSelectedButton={setDisplayDeleteSelectedButton}
            successNotify={successNotify}
            errorNotify={errorNotify}
          />
        ) : (
          <ContactList
            setDisplayDeleteSelectedButton={setDisplayDeleteSelectedButton}
            searchedContacts={searchedContacts}
            successNotify={successNotify}
            errorNotify={errorNotify}
          />
        )}
      </ContactProvider>

      <ToastContainer autoClose={2000} position="bottom-right" />
    </>
  );
}

export default App;
