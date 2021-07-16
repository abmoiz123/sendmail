const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

router.post("/contact", (req, res) => {
    console.log("back", req.body.name)
    // const contactEmail = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: "moizrao328@gmail.com",
    //         pass: "abdulmoiz1pass",
    //     },
    // });
    // const name = req.body.name;
    // const email = req.body.email;
    // const message = req.body.message;
    // const mail = {
    //     from: name,
    //     to: "moizrao328@gmail.com",
    //     subject: "Contact Form Submission",
    //     html: `<p>Name: ${name}</p>
    //          <p>Email: ${email}</p>
    //          <p>Message: ${message}</p>`,
    // };
    // contactEmail.sendMail(mail, (error) => {
    //     if (error) {
    //         res.json({ status: "ERROR" });
    //     } else {
    //         res.json({ status: "Message Sent" });
    //     }
    // });
});
app.listen(5000, () => console.log("Server Running"));





// let express = require('express');
// let app = express();
// const path = require('path');
// let nodemailer = require('nodemailer');

// // Static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));

// nodemailer.createTransport({
//     host: "mail.YOURDOMAIN.com",
//     port: 587,
//     secure: false,
//     auth: {
//         user: "YOURUSERNAME",
//         pass: "YOURPASSWORD"
//     }
// });

// // verifying the connection configuration
// transporter.verify(function (error, success) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Server is ready to take our messages!");
//     }
// });


// router.post('/access', (req, res, next) => {
//     var email = req.body.email
//     var message = req.body.message
//     var content = `email: ${email} \n message: ${message} `

//     var mail = {
//         from: name,
//         to: name,
//         message: subject,
//         text: content
//     }

//     transporter.sendMail(mail, (err, data) => {
//         if (err) {
//             res.json({
//                 status: 'fail'
//             })
//         } else {
//             res.json({
//                 status: 'success'
//             })
//         }
//     })
// })


// const PORT = process.env.PORT || 8080
// app.listen(PORT, () => console.info(`server has started on ${PORT}`))