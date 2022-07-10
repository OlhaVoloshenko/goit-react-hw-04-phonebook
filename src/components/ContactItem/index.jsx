import PropTypes from 'prop-types';
import {
  ListItem,
  NumByOrder,
  TelNum,
  DelBtn,
} from '../ContactList/ContactList.styled';

export function ContactItem({ contact, item, method }) {
  return (
    <ListItem>
      <NumByOrder>{item + 1}</NumByOrder>
      {contact.name}: <TelNum>{contact.number}</TelNum>
      <DelBtn type="button" onClick={() => method(contact.id)}>
        Delete
      </DelBtn>
    </ListItem>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object,
  item: PropTypes.number,
  onDelete: PropTypes.func,
};
