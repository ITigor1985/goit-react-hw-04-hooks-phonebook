import ContactsItem from "../ContactsItem";
import propTypes from "prop-types";
const ContactList = ({ filterContacts, onDelete }) => {
  return (
    <ul>
      {filterContacts().map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          name={name}
          id={id}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  filterContacts: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
};
