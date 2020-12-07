const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I have successfully completed this module! Hell ya!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
