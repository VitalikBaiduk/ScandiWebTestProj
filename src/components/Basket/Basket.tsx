import React from "react";
import s from "../Basket/Basket.module.css"
import basket from "../../images/Empty Cart.svg";

export class Basket extends React.Component<any, any> {


    render() {
        return (
            <div>
                <img className={s.basket} src={basket}/>
            </div>
        );
    }
}