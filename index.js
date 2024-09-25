const app = require('express')()
const port = 8080

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');

const games =[
    {id:1, name: "Witcher3", price: 29.99},
    {id:2, name: "Cyberpunk2077", price: 29.99},
    {id:3, name: "Witcher3", price: 29.99},
    {id:4, name: "Witcher3", price: 29.99},
    {id:5, name: "Witcher3", price: 29.99},
]

app.get('/games', (req, res) => {res.send(games)})

app.get('/games/:id', (req, res) =>{res.send(games[req.params.id])})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`)
})
//asdasdasdadadadsad