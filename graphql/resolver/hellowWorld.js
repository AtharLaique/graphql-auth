module.exports = {
    async helloWorld (){
        return 'Hello World'
    },
    async getUser (){
        return { _id:1, email:'athar@gmail.com', password:'12345'}
    },
    async createHelloWorld ( arg ){
        return `Create ${ arg.msg } Hello World`
    },
    async createUser ( arg ){
        return { _id:123, ...arg.userInput }
    }
}