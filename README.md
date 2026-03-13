# Volunteer Health API 🩺

API REST desenvolvida com **Node.js e Express** para cadastro e listagem de **médicos e dentistas voluntários** interessados em participar de ações sociais de saúde.

O projeto simula um pequeno sistema de registro de profissionais da saúde, permitindo cadastrar e consultar voluntários através de requisições HTTP.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* Dotenv
* File System (fs)
* Postman (para testes da API)

---

## 📂 Estrutura do projeto

```
volunteer-health-api
│
├── src
│   ├── controllers
│   │   └── professionals.controller.js
│   │
│   ├── routes
│   │   └── professionals.routes.js
│   │
│   ├── middlewares
│   │   └── validateProfessional.js
│   │
│   └── data
│       └── professionals.json
│
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Instalação

Clone o repositório:

```
git clone https://github.com/jooao7/volunteer-health-api.git
```

Entre na pasta do projeto:

```
cd volunteer-health-api
```

Instale as dependências:

```
npm install
```

---

## 🔑 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```
PORT=3000
```

---

## ▶️ Executando o projeto

Para iniciar o servidor:

```
node server.js
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

## 📡 Endpoints da API

### 🔍 Listar profissionais

**GET**

```
/professionals
```

Retorna todos os profissionais cadastrados.

---

### ➕ Cadastrar profissional

**POST**

```
/professionals
```

Body da requisição (JSON):

```
{
  "name": "Maria Silva",
  "email": "maria@email.com",
  "phone": "21999999999",
  "message": "Gostaria de participar das ações sociais."
}
```

Resposta esperada:

```
{
  "message": "Profissional cadastrado com sucesso",
  "professional": {
    "id": 123456789,
    "name": "Maria Silva",
    "email": "maria@email.com",
    "phone": "21999999999",
    "message": "Gostaria de participar das ações sociais."
  }
}
```

---

## ✅ Validações implementadas

A API possui validação de dados para garantir a integridade das informações enviadas:

* Nome com **mínimo de 3 caracteres**
* Email em **formato válido**
* Telefone com **10 ou 11 dígitos**
* Mensagem com **máximo de 500 caracteres**

---

## 🧪 Testes da API

Os endpoints podem ser testados utilizando:

* Postman
* Insomnia
* Thunder Client (VS Code)

---

## 📚 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos fundamentais de **desenvolvimento back-end**, como:

* Criação de APIs REST
* Utilização de rotas com Express
* Uso de verbos HTTP (GET e POST)
* Implementação de middlewares
* Validação de dados
* Comunicação entre cliente e servidor

---

## 👨‍💻 Autor

João Gomes
---
