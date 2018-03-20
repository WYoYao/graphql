const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

// 定义Schema
const typeDefs = `
  type Author{  #作者的字段 id 名字  发表的帖子
    id:Int
    name:String,
    posts:[Post]
  }
  type Post{    # 贴子的字段有下面这些，包括是哪个作者写的
    id:Int
    title:String
    text:String
    views:Int
    author:Author
  }
  type Query{   # 定义查询内容
    author(id:Int):Author # 查询作者信息
    getFortuneCookie:String
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

console.log(schema);

module.exports = schema;
