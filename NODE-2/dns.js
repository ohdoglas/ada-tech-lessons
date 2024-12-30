const dns = require('node:dns');


// const ipv4 = dns.resolve4(searchUrl, (err, addresses) => {
//     if (err) {
//         console.log('URL not found');
//         return;
//     }

//     console.log(addresses);
// });

async function bootstrap() {
    const searchUrl = 'google.com';

    const addresses = await dns.promises.resolve4(searchUrl);
    console.log(addresses);

    const nameServers = await dns.promises.resolveNs(searchUrl);
    console.log(nameServers);

    const ipNs = await dns.promises.resolve4(nameServers[1]);

    const resolver = new dns.Resolver();
    resolver.setServers(ipNs);

    resolver.resolve4(searchUrl, (error, addresses) => {
        if (error) {
            console.error("Can't find IPV4/DNS");
        }
        console.log(addresses);
    });

}


bootstrap();