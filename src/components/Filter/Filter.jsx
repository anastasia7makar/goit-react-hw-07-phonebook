import { filterContacts } from 'redux/filterSlice';
import css from '../Filter/Filter.module.css';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        placeholder="Enter contact name"
        onChange={onFilter}
      />
    </label>
  );
};

export default Filter;
