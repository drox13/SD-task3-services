const express = require('express');
const router = express.Router();
const userList = require('../modelList')

router.route("/:username").delete((req, res) => {
    let userName = req.params.username;
    console.log(userName);
    if (userName in userList) {
        console.log('ok')
    } else {
        res.status(404).send('User not found')
    }
});

module.exports = router;

/*for (const nameObj in userList) {
    console.log(`name: ${userList[nameObj]}`)
    if (userName === userList[nameObj]) {
        console.log('Entro al if')
        res.send(`The user ${userName} has been deleted`)
    } 
}
*/