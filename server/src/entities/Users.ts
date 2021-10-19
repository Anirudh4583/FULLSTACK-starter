import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
export class Users {
  @PrimaryKey()
  id!: number

  @Property()
  userName!: string

  @Property()
  email!: string

  @Property()
  createdAt: Date = new Date()

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
