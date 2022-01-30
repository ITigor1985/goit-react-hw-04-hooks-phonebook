import propTypes from "prop-types";
import { Contact, ContactWrapper } from "./ContactsItem.styled";
const ContactsItem = ({ id, name, number, onDelete }) => {
  return (
    <Contact>
      <ContactWrapper>
        <span>{name}:</span>
        <span>{number} </span>
      </ContactWrapper>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </Contact>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};
