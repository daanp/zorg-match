import { usersResolver } from './resolvers';

export class ResolverFactory {
  public getResolvers() {
    return {
      Query: {
        users: usersResolver,
      },
      Mutation: {},
    };
  }
}
