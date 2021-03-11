const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

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
    rootValue: {
      helloWorld: async () => {
        return "Hello World";
      },
      createHelloWorld: async (arg) => {
        return `Create ${arg.msg} Hello World`;
      },
    },
    graphiql: true,
  });
};
