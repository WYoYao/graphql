const express = require("express");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const bodyParser = require("body-parser");

//import schema from './data/schema';    // 定义GraphQL查询格式
const schema = require("./schema");

/**
 * apollo-server-express 是由Apollo提供在express环境下实现grapql的库，这里使用了里面两个类
 * graphqlExpress是实现grapql接口功能的类
 * graphiqlExpress是实现grapql浏览器调试界面（An in-browser IDE for exploring GraphQL.）的类，就多了一个“i”，这个调试界面可以在后面看到
 * schema就是上文讲的是定义GraphQL查询格式的
 */
const GRAPHQL_PORT = 3002;

const graphQLServer = express();

graphQLServer.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);
