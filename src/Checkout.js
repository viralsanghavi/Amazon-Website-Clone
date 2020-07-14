import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


function Checkout() {
    const [{ basket }] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">

                <img src="sd " className="checkout__ad" alt="" />
                {basket?.length === 0 ? (
                    <div>
                        <h2> Your basket is Empty...</h2>
                        <p></p>
                    </div>

                ) : (
                        <div>
                            <h2 className="checkout__title">Your shopping Basket</h2>
                            {basket.map(
                                item =>
                                    (<CheckoutProduct id={item.id}
                                        title={item.title}
                                        price={item.price} rating={item.rating} image={item.image}
                                    />)
                            )}

                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
