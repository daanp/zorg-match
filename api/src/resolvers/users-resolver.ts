import { UserItemFragment } from '@zorg-match/graphql-codegen';
import { Appointment, User } from '../dal';

type UsersResolver = () => UserItemFragment;
export const usersResolver = () => {
  return User.findAll({ include: Appointment });
};
