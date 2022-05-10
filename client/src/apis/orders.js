import axios from "axios"

export const fetchOrders = async() => {
  return (await axios({
    method: 'GET',
    url: 'http://localhost:3000/orders'
  })).data
}

export const createOrders = async(payload) => {
  const response = await axios({
    method: 'POST',
    url: 'http://localhost:3000/orders',
    data: payload
  })

  return response.data
}