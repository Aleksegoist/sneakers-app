import './index.scss';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import 'macro-css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

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
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default App;
