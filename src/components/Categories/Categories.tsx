import React from "react";
import {gql} from "@apollo/client";
import {graphql} from "@apollo/client/react/hoc";
import s from "../Categories/Categories.module.css"
import {Link} from "react-router-dom";
import {PATH} from "../../App";

class Categories extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            arrOfCategories: []
        };
    }


    componentDidUpdate(prevProps: Readonly<any>) {
        if (!this.props.data.loading && this.state.arrOfCategories.length === 0) {
            this.setState({arrOfCategories: this.props.data.categories})
        }
    }

    render() {
        let categories = this.state.arrOfCategories.map((el: any, i: number) => {
            if (el.name === "all") {
                return <Link key={i} to={PATH.ALL} className={s.elemNavigation}>{el.name.toUpperCase()}</Link>
            } else if (el.name === "clothes") {
                return <Link key={i} to={PATH.CLOTHES} className={s.elemNavigation}>{el.name.toUpperCase()}</Link>
            } else {
                return <Link key={i} to={PATH.TECH} className={s.elemNavigation}>{el.name.toUpperCase()}</Link>
            }
        })
        return (
            <div className={s.navigation}>
                {categories}
            </div>
        );
    }

}

export default graphql(gql`
query {
  categories {
    name
  }
}
`)(Categories);
