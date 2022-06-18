const express = require('express')
const router = express.Router()
const cryptr = require('../middlewares/cryptr')
const { c } = require('compile-run');
const fs = require('fs');
const { stderr } = require('process');
var exec = require('child_process').exec;
// const temp = '../temp'

router.post('/'
    // ,cryptr
    , async (req, res) => {
        let r = (Math.random() + 1).toString(36).substring(7);
        await fs.writeFile(`./temp/${r}.c`, req.body.code, async() => {
            await c.runFile(`./temp/${r}.c`, { stdin: req.body.input }).then(result => {
                console.log(result)
                if (result.stderr) {
                    return res.status(400).send(result.stderr)
                }
                else {
                    return res.status(200).send(result.stdout)
                }
            })
            .catch(err => {
                return res.send(err)
            })
            await fs.unlink(`./temp/${r}.c`, (err) => {
                if (err) {
                    return res.status(400).send(err)
                }
            })
        })
    })
module.exports = router