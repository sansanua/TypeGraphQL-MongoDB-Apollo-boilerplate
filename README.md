# TypeGraphQL-MongoDB-Apollo-boilerplate

It is TypeGraphQL MongoDB Apollo TypeORM boilerplate

# How to start up a project
1. Create a database in https://mlab.com/welcome/
2. Update connection string in `ormconfig.json` and `src/test-utils/testConn.ts` for tests
3. Install and start Redis Server `https://redis.io/topics/quickstart`
4. Set  `"request.credentials": "include"` in Playground (localhost) for saving cookies

You can find the empty project without resolvers and models in the branch https://github.com/sansanua/TypeGraphQL-MongoDB-Apollo-boilerplate/tree/empty-project
