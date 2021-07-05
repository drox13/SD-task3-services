"use strict"

const express = require('express');
const app = express();
const getFile = require('./routes/GetMethod');
const postFile = require('./routes/PostMethod');
/*const deleteFile = require('./deleteMethod');*/

const port = 5000;

app.use('/', getFile);
app.use('/', postFile);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});