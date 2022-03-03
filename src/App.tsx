import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import All from "./components/All/All";
import {Clothes} from "./components/Clothes/Clothes";
import {Tech} from "./components/Tech/Tech";
import {withRouter} from "./HOC/WithRouter";

export const PATH = {
    ALL: '/all',
    CLOTHES: '/clothes',
    TECH: "/tech"
}


class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            url: "ALL"
        };
    }

    // componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    //     debugger
    //     this.setState(window.location.pathname.slice(1).toUpperCase())
    // }

    render() {
        let url = this.props.location.pathname.slice(1).toUpperCase()
        return (

            <div className="App">
                <Header/>
                <h3 className={"categoriesName"}>{this.props.location.pathname.slice(1).toUpperCase()}</h3>
                <Routes>
                    <Route path={PATH.ALL} element={<All/>}/>
                    <Route path={PATH.CLOTHES} element={<Clothes/>}/>
                    <Route path={PATH.TECH} element={<Tech/>}/>
                </Routes>
            </div>
        )
    }

}

export default withRouter(App);
