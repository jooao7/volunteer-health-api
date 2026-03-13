function validateProfessional(req, res, next) {

    const { name, email, phone, message } = req.body

    if (!name || name.length < 3) {
        return res.status(400).json({
            error: "Nome deve ter no mínimo 3 caracteres"
        })
    }

    const emailRegex = /\S+@\S+\.\S+/

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            error: "Email inválido"
        })
    }

    const phoneRegex = /^\d{10,11}$/

    if (!phoneRegex.test(phone)) {
        return res.status(400).json({
            error: "Telefone deve ter 10 ou 11 números"
        })
    }

    if (message && message.length > 500) {
        return res.status(400).json({
            error: "Mensagem deve ter no máximo 500 caracteres"
        })
    }

    next()
}

module.exports = validateProfessional