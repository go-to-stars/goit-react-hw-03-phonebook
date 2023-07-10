import PropTypes from "prop-types"; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
import { List, ListItem, Text, Button } from "./ContactList.styled"; // імпорт стилів тегів ul(List), li(ListItem), p(Text), Button

export const ContactList = ({ apdatedContacts, deleteContact }) => (
  <List>
    {apdatedContacts.map((item) => (
      <ListItem key={item.id}>
        <Text>
          &#8226; {item.name}: {item.number}
        </Text>
        <Button type="button" onClick={() => deleteContact(item.id)}>
          Delete
        </Button>
      </ListItem>
    ))}
  </List> // створення списку елементів li методом (map) перебору масиву apdatedContacts; при настанні події onClick викликається метод deleteContact
); // повернення (стрілочною функцією) розмітки списку контактів компонента ContactList

ContactList.propTypes = {
  apdatedContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
}; // типізація (опис типів) пропсів компоненту ContactList
