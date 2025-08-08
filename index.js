
require('dotenv').config();

const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Mi backEnd con ExpressJS");
});

const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`Servidor: http://localhost:${PORT}`);
})
