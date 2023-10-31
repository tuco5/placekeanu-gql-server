import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { PlaceKeanuAPI } from "./datasources/placekeanu-api";

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const port = Number.parseInt(process.env.PORT) || 4000;

  const { url } = await startStandaloneServer(server, {
    listen: { port },
    context: async () => {
      const { cache } = server;

      // this object becomes our resolver's contextValue, the third positional argument
      return {
        dataSources: {
          placeKeanuAPI: new PlaceKeanuAPI({ cache }),
        },
      };
    },
  });

  console.log(`
  🚀  Server is running!
  📭  Query at ${url}
`);
}

startApolloServer();
