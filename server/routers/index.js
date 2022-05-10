const express = require('express')
const router = express.Router()

const orders = require('../controllers/orders')

router.get('/', (req, res) => {
  res.send('<h1>Hackany 2022!</h1>')
})

// order
router.get('/orders', orders.get)
router.post('/orders', orders.create)

module.exports = router