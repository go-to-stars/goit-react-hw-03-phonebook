import React from "react";
import PropTypes from "prop-types"; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
import { Form, Label, Input, Button } from "./ContactForm.styled"; // імпорт стилів тегів form (Form), label (Label), input (Input), button (Button)

export class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  }; // об'єкт-стану state класу ContactForm з даними що відображаються в інтерфейсі

  formChange = (e) => {
    const { name, value } = e.target; // деструктуризуєм name та value з посилання на об'єкт, що був ініціатором цієї події
    this.setState({ [name]: value }); // асинхронне оновлення об'єкту-стану state, ключу name присвоюється значення value
  }; // виклик методу formChange призводить до оновлення об'єкту-стану state в полі (name), яке було ініціатором цієї події

  formSubmit = (e) => {
    e.preventDefault(); // блокування дій браузера за замовчуванням
    const { name, number } = this.state; // деструктуризуєм name та number з об'єкту-стану state
    this.props.onSubmit({ name, number }); // передача властивостей name, number батьківському елементу, при генерації події onSubmit
    this.setState({ name: "", number: "" }); // очищення полів name, number об'єкту-стану state
  }; // виклик методу formSubmit призводить до передачі батьківському елементу значень полів name, number об'єкту-стану state класу ContactForm

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name} // значення поля name об'єкту-стану state
            pattern="\^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.formChange} // при настанні події onChange викликається метод formChange
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number} // значення поля number об'єкту-стану state
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.formChange} // при настанні події onChange викликається метод formChange
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form> // при настанні події onSubmit викликається метод formSubmit
    );
  } // повернення для рендеру розмітки форми (теги Label і Input для кожного поля форми та тег Button)
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}; // типізація (опис типів) пропсів компоненту класу ContactForm
