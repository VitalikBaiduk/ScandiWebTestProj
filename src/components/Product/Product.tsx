import React from "react";
import s from "../Product/Product.module.css"

type ProductPropsType = {
    img: string
    name: string
    price: number
}

export class Product extends React.Component<ProductPropsType, any> {

    render() {
        return (
            // <div className={s.mainProductDiv}>
                <div className={s.product}>
                    <img className={s.imagesOfProduct} src={this.props.img}/>
                    <p> {this.props.name}</p>
                    <p>{this.props.price}</p>
                </div>
            // </div>
        );
    }
}