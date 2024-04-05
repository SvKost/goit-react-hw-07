import { createSlice } from "@reduxjs/toolkit";
// import contactsInitialState from "../contacts.json";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.items = [...state.items, action.payload];
  //     },
  //     prepare(newContact) {
  //       return {
  //         payload: {
  //           ...newContact,
  //           id: nanoid(),
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, action) {
  //     const index = state.items.findIndex(
  //       (contact) => contact.id === action.payload
  //     );
  //     state.items.splice(index, 1);
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
