import fs from 'fs';
import path from 'node:path';

const productJson =JSON.stringify([
    {
        "name": "Pair of stock Black",
        "amountInStock": 400,
        "value": 45
    },
    {
        "name": "Pair of stock White",
        "amountInStock": 400,
        "value": 45
    }
], null, 2);


const fileOutPath = path.join(__dirname, 'generated-products.json');

const products = JSON.parse(productJson);

fs.writeFileSync(fileOutPath, productJson);

console.log(productJson);
