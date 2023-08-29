import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/selectors';
import { ThreeDots } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#1f86e0"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        )}
        <ContactList />
      </Section>
    </div>
  );
};
