const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const filename = '.' + url + '.html';

    fs.readFile(filename, (err, data) => {
        if (err) throw err;
        res.write(data.toString());
        res.end();
    });
});

server.listen(3000, () => {
    console.log('Server is running at port 3000');
});