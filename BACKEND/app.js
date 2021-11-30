const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

if(process.env.NODE_ENV === 'production') {
    console.log('Mode production !');
} else {
    console.log('Mode test !');
}

app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
});

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../FRONTEND/public/')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// TO DO

app.use((req, res) => {
    console.log("Réponse envoyé avec succès !");
});

app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, '../FRONTEND/index.html'));
});

module.exports = app;