import './index.scss';
import Logo from '../src/img/logo.png';
import 'macro-css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const App = () => {
    return (
        <div className='wrapper'>
            <header className='d-flex justify-between'>
                <div className='d-flex align-center'>
                    <img width={70} height={70} src={Logo} alt='logo' />
                    <div className='headerInfo'>
                        <h3>AY dev. SNEAKERS</h3>
                        <p>NEW BALANCE</p>
                    </div>
                </div>
                <ul className='headerRight'>
                    <li>
                        <ShoppingCartOutlinedIcon />
                        <span>$300</span>
                    </li>
                    <li>
                        <PersonOutlineOutlinedIcon />
                    </li>
                </ul>
            </header>
            <div className='content'>
                <h1>Все кроссовки</h1>
                ....
            </div>
        </div>
    );
};

export default App;
