const express = require("express");

const schema = require("./schema");

const { graphql } = require("graphql");
const bodyParser = require("body-parser");

let app = express();
const PORT = 3000;

// parse POST body as text
app.use(bodyParser.text({ type: "application/graphql" }));

app.post("/graphql", (req, res) => {
  // execute GraphQL!
  graphql(schema, req.body).then(result => {
    console.log(result);

    res.send(JSON.stringify(result, null, 2));
  });
});

let server = app.listen(PORT, function() {  
  let port = server.address().port;

  console.log(`GraphQL listening at ${port}`);
});
