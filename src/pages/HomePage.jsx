import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function HomePage({
  diplayDeleteSelectedButton,
  setDisplayDeleteSelectedButton,
  setSearchedContacts,
  successNotify,
  errorNotify,
}) {
  return (
    <>
      <Header
        diplayDeleteSelectedButton={diplayDeleteSelectedButton}
        setDisplayDeleteSelectedButton={setDisplayDeleteSelectedButton}
        setSearchedContacts={setSearchedContacts}
        successNotify={successNotify}
        errorNotify={errorNotify}
      />
      <Outlet />
    </>
  );
}

export default HomePage;
