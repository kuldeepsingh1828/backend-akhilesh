const fs = require('fs');

fs.readFile('./demo1.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
    s = "";
    data.toString().split('').forEach((char) => {
        s += char + "*";
    });
    console.log(s);
});

fs.writeFile('./demo2.txt', 'Hello World!2', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

fs.appendFile('./demo2.txt', 'Hello World!2', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

// fs.unlink('./demo2.txt', (err) => {
//     if (err) throw err;
//     console.log('The file has been deleted!');
// });

fs.rename('./demo2.txt', './demo3.txt', (err) => {
    if (err) throw err;
    console.log('The file has been renamed!');
});