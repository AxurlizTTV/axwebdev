const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

const clientPath = `${__dirname}/public`;
app.use(express.static(clientPath));

const server = http.createServer(app).listen(80, () => {
    console.log("Listening on port 80...");
});