//creating a server to render the html file for specific url using fs module
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

    let url = req.url;
    let method = req.method;
    fs.readFile('navbar.html', (err, data) => {
        if (err) {
            res.write('Error occured');
            res.end();
        } else {
            res.write(data);
        }
    });
    if (url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.write('Error occured');
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    } else if (url == '/about') {
        fs.readFile('about.html', (err, data) => {
            if (err) {
                res.write('Error occured');
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    } else if (url == '/contact') {
        fs.readFile('contact.html', (err, data) => {
            if (err) {
                res.write('Error occured');
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    } else {
        res.write('Error occured');
        res.end();
    }
});

server.listen(3000, () => {
    console.log("server runnin on port 3000");
});