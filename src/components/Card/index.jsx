import React, { useState } from 'react';
import HeartUnliked from '../../img/heart_unliked.svg';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { green } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import cardStyles from './Card.module.scss';

const Card = (props) => {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
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

                <div onClick={onClickPlus}>
                    {isAdded ? (
                        <CheckIcon sx={{ color: green[800] }} />
                    ) : (
                        <AddIcon sx={{ color: red[800], cursor: 'pointer' }} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
