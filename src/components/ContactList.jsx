import styles from "../styles/ContactList.module.css";

function ContactList({ contacts }) {
  return (
    <>
      <div className={styles.contaiener}>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Phone Number</th>
          </tr>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.lastName}</td>
              <td>{contact.job}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default ContactList;
