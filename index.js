// import express, body parser
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {listBanksController, createBankController, updateBankController, deleteBankController, createAccountController, listAccountController} = require('./controllers');

//create express server instance
const server = express();

//middlewares
server.use(bodyParser.json());



//routes
//view banks - get method
server.get('/bank/:id?', listBanksController);
//create a bank - post method
server.post('/bank', createBankController);
// update a bank - put method
server.put('/bank', updateBankController);
//delete a bank - delete method
server.delete('/bank', deleteBankController);

server.post('/account', createAccountController);

server.get('/accounts', listAccountController);
//connect to database and start server
mongoose.connect("mongodb+srv://codetrainUser:ic3cr33m@cluster0.wyq6k.mongodb.net/codetrain?retryWrites=true&w=majority", 
{useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(result => {
        server.listen(3000, () => console.log('Server is ready'))
    }).catch(err => console.log(err));
