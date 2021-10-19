import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class User {
  // @Field() // let type-graphql automatically infer the type
  @Field(() => Int) // explicit type declaration of the field
  @PrimaryKey()
  id!: number

  @Field()
  @Property()
  userName!: string

  @Field()
  @Property()
  email!: string

  @Field()
  @Property()
  createdAt: Date = new Date()

  @Field()
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}

// cool point: type-graphql is infering types by its own
