import React from "react";
import {graphql} from "@apollo/client/react/hoc";
import {gql} from "@apollo/client";

class All extends React.Component<any, any> {

    render() {
        console.log(this.props)
        return (
            <div>

            </div>
        );
    }
}

export default graphql(gql`
query {
  category(input: { title: "clothes" }) {
    name,
    products{
      gallery
    }
  }
}

`)(All);