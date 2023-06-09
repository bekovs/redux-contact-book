import { createSlice } from "@reduxjs/toolkit"
import { addContact, getContacts } from "../actions/contactsActions";

const initialState = {
  contacts: [],
  oneContact: {},
  error: '',
}

export const contactsSlice = createSlice({
  name: "@contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getContacts.fulfilled, (state, action) => {
      state.contacts = action.payload
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.contacts.push(action.payload);
    })
  }
})

export const contactsReducer = contactsSlice.reducer;
