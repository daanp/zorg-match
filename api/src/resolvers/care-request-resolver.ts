import { CareRequest } from '../dal';

export const careRequestResolver = (parent, args, contextValue, info) => {
  return CareRequest.findAll({
    where: { ...args.where },
    order: [['start', 'DESC']],
  });
};
