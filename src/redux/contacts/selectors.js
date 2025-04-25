export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = (state) => {
  const contacts = state.contacts.items;
  const filter = state.filters?.name?.toLowerCase() || "";
  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter) ||
      contact.number.includes(filter)
  );
};
