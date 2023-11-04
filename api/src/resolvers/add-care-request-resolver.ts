import { CareRequest } from '../dal';
import { uuid } from 'uuidv4';

export const addCareRequestResolver = (root, { input }) => {
  return CareRequest.create({
    id: uuid(),
    status: 'OPEN',
    ...input,
  });
};
