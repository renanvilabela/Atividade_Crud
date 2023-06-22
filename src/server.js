require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser');

const router = require('./routes.js');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));

server.use('/api', routes);

server.listen(process.env.PORT, ()=>{
    console.log(`servidor rodando em: http://localhost:${process.env.PORT}`);
})