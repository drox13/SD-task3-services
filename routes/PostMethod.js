"use strict"

const model = require("../modelList");

const express = require('express');
const router = express.Router();
const app = express();

const bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get('/', (req,res)=>{
    res.send("Hello bitch");
});

module.exports = router;