const express = require('express');
const app = express();
app.use(express.static('public'));

let port = 3000 || process.env.PORT;

app.listen(port, ()=>{
    console.log('Servidor funcionando');
})
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});