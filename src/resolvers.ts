import { type Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    keanuImage: (_, args, { dataSources }) => {
      return dataSources.placeKeanuAPI.getKeanuImage(args);
    },
  },
};
