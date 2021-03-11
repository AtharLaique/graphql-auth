const { graphqlHTTP } = require('express-graphql');
const RootResolver = require('./resolver');
const RootSchema = require ('./schema')
module.exports = function graphql() {
  return graphqlHTTP({
    schema : RootSchema,
    rootValue : RootResolver,
    graphiql : true,
  });
};
