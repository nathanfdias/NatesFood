import { Route, Routes } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { Perfil } from '../pages/Perfil';
import { Register } from '../pages/Login/Register';

export function Router() {
    return(
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/perfil' element={<Perfil />}></Route>
            <Route path='/register' element={<Register />}></Route>
        </Routes>
    )
}