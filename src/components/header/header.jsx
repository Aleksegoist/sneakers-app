import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../img/logo.png';

export const Header = () => {
    return (
        <div className='header'>
            <div className='wrapper'>
                <div className='logoImg'>
                    <img src={Logo} alt='logo' className='logo-header' />
                </div>
                <Link to='/' className='header__store-title'>
                    AY SNEAKERS SHOP
                </Link>
            </div>
            <div className='cart__header'>cart</div>
        </div>
    );
};
