module.exports ={
    async helloWorld (){
        return 'Hello World'
    },
    async createHelloWorld ( arg ){
        return `Create ${ arg.msg } Hello World`
    }
}