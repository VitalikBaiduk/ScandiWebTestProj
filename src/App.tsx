import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import All from "./components/All/All";
import {Clothes} from "./components/Clothes/Clothes";
import {Tech} from "./components/Tech/Tech";

export const PATH = {
    ALL: '/all',
    CLOTHES: '/clothes',
    TECH: "/tech"
}


class App extends React.Component<any, any> {

    render() {
        return (
            <div className="App">
                <Header/>
                <h3 className={"categoriesName"}></h3>
                <Routes>
                    <Route path={PATH.ALL} element={<All/>}/>
                    <Route path={PATH.CLOTHES} element={<Clothes/>}/>
                    <Route path={PATH.TECH} element={<Tech/>}/>
                </Routes>
            </div>
        )
    }

}

export default App;
