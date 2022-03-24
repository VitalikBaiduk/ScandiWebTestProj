import React, { useEffect } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { gql, useQuery } from '@apollo/client';
import { Product } from '../Product/Product';
import s from '../Product/Product.module.css';
import { useParams } from 'react-router-dom';
import { QueryOfAllProducts } from '../../query/query';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../Redux/Reducers/ReducerForAllProd';
import { ProductContext } from '../../context';
import { useContext } from 'react';

function All(props: any) {
    let dispatch = useDispatch();
    let { category } = useParams();
    console.log(category);
    let query = useQuery(QueryOfAllProducts);
    if (!query.loading) {
        dispatch(setProducts(query.data.category.products));
    }
    let payloadData = useContext(ProductContext);
    let products = payloadData.map((el: any) => {
        return (
            <Product
                img={el.gallery[0]}
                name={el.name}
                price={el.prices[0].amount}
                priceSymbol={el.prices[0].currency.symbol}
            />
        );
    });

    return (
        <div>
            <h3 className={'categoriesName'}>{category?.toUpperCase()}</h3>
            <div className={s.mainProductDiv}>{products}</div>
        </div>
    );
}

export default All;
