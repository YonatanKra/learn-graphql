const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./db/schema');
const root = require('./db');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

console.log('http://localhost:4000/graphql');
app.listen(4000);