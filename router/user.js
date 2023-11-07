const express = require('express')
const router = express.Router()



const users = [
    {id: 1, nama: "Revalsa", email: "revalsapertama@gmail.com"},
    {id: 2, nama: "VallReey", email: "vallreey@gmail.com"},
]

router.get('/users', (req, res) => {
    res.json(users)
})

router.post('/user', (req, res) => {
    res.send('Got a POST request')
})

router.put('/user/:id', (req, res) => {
    res.send('Got a PUT request at /user')
})

router.delete('/user/:id', (req, res) => {
    res.send('Got a DELETE request at /user')
})

module.exports = router