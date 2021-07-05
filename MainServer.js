"use strict"

const express = require('express');
const app = express();
const getFile = require('./routes/GetMethod');
const postFile = require('./routes/PostMethod');
const deleteFile = require('./routes/delete-method');

const port = 5000;

app.use('/', getFile);
app.use('/', postFile);
app.use("/users", deleteFile)

app.listen(port, () => {
    console.log(`Server working on http://localhost:${port}`);
});