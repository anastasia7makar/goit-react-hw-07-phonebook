import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialContacts = {
  items: [],
  isLoading: false,
  error: null,
};

const defaultStatus = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const thunksArr = [fetchContacts, addContact, deleteContact];

const thunkStatus = status => {
  return thunksArr.map(thunk => thunk[status]);
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};
const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};
const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
};
const handleFulfilledDelete = (state, { payload }) => {
  const index = state.items.findIndex(
    contact => contact.id === payload.id
  );
  state.items.splice(index, 1);
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = defaultStatus;
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...thunkStatus(PENDING)), handlePending)
      .addMatcher(isAnyOf(...thunkStatus(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...thunkStatus(REJECTED)), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
