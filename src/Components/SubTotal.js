import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './SubTotal.css'
import { useStateValue } from '../stateProvider';
import { getBasketTotal } from '../reducer'
import { useHistory } from 'react-router-dom';

function SubTotal() {

    const [{ basket }, dispatch] = useStateValue()
    const history = useHistory();

    return (
        <div className="subTotal">
            <CurrencyFormat

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}

                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({basket.length} items) : <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </div>
                )}
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}


export default SubTotal
