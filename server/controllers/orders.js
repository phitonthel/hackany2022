const fs = require('fs')

class Controller {
  static get(req, res, next) {
    const { status } = req.query

    const orders = require('./orders.json')

    if (status) {
      const filteredOrders = orders.filter(order => order.status === status)
      return res.status(200).json(filteredOrders)
    }

    return res.status(200).json(orders)
  }

  static create(req, res, next) {
    const ordersPayload = (req.body) // array of JSON

    const orders = require('./orders.json')
    const latestId = orders.length > 0 ? orders[orders.length - 1].id : 0

    ordersPayload.forEach((order, index) => {
      order.id = latestId + 1 + index
      order.customerId = new Date().getTime()
      order.status = 'ORDERED'
      orders.push(order)
    });

    console.log(orders,'==========================')
    fs.writeFileSync('./controllers/orders.json', JSON.stringify(orders, null, 2), 'utf-8')

    return res.status(200).json(orders)
  }

  static update(req, res, next) {
    // takes customerId and status as parameter
    const { customerId, status } = req.body

    const orders = require('./orders.json')

    orders.forEach(order => {
      if (order.customerId === +customerId) {
        order.status = status
      }
    });

    fs.writeFileSync('./controllers/orders.json', JSON.stringify(orders, null, 2), 'utf-8')

    return res.status(200).json(orders)
  }
}

module.exports = Controller
