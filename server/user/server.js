const cors = require('cors');
const express = require('express');
const route = require('./route/router')
const cookieparser = require('cookie-parser')

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieparser());
app.use("/api",route)

app.listen(4000,()=>{
    console.log('http://localhost:4000');
})