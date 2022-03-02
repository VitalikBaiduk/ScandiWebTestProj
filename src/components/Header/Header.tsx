import React from "react";
import s from "../Header/Header.module.css"
import Categories from "../Categories/Categories";
import logo from "../../images/logo.svg";
import {Currency} from "../Сurrency/Сurrency";
import {Basket} from "../Basket/Basket";


// width: 100%;
// max-width: 280px;
export class Header extends React.Component<any, any> {
    render() {
        return (
            <div className={s.header}>
                <Categories/>
                <div className={s.logo}>
                    <img src={logo}/>
                </div>
                <div className={s.CurrAndBask}>
                    <div className={s.CurrAndBaskInner}>
                        <Currency/>
                        <Basket/>
                    </div>
                </div>

            </div>
        );
    }
}