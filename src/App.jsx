import { useState } from "react";
import AddForm from "./components/AddForm";
import Header from "./components/Header";

function App() {
  const [AddFormDisplay, changeAddFormDisplay] = useState(false);
  const [contacts, setContacts] = useState([]);
  return (
    <>
      <Header changeAddFormDisplay={changeAddFormDisplay} />

      {AddFormDisplay && (
        <AddForm
          changeAddFormDisplay={changeAddFormDisplay}
          contacts={contacts}
          setContacts={setContacts}
        />
      )}
    </>
  );
}

export default App;
