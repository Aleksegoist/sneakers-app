import './index.scss';
import Logo from '../src/img/logo.png';
import One from '../src/img/sneakers/photo1.png';
import Two from '../src/img/sneakers/photo2.png';
import Three from '../src/img/sneakers/photo3.png';
import HeartUnliked from '../src/img/heart_unliked.svg';
import BtnRemove from '../src/img/btn_remove.svg';
import 'macro-css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { red } from '@mui/material/colors';

const App = () => {
    return (
        <div className='wrapper clear'>
            <div className='overlay'>
                <div className='drawer'>
                    <h2>Корзина</h2>

                    <div className='cartItem d-flex align-center'>
                        <img
                            className='mr-10'
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
                </div>
            </div>

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
            <div className='content p-20'>
                <div className='d-flex align-center justify-between'>
                    <h1>Все кроссовки</h1>

                    <div className='search-block d-flex align-center'>
                        <SearchOutlinedIcon color='disabled' />
                        <input type='text' placeholder='Поиск...' />
                    </div>
                </div>

                <div className='containerCards d-flex justify-between'>
                    <div className='card'>
                        <div className='favorite'>
                            <img
                                width={40}
                                src={HeartUnliked}
                                alt='heartUnliked'
                            />
                        </div>
                        <img width={250} src={One} alt='photo1' />
                        <p>Кроссовки Fresh Foam X 1080v12</p>
                        <div className='d-flex justify-between'>
                            <div className='infoCard'>
                                <span>Цена:</span>
                                <b>$159.99</b>
                            </div>
                            <button>
                                <AddIcon sx={{ color: red[700] }} />
                            </button>
                        </div>
                    </div>
                    <div className='card'>
                        <img width={250} src={Two} alt='photo1' />
                        <p>Кроссовки Fresh Roav Foam</p>
                        <div className='d-flex justify-between'>
                            <div className='infoCard'>
                                <span>Цена:</span>
                                <b>$84.99</b>
                            </div>
                            <button>
                                <AddIcon sx={{ color: red[700] }} />
                            </button>
                        </div>
                    </div>
                    <div className='card'>
                        <img width={250} src={Three} alt='photo1' />
                        <p>Кроссовки Fresh Foam X 880v12</p>
                        <div className='d-flex justify-between'>
                            <div className='infoCard'>
                                <span>Цена:</span>
                                <b>$134.99</b>
                            </div>
                            <button>
                                <AddIcon sx={{ color: red[700] }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
