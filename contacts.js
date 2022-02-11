const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "./db/contacts.json");
const contacts = require("./db/contacts.json");

const updateContacts = async newContacts => {
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
};

function listContacts() {
  return contacts;
}

function getContactById(contactId) {
  const oneContact = contacts.find(item => item.id === contactId);
  if (!oneContact) {
    return null;
  }
  return oneContact;
}

async function removeContact(contactId) {
  const idx = contacts.findIndex(item => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const removeContact = contacts[idx];
  contacts.splice(idx, 1);
  await updateContacts(contacts);
  return removeContact;
}

async function addContact(name, email, phone) {
  const newContact = { name, email, phone, id: v4() };
  contacts.push(newContact);
  await updateContacts(contacts);
}

module.exports = { listContacts, getContactById, removeContact, addContact };