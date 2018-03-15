const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query{
        hello:String
    }
`);

const resolver = { hello: () => "Hello GraphQL" };
const query = `{hello}`;

graphql(schema, query, resolver).then(console.log.bind(console));
