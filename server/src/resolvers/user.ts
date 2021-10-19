import { MyContext } from 'src/types'
import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql'
import { User } from '../entities/User'

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users(@Ctx() { em }: MyContext): Promise<User[]> {
    return em.find(User, {})
  }

  @Query(() => User, { nullable: true })
  user(
    @Arg('id', () => Int) id: number,
    @Ctx() { em }: MyContext,
  ): Promise<User | null> {
    return em.findOne(User, { id })
  }

  @Mutation(() => User)
  async addUser(
    @Arg('userName') userName: string,
    @Arg('email') email: string,
    @Ctx() { em }: MyContext,
  ): Promise<User> {
    const newUser = em.create(User, { userName, email })
    await em.persistAndFlush(newUser)
    return newUser
  }

  @Mutation(() => User, { nullable: true })
  async updateUsername(
    @Arg('id', () => Int) id: number,
    @Arg('userName') userName: string,
    @Ctx() { em }: MyContext,
  ): Promise<User | null> {
    try {
      const user = await em.findOne(User, { id })

      if (!user) {
        return null
      }
      if (userName) {
        user.userName = userName
        await em.persistAndFlush(user)
      }
      return user
    } catch (error) {
      console.error(error)
      return null
    }
  }

  @Mutation(() => Boolean)
  async deleteUser(
    @Arg('id', () => Int) id: number,
    @Ctx() { em }: MyContext,
  ): Promise<boolean> {
    try {
      await em.nativeDelete(User, { id })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }
}
