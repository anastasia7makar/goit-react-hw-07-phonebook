import css from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';

import { selectContacts } from 'redux/selectors';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    const isExistContact = contacts.findIndex(contact => contact.name === name);

    if (isExistContact !== -1) return alert(`${name} is already in contacts`);

    dispatch(addContact({name, number}));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
        />
      </label>

      <button type="submit" className={css.submitButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
