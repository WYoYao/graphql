const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt
} = require("graphql");

let count = 0;

/**
 * 自省查询语句
 * {__schema { queryType { name, fields { name, description} }}}
 */

let schema = new GraphQLSchema({
  /**
   * 查询语句 query
   * query RootQueryType { count }
   */
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      count: {
        type: GraphQLInt,
        description: "The count!",
        resolve: function() {
          return count;
        }
      }
    }
  }),
  /**
   * 修改语句 mutation
   * mutation RootMutationType { count }
   */
  mutation: new GraphQLObjectType({
    name: "RootMutationType",
    fields: {
      count: {
        type: GraphQLInt,
        description: "The count!",
        resolve: function() {
          return ++count;
        }
      }
    }
  })
});

module.exports = schema;
