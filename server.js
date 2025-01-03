const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const path = require('path');

// Şema ve resolver'ları içe aktarın
const typeDefs = gql(fs.readFileSync(path.join(__dirname, 'schema.graphql'), { encoding: 'utf-8' }));
const resolvers = require('./resolvers');

// Apollo Server'ı başlatın
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Sunucuyu başlatın
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
