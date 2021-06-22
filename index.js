const express = require ("express")
const mailer = require ("nodemailer")
const app = express()
app.use (express.json())

const PORT = 2004

const MY_EMAIL = "bill.bill.19992@gmail.com"
const MY_PASSWORD = "68728Murat"

const transport = mailer.createTransport({
    service: "Gmail",
    auth: {
        user: MY_EMAIL,
        pass: MY_PASSWORD
    }
})

function send_mail (req, res) {
    const textOfMail = req.body
    console.log(textOfMail)
    transport.sendMail({
        to: textOfMail.email,
        text: textOfMail.text,
        from: MY_EMAIL,
        subject: textOfMail.subject
    })
    res.status(201).json("Mail sended sucsessfully!")
}

app.post("/send-mail", send_mail)

app.listen(PORT,() => {
    console.log("MAIL SENDER IS RUNNING ON PORT: " + PORT)
})
