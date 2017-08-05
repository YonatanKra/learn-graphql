const {buildSchema} = require('graphql');

const schema = buildSchema(`
    type User {
        id:String
        name:String
        hobbies:[Hobby]
    }
    
    type Hobby {
        id:String
        name:String
        description:String
    }
    
    type Query {
        user(id:String):[User]
        hobby(id:String,name:String):[Hobby]
    }
    
    type Mutation {
        login(userName:String!, password:String!):Boolean!
        signup(userName:String!, password:String!):String!
    }
`);

module.exports = schema;