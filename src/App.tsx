import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Route, Routes, useParams } from 'react-router-dom';
import All from './components/All/All';
import { Clothes } from './components/Clothes/Clothes';
import { Tech } from './components/Tech/Tech';
export const PATH = {
    ALL: '/all',
    CLOTHES: '/clothes',
    TECH: '/tech',
};

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path={PATH.ALL + '/:category'} element={<All />} />
                <Route path={PATH.CLOTHES} element={<Clothes />} />
                <Route path={PATH.TECH} element={<Tech />} />
            </Routes>
        </div>
    );
}

export default App;
