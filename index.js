const app = require('express')();
const express = require('express');
const path = require('path'); 

const PORT = 3001;

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(PORT, () => {
    console.log(PORT, 'RUN...');
});