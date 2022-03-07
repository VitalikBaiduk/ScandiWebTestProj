import React from "react";
import s from "../Product/Product.module.css"

type ProductPropsType = {
    img: string
    name: string
    price: number
    priceSymbol: string
}

export class Product extends React.Component<ProductPropsType, any> {

    render() {
        return (
            <div className={s.product}>
                <img className={s.imagesOfProduct} src={this.props.img}/>
                <p className={s.productName}> {this.props.name}</p>
                <p className={s.productPrice}>{this.props.priceSymbol} {Math.round(this.props.price)}</p>
            </div>
        );
    }
}