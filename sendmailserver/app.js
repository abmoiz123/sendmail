const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');

const PORT = process.env.PORT;


app.get('/', (req, res) => {
    res.send('hello world!')
})

app.listen(PORT, () => {
    console.log(`server is runnnig at port no ${PORT}`)
})