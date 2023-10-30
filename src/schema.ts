import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    keanuImage(width: Int!, height: Int, y: Boolean, g: Boolean): String!
  }
`;
