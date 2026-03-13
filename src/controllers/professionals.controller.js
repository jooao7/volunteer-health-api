const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../data/professionals.json')

function getProfessionals(req, res) {

    const data = fs.readFileSync(filePath)
    const professionals = JSON.parse(data)

    res.json(professionals)
}

function createProfessional(req, res) {

    const { name, email, phone, message } = req.body

    const data = fs.readFileSync(filePath)
    const professionals = JSON.parse(data)

    const newProfessional = {
        id: Date.now(),
        name,
        email,
        phone,
        message
    }

    professionals.push(newProfessional)

    fs.writeFileSync(filePath, JSON.stringify(professionals, null, 2))

    res.status(201).json({
        message: "Profissional cadastrado com sucesso",
        professional: newProfessional
    })
}

module.exports = {
    getProfessionals,
    createProfessional
}