const DataValidate = require('../models/dataSchema')
const SendMail = require('../models/emailSender')

exports.validate = (req, res)=>{
    const dataValidate = new DataValidate(req.body.nome, req.body.email, req.body.msg, req.body.lang)
    const resposta = dataValidate.validateSchema()
    res.send(resposta)
}