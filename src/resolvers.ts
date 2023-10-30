import { type Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    keanuImage: (_, { width }, { dataSources }) => {
      return dataSources.placeKeanuAPI.getKeanuImage(width);
    },
  },
};
