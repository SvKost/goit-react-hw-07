import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(id));

  return (
    <div className={css.contactItem}>
      <div className={css.contactInfo}>
        <p>
          <FaUser className={css.contactIcon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button className={css.contactBtn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
}
