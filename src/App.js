import './index.scss';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import 'macro-css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useEffect, useState } from 'react';

const App = () => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        fetch('https://627678f215458100a6af8ae5.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);

    return (
        <div className='wrapper clear'>
            {cartOpened && (
                <Drawer
                    onCloseDrawer={() => {
                        setCartOpened(false);
                    }}
                />
            )}
            <Header
                onClickCart={() => {
                    setCartOpened(true);
                }}
            />
            <div className='content p-20'>
                <div className='d-flex align-center justify-between'>
                    <h1>Все кроссовки</h1>

                    <div className='search-block d-flex align-center'>
                        <SearchOutlinedIcon color='disabled' />
                        <input type='text' placeholder='Поиск...' />
                    </div>
                </div>

                <div className='containerCards d-flex flex-wrap justify-between'>
                    {items.map((obj) => {
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
