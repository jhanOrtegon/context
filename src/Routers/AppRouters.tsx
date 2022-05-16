import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Inicio from '../pages/Inicio';

const AppRouters = () => {
    return (
        <>

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/' element={<Inicio />} />
                    <Route path='*' element={<Inicio />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouters
