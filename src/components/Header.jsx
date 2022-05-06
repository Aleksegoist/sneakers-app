import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Logo from '../../src/img/logo.png';

export const Header = () => {
    return (
        <header className='d-flex justify-between align-center p-20'>
            <div className='d-flex align-center'>
                <img width={70} height={70} src={Logo} alt='logo' />
                <div className='headerInfo align-center'>
                    <h3 className='text-uppercase'>AY dev. SNEAKERS</h3>
                    <p>NEW BALANCE</p>
                </div>
            </div>
            <ul className='d-flex'>
                <li className='mr-30'>
                    <ShoppingCartOutlinedIcon />
                    <span>$300</span>
                </li>
                <li>
                    <PersonOutlineOutlinedIcon />
                </li>
            </ul>
        </header>
    );
};

export default Header;
