import { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

import CardTemplate from './CardTemplate'
import { createOrders, fetchOrders } from '../../apis/orders'

import staffProfile from './pics/staffProfile.png';
import staffFeedback from './pics/staffFeedback.png'
import staffProfileFeedback from './pics/staffProfileFeedback.png'
import clock from './pics/clock.png'
import orderNotification from './pics/orderNotification.png'

function MenuList() {
  const [nasiGorengQty, setNasiGorengQty] = useState(0)
  const [burgerQty, setBurgerQty] = useState(0)

  const handleCreateOrders = async () => {
    await createOrders([
      {
        "customerId": "phitonthel",
        "name": "Nasi Goreng",
        "description": "Very Tasty",
        "price": 12000,
        "quantity": nasiGorengQty,
      },
      {
        "customerId": "phitonthel",
        "name": "Burger",
        "description": "Kinda Tasty",
        "price": 25000,
        "quantity": burgerQty,
      }
    ])

    showOrdered()
    // setTimeout(() => Swal.close(), 6000);
    // setTimeout(() => showAccepted(), 12000);
  }

  const showOrdered = () => {
    Swal.fire({
      showCancelButton: false,
      showConfirmButton: false,
      width: '500px',
      html: `
      <div>
        <img width="400px" height="820px" src="${orderNotification}"/>
      </div>
      `
    })
  }

  const showAccepted = () => {
    Swal.fire({
      showCancelButton: false,
      showConfirmButton: false,
      width: '500px',
      html: `
      <div>
        <img width="400px" height="820px" src="${staffProfileFeedback}"/>
      </div>
      `
    })
  }

  const onHeartHandler = () => {
    showAccepted()
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <CardTemplate
          title={'Nasi Goreng'}
          description={'Very Tasty'}
          price={12000}
          quantity={nasiGorengQty}
          onMinusHandler={() => {
            setNasiGorengQty(nasiGorengQty - 1)
          }}
          onPlusHandler={() => {
            setNasiGorengQty(nasiGorengQty + 1)
          }}
          onHeartHandler={() => {
            onHeartHandler()
          }}
        />
        <CardTemplate
          title={'Burger'}
          description={'Kinda Tasty'}
          price={25000}
          quantity={burgerQty}
          onMinusHandler={() => {
            setBurgerQty(burgerQty - 1)
          }}
          onPlusHandler={() => {
            setBurgerQty(burgerQty + 1)
          }}
          onHeartHandler={() => {
            onHeartHandler()
          }}
        />

      </div>

      <div className='container'>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={() => handleCreateOrders()}
        >
          Order
        </button>
        {/* <input
          type="submit"
          style={{ display: 'none'}}
          onClick={() => showAccepted()}
        /> */}
      </div>
    </div>
  );
};

export default MenuList