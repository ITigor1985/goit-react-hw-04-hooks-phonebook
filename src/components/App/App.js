import { GlobalStyle } from '../../GlobalStyled/GlobalStyled.styled';
import { Container } from './App.styled';
import { useState, useEffect } from 'react';
import Section from '../Section';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

const LS_KEY = 'reader_item_index';

function App(){
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ])
  const [filter, setFilter]=useState('');

  useEffect(() => {
    const storageContacts = localStorage.getItem(LS_KEY);
    const parsedStorageContacts = JSON.parse(storageContacts);

    if (parsedStorageContacts) {
      setContacts([...parsedStorageContacts]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);


  const addContact = contactObj => {
    setContacts(prevState => {
      return [contactObj, ...prevState];
    });
  };

  const onDeleteHandler = id => {
    const filtredContacts = contacts.filter(contact => contact.id !== id);
    setContacts([...filtredContacts]);
  };

  const onChangeHandler = filter => {
    setFilter(filter);
  };

  

  const onFilterContacts = () => {
    let filterContact = [];
    if (filter) {
      filterContact = contacts.filter(
        contact => contact.name.toLowerCase().includes(filter)
      );
    } else {
      return contacts;
    }
    return filterContact;
  };

  
 
  return (
    <>
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={addContact} contacts={contacts} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 0 && (
            <>
              <Filter onChange={onChangeHandler} />
              <ContactList
                filterContacts={onFilterContacts}
                onDelete={onDeleteHandler}
              />
            </>
          )}
        </Section>
      </Container>
      <GlobalStyle />
    </>
  );
}

// class App extends Component {
//   state = {
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
//     filter: '',
//   };

  // addContact = ({ name, number, id }) => {
  //   const contact = {
  //     id,
  //     name,
  //     number,
  //   };

  //   this.setState(prevState => ({
  //     contacts: [contact, ...prevState.contacts],
  //   }));
  // };

  // onDeleteHandler = id => {
  //   const filtredContacts = this.state.contacts.filter(
  //     contact => contact.id !== id
  //   );
  //   this.setState(prevState => {
  //     return { ...prevState, contacts: [...filtredContacts] };
  //   });
  // };

  // onChangeHandler = filter => {
  //   this.setState(prevState => {
  //     return { ...prevState, filter: filter };
  //   });
  // };

  // onFilterContacts = () => {
  //   let filterContact = [];
  //   if (this.state.filter) {
  //     filterContact = this.state.contacts.filter(
  //       contact => contact.name.toLowerCase().includes(this.state.filter)
  //     );
  //   } else {
  //     return this.state.contacts;
  //   }
  //   return filterContact;
  // };

  // componentDidMount() {
  //   const savedStateContacts = localStorage.getItem(LS_KEY);

  //   if (savedStateContacts) {
  //     this.setState({ contacts: JSON.parse(savedStateContacts) });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
  //   }
  // }

//   render() {
//     const { contacts } = this.state;
    // return (
    //   <>
    //     <Container>
    //       <Section title="Phonebook">
    //         <ContactForm onSubmit={this.addContact} contacts={contacts} />
    //       </Section>
    //       <Section title="Contacts">
    //         {contacts.length > 0 && (
    //           <>
    //             <Filter onChange={this.onChangeHandler} />
    //             <ContactList
    //               filterContacts={this.onFilterContacts}
    //               onDelete={this.onDeleteHandler}
    //             />
    //           </>
    //         )}
    //       </Section>
    //     </Container>
    //     <GlobalStyle />
    //   </>
    // );
//   }
// }

export default App;
