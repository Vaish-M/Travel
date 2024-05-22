import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductList from './components/ProductList';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails'; 
import CustomItemContext from './context/ItemContext';
import "./App.css"
const App = () => {
    return (
        <BrowserRouter>
            <CustomItemContext>
                <Header />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product-details/:id" element={<ProductDetails />} />
                </Routes>
            </CustomItemContext>
        </BrowserRouter>
    );
};

export default App;
