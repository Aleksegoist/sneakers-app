import React from 'react';
import HeartUnliked from '../../img/heart_unliked.svg';
import AddIcon from '@mui/icons-material/Add';
import { red } from '@mui/material/colors';
import cardStyles from './Card.module.scss';

const Card = (props) => {
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
                <button onClick={props.onPlus}>
                    <AddIcon sx={{ color: red[700] }} />
                </button>
            </div>
        </div>
    );
};

export default Card;
