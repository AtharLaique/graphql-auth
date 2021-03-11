const { buildSchema } = require('graphql')
const  helloWorldSchema = require('./helloWorld.schema') 
module.exports = buildSchema(`
        type RootQuery {
            ${helloWorldSchema.query}
        }
        type RootMutation {
            ${helloWorldSchema.mutation}
        }
        schema{
            query: RootQuery
            mutation:RootMutation
        }
`)