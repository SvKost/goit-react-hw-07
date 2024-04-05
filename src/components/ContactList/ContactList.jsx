import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const getFilteredContacts = (contacts, filter) => {
  if (filter.length > 0) {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  } else {
    return contacts;
  }
};
const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <>
      {filteredContacts.length !== 0 ? (
        <ul className={css.contactList}>
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p>There are no matching contacts!</p>
      )}
    </>
  );
};

export default ContactList;
