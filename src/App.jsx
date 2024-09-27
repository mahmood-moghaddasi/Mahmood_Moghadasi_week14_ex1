import { useState } from "react";
import AddFormPage from "./pages/AddFormPage";
import ContactListPage from "./pages/ContactListPage";
// toast

import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// toast

import ContactProvider from "./context/ContactProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  const successNotify = (message) => {
    toast.success(message);
  };
  const errorNotify = (message) => {
    toast.error(message);
  };
  const [diplayDeleteSelectedButton, setDisplayDeleteSelectedButton] =
    useState(true);

  const [searchedContacts, setSearchedContacts] = useState([]);

  return (
    <>
      <ContactProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  diplayDeleteSelectedButton={diplayDeleteSelectedButton}
                  setDisplayDeleteSelectedButton={
                    setDisplayDeleteSelectedButton
                  }
                  setSearchedContacts={setSearchedContacts}
                  successNotify={successNotify}
                  errorNotify={errorNotify}
                />
              }
            >
              <Route
                path="add"
                element={
                  <AddFormPage
                    setDisplayDeleteSelectedButton={
                      setDisplayDeleteSelectedButton
                    }
                    successNotify={successNotify}
                    errorNotify={errorNotify}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <ContactListPage
                    setDisplayDeleteSelectedButton={
                      setDisplayDeleteSelectedButton
                    }
                    searchedContacts={searchedContacts}
                    successNotify={successNotify}
                    errorNotify={errorNotify}
                  />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContactProvider>
      <ToastContainer autoClose={2000} position="bottom-right" />
    </>
  );
}

export default App;
