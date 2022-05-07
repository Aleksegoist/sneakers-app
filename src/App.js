import './index.scss';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import 'macro-css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import One from '../src/img/sneakers/photo1.png';
import Two from '../src/img/sneakers/photo2.png';
import Three from '../src/img/sneakers/photo3.png';
// import { useState } from 'react';

const arr = [
    {
        title: 'Кроссовки Fresh Foamkk X 1080v12',
        price: 159.99,
        imageUrl: One,
    },
    {
        title: 'Кроссовки Fresh Foam Roav',
        price: 84.99,
        imageUrl: Two,
    },
    {
        title: 'Кроссовки Fresh Foam X 880v12',
        price: 134.99,
        imageUrl: Three,
    },
];

const App = () => {
    return (
        <div className='wrapper clear'>
            <Drawer />
            <Header />
            <div className='content p-20'>
                <div className='d-flex align-center justify-between'>
                    <h1>Все кроссовки</h1>

                    <div className='search-block d-flex align-center'>
                        <SearchOutlinedIcon color='disabled' />
                        <input type='text' placeholder='Поиск...' />
                    </div>
                </div>

                <div className='containerCards d-flex justify-between'>
                    {arr.map((obj) => {
                        return (
                            <Card
                                title={obj.title}
                                price={obj.price}
                                imageUrl={obj.imageUrl}
                                onFavorite={() =>
                                    console.log('Add to favorite')
                                }
                                onPlus={() => console.log('Click plus')}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;
