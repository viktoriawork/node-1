const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { listContacts, getContactById, removeContact, addContact } = require("./contacts.js");
const contacts = require("./db/contacts.json");
const arr = hideBin(process.argv);
const { argv } = yargs(arr);

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(listContacts());
      break;

    case "get":
      console.table(getContactById(id));
      break;

    case "add":
      await addContact(name, email, phone);
      console.table(contacts);
      break;

    case "remove":
      await removeContact(id);
      console.table(contacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

if (argv.action) {
  invokeAction(argv);
}