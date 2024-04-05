import { createSlice, nanoid } from "@reduxjs/toolkit";
import contactsInitialState from "../contacts.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: contactsInitialState,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items = [...state.items, action.payload];
      },
      prepare(newContact) {
        return {
          payload: {
            ...newContact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
