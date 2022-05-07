import React, { useState } from 'react';
import HeartUnliked from '../../img/heart_unliked.svg';
// import AddIcon from '@mui/icons-material/Add';
// import { red } from '@mui/material/colors';
import cardStyles from './Card.module.scss';
import Plus from '../../img/btnPlus.svg';
import Check from '../../img/check.svg';

const Card = (props) => {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        setIsAdded(true);
    };
    console.log(isAdded);
    return (
        <div className={cardStyles.card}>
            <div className='favorite' onClick={props.onFavorite}>
                <img width={40} src={HeartUnliked} alt='heartUnliked' />
            </div>
            <img width={250} src={props.imageUrl} alt='sneakers' />
            <p>{props.title}</p>
            <div className='d-flex justify-between'>
                <div className='infoCard'>
                    <span>Цена:</span>
                    <b>${props.price}</b>
                </div>

                <img
                    className={cardStyles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? Check : Plus}
                    alt='Plus'
                />
            </div>
        </div>
    );
};

export default Card;
