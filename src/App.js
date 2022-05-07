import './index.css'
import {
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import { HomePage } from './pages/home-page';
import { Header } from './components/header';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </div>
        </BrowserRouter >
    );
};

export default App;
