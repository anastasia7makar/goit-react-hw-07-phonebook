import { createSlice } from '@reduxjs/toolkit';

const filterState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    filterContacts: {
      reducer: (_, action) => {
        return action.payload;
      },
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
