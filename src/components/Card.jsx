import React from 'react';
import HeartUnliked from '../../src/img/heart_unliked.svg';
import AddIcon from '@mui/icons-material/Add';
// import One from '../../src/img/sneakers/photo1.png';
import { red } from '@mui/material/colors';

const Card = (props) => {
    return (
        <div className='card'>
            <div className='favorite'>
                <img width={40} src={HeartUnliked} alt='heartUnliked' />
            </div>
            <img width={250} src={props.imageUrl} alt='sneakers' />
            <p>{props.title}</p>
            <div className='d-flex justify-between'>
                <div className='infoCard'>
                    <span>Цена:</span>
                    <b>${props.price}</b>
                </div>
                <button
                    onClick={() => {
                        alert(props.title);
                    }}
                >
                    <AddIcon sx={{ color: red[700] }} />
                </button>
            </div>
        </div>
    );
};

export default Card;
