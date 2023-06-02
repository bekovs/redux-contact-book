import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../helpers/consts";
import axios from "axios";

export const getContacts = createAsyncThunk("@contacts/getContacts", async () => {
  const { data } = await axios.get(API);
  return data;
})

export const addContact = createAsyncThunk("@contacts/addContact", async (newContact, { dispatch }) => {
  let res = await axios.post(API, newContact);
  console.log(res)
  dispatch(getContacts());
  return newContact;
} )