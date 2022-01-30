
import { FormInput } from "./ContactForm.styled";
import propTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { nanoid } from "nanoid";

const initialState = {
  name: "",
  number: "",
};

function ContactForm ({contacts, onSubmit}) {
 const handleSubmit = ({ name, number }, { resetForm }) => {
    const isNameInContacts = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contactObj = { id: nanoid(6), name, number };
    onSubmit(contactObj);
    resetForm();
  };

  
    return (
      <Formik initialValues={initialState} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          <label htmlFor="name">Name</label>
          <Field
            as={FormInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label htmlFor="number">Phone number</label>
          <Field
            as={FormInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  
}

export default ContactForm

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
};
