const express = require('express')
const router = express.Router()

const {
    getProfessionals,
    createProfessional
} = require('../controllers/professionals.controller')

const validateProfessional = require ('../middlewares/validateProfessional')

router.get('/', getProfessionals)

router.post('/', validateProfessional, createProfessional)

module.exports = router