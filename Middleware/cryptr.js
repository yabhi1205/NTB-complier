const Cryptr = require('cryptr')
const fetchadmin = (req,res,next)=>{
    const token = req.header('auth-token')
    // if (!token){
    //     return res.status(401).send({success: false,error:"Please authentiate with correct crediantials"})
    // }
    try {
        let cryptr = new Cryptr(token)
        req.body.code = cryptr.decrypt(req.body.ecode)
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).send({success: false,error:"Please authentiate with correct crediantials"})
    }

}
module.exports= fetchadmin