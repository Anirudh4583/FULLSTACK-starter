import { MikroORM } from '@mikro-orm/core'
import mikroOrmConfig from './config/mikro-orm.config'
import { Users } from './entities/Users'
// import express from 'express'
// import { __port__ } from './config/constants'
// import { ApolloServer } from 'apollo-server-express'
// import { buildSchema } from 'type-graphql'

async function main() {
  const orm = await MikroORM.init(mikroOrmConfig)

  await orm.getMigrator().up()

  const newUser = orm.em.create(Users, {
    userName: 'test',
    email: 'test@starter.com',
  })
  console.log(newUser)

  await orm.em.persistAndFlush(newUser)

  // const allUsers = await orm.em.find(Users, {})
  // console.log(allUsers)

  // const app = express()

  // const apolloServer = new ApolloServer({
  //   schema: await buildSchema({
  //     resolvers: [],
  //     validate: false,
  //   }),
  // })

  // app.listen(__port__, () => {
  //   console.log(`server started at port ${__port__}`)
  // })
}
main().catch((err) => {
  console.error(err)
})

console.log('hello')
