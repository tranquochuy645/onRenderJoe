require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').createServer(app);
app.use( express.static('JoeAdventureWebGL'));
const port = process.env.PORT || 3000;
server.listen(port);