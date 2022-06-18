const express = require('express')
const router = express.Router()
const cryptr = require('../middlewares/cryptr')
const { python } = require('compile-run');
const fs = require('fs')
var exec = require('child_process').exec;
// const temp = '../temp'

router.post('/',
    //  cryptr, 
    async (req, res) => {
        let r = (Math.random() + 1).toString(36).substring(7);
        await fs.writeFile(`./temp/${r}.py`, req.body.code, async () => {
            await python.runFile(`./temp/${r}.py`, { stdin: req.body.input }).then(result => {
                console.log(result)
                let success = true
                if(result.stderr){success=false}
                return res.status(200).send({success, stdout: result.stdout, stderr: result.stderr })
            })
                .catch(err => {
                    console.log(err)
                })
            await fs.unlink(`./temp/${r}.py`, (err) => {
                if (err) {
                    return res.status(400).send(err)
                }
            })
        })
    })
module.exports = router