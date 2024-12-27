//! QUANDO DEVO UTILIZAR FOR IN?
//? Quando for manipular OBJETOS
//! QUANDO DEVO UTILIZAR FOR OF?
//? Quando for manipular arrays

const users = {
    name: "Jaus Nesue",
    email: "jaus.ne@email.com",
    age: 23,
    address: "x Street"
}

// for (const key in users) {
//     console.log(users[key])
// }

//________________________________________________________

// for(const key in users) {
//     const value = users[key];
//     if (key === "name" || key === "email") {
//         users[key] = value.toLowerCase();
//     }
// }

// console.log(users)

//________________________________________________________

// for(const key in users) {
//     const value = users[key];
//     if (key === "name") {
//         const names = users[key].split(' ');
//         console.log(names)
//     }

//     if (key === "email") {
//         users[key] = users[key].toLowerCase();
//     }
// }

// console.log(users)

//________________________________________________________

for(const key in users) {
    if (key === "name") {
        const names = users[key].split(" ");
        users[key] = '';
        for (const name of names) {
            const normalizedName = name.toLowerCase();
            const [firstCharacter, ...leftover] = normalizedName;

            users[key] = users[key] + ' ' + firstCharacter.toLocaleUpperCase() + leftover.join('');
            users[key] = users[key].trim();
        }
    }
    if(key === "email") {
        users[key] = users[key].toLowerCase();
    }
}

console.log(users);
