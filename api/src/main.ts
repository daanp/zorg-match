import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ResolverFactory } from './resolver-factory';

const resolverFactory = new ResolverFactory();
const resolvers = resolverFactory.getResolvers();

const typeDefs = readFileSync('./api/src/schema.graphql', {
  encoding: 'utf-8',
});

const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server listening at ${url}`);
});
