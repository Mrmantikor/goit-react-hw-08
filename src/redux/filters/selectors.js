import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";
import { selectFilter } from "./slice";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
