const rl = require('readline');

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

const promptPromise = {
    question: (request) => new Promise((resolve, reject) => {
        try {
            prompt.question((request), (response) => resolve(response));
        } catch (error) {
            reject(error);
        }
    }),
    close: () => prompt.close()
};

// prompt.question('Whats your favorite number?: ', (response) => {
//     console.log(`The double of your favorite number is: ${parseInt(response) * 2}`);

//     prompt.question('Whats your favorite color?: ', (response) => {
//         console.log(`Your favorite color is is: ${response}`);
//         prompt.close();
//     });
// });


async function askUser() {
    const number = await promptPromise.question('Whats your favorite number?: ')
    console.log(`The double of your favorite number is: ${parseInt(number) * 2}`);

    const color = await promptPromise.question('Whats your favorite color?: ')
    console.log(`Your favorite color is: ${color}`);
};

askUser();

// promptPromise.question('Whats your favorite number?: ', (response) => {
//     console.log(`The double of your favorite number is: ${parseInt(response) * 2}`);

//     prompt.question('Whats your favorite color?: ', (response) => {
//         console.log(`Your favorite color is is: ${response}`);
//         prompt.close();
//     });
// });