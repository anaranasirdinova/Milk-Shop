import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MilkShop from './components/MilkShop/MilkShop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductInfo from './components/ProductInfo/ProductInfo';

const Router  = () => {
    return (
        <BrowserRouter>
            <Header/>
                <Switch>
                    <Route exact path="/" component={() => <MilkShop page ="home"/>}/>
                    <Route exact path="/catalog" component={() => <MilkShop page ="catalog"/>}/>
                    {/* <Route exact path ="/products" component = {() => <MilkShop page ="products"/>}/> */}
                    <Route exact path="/about" component={() => <MilkShop page ="about"/>}/>
                    <Route exact path="/contacts" component={() => <MilkShop page ="contacts"/>}/>
                    <Route exact path="/basket" component={() => <MilkShop page ="basket"/>}/>
                    <Route exact path="/products/:id" component={ProductInfo}/>
                </Switch>
                <Footer/>
        </BrowserRouter>
    )
}

export default Router;