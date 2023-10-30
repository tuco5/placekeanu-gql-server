import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    keanuImage(width: String!): String!
  }
`;
