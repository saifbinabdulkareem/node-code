const express = require("express");
const router = express.Router();

router.get("/getData", (req,res)=> {
    res.send({name: 'Saif'})
})

// router.use('/auth', require('./login.js'))

module.exports = router;