var import_server = require("@apollo/server");
var import_standalone = require("@apollo/server/standalone");
var import_fs = require("fs");
var import_schema = require("@graphql-tools/schema");
var import_resolver_factory = require("./resolver-factory");
const resolverFactory = new import_resolver_factory.ResolverFactory();
const resolvers = resolverFactory.getResolvers();
const typeDefs = (0, import_fs.readFileSync)("./api/src/schema.graphql", {
  encoding: "utf-8"
});
const server = new import_server.ApolloServer({
  schema: (0, import_schema.makeExecutableSchema)({ typeDefs, resolvers })
});
(0, import_standalone.startStandaloneServer)(server, {
  listen: { port: 4e3 }
}).then(({ url }) => {
  console.log(`Server listening at ${url}`);
});
//# sourceMappingURL=main.js.map
