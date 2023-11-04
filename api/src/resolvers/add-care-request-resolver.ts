import { CareRequest } from '../dal';
import { uuid } from 'uuidv4';
import { GraphQLError } from 'graphql/error';

export const addCareRequestResolver = (root, { input }) => {
  if (input.start >= input.end) {
    throw new GraphQLError(
      'Care request start time should be before end time.',
      {
        extensions: {
          code: 'BAD_INPUT',
        },
      }
    );
  }

  return CareRequest.create({
    id: uuid(),
    status: 'OPEN',
    ...input,
  });
};
