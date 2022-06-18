const express = require('express')
const router = express.Router()
const cryptr = require('../middlewares/cryptr')
const fs = require('fs')
const { java } = require('compile-run')
// const temp = '../temp'

router.post('/', cryptr, async (req, res) => {
    await fs.writeFile(`./temp/Main.java`, req.body.code, async () => {
        await java.runFile(`./temp/Main.java`, { stdin: req.body.input }).then(result => {
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
        await fs.unlink(`./temp/Main.java`, (err) => {
            if (err) {
                return res.status(400).send(err)
            }
        })
    })
})
module.exports = router