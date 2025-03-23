import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import resolvers from './schema/resolvers';
import typeDefs from './schema/typeDefs';
import { PrismaClient } from '@prisma/client';

interface MyContext {
  // token?: string;
  prisma: PrismaClient;
}

const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

void (async () => {
  await server.start();

  app.use(
    '/graphql',
    cors(),
    express.json(),

    expressMiddleware(server, {
      // eslint-disable-next-line @typescript-eslint/require-await
      context: async ({ req }) => ({ prisma: new PrismaClient() }),
    }),
  );

  // Modified server startup
  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`  Server ready at http://localhost:4000/`);
})();
