const express = require('express');
const server = express();
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-khv4j.mongodb.net/omnistack8?retryWrites=true&w=majority', {useNewUrlParser: true});


server.use(express.json());
server.use(routes);
server.listen(3333);