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
    // const {
    //   customerId = new Date().getTime(),
    //   name,
    //   "description": "Kinda Tasty",
    //   "price": 12000,
    //   "quantity": 1,
    //   "staffId": "",
    //   "status": "ORDERED"
    // }
    return res.status(200).json(orders)
  }

  static update(req, res, next) {
    // takes customerId and status as parameter
    const { status } = req.query

    const orders = require('./orders.json')

    if (status) {
      const filteredOrders = orders.filter()
    }

    console.log({ orders })

    return res.status(200).json(orders)
  }
}

module.exports = Controller
