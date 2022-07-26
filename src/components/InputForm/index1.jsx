//import PropTypes from 'prop-types';
import { useState } from 'react';
import { InputItem } from './InputForm.styled';
import { Formik, Form } from 'formik';

export default function InputForm() {
  //const inputState = useState('');
  const [name, setName] = useState('');

  const onSubmit = values => {
    setName(values.target.value);
  };

  return (
    <Formik initialValues={{ name }} onSubmit={onSubmit}>
      <Form>
        <label>
          Name
          <InputItem
            type="text"
            name="name"
            maxLength="16"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
/*class OldInputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onSubmit = (values, action) => {
    this.props.submitHandle(values);
    action.resetForm();
  };
  render() {
    const { name, number } = this.state;
    return (
      <Formik initialValues={{ name, number }} onSubmit={this.onSubmit}>
        <Form>
          <label>
            Name
            <InputItem
              type="text"
              name="name"
              maxLength="16"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <InputItem
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
InputForm.propTypes = {
  submitHandle: PropTypes.func,
};
*/
