const mongoose = require('mongoose')
const joi = require('joi')
const Schema = mongoose.Schema
const nodemailer = require('nodemailer');
class Validate{

    constructor(nome, email, mensagem){
        this.nome = nome,
        this.email = email,
        this.mensagem = mensagem
    }

    userSchema = ()=>{
        return (joi.object({
            nome: joi.string().empty().lowercase().trim().min(2).max(50).regex(/^[a-zA-ZáéíóúÁÉÍÓÚãõÃÕñÑâêîôûÂÊÎÔÛÀèÈÌìòùÒÙ\s]+$/).required()
            .messages({
                "string.pattern.base": "\'Nome\' deve conter apenas letras",
                "string.min": "\'Nome\' deve ter mais de 2 caracteres.",
                "string.empty": "\'Nome\' deve ser preenchido."
            }),
            email: joi.string().empty().email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}})
            .lowercase().trim().required()
            .messages({"string.email": "Email inválido.",
            "string.empty": "\'Email\' deve ser preenchido."}),
            mensagem: joi.string().empty().lowercase().trim().min(2).lowercase().trim().required()
            .messages({"string.min": "\'Mensagem\' deve ter mais de 2 caracteres.",
            "string.base": "\'Mensagem\' deve conter apenas letras.",
            "string.empty": "\'Mensagem\' deve ser preenchido." 
        })
        }))
    }

    validateSchema = ()=>{
        const userSchema = this.userSchema()
        const inputValidado = userSchema.validate({
            nome: this.nome,
            email: this.email,
            mensagem: this.mensagem
        }, { abortEarly: false })
        if(!inputValidado.error){
            const nome = inputValidado.value.nome.replace(/[<>//\\]/g, 'a')
            const email = inputValidado.value.email
            const mensagem = inputValidado.value.mensagem.replace(/[<>//\\]/g, 'a')
            this.create(nome, email, mensagem)
            return {"0": true, "1": `Mensagem enviada. Obrigado pelo contato, ${this.nome}!`}
        }

        else{
            const erros = inputValidado.error.details.map((e)=>{
                return e.message
            })
            const objectErros = Object.assign({}, erros)
            return JSON.stringify(objectErros)
        }
    }

    schemaMongoose = ()=>{
        const esquemaMensagem = new Schema({
            nome: String,
            email: String,
            mensagem: String
        })

        return mongoose.models['mensagemEnviada']
        ? mongoose.model('mensagemEnviada')
        : mongoose.model('mensagemEnviada', esquemaMensagem)
    }

    create = (nome, email, mensagem)=>{
        const modeloMensagem = this.schemaMongoose()

        modeloMensagem.create({
            nome: nome,
            email: email,
            mensagem: mensagem
        })
    }

}

// class Email{
//     constructor(email, mensagem){
//         this.remetente = nodemailer.createTransport({
//             host: '',
//             service: '',
//             port: 587,
//             secure: true,
//             user: 'italo_alves_@outlook.com',
//             pass: 'misterlane30'
//         }),
//         this.email = email,
//         this.mensagem = mensagem
//     }

//     enviarEmail = ()=>{
//         from: 
//     }
// }

module.exports = Validate