import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import StarIcon from '@material-ui/icons/Star';
function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        // additem to basket
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                price,
                image,
                rating,
            }
        }
        )
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_) => (
                        <p><StarIcon /></p>
                    ))}
                </div>
            </div>

            <img src={image} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
