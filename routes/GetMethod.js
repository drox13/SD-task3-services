const model = require("../modelList");

const express = require('express');
const router = express.Router()

router.get('/prueba', (req,res)=>{
    res.send(model.userList);
});

module.exports = router;