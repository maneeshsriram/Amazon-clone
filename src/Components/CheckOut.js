import { ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import { useStateValue } from '../stateProvider'
import './CheckOut.css'
import CheckOutProduct from './CheckOutProduct'
import SubTotal from './SubTotal'

function CheckOut() {

    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">


            <div className="checkout__left">

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckOutProduct id={item.id} image={item.image} rating={item.rating} title={item.title} price={item.price} />
                    ))}

                </div>
            </div>

            <div className="checkout__right">
                <SubTotal />
            </div>


        </div>
    )
}

export default CheckOut
