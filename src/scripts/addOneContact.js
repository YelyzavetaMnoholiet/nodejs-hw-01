import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const existedContacts = await readContacts();
  const contactsArray = Array.isArray(existedContacts) ? existedContacts : [];
  const newContact = [];
  newContact.push(createFakeContact());
  await writeContacts([...contactsArray, ...newContact]);
};

addOneContact();
