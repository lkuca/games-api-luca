const express = require('express')
const app = express()
const port = 8080
const swaggerUi = require('swagger-ui-express')
const yamljs = require('yamljs')
const swaggerDocument = yamljs.load('./docs/swagger.yaml');

app.use(express.json())

const games =[
    {id:1, name: "Witcher3", price: 29.99},
    {id:2, name: "Cyberpunk2077", price: 29.99},
    {id:3, name: "Counter-Strike", price: 29.99},
    {id:4, name: "Payday 2", price: 29.99},
    {id:5, name: "Gta", price: 29.99},
]

app.get('/games', (req, res) => {res.send(games)})

app.get('/games/:id', (req, res) =>{
    if(typeof games[req.params.id -1] === 'undefined'){
        return res.status(404).send({error: "Game not found"})
    }
    res.send(games[req.params.id - 1])
})

app.post('/games', (req, res) => {games.push({
    id: games.length +1,
    price: req.body.price,
    name: req.body.name
})
    res.end()
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`)
})



//asdasdasdadadadsad