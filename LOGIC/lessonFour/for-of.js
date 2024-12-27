const numbers = [1, 46, 83, 5463, 5, 989];


//codigo imperativo
for (let counter = 0; counter < numbers.length; counter++) {
    console.log(numbers[counter]);
}

//codigo declarativo
for(const element of numbers) {
    console.log(element);
}