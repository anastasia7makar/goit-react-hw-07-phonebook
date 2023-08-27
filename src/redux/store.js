import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const reducers = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: reducers,
});
