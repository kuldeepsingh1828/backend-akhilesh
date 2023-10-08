const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    req.on('data', (data) => {
        console.log(data.toString());
        console.log(JSON.parse(data.toString()));
    });

    const params = url.parse(req.url, true).query;
    if (req.url.includes('/users')) {
        res.write('Hello from the server! to USERS');
    } else if (req.url == '/admin') {
        res.write('Hello from the server! to ADMIN');
    }
    else if (req.url == '/products') {
        res.write('Hello from the server! to PRODUCTS');
    }
    res.end(JSON.stringify(params));
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});









// const { fromModule1 } = require('./module1');
// const { fromModule2 } = require('./module2');


// console.log(fromModule1());
// console.log(fromModule2());