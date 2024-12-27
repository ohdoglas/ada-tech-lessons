const contacts = ["Joana", "Renata", "Weber", "Zeca"];

let contactFound = false;
let finishCounter = false;
counter = 0;

while (!contactFound && !finishCounter) {
    const currentContact = contacts[counter];
    if (currentContact.startsWith("Z")) {
        contactFound = true;
        console.log(`User ${contacts[counter]} found`);
    }
    counter++;

    if(counter === contacts.length) {
        break
    }
}



