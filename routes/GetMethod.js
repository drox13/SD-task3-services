const model = require("../modelList");

const express = require('express');
const { request } = require("express");
const router = express.Router()

router.get('/get/:username', (req, res) => {
    var exist = false;
    var respuesta = "";
    for (const nameObj in model.userList) {
        if (req.params.username == model.userList[nameObj]) {
            exist = true;
            respuesta = respuesta +`${nameObj}, `;
        }
    }
    if(exist){
        res.send(`La persona ${req.params.username} esta existente en las posiciones ${respuesta}`);
    } else{
        res.send(`La persona ${req.params.username} no esta exitente el la lista`);
    }
});

module.exports = router;
