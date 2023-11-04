import { CareRequest } from '../dal';

export const careRequestResolver = (root, { input }) => {
  return CareRequest.findAll({ where: { ...input } });
};
