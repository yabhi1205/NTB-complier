const Cryptr = require('cryptr')
const express = require('express')
const router = express.Router()
router.post('/',(req,res)=>{
    let cryptr = new Cryptr(req.body.token)
    let encrypt = cryptr.encrypt(req.body.code)
    return res.status(200).send({"success":true,encrypt})
})

module.exports = router