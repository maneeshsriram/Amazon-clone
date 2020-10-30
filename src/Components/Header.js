import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateProvider';
import { auth } from "../firebase";

function Header() {

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
            alert("Signed Out");
        }
    }

    const [{ basket, user }, dispatch] = useStateValue()
    console.log(basket)

    return (
        <div className="header">

            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
            </Link>


            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div className="header__option" onClick={handleAuthentication}>
                        <span className="header__optionLine1">Hello, {user?.email}</span>
                        <span className="header__optionLine2">{user ? 'SignOut' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLine1">Returns</span>
                    <span className="header__optionLine2">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLine1">Your</span>
                    <span className="header__optionLine2">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>


        </div>
    )
}

export default Header
