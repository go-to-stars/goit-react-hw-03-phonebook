import React from 'react';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container, Box, TopTitle, Title } from './App.stiled.jsx'; // імпорт стилів тегів div (Container), div (Box), h1 (TopTitle), h2 (Title)
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }; // об'єкт-стану state класу App з даними що відображаються в інтерфейсі

  componentDidMount() {
    const contacts = localStorage.getItem('phonebook_contacts'); // читаємо з localStorage список контактів
    const parsedContacts = JSON.parse(contacts); // розпарсимо список контактів з localStorage
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    } // якщо є розпарсений список контактів, то прописуємо його в об'єкт-стану state
  } // метод componentDidMount() викликається відразу після монтування компонента (вставлення в дерево), оновлення об'єкт-стану state (setState) запускає додаткову візуалізацію, але це станеться до того, як браузер оновить екран (користувач не побачить проміжний стан)

  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts; // список контактів з попереднього стану
    const nextContacts = this.state.contacts; // список контактів з об'єкт-стану state, що відображаються в інтерфейсі
    if (nextContacts.length !== prevContacts.length) {
      localStorage.setItem('phonebook_contacts', JSON.stringify(nextContacts));
    } // якщо довжина списків не однакова (тобто є новий елемент, або щось видалено), то новий список, перетворений в JSON формат, записуємо в localStorage
  } // метод componentDidUpdate(), викликається одразу після оновлення компонента

  formChange = e => {
    const { name, value } = e.target; // деструктуризуєм name та value з посилання на об'єкт, що був ініціатором цієї події
    this.setState({ [name]: value }); // асинхронне оновлення об'єкту-стану state, ключу name присвоюється значення value
  }; // метод formChange класу App, виклик методу призводить до оновлення об'єкту-стану state в полі (name), яке було ініціатором цієї події

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }; // метод onDeleteContact класу App видаляє відфільтрований по id контакт з масиву контактів та новий масив контактів записується у state/сontacts

  addContact = contact => {
    const { contacts } = this.state;
    if (
      contacts.find(
        item =>
          item.name.toLowerCase().replaceAll(' ', '') ===
          contact.name.toLowerCase().replaceAll(' ', '')
      ) // при порівнянні приводимо до нижнього регістру та видаляємо пробіли, для унеможливлення реєстрації однакових імен з додатковими пробілами
    ) {
      return Notiflix.Notify.warning(
        `Name ${contact.name} is already in contacts`
      ); // якщо в списку контактів існує контакт з таким ім'ям, вийти та вивести відповідне повідомлення
    } else if (
      contacts.find(
        item =>
          item.number
            .replaceAll('+', '')
            .replaceAll(' ', '')
            .replaceAll('(', '')
            .replaceAll(')', '')
            .replaceAll('-', '') ===
          contact.number
            .replaceAll('+', '')
            .replaceAll(' ', '')
            .replaceAll('(', '')
            .replaceAll(')', '')
            .replaceAll('-', '')
      ) // при порівнянні видаляємо плюс, пробіли, дужки та тире, якщо вони є, для унеможливлення реєстрації однакових номерів з додатковими символами
    ) {
      return Notiflix.Notify.warning(
        `Number ${contact.number} is already in contacts`
      ); // якщо в списку контактів існує контакт з таким номером телефону, вийти та вивести відповідне повідомлення
    }
    this.setState(prevState => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    }); // інакше, створити константу newContact з id та розпиленим масивом контактів, та додати цей новий контакт до списку контактів
  }; // метод addContact класу App додає контакт в масив контактів та новий масив контактів записується у state/сontacts

  filterContacts = () =>
    this.state.filter === ''
      ? this.state.contacts
      : this.state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        ); // метод filterContacts класу App. якщо поле фільтра порожнє, повертає повний список контактів, інакше повертає відфільтровний список контактів

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <Container>
        <Box>
          <TopTitle>Phonebook</TopTitle>
          <ContactForm onSubmit={this.addContact} />
          <Title>Contacts</Title>
          <Filter
            filter={this.state.filter}
            changedFormData={this.formChange}
          />
          <ContactList
            apdatedContacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </Box>
      </Container>
    );
  } // повернення для рендеру розмітки застосунку "Книга контактів"
} // клас App(), повертає компоненти з даними для рендеру сторінки
