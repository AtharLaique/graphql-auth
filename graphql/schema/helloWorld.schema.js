module.exports = {
    type:`
        type User {
            _id:ID!
            email:String!
            password:String!
        }
    `,
    query:`
        helloWorld:String
        getUser:User
    `,
    input:`
        input UserInput {
            email:String!
            password:String!
        }
    `,
    mutation:`
        createHelloWorld( msg:String ):String
        createUser( userInput:UserInput ):User
    `
}



