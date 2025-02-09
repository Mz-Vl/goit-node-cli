import { nanoid } from "nanoid";
import {readFile} from "node:fs/promises";
import {writeFile} from "node:fs/promises";
import {resolve} from "node:path";

// const contactsPath = path.join(__dirname, "db", "contacts.json");
const contactsPath = resolve("db", "contacts.json");

async function listContacts() {
    const data = await readFile(contactsPath, "utf-8");
    return JSON.parse(data)
}

async function getContactById(contactId) {
    const contacts = await listContacts();
    const contact = contacts.find((contact) => contact.id === contactId);
    return contact || null
}

async function removeContact(contactId) {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);

    if (index === -1) {
        return null;
    }

    const [removedContact] = contacts.splice(index, 1);
    await writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return removedContact
}

async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const newContact = {id: nanoid(), name, email, phone};

    contacts.push(newContact);
    await writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return newContact
}

export {
    listContacts,
    getContactById,
    removeContact,
    addContact
}


