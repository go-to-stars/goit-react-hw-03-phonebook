import PropTypes from "prop-types"; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
// import { Label, Input } from "./Filter.styled"; // імпорт стилів тегів Label, Input
import { Label, Input } from "../ContactForm/ContactForm.styled"; // імпорт стилів тегів label (Label), input (Input)

export const Filter = ({ filter, changedFormData }) => (
  <Label>
    Find contacts by name
    <Input
      type="text"
      name="filter"
      value={filter} // // значення поля filter батьківського елемента об'єкту-стану state
      onChange={changedFormData}
    />
  </Label> // при настанні події onChange викликається метод батьківського елемента changedFormData
); // поверненя розмітки поля filter (теги Label і Input)

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changedFormData: PropTypes.func.isRequired,
}; // типізація (опис типів) пропсів компоненту Filter
