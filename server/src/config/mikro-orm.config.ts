import { MikroORM } from '@mikro-orm/core'
import path from 'path'
import { DB_PASS, DB_USER, __prod__ } from '../util/constants'
import { Users } from '../entities/Users'

export default {
  entities: [Users],
  dbName: 'starter',
  type: 'postgresql',
  user: DB_USER,
  password: DB_PASS,
  debug: !__prod__,

  migrations: {
    path: path.join(__dirname, '../migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[jt]s$/, // regex pattern for the migration files
  },
} as Parameters<typeof MikroORM.init>[0]
