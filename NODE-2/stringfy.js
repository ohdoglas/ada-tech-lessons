const querystring = require('node:querystring');
const Uurl = require('node:url');

const baseUrl = 'http://trips.com.br';

const uri = querystring.stringify({
    path: 'Brasil',
    season: 'Summer'
});

const url = `${baseUrl}/${uri}`;

console.log(url);

const parsedUri = querystring.parse(uri);
console.log(uri);
console.log(parsedUri);
console.log(parsedUri.path);


const uri2 = querystring.escape('Sao Paulo');
console.log(uri2);
const unescapedUr2 = querystring.unescape(uri2);
console.log(unescapedUr2);


console.log(Uurl.parse(url));




