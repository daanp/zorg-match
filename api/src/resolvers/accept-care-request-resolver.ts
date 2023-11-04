import { CareRequest } from '../dal';
import { GraphQLError } from 'graphql/error';

export const acceptCareRequestResolver = async (root, { input }) => {
  console.log(input);

  const careRequest = await CareRequest.findOne({
    where: { id: input.requestId },
  });

  if (careRequest) {
    careRequest.set('status', 'CLOSED');
    careRequest.set('carerName', input.carerName);
    careRequest.set('carerRemarks', input.carerRemarks);
    return await careRequest.save();
  } else {
    throw new GraphQLError('Care request not found.', {
      extensions: {
        code: 'NOT_FOUND',
      },
    });
  }
};
