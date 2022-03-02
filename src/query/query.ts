import {gql, useQuery} from "@apollo/client";
import {graphql} from '@apollo/client/react/hoc';
// import {Categories} from "../components/Categories";

export const Query = gql`
query {
  category {
    name
    products {
      name
      id
      gallery
    }
  }
}
`

export const QueryOfCategories = gql`
query {
  categories {
    name
  }
}
`