const { graphql, buildSchema } = require("graphql");
var schema = buildSchema(`
    type Query{
        hero:String
    }
`);

var data = JSON.stringify([
  {
    hero: "Hello World"
  }
]);

console.log(data);

graphql(schema, data).then(response => {
  console.log(response);
});
