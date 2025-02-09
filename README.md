# Contacts CLI

## Overview
This is a **Node.js CLI application** for managing contacts.  
The application allows users to **list**, **retrieve**, **add**, and **remove** contacts from a JSON file using command-line arguments.

## **System Requirements**
- Node.js **v22.13.1** (or compatible LTS version)
- NPM **v9+**
- Installed dependencies (`commander`, `nanoid`)

## **Installation**
Clone the repository and install dependencies:

```sh
git clone https://github.com/Mz-Vl/goit-node-cli.git
cd goit-node-cli
npm install
```

## **Usage**
Run the application using the following command:

```sh
node index.js
```     

## **Commands**
- **list**: List all contacts
- **get**: Get a contact by id
- **add**: Add a new contact
- **remove**: Remove a contact by id

## Functional Testing
Below are the QA test cases to verify the functionality of the application.

### ✅ Test Case 1: Retrieve and Display All Contacts
#### Description:
Verify that the application correctly retrieves and displays the list of contacts in a formatted table.

Command:
```sh
node index.js -a list
```
#### Expected Result:
The console should display all contacts in a structured table format.
Each contact should have id, name, email, and phone fields.

### ✅ Test Case 2: Retrieve a Contact by ID
#### Description:
Verify that the application correctly retrieves a contact by its unique id.

Command:
```sh
node index.js -a get -i 05olLMgyVQdWRwgKfg5J6
```
#### Expected Result:
If a contact with the provided ID exists:
The console should output the contact object containing id, name, email, and phone.
If the contact does not exist:
The console should return null or "Contact not found".

### ✅ Test Case 3: Add a New Contact
#### Description:
Verify that the application allows adding a new contact and correctly displays the newly created contact.

Command:
```sh
node index.js -a add -n Mango -e mango@gmail.com -p 322-22-22
```
#### Expected Result:
A new contact should be added to the JSON database.
The console should return the contact object with the generated id, name, email, and phone.
Running node index.js -a list should include the newly added contact.

### ✅ Test Case 4: Remove a Contact
#### Description:
Verify that the application allows removing a contact by ID.

Command:
```sh
node index.js -a remove -i qdggE76Jtbfd9eWJHrssH
```
#### Expected Result:
If a contact with the provided ID exists:

The console should output the removed contact object.
Running ```node index.js -a list``` should no longer display this contact.

If the contact does not exist:

The console should return null or "Contact not found".
### Edge Cases Considered
Invalid Command: 
Running ```node index.js -a unknown``` should return "Unknown action type!".

Missing Arguments:
If an argument (e.g., -i, -n, -e, or -p) is missing, the application should return the following "error: too many arguments. Expected 0 arguments but got 1"

Duplicate Contacts: 
The application does not check for duplicate contacts, meaning multiple entries with the same name/email can exist.

Large Contact List Performance: 
The application should still function correctly with a large number of contacts.


## Conclusion
By following these test cases, you can ensure that the contact management script functions correctly and handles various scenarios appropriately.
