const express = require('express');
const router = express.Router();
let { userList } = require('../modelList')

router.route("/:nameUser").delete((req, res) => {
    let name = req.params.nameUser;
    let deleted = userList.find(user => user === name);
    if (deleted) {
        userList = userList.filter(nameUser => nameUser !== name);
        console.log(userList)
        res.status(200).send(`The user ${deleted} has been deleted`);
    } else {
        res.status(404).send('User not found');
    }
});

module.exports = router;