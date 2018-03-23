const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book],people:[Person],all:All }
  type Book { title: String, author: String }
  type Person {name:String,age:String}
  type All { book:Book,persion:Person}
`;

// The resolvers
const resolvers = {
  Query: {
    books: value => {
      console.log(value);
      console.log(123);
      return books;
    },
    people: () => [
      { name: "leo", age: 25 },
      { name: "leo", age: 25 },
      { name: "leo", age: 25 },
      { name: "leo", age: 25 }
    ],
    all: () => {
      return {
        book: books[0],
        persion: { name: "leo", age: 25 }
      };
    }
  }
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Initialize the app
const app = express();

// The GraphQL endpoint
// app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress(req => {
    return { schema, context: { value: req.body.something } };
  })
);

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Start the server
app.listen(3000, () => {
  console.log("Go to http://localhost:3000/graphiql to run queries!");
});
