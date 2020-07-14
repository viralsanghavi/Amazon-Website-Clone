import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
function Header() {
    const [{ basket, user }, dispatch] = useStateValue()
    const login = () => {
        if (user) {
            auth.signOut()
        }
    }

    return (
        <nav className="header">
            <Link to="/">
                <img src={'http://pngimg.com/uploads/amazon/amazon_PNG11.png'} className='header__logo' />
            </Link>

            <div className="header__search">

                <input className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />

                <div className="header__nav">
                    <Link to={!user && "/login"} className="header__link">
                        <div onClick={login} className="header__option">

                            <span className="header__optionLineOne" >Hello {user?.email}</span>
                            <span className="header__optionLineTwo"> {user ? "Sign Out" : "Sign In"}</span>
                        </div>
                    </Link>

                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">Orders</span>
                        </div>
                    </Link>
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Your</span>
                            <span className="header__optionLineTwo">Prine</span>
                        </div>
                    </Link>

                </div>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">

                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                        {console.log(basket)}
                    </div>
                </Link>
            </div>
        </nav>
    )
}

// logo on left => imgexpo
// searchboxrt
export default Header
