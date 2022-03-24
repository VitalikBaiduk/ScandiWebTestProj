import { gql, useQuery } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

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
`;

export const QueryOfAllProducts = gql`
    query {
        category(input: { title: "all" }) {
            name
            products {
                id
                name
                gallery
                inStock
                prices {
                    currency {
                        label
                        symbol
                    }
                    amount
                }
                description
            }
        }
    }
`;
