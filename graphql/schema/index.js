const { buildSchema } = require('graphql')
const  helloWorldSchema = require('./helloWorld.schema') 
module.exports = buildSchema(`
            ${ helloWorldSchema.type }
        type RootQuery {
            ${ helloWorldSchema.query }
        }
            ${ helloWorldSchema.input }
        type RootMutation {
            ${ helloWorldSchema.mutation }
        }
        schema {
            query : RootQuery
            mutation : RootMutation
        } 
`)
