import { GraphQLServer } from 'graphql-yoga';
import path from 'path';
import resolvers from '@modules/accounts/infra/mongoose/repository/resolvers';
import '@config/mongodb';

const app = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "routes", "schema.graphql"),
  resolvers
});

app.start(() => console.log("Server is running!"));