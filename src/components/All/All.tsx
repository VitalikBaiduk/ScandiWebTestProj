import React from "react";
import {graphql} from "@apollo/client/react/hoc";
import {gql} from "@apollo/client";

class All extends React.Component<any, any> {

    render() {
        console.log(this.props)
        // let product = this.props.data.category.products.map((el: any) => {
        //     return <p>product</p>
        // })
        return (
            <div>
                {/*{product}*/}
            </div>
        );
    }
}

export default graphql(gql`
query {
  category(input: { title: "all" }) {
    name,
    products{
      gallery
    }
  }
}

`)(All);