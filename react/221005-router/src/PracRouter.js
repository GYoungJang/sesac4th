import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Prac from './Prac'
import Prac2 from './Prac2'
import './Prac.css';

const PracRouter = () => {
    return (
        <header>
            <BrowserRouter> 
                <Routes>
                    <Route path="/" element={<Prac />}></Route>
                    <Route path="/student/:name" element={<Prac2 />}></Route>
                </Routes>
            </BrowserRouter>
        </header>
    )
}

export default PracRouter;
                    
                