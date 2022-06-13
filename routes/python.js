const express = require('express')
const router = express.Router()
const cryptr = require('../Middleware/cryptr')
const fs = require('fs')
var exec = require('child_process').exec;
// const temp = '../temp'

router.post('/',
    //  cryptr, 
    async (req, res) => {
        let r = (Math.random() + 1).toString(36).substring(7);
        await fs.writeFile(`./temp/${r}.py`, req.body.code, async () => {

            await exec(`python ./temp/${r}.py`, async (error, stdout, stderr) => {
                await fs.unlinkSync(`./temp/${r}.py`)
                if (stdout) {
                    return res.status(200).send({ "success": true, stdout })
                }
                else {
                    return res.status(400).send({ "sucess": false, stderr })
                }
            });
        })
    })
module.exports = router