import React from 'react';
import s from '../Header/Header.module.css';
import Categories from '../Categories/Categories';
import logo from '../../images/logo.svg';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Currency } from '../Сurrency/Сurrency';
import { Basket } from '../Basket/Basket';
import { useParams } from 'react-router-dom';

export function Header() {
    let params = useParams();
    console.log(params);
    return (
        <div className={s.header}>
            <Categories />
            <div className={s.logo}>
                <Logo />
            </div>
            <div className={s.CurrAndBask}>
                <div className={s.CurrAndBaskInner}>
                    <Currency />
                    <Basket />
                </div>
            </div>
        </div>
    );
}
