import axios from "axios"

const baseUrl = 'http://localhost:8090'

export const fetchOrders = async() => {
  return (await axios({
    method: 'GET',
    url: `${baseUrl}/orders`
  })).data
}

export const createOrders = async(payload) => {
  const response = await axios({
    method: 'POST',
    url: `${baseUrl}/orders`,
    data: payload
  })

  return response.data
}