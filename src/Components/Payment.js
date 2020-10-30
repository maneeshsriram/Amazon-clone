import React from 'react'
import './Payment.css'
import { useStateValue } from '../stateProvider'
import CheckOutProduct from './CheckOutProduct'

const Payment = () => {

    const [{ basket, user }, dispatch] = useStateValue()

    return (
        <div className="payment">
            <h2>Checkout ({basket.length} items)</h2>

            <div className="payment__container">

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Baker Street</p>
                        <p>London</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => {
                            return (<CheckOutProduct id={item.id} image={item.image} rating={item.rating} title={item.title} price={item.price} />)
                        })}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Payment
