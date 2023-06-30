import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Checkout from '../component/Checkout/Checkout';
import ItemDetail from '../pages/ItemDetail/ItemDetail';
import Menu from '../pages/Menu/Menu';
import Rewards from '../pages/Rewards/Rewards';
import Gif from '../pages/Gif/GifaCoffee';
import Coffee from '../pages/Coffee/Coffee';
import Nosotros from '../pages/AboutUs/Nosotros';
import CartContent from '../pages/CartContent/CartContent';
import UserAndPassword from '../pages/Login/UserAndPassword';
import IconLocation from '../component/iconlocation/IconLocation';
import CollapNavbar from '../component/navbar/CollapNavbar';
import Footer from '../component/Footer/Footer';
import Dataprovider from '../component/Context/DataContext';
import Contacto from '../pages/Contacto/Contacto';



const Rutas = () => {

    const navbar_items = [
        {
            path:"/",
            name:"Home",
        },
        {
            path:"/checkout",
            name:"Checkout",
        }
    ]

    return (
        <Fragment>
        <Dataprovider>
        <BrowserRouter>
        <CollapNavbar navbar_items={navbar_items}
            className={"collapseOnSelect expand=lg bg=success variant=dark"}
            navbarLogo={"logotipo"}
        />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Menu' element={<><Menu/></>}/>
            <Route path='/Checkout' element={<Checkout/>}/>
            <Route path='/Item/:id' element={<ItemDetail/>}/>
            <Route path='/Rewards' element={<Rewards/>}/>
            <Route path='/Gif' element={<Gif/>}/>
            <Route path='/Coffee' element={<Coffee/>}/>
            <Route path='/Nosotros' element={<Nosotros/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>
            <Route path='/IconLocation' element={<IconLocation/>}/>
            <Route path='/CartContent' element={<CartContent/>}/>
            <Route path='/UserAndPassword' element={<UserAndPassword/>}/>
        </Routes>
        <Footer />
        </BrowserRouter>
        </Dataprovider>
        </Fragment>
    );
}

export default Rutas;