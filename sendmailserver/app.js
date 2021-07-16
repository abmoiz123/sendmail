const dotenv = require('dotenv');
const mongoose = require('mongoose')
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connection successful')
}).catch((err) => console.log('no connection'));

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.listen(3000, () => {
    console.log('server is runnnig at port no 3000')
})