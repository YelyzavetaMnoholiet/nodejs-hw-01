import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const existedContacts = await readContacts();
  const contactsArray = Array.isArray(existedContacts) ? existedContacts : [];

  const newContacts = [];

  for (let i = 1; i <= number; i++) {
    newContacts.push(createFakeContact());
  }

  await writeContacts([...contactsArray, ...newContacts]);
};

generateContacts(5);
