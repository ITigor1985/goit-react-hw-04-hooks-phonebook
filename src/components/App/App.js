import { GlobalStyle } from '../../GlobalStyled/GlobalStyled.styled';
import { Container } from './App.styled';
import { Component } from 'react';
import Section from '../Section';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

const LS_KEY = 'reader_item_index';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number, id }) => {
    const contact = {
      id,
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  onDeleteHandler = id => {
    const filtredContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState(prevState => {
      return { ...prevState, contacts: [...filtredContacts] };
    });
  };

  onChangeHandler = filter => {
    this.setState(prevState => {
      return { ...prevState, filter: filter };
    });
  };

  onFilterContacts = () => {
    let filterContact = [];
    if (this.state.filter) {
      filterContact = this.state.contacts.filter(
        contact =>
          contact.name.includes(this.state.filter) ||
          contact.name.toLowerCase().includes(this.state.filter)
      );
    } else {
      return this.state.contacts;
    }
    return filterContact;
  };

  componentDidMount() {
    const savedStateContacts = localStorage.getItem(LS_KEY);

    if (savedStateContacts) {
      this.setState({ contacts: JSON.parse(savedStateContacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Container>
          <Section title="Phonebook">
            <ContactForm onSubmit={this.addContact} contacts={contacts} />
          </Section>
          <Section title="Contacts">
            {contacts.length > 0 && (
              <>
                <Filter onChange={this.onChangeHandler} />
                <ContactList
                  filterContacts={this.onFilterContacts}
                  onDelete={this.onDeleteHandler}
                />
              </>
            )}
          </Section>
        </Container>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
