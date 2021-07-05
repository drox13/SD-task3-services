"use strict"

const model = require("../modelList");

const express = require('express');
const router = express.Router();

router.post('/', (req,res)=>{
    model.userList.push(req.body.name);
    res.send(model.userList);
});

module.exports = router;