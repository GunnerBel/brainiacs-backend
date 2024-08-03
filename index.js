const express = require('express')

const app = express()

app.get('/',(req, res) => {

    res.send({message: 'Hello Bela'})
})

app.get('/welcome',(req, res) => {

    res.send({message: 'Welcome Bela'})
})

app.get('/welcome/:name',(req, res) => {

    const name = req.params.name
    res.send({message: `Welcome ${name}`})
})


app.listen(3003, () => {
    console.log('server is running on http://localhost:3003');
})

