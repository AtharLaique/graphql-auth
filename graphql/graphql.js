const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const RootResolver = require('./resolver');
module.exports = function graphql() {
  return graphqlHTTP({
    schema: buildSchema(`
        type RootQuery {
            helloWorld:String
        }
        type RootMutation {
            createHelloWorld( msg:String ):String
        }
        schema{
            query: RootQuery
            mutation:RootMutation
        }`),
    rootValue: RootResolver,
    graphiql: true,
  });
};
