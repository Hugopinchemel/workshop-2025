const express = require('express');
const path = require("path");
const fs = require('fs');
const app = express();

const port = 5050;

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, 'public/pages/index.html'));
});

app.get('/reset-css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'public/css/reset-css.css'));
});

app.get('/index-css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'public/css/index-css.css'));
});

//                         _
//      /\                | |
//     /  \   ___ ___  ___| |_ ___
//    / /\ \ / __/ __|/ _ \ __/ __|
//   / ____ \\__ \__ \  __/ |_\__ \
//  /_/    \_\___/___/\___|\__|___/

app.get('/landing-img', (req, res) => {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.sendFile(path.join(__dirname, 'public/assets/landing-img.svg'));
});




app.get('/sources-css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(path.join(__dirname, 'public/css/sources-css.css'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}/`);
});
