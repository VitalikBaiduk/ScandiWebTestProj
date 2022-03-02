import React from "react";
import s from "../Сurrency/Currency.module.css"

export class Currency extends React.Component<any, any> {

    render() {
        return (
            <div className={s.currency}>
                <p className={s.ElemCurrency}>$</p>
                <i className={s.arrowDown}></i>
            </div>
        );
    }
}