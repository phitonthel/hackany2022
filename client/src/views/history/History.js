import { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux'

import CardTemplate from './CardTemplate'
import { createOrders, fetchOrders } from '../../apis/orders'

function History() {
  const [orders, setOrders] = useState([])

  useEffect(async () => {
    setOrders(await fetchOrders())
  }, [])

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        {
          orders.map((order, index) =>
            <CardTemplate
              title={order.name}
              description={order.description}
              price={order.price}
              quantity={order.quantity}
              staffId={order.staffId}
              status={order.status}
              key={index}
            />
          )
        }
      </div>
    </div>
  );
};

export default History