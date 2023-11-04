import { addCareRequestResolver, careRequestResolver } from './resolvers';
import { acceptCareRequestResolver } from './resolvers/accept-care-request-resolver';

export class ResolverFactory {
  public getResolvers() {
    return {
      Query: {
        careRequests: careRequestResolver,
      },
      Mutation: {
        addCareRequest: addCareRequestResolver,
        acceptCareRequest: acceptCareRequestResolver,
      },
    };
  }
}
