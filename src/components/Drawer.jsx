import React from 'react';
import One from '../../src/img/sneakers/photo1.png';
import Two from '../../src/img/sneakers/photo2.png';
import BtnRemove from '../../src/img/btn_remove.svg';

const Drawer = () => {
    return (
        <div style={{ display: 'none' }} className='overlay'>
            <div className='drawer'>
                <h2 className='d-flex mb-30 justify-between'>
                    Корзина{' '}
                    <img
                        className='cu-p'
                        width={20}
                        src={BtnRemove}
                        alt='remove'
                    />
                </h2>
                <div className='items'>
                    <div className='cartItem d-flex align-center mb-20'>
                        <img
                            className='mr-15'
                            width={120}
                            src={One}
                            alt='onePhoto'
                        />
                        <div className='mr-20'>
                            <p className='mb-5'>
                                Кроссовки Fresh Foam X 1080v12
                            </p>
                            <b>$159.99</b>
                        </div>
                        <img
                            className='removeBtn'
                            width={20}
                            src={BtnRemove}
                            alt='remove'
                        />
                    </div>
                    <div className='cartItem d-flex align-center mb-20'>
                        <img
                            className='mr-15'
                            width={120}
                            src={Two}
                            alt='twoPhoto'
                        />
                        <div className='mr-20'>
                            <p className='mb-5'>Кроссовки Fresh Roav Foam</p>
                            <b>$84.99</b>
                        </div>
                        <img
                            className='removeBtn'
                            width={20}
                            src={BtnRemove}
                            alt='remove'
                        />
                    </div>
                </div>

                <div className='cartTotalBlock'>
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>$350</b>
                        </li>
                        <li>
                            <span>Налог НДС(20%):</span>
                            <div></div>
                            <b>$7</b>
                        </li>
                    </ul>
                    <button class='glow-on-hover'>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
