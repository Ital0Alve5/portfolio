const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')
require('dotenv').config()
class SendMail {
    constructor(nome, email, mensagem){
        this.nome = nome,
        this.email = email,
        this.mensagem = mensagem,
        this.auth = {
            auth:{
                api_key: process.env.apikey,
                domain: process.env.domain
            }
        },
        this.mailOptions = {
            from: this.email,
            to: 'italo_alves_@outlook.com',
            subject: this.nome,
            text: this.mensagem
        }
        this.transporter = nodemailer.createTransport(mailGun(this.auth))
    }

    enviar = ()=>{
        this.transporter.sendMail(this.mailOptions, (err, data)=>{
            if(err){console.log(err)}
            else{console.log(data)}
        })
    }
}

module.exports = SendMail
