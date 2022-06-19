const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
        user: "nailthebrain@outlook.com",
        pass: "Ntb@number1",
    },
});

const option = {
    from: 'nailthebrain@outlook.com',
    to: "yabhi1205@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
}

transporter.sendMail(option, function(err,info){
    if(err){
        console.log(err);
        return
    }
    console.log(`send = ${info}`);
})
  