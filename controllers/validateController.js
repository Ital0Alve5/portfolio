const DataValidate = require('../models/dataSchema')

exports.validate = (req, res)=>{
    const dataValidate = new DataValidate(req.body.nome, req.body.email, req.body.msg)
    const resposta = dataValidate.validateSchema()
    res.send(resposta)
}