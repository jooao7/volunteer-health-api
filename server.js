require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json())

const professionalsRoutes = require('./src/routes/professionals.routes')

app.use('/professionals', professionalsRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}');
})