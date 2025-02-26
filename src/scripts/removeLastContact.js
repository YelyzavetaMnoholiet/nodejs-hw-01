import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const allContacts = await readContacts();
  const lastContact = allContacts.slice(0, -1);
  await writeContacts([...lastContact]);
};

removeLastContact();
