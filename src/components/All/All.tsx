import React from "react";
import {graphql} from "@apollo/client/react/hoc";
import {gql} from "@apollo/client";
import {Product} from "../Product/Product";
import s from "../Product/Product.module.css";

class All extends React.Component<any, any> {

    render() {
        let products
        if (!this.props.data.loading) {
            products = this.props.data.category.products.map((el: any) => {
                return <Product img={el.gallery[0]} name={el.name} price={el.prices[0].amount}/>

            })
        }


        console.log(this.props.data)
        console.log(this.props.loading)
        return (
            <div className={s.mainProductDiv}>
                {products}
            </div>
        );
    }
}

export default graphql(gql`
query {
  category(input: { title: "all" }) {
    name,
    products{
    id,
      name,
      gallery,
      inStock,
      prices{
        currency{
          label,symbol
        },
        amount
      }
      description
    }
  }
}
`)(All);